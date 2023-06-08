import './restaurant-details.css'
import { useEffect, useState } from 'react';
import RestaurantHeroSection from '../../components/restaurant-details/sections/restaurant-hero/restaurant-hero.component';
import GeneralInfoSection from '../../components/restaurant-details/sections/general-info/general-info.component';
import CustomerReviewsSection from '../../components/restaurant-details/sections/customer-reviews/customer-reviews.component';
import { useParams } from 'react-router';
import { IRestaurant } from '../../interfaces/restaurant.interface';
import restaurantController from '../../controllers/restaurant.controller';


const RestaurantDetailsPage = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant.RestaurantData | null>(null);
  const { id } = useParams();

  const addReview = (review: IRestaurant.Review) => {
    if (restaurant != null) {
      // const newReviews = [...restaurant.reviews, review];
      // if (restaurant != null) setRestaurant({ ...restaurant, reviews: newReviews });
    }
  }

  useEffect(() => {
    console.log(`New restaurant: `, restaurant);
  }, [restaurant]);

  useEffect(() => {
    const review1: IRestaurant.Review = { _id: `123`, content: `قضيت ليلة رائعة مع أصدقائي في المطعم . الطعام كان لذيذًا ومميزًا، وكانت الأطباق التي جربناها مثل المقبلات والأطباق الرئيسأصدقائي في المطعم . الطعام كان لذيذًا ومميزًا، وكانت الأطباق التي جربناها مثل المقبلات والأطباق الرئيسأصدقائي في المطعم . الطعام كان لذيذًا ومميزًا، وكانت الأطباق التي جربناها مثل المقبلات والأطباق الرئيسأصدقائي في المطعم . الطعام كان لذيذًا ومميزًا، وكانت الأطباق التي جربناها مثل المقبلات والأطباق الرئيسأصدقائي في المطعم . الطعام كان لذيذًا ومميزًا، وكانت الأطباق التي جربناها مثل المقبلات والأطباق الرئيسية والحلويات مذهلة.`, positive: `طعام لذيذ، خدمة سريعة، قائمة متنوعة`, negative: `طعام لذيذ، خدمة سريعة، قائمة متنوعة`, starRating: 4, userId: `عبد الرحمن`, company: IRestaurant.Company.FAMILY };
    const review2: IRestaurant.Review = { _id: `124`, content: `قضيت ليلة رائعة مع أصدقائي في المطعم . الطعام كان لذيذًا ومميزًا، وكانت الأطباق التي جربناها مثل المقبلات والأطباق الرئيسية والحلويات مذهلة.`, positive: `طعام لذيذ، خدمة سريعة، قائمة متنوعة`, negative: `الموسيقى قليلة العلو`, starRating: 4, userId: `عبد الرحمن`, company: IRestaurant.Company.FAMILY };
    // setRestaurant({ _id: `id`, name: `مطعم حكاية بحر`, description: `مطعم حكاية بحر`, address: `الخليل, راس الجورة`, location: { longitude: 31.578096698525606, latitude: 35.11256217956544 }, phoneNumber: `+9704345345345`, images: [image1, image2, image3, image4, image5].map(img => ({ original: img, thumbnail: img })), cuisine: IRestaurant.Cuisine.CHINESE, services: [IRestaurant.Service.BUFFET, IRestaurant.Service.DELIVERY], reviews: [review1, review2], menuItems: [], ownerId: `` });
    restaurantController.getRestaurant(`645ca39c6733796e46b6d7ed`).then(
      (res) => {
        console.log({ status: res.status });
        if (res.status != 200) return;
        setRestaurant(res.data);
      }
    )
  }, []);

  return <>{
    restaurant != null && <div className="restaurant-details-page">
      <div className="content">
        <RestaurantHeroSection restaurant={restaurant}></RestaurantHeroSection>
        <GeneralInfoSection restaurant={restaurant}></GeneralInfoSection>
        <CustomerReviewsSection restaurant={restaurant} setRestaurant={setRestaurant} addReview={addReview}></CustomerReviewsSection>
      </div>
    </div>
  }</>
}

export default RestaurantDetailsPage;
