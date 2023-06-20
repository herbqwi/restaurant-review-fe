import './restaurant-details.css'
import RestaurantHeroSection from '../../components/restaurant-details/sections/restaurant-hero/restaurant-hero.component';
import GeneralInfoSection from '../../components/restaurant-details/sections/general-info/general-info.component';
import CustomerReviewsSection from '../../components/restaurant-details/sections/customer-reviews/customer-reviews.component';
import useRestaurantDetails from '../../hooks/pages/restaurant-details/restaurant-details';


const RestaurantDetailsPage = () => {

  const { restaurant, functions } = useRestaurantDetails();
  console.log(`restaurant: `, restaurant);

  return <>{
    restaurant.value != null && <div className="restaurant-details-page">
      <div className="content">
        <RestaurantHeroSection restaurant={{ value: restaurant.value, set: restaurant.set }}></RestaurantHeroSection>
        <GeneralInfoSection restaurant={{ value: restaurant.value, set: restaurant.set }}></GeneralInfoSection>
        <CustomerReviewsSection restaurant={{ value: restaurant.value, set: restaurant.set }} addReview={functions.addReview}></CustomerReviewsSection>
      </div>
    </div>
  }</>
}

export default RestaurantDetailsPage;
