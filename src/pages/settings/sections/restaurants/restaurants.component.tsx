import './restaurants.css';
<<<<<<< HEAD
import Restaurant from '../addresturant/Restaurant';
import AddFood from '../food/add-food/add-food-comp';
import Viewfood from '../food/view-food/view-food-comp';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from "react-router-dom"
import { Routes, Route, useParams } from 'react-router-dom';
import { UserContext } from '../../../../contexts/user.context';
import UpdateRestaurant from '../../../update-Restaurant/update.resturant.comp';
import restaurantController from '../../../../controllers/restaurant.controller';
import UpdateFood from '../../../Update-Food/update-food-comp';
import { log } from 'console';


const RestaurantsSection = () => {
  const [base64Image, setBase64Image] = useState([]);
  const [sections, setSection] = useState(0)
  const [val, setval] = useState()
  const { user } = useContext(UserContext);
  const loc = useLocation()
  const { section, id, selectedElement } = useParams();

  useEffect(() => {


  }, [val, sections])

  const handleUpdated = (value: any) => {

    setval(value)
    setSection(value[0].sec)

  }





  return <section className="contents restaurants">
    {
      loc.pathname === `/settings/restaurants/${user.value?._id}/${selectedElement?.toString()}` ?
        <div className='button-header'>
          <h3>اعدادات المطعم المحدد</h3>
          <button className='food-button' type='button' onClick={() => setSection(1)}>وجبات</button>
          <button className='food-button' type='button' onClick={() => setSection(2)}>عرض وجبات</button>
          <button className='food-button' type='button' onClick={() => setSection(0)}>المطعم</button>
        </div>
        : <></>}
    {
      loc.pathname.includes(`restaurants/${user.value?._id}/${selectedElement}`) ?
        <>
          {sections !== 2 && <>
            {sections === 0 && <UpdateRestaurant ></UpdateRestaurant>}
            {sections === 3 ? <UpdateFood Foodinfo={val}></UpdateFood> : sections === 1 && <AddFood></AddFood>}</>}
        </> : sections !== 2 && <>
          {sections === 0 && <Restaurant></Restaurant>}

        </>
    }
    {sections === 2 && <Viewfood handleUpdated={handleUpdated}></Viewfood>}
  </section>
=======
import Restaurant from '../../addresturant/Restaurant';
import AddFood from '../../food/add-food/add-food-comp';
import Viewfood from '../../food/view-food/view-food-comp';
import { useContext, useState } from 'react';
import { useLocation } from "react-router-dom"
import { UserContext } from '../../../../contexts/user.context';
import UpdateRestaurant from '../../../../components/settings/update-Restaurant/update.resturant.comp';
import restaurantController from '../../../../controllers/restaurant.controller';
import UpdateFood from '../../../../components/settings/Update-Food/update-food-comp';

const SECTION_RESTAURANT = 0;
const SECTION_ADD_FOOD = 1;
const SECTION_VIEW_FOOD = 2;
const SECTION_UPDATE_FOOD = 3;

const RestaurantsSection = () => {
  const [section, setSection] = useState(SECTION_RESTAURANT);
  const [foodInfo, setFoodInfo] = useState();
  const location = useLocation();

  const handleUpdated = (value: any) => {
    setFoodInfo(value);
  }

  return (
    <section className="contents restaurants">
      {location.pathname === `/settings/restaurants` &&
        <div className='button-header'>
          <h3>اعدادات المطعم المحدد</h3>
          <button className='food-button' type='button' onClick={() => setSection(SECTION_ADD_FOOD)}>وجبات</button>
          <button className='food-button' type='button' onClick={() => setSection(SECTION_VIEW_FOOD)}>عرض وجبات</button>
          <button className='food-button' type='button' onClick={() => setSection(SECTION_RESTAURANT)}>المطعم</button>
        </div>
      }

      {location.pathname.includes(`restaurants`) ?
        <>
          {section !== SECTION_VIEW_FOOD &&
            <>
              {section === SECTION_RESTAURANT && <Restaurant setSection={setSection} />}
              {section === SECTION_UPDATE_FOOD ? <UpdateFood foodInfo={foodInfo} /> : section === SECTION_ADD_FOOD && <AddFood />}
            </>
          }
        </> : section !== SECTION_VIEW_FOOD &&
        <>
          {section === SECTION_RESTAURANT && <Restaurant setSection={setSection} />}
        </>
      }
      {section === SECTION_VIEW_FOOD && <Viewfood handleUpdated={handleUpdated} />}
    </section>
  );
>>>>>>> development
}

export default RestaurantsSection;