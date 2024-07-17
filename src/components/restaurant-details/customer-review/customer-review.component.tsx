import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './customer-review.css'
import { faAngleDown, faBullseye, faFaceAngry, faFaceGrin, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import useToggle from '../../../hooks/toggle.hook';
import { useCustomerReview } from '../../../hooks/pages-logic/customer-review.hook';
import { useContext, useEffect, useRef, useState } from 'react';
import Button from '../../common/button/button.component';
import { IModal, ModalContext, ModalType } from '../../../contexts/modal.context';
import ConfirmCommentModal, { CommentConfirmType } from '../../modal/confirm-comment/confirm-comment.component';
import { NotificationContext } from '../../base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../base/notification/notification-body/notification-body.component';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import restaurantController from '../../../controllers/restaurant.controller';
import { UserContext } from '../../../contexts/user.context';
import { IUser } from '../../../interfaces/user.interface';
import userController from '../../../controllers/user.controller';
import { AxiosResponse } from 'axios';
import StarsRating from '../../common/stars-rating/stars-rating.component';
import reportController from '../../../controllers/report.controller';
import { IReport } from '../../../interfaces/report.interface';

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
  const { user } = useContext(UserContext);
  const [reviewerName, setReviewerName] = useState('');
  const [reports, setReports] = useState<IReport.ReportData[]>([]);
  const [hasReported, setHasReported] = useState(false);

  useEffect(() => {
    userController.getUser(review.userId).then((res: AxiosResponse<IUser.UserData>) => {
      if (res.status == 200) {
        setReviewerName(`${res.data.firstName} ${res.data.lastName}`)
      }
    })

    reportController.getAllReports().then((res: AxiosResponse<IReport.ReportData[]>) => {
      setReports(res.data.filter(report => report.restaurantId == restaurantId));
    })
  }, [])

  useEffect(() => {
    setHasReported(reports.find(report => report.commentId == review._id) != null)
  }, [reports])

  const isAdmin = user.value?.role == IUser.Role.ADMIN || review.userId == user.value?._id as string;

  return <div className="customer-review">
    <div className='info'>
      <StarsRating rating={review.starRating} showText={false} />

      <div className='icon-text user'>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <p>{reviewerName}</p>
      </div>
      <div className='icon-text company'>
        <FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon>
        {/* <p>{IRestaurant.ServiceInfo[review.company]}</p> */}
      </div>
      <Button disabled={hasReported} onClick={() => {
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
            } else {
              const commentUser = ((await userController.getUser(review.userId)).data as IUser.UserData);
              await reportController.createNewReport({ restaurantId, commentId: review._id as string, userId: user.value?._id as string, fullName: `${commentUser.firstName} ${commentUser.lastName}` })
              setHasReported(true)
              pushNotification(NotificationType.Success, `تمت عملية الإبلاغ عن اساءة بنجاح`);
            }
          }
        }
        setModalProps(modalProps)
      }} className='options-comment' type="submit">{isAdmin ? "إزالة التعليق" : (hasReported ? "تم الإبلاغ" : "إبلاغ عن اساءة")}</Button>

    </div>

    <div className='comment'>
      <p ref={contentRef} className={content.isMinimized.value ? `minimized` : ''} onClick={content.isMinimized.toggle}>“ {review.content} ”</p>
      {review.positive && <div className='icon-text like'>
        <FontAwesomeIcon icon={faFaceGrin} />
        <p ref={positiveRef} className={positive.isMinimized.value ? `minimized` : ''} onClick={positive.isMinimized.toggle}>{review.positive}</p>
      </div>}
      {review.negative && <div className='icon-text dislike'>
        <FontAwesomeIcon icon={faFaceAngry} />
        <p ref={negativeRef} className={negative.isMinimized.value ? `minimized` : ''} onClick={negative.isMinimized.toggle}>{review.negative}</p>
      </div>}
    </div>
  </div>
}

export default CustomerReview;
