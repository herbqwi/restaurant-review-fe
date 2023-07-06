import './restaurants.css';
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
}

export default RestaurantsSection;