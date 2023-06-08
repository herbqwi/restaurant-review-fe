import './settings.css'
import { useParams } from 'react-router';
import AccountSettingsSection from './sections/account-settings/account-settings.component';
import SectionsNav from '../../components/settings/sections-nav/sections-nav.componnet';
import RestaurantsSection from './sections/restaurants/restaurants.component';

const SettingsPage = () => {
  const { section } = useParams();
  return <div className="settings-page">
    <div className="settings-container">
      <SectionsNav></SectionsNav>
      {section == `account-settings` && <AccountSettingsSection></AccountSettingsSection>}
      {section == `restaurants` && <RestaurantsSection></RestaurantsSection>}
    </div>
  </div>
}

export default SettingsPage;