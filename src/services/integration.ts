import IAccountSettings from "../interfaces/account-settings";

const getToken = () => "Bearer " + localStorage.getItem("token") || '';
const userInfo = async () => {
  try {
    const response = await fetch(`http://localhost:8000/user`, {
      headers: {
        Authorization: getToken()
      }
    })
    if (response.status === 200) {
      const item = await response.json();
      return item;
    } else {
      throw Error('Can\'t retreive user info');
    }
  } catch (err) {
  }
};
const updateUserInfo = (user: IAccountSettings.IUser) => {
  return fetch(`http://localhost:8000/user/update`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: getToken() },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        console.debug('Successfully updated user');
        return true;
      } else {
        console.debug('Failed', res.status);
        throw new Error();
      }
    });
};
export {
  userInfo,
  updateUserInfo
}