import { useEffect, useState } from "react";
import getRestaurant from "./restaurant_list";
import { IRestaurant } from "../interfaces/restaurant.interface";
import useParams from "../hooks/params.hook";

interface RestaurantFilters {
    name?: string;
    services: string[];
    cuisines: string[];
    companies: string[];
    city?: string;
    sortedBy?: string;
  }

const useGetRestaurant = () => {
    const [state, setState] = useState<{ restaurantInfo: IRestaurant.RestaurantData[], loading: boolean }>({ restaurantInfo: [], loading: true });
    const { myParams } = useParams();

    const getRestaurants = async () => {
        setState({ ...state, loading: true });
        const sortedBy = Number((myParams.orderByFromURL));        
        const data = await getRestaurant(sortedBy);
        console.log(data);
        setState({ loading: false, restaurantInfo: data });
    };
 
    useEffect(() => {
        getRestaurants({ services: [], cuisines: [], companies: [], name: '', city: '', sortedBy: '' });
    }, [myParams]);
    return { ...state, getRestaurants };
};

export default useGetRestaurant;