import AddRestaurantForm from '../../components/add-restaurant-form/add-restaurant-form';
import './add-restaurant.css'

interface IProps {
  className?: string,
}

const AddRestaurantPage = ({ className }: IProps) => {
  return <div className={`add-restaurant-page ${className ? ` ${className}` : ''}`}>
    <div className="body">
      <AddRestaurantForm></AddRestaurantForm>
    </div>
  </div>
}

export default AddRestaurantPage;