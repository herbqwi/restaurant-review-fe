import axios from "axios";
import { IRestaurant } from "../interfaces/restaurant.interface";


const createNewRestaurant = async (restaurant: IRestaurant.RestaurantData) => {
  const response = await axios.post(`http://localhost:8000/restaurant`, restaurant);
  return response;
}

const getRestaurant = async (restaurantId: string) => {
  const response = await axios.get(`http://localhost:8000/restaurant/${restaurantId}`);
  return response;
}

const deleteRestaurat = async (restaurantId: string) => {
  const response = await axios.delete(`http://localhost:8000/restaurant/${restaurantId}`);
  return response;
}

const updateRestaurant = async (restaurantId: string, restaurantData: IRestaurant.RestaurantData) => {
  const response = await axios.put(`http://localhost:8000/restaurant/${restaurantId}`, restaurantData);
  return response;
}

const getReviews = async (restaurantId: string) => {
  const response = await axios.get(`http://localhost:8000/restaurant/reviews/${restaurantId}`);
  return response;
}

const addReview = async (restaurantId: string, review: IRestaurant.Review) => {
  const response = await axios.post(`http://localhost:8000/restaurant/review/${restaurantId}`, review);
  return response;
};

const deleteReview = async (restaurantId: string, reviewId: string) => {
  const response = await axios.delete(`http://localhost:8000/restaurant/review/${restaurantId}/${reviewId}`);
  return response;
};

export default { createNewRestaurant, getRestaurant, deleteRestaurat, updateRestaurant, getReviews, addReview, deleteReview };
