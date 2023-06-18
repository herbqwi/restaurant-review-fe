import './login-form.css'
import pizzaSketch from '../../assets/pizza-sketch.png'
import googleLogo from '../../../assets/google-logo.png';
import DoubleIcon from '../common/double-icon/double-icon.component';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useLogin } from '../../hooks/login.hook';
import Input from '../common/input/input.component';
import Button from '../common/button/button.component';



const LoginForm = () => {
  const { email, password, confirmPassword, isRegisterLayout, functions } = useLogin();

  return <form className="login-form" onSubmit={functions.submitHandler}>
    <img className='login-drawing' src={pizzaSketch} alt="" />
    <h1>المصادقة</h1>
    {isRegisterLayout.value ? <>
      <h2>أدخل البيانات المطلوبة لإنشاء حساب</h2>
      <div className='content'>
        <div className='verify-container'>
          <Input disabled={false} required={true} onChange={(e: any) => email.set(e.target.value)} value={email.value} label='البريد الالكتروني' placeholder='john@example.com'></Input>
          <button onClick={() => { console.log(`Google authentication (can be done later)`) }} type='button' className={`verify-button`}>
            <DoubleIcon defaultIcon={faGoogle} activeIcon={faCheck} active={false}></DoubleIcon>
            التحقق
          </button>
        </div>
        <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور' placeholder='********' type={`password`}></Input>
        <Input required={true} onChange={(e: any) => confirmPassword.set(e.target.value)} value={confirmPassword.value} label='تكرار كلمة المرور' placeholder='********' type={`password`}></Input>
        <Button className='submit-button' type={`submit`}>انشاء حساب</Button>
        <p>لديك حساب بالفعل؟ <span onClick={() => { functions.toggleLayout() }}>تسجيل الدخول</span></p>
      </div>
    </> : <>
      <h2>قم بإدخال بيانات حسابك للدخول</h2>
      <div className='content'>
        <Input required={true} onChange={(e: any) => email.set(e.target.value)} value={email.value} label='البريد الالكتروني' placeholder='john@example.com'></Input>
        <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور' placeholder='********' type={`password`}></Input>
        <p>نسيت كلمة المرور؟</p>
        <Button className='submit-button' type={`submit`}>تسجيل الدخول</Button>
        <p className='align-center'>لا تمتلك حساباً؟ <span onClick={() => { functions.toggleLayout() }}>انشاء حساب جديد</span></p>
      </div>
    </>}
  </form>
}

export default LoginForm;
