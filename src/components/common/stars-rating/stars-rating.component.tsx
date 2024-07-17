import './stars-rating.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  rating: number,
  count?: number,
  showText?: boolean,
  rtl?: boolean,
}

const StarsRating = ({ rating, count, showText, rtl }: IProps) => {
  console.log(`rating: `, rating);
<<<<<<< HEAD
  return <div className="stars-rating">    
  {showText && <p>{count} مشاركة</p>}
    <FontAwesomeIcon className={rating >= 1 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 2 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 3 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 4 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 5 ? `star-selected` : ``} icon={faStar} fontSize={23} color="#d2d2d2" />
=======
  return <div className="stars-rating">
    {rtl && showText && <p>{count} مشاركة</p>}
    <FontAwesomeIcon className={rating >= 1 ? `star-selected` : ''} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 2 ? `star-selected` : ''} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 3 ? `star-selected` : ''} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 4 ? `star-selected` : ''} icon={faStar} fontSize={23} color="#d2d2d2" />
    <FontAwesomeIcon className={rating >= 5 ? `star-selected` : ''} icon={faStar} fontSize={23} color="#d2d2d2" />
    {!rtl && showText && <p>{count} مشاركة</p>}
>>>>>>> development
  </div>
}

export default StarsRating;
