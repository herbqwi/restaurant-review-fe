
import './filterby.css';
import useParams from '../../../hooks/params.hook';
import React from 'react';

import { IRestaurant } from '../../../interfaces/restaurant.interface';


const FilterBy = () => {
  const { myParams, setParam } = useParams();
  return (
    <div className='filterby'>
      <h3 className='title'>تصفية النتائج</h3>
      <section className='money-filter'>
        <button>$</button>
        <button>$$</button>
        <button>$$$</button>
        <button>$$$$</button>
      </section>

      <div className="border"></div>
      <section className='features'>
        <p className='section-title'>ميزات</p>
        {
          Object.keys(IRestaurant.ServiceInfo).map((adv) => {
            return (
              <div className='check'>
                <input
                  type='checkbox'
                  value={adv}
                  checked={myParams.orderByAdvFromURL.includes(adv)}
                  onChange={(e: any) => {
                     const updated = e.target.checked
                      ? [...myParams.orderByAdvFromURL, adv]
                      : myParams.orderByAdvFromURL.filter(orders => orders !== adv);
                    setParam('services', updated);
                  }}
                  ></input>
                <label >{IRestaurant.ServiceInfo[adv as unknown as IRestaurant.Service].name}</label>
              </div>
            );
          })

        }
      </section>

      <div className="border"></div>
      <section className='cuisine'>
        <p className='section-title'>المطبخ</p>
        {
          Object.keys(IRestaurant.CuisineInfo).map((kit) => {
            return (
              <div className='check'>
                <input 
                  type="checkbox"
                  value={kit}
                  checked={myParams.orderByKitFromURL.includes(kit)}
                  onChange={(e: any) => {
                    const updated = e.target.checked
                     ? [...myParams.orderByKitFromURL, kit]
                     : myParams.orderByKitFromURL.filter(orders => orders !== kit);
                   setParam('cuisines', updated);
                 }}

                />
                <label >{IRestaurant.CuisineInfo[kit as unknown as IRestaurant.Cuisine].name}</label>
              </div>
            )
          })
        }
      </section>

      <div className="border"></div>
      <section className='suitable-for'>
        <p className='section-title'>مناسب ل</p>
        {
          Object.keys(IRestaurant.SutableInfo).map((sut) => {
            return (
              <div className='check'>
                <input 
                  type="checkbox"
                  value={sut}
                  checked={myParams.orderBySutFromURL.includes(sut)}
                  onChange={(e: any) => {
                    const updated = e.target.checked
                     ? [...myParams.orderBySutFromURL, sut]
                     : myParams.orderBySutFromURL.filter(orders => orders !== sut);
                   setParam('companies', updated);
                 }}
                />
                <label >{IRestaurant.SutableInfo[sut as unknown as IRestaurant.Sutable].name}</label>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}
export default FilterBy;