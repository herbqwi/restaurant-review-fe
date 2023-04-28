import FilterBy from '../../components/restaurants-list/filterby/filterby.component';
import Sort from '../../components/restaurants-list/sort/sort.component';
import './restaurants-list.css'

interface IProps {
  className?: string,
}

const RestaurantsListPage = ({ className }: IProps) => {
  return <div className={`restaurants-list-page${className ? ` ${className}` : ``}`}>
    <div className="content">
      <FilterBy />
      <Sort />
    </div>
  </div>
}

export default RestaurantsListPage;