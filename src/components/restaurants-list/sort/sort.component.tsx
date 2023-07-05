import { ORDERBY } from '../../../data/adv'
import ReviewCard from './review-card/review-card.component';
import './sort.css';
import useParams from '../../../hooks/params.hook';
import CheckBox from '../../checkbox/checkbox.component';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
const Sort = () => {
  const { myParams, setParam } = useParams();


  return (
    <div className='restaurants-list'>
      <span className='title'>أفضل المطاعم الشعبية في مدينة الخليل</span>

      <div className="sort">      
        {
          Object.keys(IRestaurant.SortedByInfo).map((order) => {
            return (
              <div className="order">
                <CheckBox
                  key={order}
                  label={IRestaurant.SortedByInfo[order as unknown as IRestaurant.SortedBy].name}
                  value={order}
                  checked={myParams.orderByFromURL.includes(order)}
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
  )
}
export default Sort;
