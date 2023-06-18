import { useContext } from 'react';
import { hasReviewedRestaurant } from '../../../services/restaurant-details.service';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import restaurantController from '../../../controllers/restaurant.controller';
import { UserContext } from '../../../contexts/user.context';

type IProps = { value: IRestaurant.RestaurantData, set: any }

const useCustomerReviews = (restaurant: IProps) => {
  const { user } = useContext(UserContext);
  const hasReviewed = hasReviewedRestaurant(user.value?._id as string, restaurant.value.reviews);

  const fetchReviews = async () => {
    const reviews = await restaurantController.getReviews(restaurant.value._id as string);
    console.log(`restaurants: `, { ...restaurant, reviews: reviews.data });
    // console.log(`fetched reviews: `, reviews);
    restaurant.set({ ...restaurant.value, reviews: reviews.data })
  }

  return {
    functions: { fetchReviews },
    vars: { hasReviewed }
  }
}

export default useCustomerReviews;
