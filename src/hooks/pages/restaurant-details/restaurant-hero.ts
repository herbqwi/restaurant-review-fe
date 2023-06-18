import { useState, useEffect } from 'react';
import { IRestaurant } from "../../../interfaces/restaurant.interface";


const useRestaurantHero = (restaurant: IRestaurant.RestaurantData) => {
  const [isImageSliderShown, setImageSliderShown] = useState(false);

  useEffect(() => {
    const preventScroll = (e: any) => {
      e.preventDefault();
    };

    if (isImageSliderShown) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isImageSliderShown]);

  const images = restaurant.images;

  return {
    isImageSliderShown: { value: isImageSliderShown, set: setImageSliderShown },
    vars: { images },
  }
}

export default useRestaurantHero;
