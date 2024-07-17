import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search-input.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD:src/components/home/search-input/search-input.component.tsx
import InputSuggestions from '../../common/input-suggestions/input-suggestions.component';
import { ISearchInput } from '../../../interfaces';
=======
import { useState } from 'react';
import useGetRestaurant from '../../../../services/restaurant-data';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import { ISearchInput } from '../../../../interfaces';
import InputSuggestions from '../../../common/input-suggestions/input-suggestions.component';
>>>>>>> development:src/components/pages/home/search-input/search-input.component.tsx

interface IProps {
  children: string,
  icon: IconDefinition,
  input: string,
  setInput: any,
  className?: string,
}

const IconInput = ({ children, icon, input, setInput, className }: IProps) => {
  const restaurants = [`مطعم الخليل`, `مطعم القلعة الذهبية`, `مطعم العائلة السعيدة`, `لمسة الشيف`, `بيتزا المدينة`]
  const cities = [`الخليل`, `بيت لحم`, `رام الله`, `القدس`, `الناصرة`]
  const meals = [`بيف برجر`, `تشيز برجر`, `دبل تشيز برجر`, `ماك رويال برجر`, `ايس سكريم بالبسكويت`, `فطيرة التفاح`, `سبرايت`, `فانتا`, `عصير التفاح`, `حليب بالشوكلاتة`]

<<<<<<< HEAD:src/components/home/search-input/search-input.component.tsx
  const calcualteSearchFilters = () => {
    if (input == ``) return [];
=======
  const calculateSearchFilters = () => {
    if (input == '') return [];
>>>>>>> development:src/components/pages/home/search-input/search-input.component.tsx
    let filteredItems: ISearchInput.FilteredSearchItem[] = [];
    restaurants.forEach((restaurant) => { if (restaurant.includes(input)) filteredItems.push({ name: restaurant, type: ISearchInput.SearchType.RESTAURANT }) });
    cities.forEach((city) => { if (city.includes(input)) filteredItems.push({ name: city, type: ISearchInput.SearchType.CITY }) });
    meals.forEach((meal) => { if (meal.includes(input)) filteredItems.push({ name: meal, type: ISearchInput.SearchType.MEAL }) });

    return filteredItems.slice(0, 5);
  }

  return <div className='suggestions-container'>
<<<<<<< HEAD:src/components/home/search-input/search-input.component.tsx
    <InputSuggestions searchFilters={calcualteSearchFilters()} setSearch={setInput}></InputSuggestions>
    <div className={`input-container${className ? ` ${className}` : ``}`}>
=======
    <InputSuggestions searchFilters={calculateSearchFilters()} setSearch={setInput}></InputSuggestions>
    <div className={`input-container${className ? ` ${className}` : ''}`}>
>>>>>>> development:src/components/pages/home/search-input/search-input.component.tsx
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <input className='search-input' onChange={(e) => setInput(e.target.value)} value={input} placeholder={children} type="text" />
    </div>
  </div>
}

export default IconInput;