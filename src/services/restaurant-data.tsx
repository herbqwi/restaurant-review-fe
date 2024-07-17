import { useEffect, useState } from "react";
import getRestaurant from "./restaurant_list";
import { IRestaurant } from "../interfaces/restaurant.interface";
import useParams from "../hooks/params.hook";
import { calculateDistance } from "../components/restaurants-list/sort/review-card/review-card.component";

const useGetRestaurant = (currentLocation?: { lat: number, long: number }) => {
    console.log(`currentLocation: `, currentLocation)
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

        let restaurants = response.data;

        if ((sortedBy as unknown as IRestaurant.SortedBy) == IRestaurant.SortedBy.CLOSEST_DISTANCE && currentLocation) {
            restaurants = restaurants.sort((a, b) => {
                const aAverageRating = parseFloat(calculateDistance(a.location.latitude, a.location.longitude, currentLocation.lat, currentLocation.long));
                const bAverageRating = parseFloat(calculateDistance(b.location.latitude, b.location.longitude, currentLocation.lat, currentLocation.long));
                return aAverageRating - bAverageRating;
            });
        } else if ((sortedBy as unknown as IRestaurant.SortedBy) == IRestaurant.SortedBy.HIGHEST_RATED) {
            restaurants = restaurants.reverse();
        }
        setState({ loading: false, restaurantInfo: restaurants });
    };

    useEffect(() => {
        getRestaurants();
    }, [myParams]); // Refresh the restaurant list when myParams changes

    return { ...state, getRestaurants };
};

export default useGetRestaurant;
