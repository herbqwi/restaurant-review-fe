import './view-food.css';
import { useContext, useEffect, useState } from 'react';
import { IRestaurant } from '../../../../interfaces/restaurant.interface';
import { UserContext } from '../../../../contexts/user.context';
import { IUser } from '../../../../interfaces/user.interface';
import restaurantController from '../../../../controllers/restaurant.controller';
import { useNavigate, useParams } from 'react-router-dom';
import foodController from '../../../../controllers/food.controller';
import Input from '../../../../components/common/input/input.component';

function Viewfood({ handleUpdated }: { handleUpdated: any }) {
  const { user } = useContext(UserContext);

  const [food, setFood] = useState<IRestaurant.MenuItem[]>([]);
  const [value, setvalue] = useState("")
  const [Delete, setdelete] = useState(false)
  const { section, id, selectedElement } = useParams();
  const nav = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      const response = await foodController.getFoodByRestaurant(selectedElement as string);
      console.log(`data: `, response);
      setFood(response.data);
    };


    if (value !== "")
      handleInputChange()
    else
      fetchData();

    if (Delete) {
      fetchData();
      setdelete(false);
    }

  }, [user.value?._id, selectedElement, value, Delete]);
  // Invoke the callback function in the parent component with the array of objects

  const handleClick = (id: string) => {
    const dataArray = [{ sec: 3, id: id }]
    handleUpdated(dataArray);
  };

  const handleInputChange = () => {
    const searchValue = value;
    if (searchValue) {

      const filteredData = food.filter(item => {
        return item.name.includes(searchValue) ||
          item.description.includes(searchValue) ||
          item.calories.toString() === searchValue ||
          item.price.toString() === searchValue ||
          item.category.toString().includes(searchValue) ||
          item.ingredients.includes(searchValue)
      }
      )
      setFood(filteredData);
    }
  };



  const handleSearch = (e: any) => {
    setvalue(e.target.value)
  };



  console.log(`food: `, food);

  return (<div>
    <div className='search-input'>
      <Input placeholder="مندي,لحمه مسلوعه...." label={'ابحث عن اشهى الاكلات:'} type="search" name="search" onChange={handleSearch}></Input>
    </div>
    <div className='food-view-container'>
      {!!food.length && food.map((f: IRestaurant.MenuItem) => (
        <div className="food-container" key={f._id}>
          <div className="food-card">
            {f && f?.images && f?.images?.length != 0 && <img src={f?.images[0]} alt="" />}
            <div className="food-details">
              <div className="food-name">{f.name}</div>
              <div className="food-info">
                <div className="two-info">
                  <div className="food-category">{f.category}</div>
                  <div className="right-info">
                    <div className="food-calories">{f.calories} </div>
                    <div className="icon-img">
                      <img
                        src="https://icon-library.com/images/burn-calories-icon/burn-calories-icon-4.jpg"
                        alt="fire"
                      />
                    </div>
                  </div>
                </div>
                <div className="food-ingredients">
                  {!!f?.ingredients?.length && f?.ingredients?.map((ingredient: any, index: any) => (
                    <div className="food-ingredient" key={index}>
                      {ingredient}
                    </div>
                  ))}
                </div>
              </div>
              <div className="food-description" >{f.description}</div>

              <hr className="food-divider" />
            </div>
            <div className="bottom">
              <div className="food-price">₪{f.price}</div>
              {user.value?.role === (IUser.Role.ADMIN && IUser.Role.RESTAURANT_OWNER) ? (
                <div>
                  <button type='button' onClick={() => { handleClick(f._id || "") }}>تعديل</button>
                  <button type='button' onClick={() => {
                    foodController.deleteFood(selectedElement || "", f._id || "")
                    setdelete(true)
                  }}>حذف</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Viewfood;
