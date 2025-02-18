import { faStar } from '@fortawesome/free-solid-svg-icons';
import './rating-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRestaurant } from '../../../../../../interfaces/restaurant.interface';
import StarsRating from '../../../../../common/stars-rating/stars-rating.component';

interface IProps {
  emoji: string,
  customerName: string,
  restaurantName: string,
  company: IRestaurant.Company,
  description: string,
  starRating: number,
}

const RatingCard = ({ emoji, customerName, restaurantName, company, description, starRating }: IProps) => {
  return <div className="rating-card-container">
    <div className="rating-card">
      <div className="header">
        <p className='profile-img'>{emoji}</p>
        <div>
          <p className='title'>{customerName}</p>
          <p className="subtitle">{restaurantName}</p>
        </div>
      </div>

      <div className="content">
        <p className='title'>{IRestaurant.CompanyInfo[company]}</p>
        <p className="subtitle">{description}</p>
      </div>

      <div className="footer">
        <StarsRating rating={starRating}></StarsRating>
      </div>
    </div>
  </div>
}

export default RatingCard;