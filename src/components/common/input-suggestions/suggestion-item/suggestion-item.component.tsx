import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './suggestion-item.css'
import { IconDefinition, faCity } from '@fortawesome/free-solid-svg-icons';
import { ISearchInput } from '../../../../interfaces';
import useParams from '../../../../hooks/params.hook';

interface IProps {
  icon: IconDefinition,
  item: ISearchInput.FilteredSearchItem,
  setSearch: any,
}

const SuggestionItem = ({ icon, item, setSearch }: IProps) => {
  const { myParams, setParam } = useParams();
  const clickHandler = () => {
    if (item.type == ISearchInput.SearchType.RESTAURANT) setSearch(item.name);
    else if (item.type == ISearchInput.SearchType.CITY) setParam('city', item.value);
  }
  return <div className="suggestion-item" onMouseDown={clickHandler}>
    <FontAwesomeIcon icon={icon} />
    <p>{item.name}</p>
  </div>
}

export default SuggestionItem;