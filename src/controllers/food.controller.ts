import axios from "axios";
import { IRestaurant } from "../interfaces/restaurant.interface";


const createNewFood = async (Food: IRestaurant.MenuItem,OwnerID:string,restaurantID:string) => {
  const response = await axios.post(`http://localhost:8000/restaurant/foods/${OwnerID}/${restaurantID}`, Food);
  return response;
}

const getFood = async (search:string) => {
  const response = await axios.get(`http://localhost:8000/restaurant/${search}`);
  return response;
}
const getFoodByrestaurantID = async (restaurantID: string,FoodId:string)=> {
  const response = await axios.get(`http://localhost:8000/restaurant/foods/${restaurantID}/${FoodId}`);
  return response;
}


const deleteFood = async (OwnerID:string,restaurantID:string,FoodId: string) => {
  const response = await axios.delete(`http://localhost:8000/restaurant/foods/${OwnerID}/${restaurantID}/${FoodId}`);
  return response;
}

const UpdataFood = async (restaurantID: string, FoodData: IRestaurant.MenuItem) => {
  const response = await axios.put(`http://localhost:8000/restaurant/foods/${restaurantID}/${FoodData._id}`, FoodData);
  return response;
}



export default { createNewFood,UpdataFood, getFood, deleteFood, getFoodByrestaurantID};
