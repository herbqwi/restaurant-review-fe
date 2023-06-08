import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import ShowTimer from '../../../base/show-timer/show-timer.component';
import PageSection from '../../../common/page-section/page-section.component';
import Map from '../../map/map.component';
import ServiceBadge from '../../service-badge/service-badge.component';
import './general-info.css'

interface IProps {
  restaurant: IRestaurant.RestaurantData,
}

const GeneralInfoSection = ({ restaurant }: IProps) => {
  console.log(`restt:`, restaurant.services);

  return <PageSection className='general-info' timeout={5}>
    <div className="location">
      <p className='title'>الموقع</p>
      <div className='content'>
        <Map location={restaurant.location} clickable={false}></Map>
      </div>
    </div>

    <div className="services">
      <p className='title'>الخدمات</p>
      <div className='content'>
        {restaurant.services.map((service, i) => {console.log({service}); return <ShowTimer timeout={100 + (40 * i)}><ServiceBadge service={service}></ServiceBadge></ShowTimer>})}
      </div>

    </div>
  </PageSection>
}

export default GeneralInfoSection;