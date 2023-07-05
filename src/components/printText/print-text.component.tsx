import React, { useState, useEffect } from 'react';
import { IRestaurant } from '../../interfaces/restaurant.interface';

interface IProps {
  reviews: IRestaurant.Review[];
}
const TextPrinter = (props: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let nextIndex = (currentIndex + 1);
      if (nextIndex >= props.reviews.length)
        nextIndex = 0;
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, props.reviews]);

  return (
    <p>{props.reviews[currentIndex]?.content || ''}</p>
  );
};

export default TextPrinter;