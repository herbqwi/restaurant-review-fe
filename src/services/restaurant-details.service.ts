import { IRestaurant } from "../interfaces/restaurant.interface";
export const hasReviewdRestaurant = (userId: string, reviews?: IRestaurant.Review[]) => reviews && reviews.length && reviews?.find(review => review.userId == userId);
// export const hasReviewdRestaurant = (userId: string, reviews?: IRestaurant.Review[]) => false;