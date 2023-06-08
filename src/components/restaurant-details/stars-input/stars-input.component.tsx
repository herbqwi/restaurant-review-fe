import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stars-input.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const StarsInput = () => {
  const [hoverStars, setHoverStars] = useState(0);
  const [stars, setStars] = useState(0);


  return <div onMouseLeave={() => { setHoverStars(stars) }} className="stars-input">
    <FontAwesomeIcon className={`clickable${hoverStars >= 1 ? ` star-selected` : ``}`} onClick={() => { setStars(1) }} onMouseEnter={() => { setHoverStars(1) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 2 ? ` star-selected` : ``}`} onClick={() => { setStars(2) }} onMouseEnter={() => { setHoverStars(2) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 3 ? ` star-selected` : ``}`} onClick={() => { setStars(3) }} onMouseEnter={() => { setHoverStars(3) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 4 ? ` star-selected` : ``}`} onClick={() => { setStars(4) }} onMouseEnter={() => { setHoverStars(4) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 5 ? ` star-selected` : ``}`} onClick={() => { setStars(5) }} onMouseEnter={() => { setHoverStars(5) }} icon={faStar} fontSize={23} color="orange" />
  </div>
}

export default StarsInput;