import { IRestaurant } from "../../../interfaces/restaurant.interface";


const calculateAvgStars = (restaurant: IRestaurant.RestaurantData) => {
  const reviews = restaurant.reviews;
  if (!reviews || !reviews.length) return 0;
  const totalReviews = reviews.reduce((accumulator, currentReview) => {
    return accumulator + currentReview.starRating
  }, 0);
  return totalReviews / reviews.length;
}

export { calculateAvgStars }
