import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search-input.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import InputSuggestions from '../../common/input-suggestions/input-suggestions.component';
import { ISearchInput } from '../../../interfaces';
import { useState } from 'react';
import restaurantController from '../../../controllers/restaurant.controller';
import useGetRestaurant from '../../../services/restaurant-data';
import { IRestaurant } from '../../../interfaces/restaurant.interface';

interface IProps {
  children: string,
  icon: IconDefinition,
  input: string,
  setInput: any,
  className?: string,
}

const IconInput = ({ children, icon, input, setInput, className }: IProps) => {
  const { restaurantInfo } = useGetRestaurant();
  const meals = [`بيف برجر`, `تشيز برجر`, `دبل تشيز برجر`, `ماك رويال برجر`, `ايس سكريم بالبسكويت`, `فطيرة التفاح`, `سبرايت`, `فانتا`, `عصير التفاح`, `حليب بالشوكلاتة`]
  const cities = Object.keys(IRestaurant.CityInfo).map(city => ({ key: city, arabicName: IRestaurant.CityInfo[city as unknown as IRestaurant.City].arabicName }));
  console.log(`cities: `, cities);

  const calculateSearchFilters = () => {
    if (input == ``) return [];
    let filteredItems: ISearchInput.FilteredSearchItem[] = [];
    restaurantInfo.forEach((restaurant) => { if (restaurant.name.includes(input)) filteredItems.push({ name: restaurant.name, value: restaurant.name, type: ISearchInput.SearchType.RESTAURANT }) });
    cities.forEach((city) => { if (city.arabicName.includes(input)) filteredItems.push({ name: city.arabicName, value: city.key, type: ISearchInput.SearchType.CITY }) });
    meals.forEach((meal) => { if (meal.includes(input)) filteredItems.push({ name: meal, value: meal, type: ISearchInput.SearchType.MEAL }) });

    return filteredItems.slice(0, 5);
  }

  return <div className='suggestions-container'>
    <InputSuggestions searchFilters={calculateSearchFilters()} setSearch={setInput}></InputSuggestions>
    <div className={`input-container${className ? ` ${className}` : ``}`}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <input className='search-input' onChange={(e) => setInput(e.target.value)} value={input} placeholder={children} type="text" />
    </div>
  </div>
}

export default IconInput;