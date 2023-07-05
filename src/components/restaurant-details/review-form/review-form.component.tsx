import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './review-form.css'
import { faAngleDoubleDown, faFaceAngry, faFaceGrin } from '@fortawesome/free-solid-svg-icons';
import StarsInput from '../stars-input/stars-input.component';
import Button from '../../common/button/button.component';
import { useReview } from '../../../hooks/pages-logic/review-form.hook';
import { IRestaurant } from '../../../interfaces/restaurant.interface';

interface IProps {
  restaurantId: string,
  fetchReviews: any,
}

const ReviewForm = ({ restaurantId, fetchReviews }: IProps) => {

  const { content, positive, negative, company, isDetailed, starsReview, handleSubmit } = useReview(restaurantId);

  return <form onSubmit={async (e: any) => {
    await handleSubmit(e);
    await fetchReviews();
  }} className={`review-form details${isDetailed.value ? ` detailed` : ``}`}>
    <div className="review-general-input">
      <StarsInput controller={starsReview}></StarsInput>
      <select required value={company.value} onChange={(e) => { company.set(e.target.value as unknown as IRestaurant.Company) }} name="company" id="review-company">
        {Object.keys(IRestaurant.CompanyInfo).map(company => <option value={company}>{IRestaurant.CompanyInfo[company as unknown as IRestaurant.Company]}</option>)}
      </select>
      <Button className='submit-comment' type="submit">إضافة تعليق</Button>
    </div>
    <div className="review-input">
      <textarea value={content.value} onChange={(e) => content.set(e.target.value)} required placeholder='اكتب مراجعتك ...' />
      <div>
        <FontAwesomeIcon icon={faFaceGrin}></FontAwesomeIcon>
        <input value={positive.value} onChange={(e) => positive.set(e.target.value)} type="text" placeholder='ماذا أحببت؟' />
      </div>
      <div>
        <FontAwesomeIcon icon={faFaceAngry}></FontAwesomeIcon>
        <input value={negative.value} onChange={(e) => negative.set(e.target.value)} type="text" placeholder='ما الذي يمكن تحسينه؟' />
      </div>
      <div className="toggle-details" onClick={() => isDetailed.toggle()}><FontAwesomeIcon icon={faAngleDoubleDown}></FontAwesomeIcon> <p>إظهار المزيد</p></div>
    </div>
  </form>
}

export default ReviewForm;
