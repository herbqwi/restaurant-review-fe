import { IRestaurant } from "../../../interfaces/restaurant.interface";


const calculateAvgStars = (restaurant: IRestaurant.RestaurantData) => {
  const reviews = restaurant.reviews;
  if (!reviews || !reviews.length) return 0;
  const totalReviews = reviews.reduce((accumulator, currentReview) => {
    console.log(`star rating: `, currentReview.starRating)
    return accumulator + currentReview.starRating
  }, 0);
  console.log({ totalReviews, length: reviews.length })
  return totalReviews / reviews.length;
}

export { calculateAvgStars }
