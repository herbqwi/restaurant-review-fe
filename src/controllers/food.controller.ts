import axios from "axios";
import { IRestaurant } from "../interfaces/restaurant.interface";


<<<<<<< HEAD
const createNewFood = async (Food: IRestaurant.MenuItem,OwnerID:string,restaurantID:string) => {
  const response = await axios.post(`http://localhost:8000/restaurant/foods/${OwnerID}/${restaurantID}`, Food);
  return response;
}

const getFood = async (search:string) => {
  const response = await axios.get(`http://localhost:8000/restaurant/${search}`);
  return response;
}
const getFoodByrestaurantID = async (restaurantID: string,FoodId:string)=> {
=======
const createNewFood = async (Food: IRestaurant.MenuItem, restaurantID: string) => {
  const response = await axios.post(`http://localhost:8000/restaurant/foods/${restaurantID}`, Food);
  return response;
}

const getFood = async (search: string) => {
  const response = await axios.get(`http://localhost:8000/restaurant/${search}`);
  return response;
}
const getFoodByrestaurantID = async (restaurantID: string, FoodId: string) => {
>>>>>>> development
  const response = await axios.get(`http://localhost:8000/restaurant/foods/${restaurantID}/${FoodId}`);
  return response;
}

<<<<<<< HEAD

const deleteFood = async (OwnerID:string,restaurantID:string,FoodId: string) => {
  const response = await axios.delete(`http://localhost:8000/restaurant/foods/${OwnerID}/${restaurantID}/${FoodId}`);
=======
const getFoodByRestaurant = async (restaurantID: string) => {
  const response = await axios.get(`http://localhost:8000/restaurant/foods/restaurant/${restaurantID}`);
  return response;
}


const deleteFood = async (restaurantID: string, FoodId: string) => {
  const response = await axios.delete(`http://localhost:8000/restaurant/foods/${restaurantID}/${FoodId}`);
>>>>>>> development
  return response;
}

const UpdataFood = async (restaurantID: string, FoodData: IRestaurant.MenuItem) => {
  const response = await axios.put(`http://localhost:8000/restaurant/foods/${restaurantID}/${FoodData._id}`, FoodData);
  return response;
}



<<<<<<< HEAD
export default { createNewFood,UpdataFood, getFood, deleteFood, getFoodByrestaurantID};
=======
export default { createNewFood, UpdataFood, getFood, deleteFood, getFoodByrestaurantID, getFoodByRestaurant };
>>>>>>> development
