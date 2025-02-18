
import './filterby.css';
import useParams from '../../../hooks/params.hook';

import { IRestaurant } from '../../../interfaces/restaurant.interface';
import ShowTimer from '../../base/show-timer/show-timer.component';


const FilterBy = () => {
  const { myParams, setParam } = useParams();
  return (
    <ShowTimer timeout={0}>
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
                    checked={myParams.servicesURL.includes(adv)}
                    onChange={(e: any) => {
                      const updated = e.target.checked
                        ? [...myParams.servicesURL, adv]
                        : myParams.servicesURL.filter(orders => orders !== adv);
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
                    checked={myParams.cuisinesURL.includes(kit)}
                    onChange={(e: any) => {
                      const updated = e.target.checked
                        ? [...myParams.cuisinesURL, kit]
                        : myParams.cuisinesURL.filter(orders => orders !== kit);
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
            Object.keys(IRestaurant.CompanyInfo).map((sut) => {
              return (
                <div className='check'>
                  <input
                    type="checkbox"
                    value={sut}
                    checked={myParams.companiesURL.includes(sut)}
                    onChange={(e: any) => {
                      const updated = e.target.checked
                        ? [...myParams.companiesURL, sut]
                        : myParams.companiesURL.filter(orders => orders !== sut);
                      setParam('companies', updated);
                    }}
                  />
                  <label >{IRestaurant.CompanyInfo[sut as unknown as IRestaurant.Company]}</label>
                </div>
              )
            })
          }
        </section>
      </div>
    </ShowTimer>
  )
}
export default FilterBy;