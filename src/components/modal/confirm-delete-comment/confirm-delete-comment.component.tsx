interface IProps {
   count?: number
}

const ConfirmDeleteReportModal = ({ count = 1 }: IProps) => {
   return <div className="body confirm">
      <div className='content'>
         {count == 1 ? <p>هل أنت متأكد من رغبتك في حذف هذا التعليق؟</p> : <p>هل أنت متأكد من رغبتك في حذف هذه التعليقات؟</p>}
      </div>
   </div>
}

export default ConfirmDeleteReportModal;