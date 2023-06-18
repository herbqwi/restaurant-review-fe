import ShowTimer from '../../../base/show-timer/show-timer.component'
import PageSection from '../../../common/page-section/page-section.component'
import CustomerReview from '../../customer-review/customer-review.component'
import ReviewForm from '../../review-form/review-form.component'
import './customer-reviews.css'
import { IRestaurant } from '../../../../interfaces/restaurant.interface'
import useCustomerReviews from '../../../../hooks/pages/restaurant-details/customer-reviews'

interface IProps {
  restaurant: { value: IRestaurant.RestaurantData, set: any },
  addReview: (review: IRestaurant.Review) => void,
}

const CustomerReviewsSection = ({ restaurant, addReview }: IProps) => {
  const { functions, vars } = useCustomerReviews(restaurant);

  return <PageSection timeout={300} className='customer-reviews'>
    <p className='title'>اراء الزبائن</p>
    {!vars.hasReviewed && <ShowTimer timeout={300}><ReviewForm restaurantId={restaurant.value._id as string} fetchReviews={functions.fetchReviews}></ReviewForm></ShowTimer>}
    {
      (restaurant.value.reviews && restaurant.value.reviews.length) ? <div className='customer-reviews'>
        {restaurant.value.reviews?.reverse().map(review => <ShowTimer timeout={350}><CustomerReview fetchReviews={functions.fetchReviews} review={review} restaurantId={restaurant.value._id as string}></CustomerReview></ShowTimer>)}
      </div> : null
    }
  </PageSection>
}

export default CustomerReviewsSection;
