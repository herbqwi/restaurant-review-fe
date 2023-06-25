import React, { useEffect, useState } from "react";
import { IUser } from "../interfaces/user.interface";
import userController from "../controllers/user.controller";
import axios from "axios";

interface IContext {
  user: { value: IUser.UserData | null, set: React.Dispatch<React.SetStateAction<IUser.UserData | null>> },
}

enum AUTH_STATUS {
  CHECKING,
  DONE
}

export const UserContext = React.createContext<IContext>({
  user: { value: null, set: () => { } }
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser.UserData | null>(null);
  const [authStatus, setAuthStatus] = useState<AUTH_STATUS>(AUTH_STATUS.CHECKING);

  const changeAxiosToken = (token: string) => {
    console.log(`access token updated to: `, token);
    axios.defaults.headers.common['Authorization'] = token;
  }

  useEffect(() => {
    const localAccessToken = localStorage.getItem('access_token');
    if (localAccessToken != null) {
      changeAxiosToken(localAccessToken);
      userController.authUser({ token: localAccessToken }).then(res => {
        if (res != null) {
          setUser({ ...res.data._doc, token: res.data.token });
        } else {
          setUser(null);
        }
        setAuthStatus(AUTH_STATUS.DONE)
      }).catch(error => {
        setUser(null);
        console.error(error);
        setAuthStatus(AUTH_STATUS.DONE)
      });
    } else {
      setAuthStatus(AUTH_STATUS.DONE);
    }
  }, []);

  useEffect(() => {
    console.log(`user updated: `, user);
    if (user && user.token) {
      localStorage.setItem(`access_token`, user.token);
    } else {
      localStorage.removeItem(`access_token`);
    }
  }, [user]);


  return (
    <UserContext.Provider value={{
      user: { value: user, set: setUser }
    }}>
      {authStatus === AUTH_STATUS.DONE && children}
    </UserContext.Provider>
  )
}

export default UserProvider;
