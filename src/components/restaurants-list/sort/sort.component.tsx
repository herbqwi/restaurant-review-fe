import { ORDERBY } from '../../../data/adv'
import ReviewCard from './review-card/review-card.component';
import './sort.css';
import useParams from '../../../hooks/params.hook';
import CheckBox from '../../checkbox/checkbox.component';
const Sort = () => {
  const { myParams, setParam } = useParams();


  return (
    <div className='restaurants-list'>
      <span className='title'>أفضل المطاعم الشعبية في مدينة الخليل</span>
      <div className="sort">
        {
          ORDERBY.map((order) => {
            return (
              <div className="order">
                <CheckBox
                  key={order}
                  label={order}
                  value={order}
                  checked={myParams.orderByFromURL == order}
                  onChange={(e: any) => {
                    setParam('order', e.target.value);
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
