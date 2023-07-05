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

const HomeHero = () => {

  const [search, setSearch] = useState(``);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const selects = [
    <IconSelect icon={faCity} id="restaurant-city" options={[{ value: "hebron", content: "الخليل" }, { value: "hebron", content: "الخليل" }]}></IconSelect>,
    <IconSelect icon={faUtensils} id="restaurant-food-type" options={[{ value: "sh3bi", content: "شعبي" }, { value: "sh3bi", content: "شعبي" }]}></IconSelect>
  ]

  const doSearch = () => {
    if (search != ``) {
      navigate('/restaurants');
      smoothScrollTo(320, pathname.includes(`/home`) ? 1000 : 400);
    }
  }

  return <>
    {(pathname.includes(`/home`) || pathname == `/restaurants`) &&
      <div className={`home-hero${pathname.includes(`restaurants`) ? ` restaurants` : ``}`}>
        <div className="overlay"></div>
        <div className='heading'>
          <ShowTimer timeout={0}><img src={tasitfyMinimal} alt="" /></ShowTimer>
          <ShowTimer timeout={50}><p>اطلع على آراء الزبائن واكتشف أفضل المطاعم بالقرب منك</p></ShowTimer>
        </div>
        <div className="content">
          <ShowTimer timeout={70}><MultiInput elements={selects}></MultiInput></ShowTimer>
          <ShowTimer timeout={110}><IconInput input={search} setInput={setSearch} icon={faMagnifyingGlass}>ابحث عن: مطعم, وجبة, مدينة ..</IconInput></ShowTimer>
          <ShowTimer timeout={150}><IconButton onClick={doSearch} icon={faPizzaSlice} main>ابحث</IconButton></ShowTimer>
        </div>
      </div>}</>
}

export default HomeHero;
