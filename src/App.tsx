import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/base/header/header.component';
import NotificationProvider from './components/base/notification/notification-container/notification-container.component';
import HomePage from './pages/home/home.component';
import HomeHero from './components/home/home-hero/home-hero.component';
import RestaurantsListPage from './pages/restaurants-list/restaurants-list.component';
import ShowTimer from './components/base/show-timer/show-timer.component';
import AddRestaurantPage from './pages/add-restaurant/add-restaurant.component';
import Login from './pages/login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <Header></Header>
          <HomeHero />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<ShowTimer timeout={0}><Login /></ShowTimer>} />
            <Route path="/home" element={<ShowTimer timeout={0}><HomePage /></ShowTimer>} />
            <Route path="/restaurants" element={<ShowTimer timeout={0}><RestaurantsListPage /></ShowTimer>} />
            <Route path="/add-restaurant" element={<ShowTimer timeout={0}><AddRestaurantPage /></ShowTimer>} />
          </Routes>
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
