import './login-form.css'
import pizzaSketch from '../../assets/pizza-sketch.png'
import { useLogin } from '../../hooks/login.hook';
import LoginLayout from './layouts/login-layout/login-layout.component';
import RegisterLayout from './layouts/register-layout/register-layout.component';
import { ILogin } from '../../interfaces/login.interface';
import AccountInfoLayout from './layouts/account-info-layout/account-info-layout.component';
import PasswdStrength from './passwd-strength/passwd-strength.component';



const LoginForm = () => {
  const { credentials, accountInfo, layout, functions } = useLogin();

  return <>
    {/* <PasswdStrength></PasswdStrength> */}
    <form style={{ height: ILogin.LayoutInfo[layout.value].height }} className="login-form" onSubmit={functions.submitHandler}>
      <img className='login-drawing' src={pizzaSketch} alt="" />
      <LoginLayout className={layout.value == ILogin.LAYOUT.LOGIN ? `zero` : (layout.value == ILogin.LAYOUT.REGISTER ? `n100` : `n200`)} credentials={credentials} functions={functions}></LoginLayout>
      <RegisterLayout className={layout.value == ILogin.LAYOUT.LOGIN ? `p100` : (layout.value == ILogin.LAYOUT.REGISTER ? `zero` : `n100`)} credentials={credentials} functions={functions}></RegisterLayout>
      <AccountInfoLayout className={layout.value == ILogin.LAYOUT.LOGIN ? `p200` : (layout.value == ILogin.LAYOUT.REGISTER ? `p100` : `zero`)} accountInfo={accountInfo}></AccountInfoLayout>
    </form></>
}

export default LoginForm;