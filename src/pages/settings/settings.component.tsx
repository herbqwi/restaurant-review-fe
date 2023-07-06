import './settings.css'
import { useParams, useLocation } from 'react-router-dom';
import AccountSettingsSection from './sections/account-settings/account-settings.component';
import SectionsNav from '../../components/settings/sections-nav/sections-nav.componnet';
import RestaurantsSection from './sections/restaurants/restaurants.component';
import UsersListSection from './sections/users-list/users-list.component';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/user.context';

const SettingsPage = () => {
  const { section,id,selectedElement } = useParams();
  const loc = useLocation()
  const { user } = useContext(UserContext);



  return <div className="settings-page">
    <div className="settings-container">

      <SectionsNav></SectionsNav>
        {section == `account-settings` && <AccountSettingsSection />}
      {section + `/:${user.value?._id}/:selectedElement` === `restaurants/:${user.value?._id}/:selectedElement` && <RestaurantsSection />}
      {section === `users` && <UsersListSection />}
    </div>
  </div>
}

export default SettingsPage;
