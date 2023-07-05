import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { IUser } from '../../../interfaces/user.interface';
import userController from '../../../controllers/user.controller';
import { NotificationContext } from '../../../components/base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../../components/base/notification/notification-body/notification-body.component';
import { IRestaurant } from '../../../interfaces/restaurant.interface';

const useAccountSettings = () => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [city, setCity] = useState<IRestaurant.City | null>(null)
  const [image, setImage] = useState<string | null>(null);
  const { pushNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (user.value != null) {
      setFirstName(user.value?.firstName ?? '');
      setLastName(user.value?.lastName ?? '');
      setEmail(user.value?.email ?? '');
      setImage(user.value?.image ?? null);
      setCity(user.value?.city ? user.value.city as IRestaurant.City : IRestaurant.City.HEBRON);
    }
  }, [])

  const handleAccountSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(`my image: `, image);
    e.preventDefault();
    const payload: any = {};
    if (firstName !== '') payload.firstName = firstName
    if (lastName !== '') payload.lastName = lastName
    payload.image = image ?? null;
    payload.city = city
    if (user != null) user.set((oldUser) => ({ ...oldUser, ...payload }));
    setTimeout(async () => {
      const response = await userController.updateUser(user.value?._id as string, { ...user.value, ...payload } as IUser.UserData);
      if (response.status == 200) {
        pushNotification(NotificationType.Success, 'تم تحديث معلومات الحساب بنجاح')
      } else {
        pushNotification(NotificationType.Failed, 'فشل تحديث معلومات الحساب')
      }
    }, 100);
  }

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.value?.password != oldPassword) {
      pushNotification(NotificationType.Failed, 'كلمة المرور القديمة خاطئة')
      return;
    }
    setTimeout(() => {
      userController.updateUser(user.value?._id as string, { ...user.value, password: newPassword } as IUser.UserData);
      pushNotification(NotificationType.Success, 'تم تحديث كلمة المرور بنجاح')
    }, 100);
  }

  const deleteAccount = async () => {
    await userController.deleteOwnedAccount();
    pushNotification(NotificationType.Success, 'تم حذف حسابك بنجاح')
    user.set(null);
  }

  return {
    firstName: { value: firstName, set: setFirstName },
    lastName: { value: lastName, set: setLastName },
    email: { value: email, set: setEmail },
    oldPassword: { value: oldPassword, set: setOldPassword },
    newPassword: { value: newPassword, set: setNewPassword },
    city: { value: city, set: setCity },
    image: { value: image, set: setImage },
    handleSubmit: { handleAccountSubmit, handlePasswordSubmit },
    deleteAccount
  }
}

export default useAccountSettings;
