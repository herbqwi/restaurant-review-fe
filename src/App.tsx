import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/base/header/header.component';
import NotificationProvider from './components/base/notification/notification-container/notification-container.component';
import HomePage from './pages/home/home.component';
import HomeHero from './components/home/home-hero/home-hero.component';
import RestaurantsListPage from './pages/restaurants-list/restaurants-list.component';
import ShowTimer from './components/base/show-timer/show-timer.component';
import Login from './pages/login/login.component';
import RestaurantDetailsPage from './pages/restaurant-details/restaurant-details.component';
import ModalProvider from './contexts/modal.context';
import SettingsPage from './pages/settings/settings.component';
import UserProvider from './contexts/user.context';
import { ConfigProvider } from 'antd';
import ProtectedRoute from './components/base/protected-route/protected-route';

function App() {
  const { section, id, selectedElement } = useParams();
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
                <Header></Header>
                <HomeHero />
                <Routes>
                  <Route path="/" element={<Navigate to="/login" replace />} />
                  <Route path="/login" element={<ShowTimer timeout={0}><Login /></ShowTimer>} />
                  <Route path="/home" element={<ShowTimer timeout={0}><HomePage /></ShowTimer>} />
                  <Route path="/restaurants" element={<ShowTimer timeout={0}><RestaurantsListPage /></ShowTimer>} />
                  <Route path="/restaurant-details/:id" element={<ShowTimer timeout={0}><RestaurantDetailsPage /></ShowTimer>} />
                  <Route path="/settings" element={<Navigate to="/settings/account-settings" replace />} />
                  <Route path="/settings/:section/:id" element={<ShowTimer timeout={0}><SettingsPage /></ShowTimer>} />
                  <Route path="/settings/:section/:id/:selectedElement" element={<ShowTimer timeout={0}><ProtectedRoute><SettingsPage /></ProtectedRoute></ShowTimer>} />
                </Routes>
              </NotificationProvider>
            </UserProvider>
          </ModalProvider>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
