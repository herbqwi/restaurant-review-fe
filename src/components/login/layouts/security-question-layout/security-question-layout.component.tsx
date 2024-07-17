import { IRestaurant } from "../../../../interfaces/restaurant.interface";
import { IUser } from "../../../../interfaces/user.interface";
import Button from "../../../common/button/button.component";
import Input from "../../../common/input/input.component";
import Select from "../../../common/select/select.component";

interface IProps {
  functions: { toggleLayout: () => void },
  securityQuestion: {
    value: IUser.SecurityQuestion | null,
    set: React.Dispatch<React.SetStateAction<IUser.SecurityQuestion | null>>;
  }
  securityAnswer: {
    value: string,
    set: React.Dispatch<React.SetStateAction<string>>;
  }
  className?: string,
}

const SecurityQuestionLayout = ({ securityQuestion, securityAnswer, functions, className }: IProps) => {

  return <div className={`form-contents${className ? ` ${className}` : ''}`}>
    <h1>تأمين الحساب</h1>
    <h2>قم بالإجابة عن سؤال الأمان</h2>
    <div className='content'>
      <Select controller={securityQuestion} id="security-question" label="سؤال الأمان" options={Object.keys(IUser.SecurityQuestionInfo).map(securityQuestion => ({ value: securityQuestion, content: IUser.SecurityQuestionInfo[securityQuestion as unknown as IUser.SecurityQuestion].arabicText }))} defaultValue={'اختر سؤال الأمان'}></Select>
      <Input required={true} onChange={(e: any) => securityAnswer.set(e.target.value)} value={securityAnswer.value} label='الإجابة'></Input>
      <Button className='submit-button' type={`submit`}>المتابعة</Button>
      <p className='align-center'><span onClick={functions.toggleLayout}>تخطي سؤال الأمان</span></p>
    </div>
  </div>
}

export default SecurityQuestionLayout;