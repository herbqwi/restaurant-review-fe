import { IRestaurant } from "../../../../interfaces/restaurant.interface";
import Button from "../../../common/button/button.component";
import Input from "../../../common/input/input.component";
import Select from "../../../common/select/select.component";

interface IProps {
  accountInfo: {
    img: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
    firstName: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
    lastName: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
    phoneNumber: {
      value: string;
      set: React.Dispatch<React.SetStateAction<string>>;
    };
    city: {
      value: IRestaurant.City | null;
      set: React.Dispatch<React.SetStateAction<IRestaurant.City | null>>;
    };
  },
  className?: string,
}

const AccountInfoLayout = ({ accountInfo, className }: IProps) => {
  const { img, firstName, lastName, phoneNumber, city } = accountInfo;

  return <div className={`form-contents${className ? ` ${className}` : ``}`}>
    <h1>البيانات الشخصية</h1>
    <h2>قم بإدخال بياناتك الشخصية للمتابعة</h2>
    <div className='content'>
      <Input required={true} onChange={(e: any) => firstName.set(e.target.value)} value={firstName.value} label='الاسم الأول' placeholder='محمد'></Input>
      <Input required={true} onChange={(e: any) => lastName.set(e.target.value)} value={lastName.value} label='الاسم الأخير' placeholder='أحمد'></Input>
      <Input required={true} type='number' onChange={(e: any) => phoneNumber.set(e.target.value)} value={phoneNumber.value} label='رقم الهاتف' placeholder='+9705912069482'></Input>
      <Select id="city" label="المدينة" options={Object.keys(IRestaurant.CityInfo).map(city => ({ value: city, content: IRestaurant.CityInfo[city as unknown as IRestaurant.City].arabicName }))}></Select>
      {/* <select name="smth" id="smth">
        <option value="test">test</option>
      </select> */}
      {/* <Input required={true} onChange={(e: any) => password.set(e.target.value)} value={password.value} label='كلمة المرور' placeholder='********' type={`password`}></Input> */}
      <Button className='submit-button' type={`submit`}>المتابعة</Button>
    </div>
  </div>
}

export default AccountInfoLayout;