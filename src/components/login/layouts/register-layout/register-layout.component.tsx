import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Button from "../../../common/button/button.component";
import DoubleIcon from "../../../common/double-icon/double-icon.component";
import Input from "../../../common/input/input.component";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
    confirmPassword: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
  },
  className?: string
}

const RegisterLayout = ({ credentials, functions, className }: IProps) => {
  const { email, password, confirmPassword } = credentials;
  return <div className={`form-contents${className ? ` ${className}` : ``}`}>
    <h1>التسجيل</h1>
    <h2>أدخل البيانات المطلوبة لإنشاء حساب</h2>
    <div className='content'>
      <div className='verify-container'>
        <Input disabled={false} required={true} onChange={(e: any) => email.set(e.target.value)} value={email.value} label='البريد الالكتروني' placeholder='mohammad@example.com'></Input>
        <button onClick={() => { console.log(`Google authentication (can be done later)`) }} type='button' className={`verify-button`}>
          <DoubleIcon defaultIcon={faGoogle} activeIcon={faCheck} active={false}></DoubleIcon>
          التحقق
        </button>
      </div>
      <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور' placeholder='********' type={`password`}></Input>
      <Input required={true} onChange={(e: any) => confirmPassword.set(e.target.value)} value={confirmPassword.value} label='تكرار كلمة المرور' placeholder='********' type={`password`}></Input>
      <Button className='submit-button' type={`submit`}>انشاء حساب</Button>
      <p>لديك حساب بالفعل؟ <span onClick={functions.toggleLayout}>تسجيل الدخول</span></p>
    </div>
  </div>
}

export default RegisterLayout;