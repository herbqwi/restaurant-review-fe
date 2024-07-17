import { ORDERBY } from '../../../data/adv'
import ReviewCard from './review-card/review-card.component';
import './sort.css';
import useParams from '../../../hooks/params.hook';
import CheckBox from '../../checkbox/checkbox.component';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import { useEffect, useState } from 'react';
import useGetRestaurant from '../../../services/restaurant-data';
import ShowTimer from '../../base/show-timer/show-timer.component';
const Sort = () => {
  const { myParams, setParam } = useParams();

  return (
    <ShowTimer timeout={0}>
      <div className='restaurants-list'>
        {myParams.cityURL.length != 0 && <span className='title'>أفضل المطاعم الشعبية {myParams.cityURL.length != 0 ? ` في مدينة ${IRestaurant.CityInfo[myParams.cityURL as unknown as IRestaurant.City].arabicName}` : ''}</span>}

        <div className="sort">
          {
            Object.keys(IRestaurant.SortedByInfo).map((order) => {
              return (
                <div className="order">
                  <CheckBox
                    key={order}
                    label={IRestaurant.SortedByInfo[order as unknown as IRestaurant.SortedBy].name}
                    value={order}
                    checked={myParams.orderByURL.includes(order)}
                    onChange={(e: any) => {
                      setParam('sortedBy', e.target.value);
                    }}
                  />
                </div>
              )
            })
          }
          <div className="review-cards">
            <ReviewCard />
          </div>

        </div>
      </div>
    </ShowTimer>
  )
}
export default Sort;
