import { ORDERBY } from '../../../data/adv'
import ReviewCard from './review-card/review-card.component';
import './sort.css';
const Sort = () => {
  return (
    <div className='restaurants-list'>
      <span className='title'>أفضل المطاعم الشعبية في مدينة الخليل</span>
      <div className="sort">
        {
          ORDERBY.map((order) => {
            return (
              <div className="order">
                <input type="checkbox" className="check-order" hidden />
                <label>{order}</label>
              </div>
            )
          })
        }
        <div className="review-cards">
        <ReviewCard />
        </div>

      </div>
    </div>
  )
}
export default Sort;