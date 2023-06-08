import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './service-badge.css'
import { IRestaurant } from '../../../interfaces/restaurant.interface';

interface IProps {
  service: IRestaurant.Service
}

const ServiceBadge = ({ service }: IProps) => {
  const serviceInfo = IRestaurant.ServiceInfo[service];
  console.log({ service, serviceInfo });
  console.log(IRestaurant.Service.DELIVERY);
  return <div className="service-badge">
    <FontAwesomeIcon icon={serviceInfo.icon} />
    <p>{serviceInfo.name}</p>
  </div>
}

export default ServiceBadge;