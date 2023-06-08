import { useEffect, useState } from "react";
import getRestaurant from "./restaurant_list";
import { IRestaurant } from "../interfaces/restaurant.interface";


const useGetRestaurant = () => {
    const [state, setState] = useState<{ restaurantInfo: IRestaurant.RestaurantData[], loading: boolean }>({ restaurantInfo: [], loading: true });
    const getRestaurants = async () => {
        setState({ ...state, loading: true });
        const data = await getRestaurant();
        console.log(data);
        setState({ loading: false, restaurantInfo: data });
    };
    useEffect(() => {
        getRestaurants();
    }, []);
    return { ...state, getRestaurants };
};

export default useGetRestaurant;