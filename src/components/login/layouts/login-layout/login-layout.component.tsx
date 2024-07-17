import './login-layout.css'
import { AxiosResponse } from "axios";
import { useContext } from 'react';
import userController from "../../../../controllers/user.controller";
import { ILogin } from "../../../../interfaces/login.interface";
import { IUser } from "../../../../interfaces/user.interface";
import Button from "../../../common/button/button.component";
import Input from "../../../common/input/input.component";
import { NotificationContext } from "../../../base/notification/notification-container/notification-container.component";
import { NotificationType } from "../../../base/notification/notification-body/notification-body.component";

interface IProps {
  functions: { toggleLayout: () => void },
  credentials: {
    email: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
    password: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
  },
  layout: { value: ILogin.LAYOUT, set: React.Dispatch<React.SetStateAction<ILogin.LAYOUT>> }
  className?: string,
}

const LoginLayout = ({ credentials, functions, className, layout }: IProps) => {
  const { email, password } = credentials;
  const { pushNotification } = useContext(NotificationContext);

  const forgotPassword = async () => {
    if (email.value == '') {
      pushNotification(NotificationType.Failed, 'قم بإدخال البريد الإلكتروني')
    }
    const response = await userController.getUserByEmail(email.value) as AxiosResponse<IUser.UserData | null>;
    console.log(`response: `, response);
    if (response.status == 200) {
      layout.set(ILogin.LAYOUT.FORGOT_PASSWORD)
    } else {
      pushNotification(NotificationType.Failed, 'البريد الإلكتروني غير موجود')
    }
  }

  return <div className={`form-contents${className ? ` ${className}` : ''}`}>
    <h1>المصادقة</h1>
    <h2>قم بإدخال بيانات حسابك للدخول</h2>
    <div className='content'>
      <Input style={{ textAlign: 'right', direction: 'ltr' }} required={true} onChange={(e: any) => email.set(e.target.value)} value={email.value} label='البريد الالكتروني' placeholder='mohammad@example.com'></Input>
      <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور' placeholder='********' type={`password`}></Input>
      <p className="forgot-password" onClick={forgotPassword}>نسيت كلمة المرور؟</p>
      <Button className='submit-button' type={`submit`}>تسجيل الدخول</Button>
      <p className='align-center'>لا تمتلك حساباً؟ <span onClick={functions.toggleLayout}>انشاء حساب جديد</span></p>
    </div>
  </div>
}

export default LoginLayout;

