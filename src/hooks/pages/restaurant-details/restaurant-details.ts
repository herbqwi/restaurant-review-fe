import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import restaurantController from '../../../controllers/restaurant.controller';

const useRestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant.RestaurantData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id != null)
      restaurantController.getRestaurant(id as string).then(
        (res) => {
          if (res.status != 200) return;
          setRestaurant(res.data);
        }
      )
  }, []);

  const addReview = (review: IRestaurant.Review) => {
    if (restaurant != null) {
      // const newReviews = [...restaurant.reviews, review];
      // if (restaurant != null) setRestaurant({ ...restaurant, reviews: newReviews });
    }
  }

  return {
    restaurant: { value: restaurant, set: setRestaurant },
    functions: { addReview },
  }
}

export default useRestaurantDetails;
