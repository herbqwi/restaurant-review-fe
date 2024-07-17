import { IRestaurant } from "../../../../interfaces/restaurant.interface";
import { IUser } from "../../../../interfaces/user.interface";
import Button from "../../../common/button/button.component";
import Input from "../../../common/input/input.component";
import Select from "../../../common/select/select.component";

interface IProps {
  functions: { toggleLayout: () => void },
  credentials: {
    password: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
    confirmPassword: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
  },
  className?: string,
}

const NewPasswordLayout = ({ credentials, functions, className }: IProps) => {
  const { password, confirmPassword } = credentials;

  return <div className={`form-contents${className ? ` ${className}` : ''}`}>
    <h1>تغيير كلمة المرور</h1>
    <h2>قم بتحديث كلمة المرور</h2>
    <div className='content'>
      <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور الجديدة' placeholder='********' type={`password`}></Input>
      <Input required={true} onChange={(e: any) => confirmPassword.set(e.target.value)} value={confirmPassword.value} label='تكرار كلمة المرور' placeholder='********' type={`password`}></Input>
      <Button className='submit-button' type={`submit`}>المتابعة</Button>
    </div>
  </div>
}

export default NewPasswordLayout;