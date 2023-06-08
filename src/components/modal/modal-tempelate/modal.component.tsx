import './modal.css'
import ShowTimer, { AnimationType } from '../../base/show-timer/show-timer.component'
import Button from '../../common/button/button.component'
import { useContext } from 'react'
import { ModalContext, ModalType } from '../../../contexts/modal.context'


const Modal = () => {

  const { modalProps, closeModal } = useContext(ModalContext)

  return <ShowTimer timeout={0} animationType={AnimationType.FADE_IN}><div className="modal-container">
    <ShowTimer timeout={0}>
      <div className='modal'>
        <div className="header">
          <p className='title'>{modalProps?.header?.title}</p>
          {modalProps?.header?.subtitle && <p className='text'>{modalProps?.header?.subtitle}</p>}
        </div>
        {modalProps != null && modalProps.body}

        <div className="footer">

          <Button onClick={async () => {
            modalProps?.submit != null && modalProps?.submit();
            (!modalProps?.preventClosing) && closeModal();
          }}>{modalProps?.modalType == ModalType.CONFIRM ? `تأكيد` : `حفظ`}</Button>

          <Button onClick={() => {
            modalProps?.cancel != null && modalProps?.cancel();
            closeModal();
          }}>الغاء</Button>
        </div>

      </div>
    </ShowTimer>
  </div>
  </ShowTimer>
}

export default Modal
