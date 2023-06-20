import { useState, useContext, useEffect } from "react"
import useSParams from "./sparams.hook";
import userController from "../controllers/user.controller";
import { IUser } from "../interfaces/user.interface";
import { UserContext } from "../contexts/user.context";
import { useNavigate } from 'react-router';
import { NotificationContext } from "../components/base/notification/notification-container/notification-container.component";
import { NotificationType } from "../components/base/notification/notification-body/notification-body.component";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isRegisterLayout, setRegisterLayout] = useSParams<boolean>(`register`);
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const { pushNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (user.value) navigate(`/home`);
  }, [user]);

  const toggleLayout = () => {
    setEmail(``);
    setPassword(``);
    setConfirmPassword(``);
    setRegisterLayout(!isRegisterLayout);
  }


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegisterLayout) {
      const response = await userController.createNewUser({ email, password, firstName: `John`, lastName: `Doe`, role: IUser.Role.DEFAULT })
      if (response.status != 200) {
        console.log(`err`);
        return;
      }
      user.set({ ...response.data._doc, token: response.data.token });
    } else {
      const response = await userController.authUser({ credentials: { email, password } })
      if (response.status != 200) {
        pushNotification(NotificationType.Failed, 'البيانات المدخلة غير صحيحة')
        console.log(`err`);
        return;
      } else {
        pushNotification(NotificationType.Success, `تم تسجيل الدخول بنجاح`)
      }
      user.set({ ...response.data._doc, token: response.data.token });
    }
  }

  return {
    email: { value: email, set: setEmail },
    password: { value: password, set: setPassword },
    confirmPassword: { value: confirmPassword, set: setConfirmPassword },
    isRegisterLayout: { value: isRegisterLayout, set: setRegisterLayout },
    functions: {
      toggleLayout,
      submitHandler,
    }
  }
}
