import axios, { AxiosResponse } from "axios";
import { IRestaurant } from "../interfaces/restaurant.interface";

const getRestaurant = async ({
  searchTerms,
  services,
  cuisines,
  companies,
  sortedBy
}: {
  searchTerms?: string,
  services?: string[],
  cuisines?: string[],
  companies?: string[],
  sortedBy?: string
} = {}) => {
  let url = 'http://localhost:8000/restaurant';

  const params = new URLSearchParams();

  if (searchTerms) params.append('searchTerms', searchTerms);
  if (sortedBy) params.append('sortedBy', sortedBy);

  services?.forEach(service => params.append('services', service));
  cuisines?.forEach(cuisine => params.append('cuisines', cuisine));
  companies?.forEach(company => params.append('companies', company));

  if (params.toString()) url += `?${params.toString()}`;

  const response = (await axios.get(url)) as AxiosResponse<IRestaurant.RestaurantData[]>;
  return response;
}

export default getRestaurant;
