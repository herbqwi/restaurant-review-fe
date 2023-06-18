import React, { useEffect, useState } from "react";
import { IUser } from "../interfaces/user.interface";
import userController from "../controllers/user.controller";

interface IContext {
  user: { value: IUser.UserData | null, set: React.Dispatch<React.SetStateAction<IUser.UserData | null>> },
}

export const UserContext = React.createContext<IContext>({
  user: { value: null, set: () => { } }
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser.UserData | null>(null);
  const [authStatus, setAuthStatus] = useState<'checking' | 'done'>('done');

  console.log({ user });

  useEffect(() => {
    const localAccessToken = localStorage.getItem('access_token');
    if (localAccessToken != null) {
      userController.authUser({ token: localAccessToken }).then(res => {
        console.log(`resstatus: `, res);
        if (res.status === 200) {
          setUser({ ...res.data._doc, token: res.data.token });
        } else {
          setUser(null);
        }
        setAuthStatus('done');
      }).catch(error => {
        setUser(null);
        console.error(error);
        setAuthStatus('done');
      });
    }
  }, []);

  useEffect(() => {
    console.log(`update smth: `, user);
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
      {authStatus === 'done' && children}
    </UserContext.Provider>
  )
}

export default UserProvider;
