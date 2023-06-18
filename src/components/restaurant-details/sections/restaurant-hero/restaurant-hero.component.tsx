import { useEffect, useState } from 'react';
import ShowTimer, { AnimationType } from '../../../base/show-timer/show-timer.component';
import PageSection from '../../../common/page-section/page-section.component';
import StarsRating from '../../../common/stars-rating/stars-rating.component';
import './restaurant-hero.css'
import ImageSlider from '../../image-slider/image-slider.component';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import useRestaurantHero from '../../../../hooks/pages/restaurant-details/restaurant-hero';
import { calculateAvgStars } from '../../../../services/pages/restaurant-details/restaurant-details.service';

interface IProps {
  restaurant: { value: IRestaurant.RestaurantData, set: any },
}

const RestaurantHeroSection = ({ restaurant }: IProps) => {

  const { isImageSliderShown, vars } = useRestaurantHero(restaurant.value);


  const { images } = vars;

  return <>
    {isImageSliderShown.value && <ShowTimer timeout={0} animationType={AnimationType.FADE_IN}><ImageSlider setSliderShown={isImageSliderShown.set} images={images}></ImageSlider></ShowTimer>}
    <PageSection className='restaurant-hero'>
      <ShowTimer timeout={0}>
        <div className="header">
          <div className="title">
            <h1>{restaurant.value.name}</h1>
            <p>{restaurant.value.address}</p>
          </div>
          <StarsRating rating={calculateAvgStars(restaurant.value)} count={restaurant.value.reviews?.length || 0} showText={true}></StarsRating>
        </div>
      </ShowTimer>

      <ShowTimer timeout={100}>
        <div className="images-hero">
          <div>
            <ShowTimer timeout={100}><div className="img-container"><img src={images[0]} alt="" /></div></ShowTimer>
          </div>
          <div>
            <ShowTimer timeout={120}><div className='img-container'><img src={images[1]} alt="" /></div></ShowTimer>
            <ShowTimer timeout={140}><div className='img-container'><img src={images[2]} alt="" /></div></ShowTimer>
            <ShowTimer timeout={160}><div className='img-container'>{images?.length > 4 && <div className='img-cover'><p>عرض المزيد</p><p>(+{images.length - 4} صورة أخرى)</p></div>}<img onClick={() => isImageSliderShown.set(true)} src={images[3]} alt="" /></div></ShowTimer>
          </div>
        </div>
      </ShowTimer>

    </PageSection>
  </>
}

export default RestaurantHeroSection;
