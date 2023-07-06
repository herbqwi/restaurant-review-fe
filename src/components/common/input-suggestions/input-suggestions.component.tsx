import { faBowlFood, faBurger, faCity, faSackDollar, faShop, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';
import './input-suggestions.css'
import SuggestionItem from './suggestion-item/suggestion-item.component';
import { ISearchInput } from '../../../interfaces';

interface IProps {
  searchFilters: ISearchInput.FilteredSearchItem[],
  setSearch: any
}

const InputSuggestions = ({ searchFilters, setSearch }: IProps) => {
  return <>
    {
      searchFilters.length != 0 && <div className="input-suggestions">
        {searchFilters.map(item => (<SuggestionItem icon={item.type == ISearchInput.SearchType.RESTAURANT ? faShop : (item.type == ISearchInput.SearchType.CITY) ? faCity : faBurger} item={item} setSearch={setSearch}></SuggestionItem>))}
      </div>
    }
  </>
}

export default InputSuggestions;