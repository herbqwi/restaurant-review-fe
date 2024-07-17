import { useState, useContext, useEffect } from "react"
import useSParams from "./sparams.hook";
import userController from "../controllers/user.controller";
import { IUser } from "../interfaces/user.interface";
import { UserContext } from "../contexts/user.context";
import { useNavigate } from 'react-router';
import { NotificationContext } from "../components/base/notification/notification-container/notification-container.component";
import { NotificationType } from "../components/base/notification/notification-body/notification-body.component";
import { ILogin } from "../interfaces/login.interface";
import { IRestaurant } from "../interfaces/restaurant.interface";
import { useGoogleLogin } from "@react-oauth/google"
import { AxiosResponse } from "axios";

export const useLogin = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isRegisterLayout, setRegisterLayout] = useSParams<boolean>(`register`);
  const [layout, setLayout] = useState<ILogin.LAYOUT>(isRegisterLayout ? ILogin.LAYOUT.REGISTER : ILogin.LAYOUT.LOGIN);
  const { pushNotification } = useContext(NotificationContext);

  const [registeredUser, setRegisteredUser] = useState<IUser.UserData>();

  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [img, setImg] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [city, setCity] = useState<IRestaurant.City | null>(null)
  const [securityQuestion, setSecurityQuestion] = useState<IUser.SecurityQuestion | null>(null);
  const [securityAnswer, setSecurityAnswer] = useState<string>('');


  useEffect(() => {
    if (user.value) navigate(`/home`);
  }, [user]);


  useEffect(() => {
    setLayout(isRegisterLayout ? ILogin.LAYOUT.REGISTER : ILogin.LAYOUT.LOGIN)
  }, [isRegisterLayout])


  const clearFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSecurityQuestion(null);
    setSecurityAnswer('');
    setGoogleToken(null);
  }

  const toggleLayout = () => {
    clearFields();
    setRegisterLayout(!isRegisterLayout);
  }

  const googleVerification = useGoogleLogin({
    onSuccess: async (res) => {
      const accessToken = res.access_token;
      const { email } = await (await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`))?.json();
      setGoogleToken(accessToken);
      setEmail(email);
    },
    onError: (err) => {
      console.error(`Google verification error: `, err);
    },
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (layout == ILogin.LAYOUT.LOGIN) {
      const response = await userController.authUser({ credentials: { email, password } })
      if (!response) {
        pushNotification(NotificationType.Failed, 'البيانات المدخلة غير صحيحة')
        return;
      }
      pushNotification(NotificationType.Success, `تم تسجيل الدخول بنجاح`)
      user.set({ ...response.data._doc, token: response.data.token });
    } else if (layout == ILogin.LAYOUT.REGISTER) {
      if (!email || !password || !confirmPassword) {
        pushNotification(NotificationType.Failed, 'جميع الحقول مطلوبة')
        return;
      }

      if (!googleToken) {
        pushNotification(NotificationType.Failed, 'قم بالتحقق من امتلاكك هذا البريد الالكتروني')
        return;
      }

      const isEmailAvailable = await userController.isEmailAvailable(email);
      if (!isEmailAvailable) {
        pushNotification(NotificationType.Failed, 'البريد الإلكتروني غير متوفر')
        return;
      }
      setLayout(ILogin.LAYOUT.ACCOUNT_INFO);
    } else if (layout == ILogin.LAYOUT.ACCOUNT_INFO) {
      console.log(`city: `, city);
      const response = await userController.createNewUser({ email, password, firstName, lastName, phoneNumber, city, role: IUser.Role.DEFAULT, googleToken })
      if (!response) {
        pushNotification(NotificationType.Failed, 'حدث خطأ اثناء عملية التسجيل')
        return;
      }
      setRegisteredUser(response.data);
      pushNotification(NotificationType.Success, 'تم التسجيل بنجاح')
      clearFields();
      setLayout(ILogin.LAYOUT.SECURITY_QUESTION);
    } else if (layout == ILogin.LAYOUT.FORGOT_PASSWORD) {
      const response = await userController.getUserByEmail(email) as AxiosResponse<IUser.UserData>;
      const { securityQuestion: userSecurityQuestion, securityAnswer: userSecurityAnswer } = response.data;
      console.log(`response: `, response);
      console.log({ userSecurityQuestion, userSecurityAnswer })
      if (userSecurityQuestion == securityQuestion && userSecurityAnswer == securityAnswer) {
        setLayout(ILogin.LAYOUT.NEW_PASSWORD);
        clearFields();
      } else {
        pushNotification(NotificationType.Failed, 'المعلومات المدخلة غير صحيحة')
      }
    } else if (layout == ILogin.LAYOUT.NEW_PASSWORD) {
      clearFields();
      setLayout(ILogin.LAYOUT.LOGIN);
    } else {
      if (!securityQuestion || securityAnswer == '') {
        pushNotification(NotificationType.Failed, 'جميع الحقول مطلوبة')
        return;
      }
      if (registeredUser) {
        const response = await userController.updateUser(registeredUser._id as string, { ...registeredUser, securityQuestion, securityAnswer })
        console.log(`updated: `, response);
      }
      setLayout(ILogin.LAYOUT.LOGIN);
    }
  }

  return {
    credentials: {
      email: { value: email, set: setEmail },
      password: { value: password, set: setPassword },
      confirmPassword: { value: confirmPassword, set: setConfirmPassword },
      googleToken: { value: googleToken, set: setGoogleToken }
    },
    accountInfo: {
      img: { value: img, set: setImg },
      firstName: { value: firstName, set: setFirstName },
      lastName: { value: lastName, set: setLastName },
      phoneNumber: { value: phoneNumber, set: setPhoneNumber },
      city: { value: city, set: setCity }
    },
    securityQuestion: {
      securityQuestion: { value: securityQuestion, set: setSecurityQuestion },
      securityAnswer: { value: securityAnswer, set: setSecurityAnswer },
    },
    layout: { value: layout, set: setLayout },
    functions: {
      toggleLayout,
      submitHandler,
      googleVerification
    }
  }
}



    //   console.log(`city: `, city);
    //   const response = await userController.createNewUser({ email, password, firstName, lastName, phoneNumber, city, role: IUser.Role.DEFAULT, googleToken })
    //   if (!response) {
    //     pushNotification(NotificationType.Failed, 'حدث خطأ اثناء عملية التسجيل')
    //     return;
    //   }
    //   pushNotification(NotificationType.Success, 'تم التسجيل بنجاح')
    //   clearFields();
    //   setLayout(ILogin.LAYOUT.LOGIN);
    //   // user.set({ ...response.data._doc, token: response.data.token });
    // }
