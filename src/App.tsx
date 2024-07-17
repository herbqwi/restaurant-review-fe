<<<<<<< HEAD
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom';
=======
>>>>>>> development
import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import RestaurantsListPage from './pages/restaurants-list/restaurants-list.component';
<<<<<<< HEAD
import ShowTimer from './components/base/show-timer/show-timer.component';
=======
>>>>>>> development
import Login from './pages/login/login.component';
import RestaurantDetailsPage from './pages/restaurant-details/restaurant-details.component';
import SettingsPage from './pages/settings/settings.component';
import Layout from './components/base/layout';
import Page from './components/base/page';
import AddRestaurantPage from './pages/add-restaurant/add-restaurant.component';
import HomePage from './pages/home/home.component';

function App() {
  const { section, id, selectedElement } = useParams();
  return (
<<<<<<< HEAD
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
                  <Route path="/settings/:section?/:id?/:selectedElement?" element={<ShowTimer timeout={0}><ProtectedRoute><SettingsPage /></ProtectedRoute></ShowTimer>} />
                </Routes>
              </NotificationProvider>
            </UserProvider>
          </ModalProvider>
        </BrowserRouter>
      </div>
    </ConfigProvider>
=======
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Page element={<Login />} />} />
        <Route path="/home" element={<Page element={<HomePage />} />} />
        <Route path="/restaurants" element={<Page element={<RestaurantsListPage />} />} />
        <Route path="/restaurant-details/:id" element={<Page element={<RestaurantDetailsPage />} />} />
        <Route path="/add-restaurant" element={<Page element={<AddRestaurantPage />} />} />
        <Route path="/settings/:section?/:selectedElement?" element={<Page element={<SettingsPage />} protected />} />
      </Routes>
    </Layout>
>>>>>>> development
  );
}

export default App;
