import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import Input from '../../../../components/common/input/input.component';
import './account-settings.css'
import Button from '../../../../components/common/button/button.component';
import ContentContainer from '../../content-container/content-container.component';
import useAccountSettings from '../../../../hooks/pages-logic/account-settings.hook';
import IAccountSettings from '../../../../interfaces/account-settings';

const AccountSettingsSection = () => {
  const { user, handleInputField, loading, UpdateUser } = useAccountSettings();

  const change = (data: any) => {
    const result = UpdateUser(data);
    return result;
  }

  return <section className="contents account-settings">
    <ShowTimer timeout={0}>
      <div className='header'>
        <h1>اعدادات حسابي</h1>
      </div>
    </ShowTimer>

    <ContentContainer
      title="اعدادات حسابي"
      subtitle="عرف الاخرين عن نفسك"
      savable={true}
      onSave={change}
    >
      <div>
        <Input label='الإسم الأول' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputField('firstName', e.target.value)} value={user?.firstName} />
        <Input label='الإسم الأخير' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputField('lastName', e.target.value)} value={user?.lastName}></Input>
      </div>
      <div>
        <Input label='البريد الإلكتروني' onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputField('email', e.target.value)} value={user?.email}></Input>
        <Input label='كلمة المرور' type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputField('password', e.target.value)} value={user?.password}></Input>
      </div>
      <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة معلوماتك الشخصية قبل حفظ النموذج</p></div>
    </ContentContainer >
    <Button>حذف الحساب</Button>
  </section>
}

export default AccountSettingsSection;