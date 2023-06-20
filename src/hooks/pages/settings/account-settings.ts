import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/user.context';
import { IUser } from '../../../interfaces/user.interface';
import userController from '../../../controllers/user.controller';
import { NotificationContext } from '../../../components/base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../../components/base/notification/notification-body/notification-body.component';

const useAccountSettings = () => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('1234567890');
  const { pushNotification } = useContext(NotificationContext);

  useEffect(() => {
    console.log(`user2: `, user);
    if (user.value != null) {
      setFirstName(user.value?.firstName ?? '');
      setLastName(user.value?.lastName ?? '');
      setEmail(user.value?.email ?? '');
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: any = {};
    if (firstName !== '') payload.firstName = firstName
    if (lastName !== '') payload.lastName = lastName
    if (email !== '') payload.email = email
    if (user != null) user.set((oldUser) => ({ ...oldUser, ...payload }));
    setTimeout(() => {
      userController.updateUser(user.value?._id as string, { ...user.value, ...payload } as IUser.UserData);
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
    password: { value: password, set: setPassword },
    handleSubmit,
    deleteAccount
  }
}

export default useAccountSettings;
