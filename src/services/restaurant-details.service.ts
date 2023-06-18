import { IRestaurant } from "../interfaces/restaurant.interface";
export const hasReviewedRestaurant = (userId: string, reviews?: IRestaurant.Review[]) => reviews && reviews.length && reviews?.find(review => review.userId == userId);
// export const hasReviewedRestaurant = (userId: string, reviews?: IRestaurant.Review[]) => false;
