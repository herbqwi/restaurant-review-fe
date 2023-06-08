import React, { ReactNode, useEffect, useState } from "react";

export const UserContext = React.createContext<{ userId: any, setUserId: any }>({ userId: null, setUserId: null });

interface IProps {
    children: ReactNode,
}

const UserProvider = ({ children }: IProps) => {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        setUserId(`12345`);
    })


    return <UserContext.Provider value={{ userId, setUserId }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;
