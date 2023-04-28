import { RestaurantData } from "../components/add-restaurant-form/add-restaurant-form";

const CreateRestaurant = async (restInfo:RestaurantData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/Restauran/Restaurant-Form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(restInfo)
      });
  
      if (response.status === 201) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

export  default  CreateRestaurant
    
