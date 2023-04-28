import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import './rating-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  image: string,
  name: string,
  job: string,
  title: string,
  description: string,
  stars: number,
}

const RatingCard = ({ image, name, job, title, description, stars }: IProps) => {
  return <div className="rating-card-container">
    <div className="rating-card">
      <div className="header">
        <p className='profile-img'>{image}</p>
        <div>
          <p className='title'>{name}</p>
          <p className="subtitle">{job}</p>
        </div>
      </div>

      <div className="content">
        <p className='title'>{title}</p>
        <p className="subtitle">{description}</p>
      </div>

      <div className="footer">
        <div className='stars-list'>
          <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
          <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
          <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
          <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
          <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
        </div>
      </div>
    </div>
  </div>
}

export default RatingCard;