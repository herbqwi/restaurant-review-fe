import { useContext, useEffect } from 'react'
import { hasReviewdRestaurant } from '../../../../services/restaurant-details.service'
import ShowTimer from '../../../base/show-timer/show-timer.component'
import PageSection from '../../../common/page-section/page-section.component'
import CustomerReview from '../../customer-review/customer-review.component'
import ReviewForm from '../../review-form/review-form.component'
import './customer-reviews.css'
import { UserContext } from '../../../../contexts/login.context'
import { IRestaurant } from '../../../../interfaces/restaurant.interface'
import restaurantController from '../../../../controllers/restaurant.controller'

interface IProps {
  restaurant: IRestaurant.RestaurantData,
  setRestaurant: any,
  addReview: (review: IRestaurant.Review) => void,
}

const CustomerReviewsSection = ({ restaurant, setRestaurant, addReview }: IProps) => {
  const { userId, setUserId } = useContext(UserContext);
  const hasReviewd = hasReviewdRestaurant(userId, restaurant.reviews);

  const fetchReviews = async () => {
    const reviews = await restaurantController.getReviews(restaurant._id as string);
    setRestaurant({ ...restaurant, reviews: reviews.data })
    console.log(`reviewwws`);
  }

  return <PageSection timeout={300} className='customer-reviews'>
    <p className='title'>اراء الزبائن</p>
    {!hasReviewd && <ShowTimer timeout={300}><ReviewForm restaurantId={restaurant._id as string} fetchReviews={fetchReviews}></ReviewForm></ShowTimer>}
    {
      (restaurant.reviews && restaurant.reviews.length) ? <div className='customer-reviews'>
        {restaurant?.reviews?.reverse().map(review => <ShowTimer timeout={350}><CustomerReview fetchReviews={fetchReviews} review={review} restaurantId={restaurant._id as string}></CustomerReview></ShowTimer>)}
      </div> : null
    }
  </PageSection>
}

export default CustomerReviewsSection;