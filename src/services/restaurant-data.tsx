import { useEffect, useState } from "react";
import getRestaurant from "./restaurant_list";
import { IRestaurant } from "../interfaces/restaurant.interface";
import useParams from "../hooks/params.hook";

const useGetRestaurant = () => {
    const [state, setState] = useState<{ restaurantInfo: IRestaurant.RestaurantData[], loading: boolean }>({ restaurantInfo: [], loading: true });
    const { myParams, setParam } = useParams();

    const getRestaurants = async () => {
        setState({ ...state, loading: true });

        const {
            searchTermsURL: searchTerms,
            servicesURL: services,
            cuisinesURL: cuisines,
            companiesURL: companies,
            orderByURL: sortedBy
        } = myParams;

        const response = await getRestaurant({ searchTerms, services, cuisines, companies, sortedBy });

        setState({ loading: false, restaurantInfo: response.data });
    };

    useEffect(() => {
        getRestaurants();
    }, [myParams]); // Refresh the restaurant list when myParams changes

    return { ...state, getRestaurants };
};

export default useGetRestaurant;
