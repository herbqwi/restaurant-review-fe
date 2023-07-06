import { faCity, faMagnifyingGlass, faPizzaSlice, faUtensilSpoon, faUtensils } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../common/icon-button/icon-button.component';
import IconInput from '../search-input/search-input.component';
import './home-hero.css'
import MultiInput from '../../common/multi-input/multi-input.component';
import IconSelect from '../../common/icon-select/icon-select.component';

import tasitfyMinimal from '../../../assets/tastify-minimal.png';
import ShowTimer from '../../base/show-timer/show-timer.component';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { smoothScrollTo } from '../../../services/general.utils';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import useParams from '../../../hooks/params.hook';

const HomeHero = () => {

  const { myParams, setParam } = useParams();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (myParams.searchTermsURL != ``) {
      console.log()
      navigate(`/restaurants${location.search}`);
      smoothScrollTo(320, pathname.includes(`/home`) ? 1000 : 400);
    }
  }

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;


  const selects = [
    <IconSelect value={Number(myParams.cityURL) as IRestaurant.City} onChange={(e: any) => setParam('city', `${e.target.value}`)} icon={faCity} id="restaurant-city" options={Object.keys(IRestaurant.CityInfo).map((cityInfo) => ({ value: cityInfo, content: IRestaurant.CityInfo[Number(cityInfo) as IRestaurant.City]?.arabicName }))}></IconSelect>,
    <IconSelect value={Number(myParams.cuisinesURL.length ? myParams.cuisinesURL[0] : 0) as IRestaurant.Cuisine} onChange={(e: any) => setParam('cuisines', `${e.target.value}`)} icon={faUtensils} id="restaurant-food-type" options={Object.keys(IRestaurant.CuisineInfo).map((cuisineInfo) => ({ value: cuisineInfo, content: IRestaurant.CuisineInfo[Number(cuisineInfo) as IRestaurant.City].name }))}></IconSelect>,
  ]

  return <>
    {(pathname.includes(`/home`) || pathname == `/restaurants`) &&
      <form onSubmit={submitHandler} className={`home-hero${pathname.includes(`restaurants`) ? ` restaurants` : ``}`}>
        <div className="overlay"></div>
        <div className='heading'>
          <ShowTimer timeout={0}><img src={tasitfyMinimal} alt="" /></ShowTimer>
          <ShowTimer timeout={50}><p>اطلع على آراء الزبائن واكتشف أفضل المطاعم بالقرب منك</p></ShowTimer>
        </div>
        <div className="content">
          <ShowTimer timeout={70}><MultiInput elements={selects}></MultiInput></ShowTimer>
          <ShowTimer timeout={110}><IconInput input={myParams.searchTermsURL} setInput={(e: string) => setParam('searchTerms', e)} icon={faMagnifyingGlass}>ابحث عن: مطعم, وجبة, مدينة ..</IconInput></ShowTimer>
          <ShowTimer timeout={150}><IconButton type='submit' icon={faPizzaSlice} main>ابحث</IconButton></ShowTimer>
        </div>
      </form>}</>
}

export default HomeHero;
