import { useState, useContext, useEffect } from "react"
import useSParams from "./sparams.hook";
import userController from "../controllers/user.controller";
import { IUser } from "../interfaces/user.interface";
import { UserContext } from "../contexts/user.context";
import { useNavigate } from 'react-router';
import { NotificationContext } from "../components/base/notification/notification-container/notification-container.component";
import { NotificationType } from "../components/base/notification/notification-body/notification-body.component";
import { ILogin } from "../interfaces/login.interface";
import { LabeledStatement } from "typescript";
import { IRestaurant } from "../interfaces/restaurant.interface";

export const useLogin = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isRegisterLayout, setRegisterLayout] = useSParams<boolean>(`register`);
  const [layout, setLayout] = useState<ILogin.LAYOUT>(isRegisterLayout ? ILogin.LAYOUT.REGISTER : ILogin.LAYOUT.LOGIN);
  const { pushNotification } = useContext(NotificationContext);

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [img, setImg] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [city, setCity] = useState<IRestaurant.City | null>(null)


  useEffect(() => {
    if (user.value) navigate(`/home`);
  }, [user]);


  useEffect(() => {
    setLayout(isRegisterLayout ? ILogin.LAYOUT.REGISTER : ILogin.LAYOUT.LOGIN)
  }, [isRegisterLayout])

  const toggleLayout = () => {
    setEmail(``);
    setPassword(``);
    setConfirmPassword(``);
    setRegisterLayout(!isRegisterLayout);
  }


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
      const isEmailAvailable = await userController.isEmailAvailable(email);
      if (isEmailAvailable.status == 404) {
        pushNotification(NotificationType.Failed, 'البريد الإلكتروني غير متوفر')
        return;
      }
      setLayout(ILogin.LAYOUT.ACCOUNT_INFO);
    } else {
      const response = await userController.createNewUser({ email, password, firstName, lastName, phoneNumber, city, role: IUser.Role.DEFAULT })
      if (!response) {
        pushNotification(NotificationType.Failed, 'حدث خطأ اثناء عملية التسجيل')
        return;
      }
      pushNotification(NotificationType.Success, 'تم التسجيل بنجاح')
      user.set({ ...response.data._doc, token: response.data.token });
    }
  }

  return {
    credentials: {
      email: { value: email, set: setEmail },
      password: { value: password, set: setPassword },
      confirmPassword: { value: confirmPassword, set: setConfirmPassword }
    },
    accountInfo: {
      img: { value: img, set: setImg },
      firstName: { value: firstName, set: setFirstName },
      lastName: { value: lastName, set: setLastName },
      phoneNumber: { value: phoneNumber, set: setPhoneNumber },
      city: { value: city, set: setCity }
    },
    layout: { value: layout, set: setLayout },
    functions: {
      toggleLayout,
      submitHandler
    }
  }
}
