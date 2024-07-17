import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/header.component";
import ModalProvider from "../../contexts/modal.context";
import UserProvider from "../../contexts/user.context";
import NotificationProvider from "./notification/notification-container/notification-container.component";
import HomeHero from "../pages/home/home-hero/home-hero.component";

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ffb25b',
        },
      }}
      direction="rtl">
      <div className="App">
        <BrowserRouter>
          <ModalProvider>
            <UserProvider>
              <NotificationProvider>
                <Header />
                <HomeHero />
                {props.children}
              </NotificationProvider>
            </UserProvider>
          </ModalProvider>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  )
}