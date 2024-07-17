import './account-settings.css'
import { useContext } from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import Input from '../../../../components/common/input/input.component';
import Button from '../../../../components/common/button/button.component';
import ContentContainer from '../../content-container/content-container.component';
import useAccountSettings from '../../../../hooks/pages/settings/account-settings';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import Select from '../../../../components/common/select/select.component';
import ImageEditor from '../../../../components/settings/image-editor/image-editor.component';
import { IModal, ModalContext, ModalType } from '../../../../contexts/modal.context';
import { NotificationContext } from '../../../../components/base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../../../components/base/notification/notification-body/notification-body.component';
import ConfirmDeleteAccountModal from '../../../../components/modal/confirm-delete-account/confirm-delete-account.component';

const AccountSettingsSection = () => {

  const { firstName, lastName, email, oldPassword, newPassword, city, image, handleSubmit, deleteAccount } = useAccountSettings()
  const { setModalProps } = useContext(ModalContext);
  const { pushNotification } = useContext(NotificationContext);

  const confirmDelete = () => {
    const modalProps: IModal = {
      header: {
        title: `تأكيد الأمر`,
      },
      modalType: ModalType.CONFIRM,
      body: <ConfirmDeleteAccountModal />,
      submit: async () => {
        const response = await deleteAccount();
        if (response.status != 200) {
          pushNotification(NotificationType.Failed, 'حدث خطأ اثناء حذف الحساب')
          return;
        }
        pushNotification(NotificationType.Success, 'تم حذف حسابك بنجاح')
      }
    }
    setModalProps(modalProps)
  }


  return <section className="contents account-settings">
    <ShowTimer timeout={0}>
      <div className='header'>
        <h1>اعدادات حسابي</h1>
      </div>
    </ShowTimer>

    <ContentContainer title="اعدادات حسابي" subtitle="عرف الاخرين بنفسك" handleSubmit={handleSubmit.handleAccountSubmit} savable={true}>
      <div>
        <ImageEditor controller={image}></ImageEditor>
      </div>
      <div>
        <Input controller={firstName} label='الإسم الأول'></Input>
        <Input controller={lastName} label='الإسم الأخير'></Input>
      </div>
      <div>
        <Input disabled LTRContent controller={email} label='البريد الإلكتروني'></Input>
        <Select controller={city} id="city" label="المدينة" options={Object.keys(IRestaurant.CityInfo).map(city => ({ value: city, content: IRestaurant.CityInfo[city as unknown as IRestaurant.City].arabicName }))}></Select>
        {/* <Input disabled controller={password} type='password' label='المدينة'></Input> */}
      </div>
      <div className='footer'><p><FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>تأكد من دقة معلوماتك الشخصية قبل حفظ النموذج</p></div>
    </ContentContainer>
    <ContentContainer title="تحديث كلمة المرور" index={1} handleSubmit={handleSubmit.handlePasswordSubmit} savable={true}>
      <div>
        <Input placeholder="********" type='password' controller={oldPassword} label='كلمة المرور القديمة'></Input>
        <Input placeholder="********" type='password' controller={newPassword} label='كلمة المرور الجديدة'></Input>
      </div>
    </ContentContainer>
    <ShowTimer timeout={50 + (50 * 2)}><Button className="delete-button" onClick={confirmDelete}>حذف الحساب</Button></ShowTimer>
  </section>
}

export default AccountSettingsSection;
