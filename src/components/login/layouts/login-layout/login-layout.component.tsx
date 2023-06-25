import Button from "../../../common/button/button.component";
import Input from "../../../common/input/input.component";

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
  className?: string,
}

const LoginLayout = ({ credentials, functions, className }: IProps) => {
  const { email, password } = credentials;

  return <div className={`form-contents${className ? ` ${className}` : ``}`}>
    <h1>المصادقة</h1>
    <h2>قم بإدخال بيانات حسابك للدخول</h2>
    <div className='content'>
      <Input style={{ textAlign: 'right', direction: 'ltr' }} required={true} onChange={(e: any) => email.set(e.target.value)} value={email.value} label='البريد الالكتروني' placeholder='mohammad@example.com'></Input>
      <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور' placeholder='********' type={`password`}></Input>
      <p>نسيت كلمة المرور؟</p>
      <Button className='submit-button' type={`submit`}>تسجيل الدخول</Button>
      <p className='align-center'>لا تمتلك حساباً؟ <span onClick={functions.toggleLayout}>انشاء حساب جديد</span></p>
    </div>
  </div>
}

export default LoginLayout;

