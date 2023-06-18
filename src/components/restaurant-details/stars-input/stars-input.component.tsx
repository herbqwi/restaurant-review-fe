import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stars-input.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface IProps {
  controller: { value: number, set: any },
}

const StarsInput = ({ controller }: IProps) => {
  const [hoverStars, setHoverStars] = useState(0);


  return <div onMouseLeave={() => { setHoverStars(controller.value) }} className="stars-input">
    <FontAwesomeIcon className={`clickable${hoverStars >= 1 ? ` star-selected` : ``}`} onClick={() => { controller.set(1) }} onMouseEnter={() => { setHoverStars(1) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 2 ? ` star-selected` : ``}`} onClick={() => { controller.set(2) }} onMouseEnter={() => { setHoverStars(2) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 3 ? ` star-selected` : ``}`} onClick={() => { controller.set(3) }} onMouseEnter={() => { setHoverStars(3) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 4 ? ` star-selected` : ``}`} onClick={() => { controller.set(4) }} onMouseEnter={() => { setHoverStars(4) }} icon={faStar} fontSize={23} color="orange" />
    <FontAwesomeIcon className={`clickable${hoverStars >= 5 ? ` star-selected` : ``}`} onClick={() => { controller.set(5) }} onMouseEnter={() => { setHoverStars(5) }} icon={faStar} fontSize={23} color="orange" />
  </div>
}

export default StarsInput;
