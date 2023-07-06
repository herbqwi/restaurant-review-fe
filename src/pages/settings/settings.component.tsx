import './settings.css'
import { useParams } from 'react-router';
import AccountSettingsSection from './sections/account-settings/account-settings.component';
import SectionsNav from '../../components/settings/sections-nav/sections-nav.componnet';
import RestaurantsSection from './sections/restaurants/restaurants.component';
import UsersListSection from './sections/users-list/users-list.component';
import ReportsListSection from './sections/reports/reports-list.component';

const SettingsPage = () => {
  const { section } = useParams();
  return <div className="settings-page">
    <div className="settings-container">
      <SectionsNav></SectionsNav>
      {section == `account-settings` && <AccountSettingsSection />}
      {section == `restaurants` && <RestaurantsSection />}
      {section == `users` && <UsersListSection />}
      {section == `reports` && <ReportsListSection />}
    </div>
  </div>
}

export default SettingsPage;
