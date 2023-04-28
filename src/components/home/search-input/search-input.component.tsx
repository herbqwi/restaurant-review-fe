import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search-input.css'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import InputSuggestions from '../../common/input-suggestions/input-suggestions.component';
import { ISearchInput } from '../../../interfaces';

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

  const calcualteSearchFilters = () => {
    if (input == ``) return [];
    let filteredItems: ISearchInput.FilteredSearchItem[] = [];
    restaurants.forEach((restaurant) => { if (restaurant.includes(input)) filteredItems.push({ name: restaurant, type: ISearchInput.SearchType.RESTAURANT }) });
    cities.forEach((city) => { if (city.includes(input)) filteredItems.push({ name: city, type: ISearchInput.SearchType.CITY }) });
    meals.forEach((meal) => { if (meal.includes(input)) filteredItems.push({ name: meal, type: ISearchInput.SearchType.MEAL }) });

    return filteredItems.slice(0, 5);
  }

  return <div className='suggestions-container'>
    <InputSuggestions searchFilters={calcualteSearchFilters()} setSearch={setInput}></InputSuggestions>
    <div className={`input-container${className ? ` ${className}` : ``}`}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <input className='search-input' onChange={(e) => setInput(e.target.value)} value={input} placeholder={children} type="text" />
    </div>
  </div>
}

export default IconInput;