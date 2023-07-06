import './stars-rating.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  rating: number,
  count?: number,
  showText?: boolean,
}

const StarsRating = ({ rating, count, showText }: IProps) => {
  console.log(`rating: `, rating);
  return <div className="stars-rating">    
    <FontAwesomeIcon className={rating >= 1 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 2 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 3 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 4 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 5 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
  {showText && <p>{count} مشاركة</p>}
  </div>
}

export default StarsRating;
