import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './customer-review.css'
import { faAngleDown, faBullseye, faFaceAngry, faFaceGrin, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import useToggle from '../../../hooks/toggle.hook';
import { useCustomerReview } from '../../../hooks/pages-logic/customer-review.hook';
import { useContext, useRef } from 'react';
import Button from '../../common/button/button.component';
import { IModal, ModalContext, ModalType } from '../../../contexts/modal.context';
import ConfirmCommentModal, { CommentConfirmType } from '../../modal/confirm-comment/confirm-comment.component';
import { NotificationContext } from '../../base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../base/notification/notification-body/notification-body.component';
import { UserContext } from '../../../contexts/login.context';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import restaurantController from '../../../controllers/restaurant.controller';

interface IProps {
  review: IRestaurant.Review;
  fetchReviews: any,
  restaurantId: string,
}

const CustomerReview = ({ review, fetchReviews, restaurantId }: IProps) => {
  const contentRef = useRef(null);
  const positiveRef = useRef(null);
  const negativeRef = useRef(null);
  const { pushNotification } = useContext(NotificationContext)
  const { content, positive, negative } = useCustomerReview(contentRef, positiveRef, negativeRef);
  const { setModalProps } = useContext(ModalContext)
  const { userId, setUserId } = useContext(UserContext);

  const isAdmin = false || review.userId == userId;

  return <div className="customer-review">
    <div className='info'>
      <div className="stars">
        <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
        <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
        <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
        <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
        <FontAwesomeIcon icon={faStar} fontSize={23} color="orange" />
      </div>
      <div className='icon-text user'>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <p>{review.userId}</p>
      </div>
      <div className='icon-text company'>
        <FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon>
        <p>{IRestaurant.CompanyInfo[review.company]}</p>
      </div>
      <Button onClick={() => {
        const modalProps: IModal = {
          header: {
            title: `تأكيد الأمر`,
          },
          modalType: ModalType.CONFIRM,
          body: <ConfirmCommentModal commentConfirmType={isAdmin ? CommentConfirmType.DELETE : CommentConfirmType.REPORT}></ConfirmCommentModal>,
          submit: async () => {
            if (isAdmin) {
              pushNotification(NotificationType.Success, `تمت عملية ازالة التعليق بنجاح`);
              await restaurantController.deleteReview(restaurantId, review._id as string);
              await fetchReviews();
              console.log(`remove comment`);
            } else {
              console.log(`report comment`);
              pushNotification(NotificationType.Success, `تمت عملية الإبلاغ عن اساءة بنجاح`);
            }
          }
        }
        setModalProps(modalProps)
      }} className='options-comment' type="submit">{isAdmin ? "إزالة التعليق" : "إبلاغ عن اساءة"}</Button>

    </div>
    <div className='comment'>
      <p ref={contentRef} className={content.isMinimized.value ? `minimized` : ``} onClick={content.isMinimized.toggle}>“ {review.content} ”</p>
      {review.positive && <div className='icon-text like'>
        <FontAwesomeIcon icon={faFaceGrin} />
        <p ref={positiveRef} className={positive.isMinimized.value ? `minimized` : ``} onClick={positive.isMinimized.toggle}>{review.positive}</p>
      </div>}
      {review.negative && <div className='icon-text dislike'>
        <FontAwesomeIcon icon={faFaceAngry} />
        <p ref={negativeRef} className={negative.isMinimized.value ? `minimized` : ``} onClick={negative.isMinimized.toggle}>{review.negative}</p>
      </div>}
    </div>
  </div>
}

export default CustomerReview;
