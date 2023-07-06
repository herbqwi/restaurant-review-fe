interface IProps {
   count?: number
}

const ConfirmDeleteUserModal = ({ count = 1 }: IProps) => {
   return <div className="body confirm">
      <div className='content'>
         {count == 1 ? <p>هل أنت متأكد من رغبتك في حذف هذا الحساب؟</p> : <p>هل أنت متأكد من رغبتك في حذف هذه الحسابات؟</p>}
      </div>
   </div>
}

export default ConfirmDeleteUserModal;