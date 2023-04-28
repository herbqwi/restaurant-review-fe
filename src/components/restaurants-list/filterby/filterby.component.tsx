import { ADV, KITCHEN, SUITABIL } from '../../../data/adv';
import './filterby.css';
const FilterBy = () => {
  return (
    <div className='filterby'>
      <h3 className='title'>تصفية النتائج</h3>
      <section className='money-filter'>
        <button>$</button>
        <button>$$$</button>
        <button>$$</button>
        <button>$$$$</button>
      </section>

      <div className="border"></div>
      <section className='features'>
        <p className='section-title'>ميزات</p>
        {
          ADV.map((adv) => {
            return (
              <div className='check'>
                <input type="checkbox" />
                <label >{adv}</label>
              </div>
            )
          })
        }
      </section>

      <div className="border"></div>
      <section className='cuisine'>
        <p className='section-title'>المطبخ</p>
        {
          KITCHEN.map((kit) => {
            return (
              <div className='check'>
                <input type="checkbox" />
                <label >{kit}</label>
              </div>
            )
          })
        }
      </section>

      <div className="border"></div>
      <section className='suitable-for'>
        <p className='section-title'>مناسب ل</p>
        {
          SUITABIL.map((sut) => {
            return (
              <div className='check'>
                <input type="checkbox" />
                <label >{sut}</label>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}
export default FilterBy;