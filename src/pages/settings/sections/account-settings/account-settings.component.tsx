import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import Input from '../../../../components/common/input/input.component';
import './account-settings.css'
import Button from '../../../../components/common/button/button.component';
import ContentContainer from '../../content-container/content-container.component';
import useAccountSettings from '../../../../hooks/pages/settings/account-settings';
import userController from '../../../../controllers/user.controller';

const AccountSettingsSection = () => {

  const { firstName, lastName, email, password, handleSubmit, deleteAccount } = useAccountSettings()


  return <section className="contents account-settings">
    <ShowTimer timeout={0}>
      <div className='header'>
        <h1>اعدادات حسابي</h1>
      </div>
    </ShowTimer>

    <ContentContainer title="اعدادات حسابي" subtitle="عرف الاخرين عن نفسك" handleSubmit={handleSubmit} savable={true}>
      <div>
        <Input controller={firstName} label='الإسم الأول'></Input>
        <Input controller={lastName} label='الإسم الأخير'></Input>
      </div>
      <div>
        <Input disabled controller={email} label='البريد الإلكتروني'></Input>
        <Input disabled controller={password} type='password' label='كلمة المرور'></Input>
      </div>
      <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة معلوماتك الشخصية قبل حفظ النموذج</p></div>
    </ContentContainer>
    <Button onClick={deleteAccount}>حذف الحساب</Button>
  </section>
}

export default AccountSettingsSection;
