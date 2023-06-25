import './account-settings.css'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import Input from '../../../../components/common/input/input.component';
import Button from '../../../../components/common/button/button.component';
import ContentContainer from '../../content-container/content-container.component';
import useAccountSettings from '../../../../hooks/pages/settings/account-settings';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import Select from '../../../../components/common/select/select.component';

const AccountSettingsSection = () => {

  const { firstName, lastName, email, password, handleSubmit, deleteAccount } = useAccountSettings()


  return <section className="contents account-settings">
    <ShowTimer timeout={0}>
      <div className='header'>
        <h1>اعدادات حسابي</h1>
      </div>
    </ShowTimer>

    <ContentContainer title="اعدادات حسابي" subtitle="عرف الاخرين بنفسك" handleSubmit={handleSubmit} savable={true}>
      <div>
        <Input controller={firstName} label='الإسم الأول'></Input>
        <Input controller={lastName} label='الإسم الأخير'></Input>
      </div>
      <div>
        <Input disabled controller={email} label='البريد الإلكتروني'></Input>
        <Select id="city" label="المدينة" options={Object.keys(IRestaurant.CityInfo).map(city => ({ value: city, content: IRestaurant.CityInfo[city as unknown as IRestaurant.City].arabicName }))}></Select>
        {/* <Input disabled controller={password} type='password' label='المدينة'></Input> */}
      </div>
      <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة معلوماتك الشخصية قبل حفظ النموذج</p></div>
    </ContentContainer>
    <Button onClick={deleteAccount}>حذف الحساب</Button>
  </section>
}

export default AccountSettingsSection;
