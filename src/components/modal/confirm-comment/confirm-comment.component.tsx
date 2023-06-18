import './confirm-comment.css'

export enum CommentConfirmType {
   REPORT,
   DELETE
}

interface IProps {
   commentConfirmType: CommentConfirmType
}

const ConfirmCommentModal = ({ commentConfirmType }: IProps) => {
   return <div className="body confirm">
      <div className='content'>
         <p>{commentConfirmType == CommentConfirmType.DELETE ? "هل أنت متأكد من رغبتك في حذف هذا التعليق؟" : "هل أنت متأكد من رغبتك في الإبلاغ عن هذا التعليق؟"}</p>
      </div>
   </div>
}

export default ConfirmCommentModal;
