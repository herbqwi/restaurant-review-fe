import './login-form.css'
import pizzaSketch from '../../assets/pizza-sketch.png'
import { useLogin } from '../../hooks/login.hook';
import LoginLayout from './layouts/login-layout/login-layout.component';
import RegisterLayout from './layouts/register-layout/register-layout.component';
import { ILogin } from '../../interfaces/login.interface';
import AccountInfoLayout from './layouts/account-info-layout/account-info-layout.component';
import SecurityQuestionLayout from './layouts/security-question-layout/security-question-layout.component';
import ForgotPasswordLayout from './layouts/forgot-password/forgot-password.component';
import NewPasswordLayout from './layouts/new-password/new-password.component';



const LoginForm = () => {
  const { credentials, accountInfo, securityQuestion, layout, functions } = useLogin();

  return <>
    <form style={{ height: ILogin.LayoutInfo[layout.value].height }} className="login-form" onSubmit={functions.submitHandler}>
      <img className='login-drawing' src={pizzaSketch} alt="" />
      <NewPasswordLayout className={layout.value == ILogin.LAYOUT.NEW_PASSWORD ? 'zero' : layout.value == ILogin.LAYOUT.FORGOT_PASSWORD ? 'n100' : layout.value == ILogin.LAYOUT.LOGIN ? 'n200' : (layout.value == ILogin.LAYOUT.REGISTER ? 'n300' : (layout.value == ILogin.LAYOUT.ACCOUNT_INFO ? 'n400' : 'n500'))} credentials={credentials} functions={functions}></NewPasswordLayout>
      <ForgotPasswordLayout className={layout.value == ILogin.LAYOUT.NEW_PASSWORD ? 'p100' : layout.value == ILogin.LAYOUT.FORGOT_PASSWORD ? 'zero' : layout.value == ILogin.LAYOUT.LOGIN ? 'n100' : (layout.value == ILogin.LAYOUT.REGISTER ? 'n200' : (layout.value == ILogin.LAYOUT.ACCOUNT_INFO ? 'n300' : 'n400'))} securityQuestion={securityQuestion.securityQuestion} securityAnswer={securityQuestion.securityAnswer} functions={functions} layout={layout}></ForgotPasswordLayout>
      <LoginLayout className={layout.value == ILogin.LAYOUT.NEW_PASSWORD ? 'p200' : layout.value == ILogin.LAYOUT.FORGOT_PASSWORD ? 'p100' : layout.value == ILogin.LAYOUT.LOGIN ? 'zero' : (layout.value == ILogin.LAYOUT.REGISTER ? 'n100' : (layout.value == ILogin.LAYOUT.ACCOUNT_INFO ? 'n200' : 'n300'))} credentials={credentials} functions={functions} layout={layout}></LoginLayout>
      <RegisterLayout className={layout.value == ILogin.LAYOUT.NEW_PASSWORD ? 'p300' : layout.value == ILogin.LAYOUT.FORGOT_PASSWORD ? 'p200' : layout.value == ILogin.LAYOUT.LOGIN ? 'p100' : (layout.value == ILogin.LAYOUT.REGISTER ? 'zero' : (layout.value == ILogin.LAYOUT.ACCOUNT_INFO ? 'n100' : 'n200'))} credentials={credentials} functions={functions}></RegisterLayout>
      <AccountInfoLayout className={layout.value == ILogin.LAYOUT.NEW_PASSWORD ? 'p400' : layout.value == ILogin.LAYOUT.FORGOT_PASSWORD ? 'p300' : layout.value == ILogin.LAYOUT.LOGIN ? 'p200' : (layout.value == ILogin.LAYOUT.REGISTER ? 'p100' : (layout.value == ILogin.LAYOUT.ACCOUNT_INFO ? 'zero' : 'n100'))} accountInfo={accountInfo} functions={functions}></AccountInfoLayout>
      <SecurityQuestionLayout className={layout.value == ILogin.LAYOUT.NEW_PASSWORD ? 'p500' : layout.value == ILogin.LAYOUT.FORGOT_PASSWORD ? 'p400' : layout.value == ILogin.LAYOUT.LOGIN ? 'p300' : (layout.value == ILogin.LAYOUT.REGISTER ? 'p200' : (layout.value == ILogin.LAYOUT.ACCOUNT_INFO ? 'p100' : 'zero'))} securityQuestion={securityQuestion.securityQuestion} securityAnswer={securityQuestion.securityAnswer} functions={functions}></SecurityQuestionLayout>
    </form></>
}

export default LoginForm;
