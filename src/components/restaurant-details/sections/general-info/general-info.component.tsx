import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import ShowTimer from '../../../base/show-timer/show-timer.component';
import PageSection from '../../../common/page-section/page-section.component';
import Map from '../../map/map.component';
import ServiceBadge from '../../service-badge/service-badge.component';
import './general-info.css'

interface IProps {
  restaurant: { value: IRestaurant.RestaurantData, set: any },
}

const GeneralInfoSection = ({ restaurant }: IProps) => {

  return <PageSection className='general-info' timeout={5}>
    <div className="location">
      <p className='title'>الموقع</p>
      <div className='content'>
        <Map location={restaurant.value.location} clickable={false} gps={undefined} prev={undefined}></Map>
      </div>
    </div>

    <div className="services">
      <p className='title'>الخدمات</p>
      <div className='content'>
        {restaurant.value.services.map((service, i) => <ShowTimer timeout={100 + (40 * i)}><ServiceBadge service={service}></ServiceBadge></ShowTimer>)}
      </div>

    </div>
  </PageSection>
}

export default GeneralInfoSection;
