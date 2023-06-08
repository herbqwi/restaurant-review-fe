import { useEffect, useState } from 'react';
import ShowTimer, { AnimationType } from '../../../base/show-timer/show-timer.component';
import PageSection from '../../../common/page-section/page-section.component';
import StarsRating from '../../../common/stars-rating/stars-rating.component';
import './restaurant-hero.css'
import ImageSlider from '../../image-slider/image-slider.component';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';

interface IProps {
  restaurant: IRestaurant.RestaurantData,
}

const RestaurantHeroSection = ({ restaurant }: IProps) => {

  const [isSliderShown, setSliderShown] = useState(false);

  const preventScroll = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isSliderShown) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isSliderShown]);

  const images = restaurant.images;


  return <>
    {isSliderShown && <ShowTimer timeout={0} animationType={AnimationType.FADE_IN}><ImageSlider setSliderShown={setSliderShown} images={images}></ImageSlider></ShowTimer>}
    <PageSection className='restaurant-hero'>
      <ShowTimer timeout={0}>
        <div className="info">
          <div className="title">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
          </div>
          <StarsRating rating={3} showText={true}></StarsRating>
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
            <ShowTimer timeout={160}><div className='img-container'>{images?.length > 4 && <div className='img-cover'><p>عرض المزيد</p><p>(+{images.length - 4} صورة أخرى)</p></div>}<img onClick={() => setSliderShown(true)} src={images[3]} alt="" /></div></ShowTimer>
          </div>
        </div>
      </ShowTimer>

    </PageSection>
  </>
}

export default RestaurantHeroSection;