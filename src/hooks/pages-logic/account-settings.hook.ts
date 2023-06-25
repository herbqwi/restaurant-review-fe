import { useEffect, useState } from "react"
import IAccountSettings from "../../interfaces/account-settings";
import { updateUserInfo, userInfo } from "../../services/integration";

interface IState {
  user: IAccountSettings.IUser,
  loading: boolean;
}

const useAccountSettings = () => {
  const [state, setState] = useState<IState>({ user: { email: '', firstName: '', lastName: '', password: '' }, loading: true });

  useEffect(() => {
    userInfo()
      .then(user => {
        setState({ user: { password: '', ...user }, loading: false });
      })
      .catch(error => {
        console.error(error);
        setState({ user: state.user, loading: false });
      })
  }, []);

  const handleInputField = (key: keyof IAccountSettings.IUser, value: string) => {
    if (state.user) {
      setState({
        ...state, user: {
          ...state.user,
          [key]: value
        }
      });
    }
  }

  const UpdateUser = async (e:any) => {
    e.preventDefault();
    const user = {
      password: state.user.password,
      email: state.user.email,
      firstName: state.user.firstName,
      lastName: state.user.lastName
    };

    return updateUserInfo(user).then(item => {
    }).catch(error => {
      alert("Error updating the item");
    });
  };
  return { ...state, setState, handleInputField ,UpdateUser };
};

export default useAccountSettings;
