import './confirm-comment.css'

import { useContext, useEffect } from 'react'
import ModalProvider, { IModal, ModalContext } from '../../../contexts/modal.context'
import { NotificationContext } from '../../base/notification/notification-container/notification-container.component'
import { NotificationType } from '../../base/notification/notification-body/notification-body.component'
import CustomerReview from '../../restaurant-details/customer-review/customer-review.component'

export enum CommentConfirmType {
   REPORT,
   DELETE
}

interface IProps {
   commentConfirmType: CommentConfirmType
}

const ConfirmCommentModal = ({ commentConfirmType }: IProps) => {
   return <div className="body confirm-comment">
      <div className='content'>
         <p>{commentConfirmType == CommentConfirmType.DELETE ? "هل أنت متأكد من رغبتك في حذف هذا التعليق؟" : "هل أنت متأكد من رغبتك في الإبلاغ عن هذا التعليق؟"}</p>
      </div>
   </div>
}

export default ConfirmCommentModal;
