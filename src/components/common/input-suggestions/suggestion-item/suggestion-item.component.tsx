import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './suggestion-item.css'
import { IconDefinition, faCity } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  icon: IconDefinition,
  content: string,
  setSearch: any,
}

const SuggestionItem = ({ icon, content, setSearch }: IProps) => {
  return <div className="suggestion-item" onClick={() => setSearch(content)}>
    <FontAwesomeIcon icon={icon} />
    <p>{content}</p>
  </div>
}

export default SuggestionItem;