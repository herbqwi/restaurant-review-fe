import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Modal from "../components/modal/modal-tempelate/modal.component";

interface IContext {
  modalProps: IModal | null,
  setModalProps: Dispatch<SetStateAction<any>>,
  closeModal: () => void,
}

export enum ModalType {
  SAVE,
  CONFIRM
}

interface IProps {
  children: ReactNode
}

export interface IModal {
  header: {
    title?: string,
    subtitle?: string;
  } | null,
  data?: any,
  modalType?: ModalType,
  body: React.ReactNode | null,
  cancel?: (() => void) | null,
  submit?: (() => void) | null,
  preventClosing?: boolean,
}


export const ModalContext = React.createContext<IContext>({ modalProps: null, setModalProps: () => { }, closeModal: () => { } })


const ModalProvider = ({ children }: IProps) => {
  const [modalProps, setModalProps] = useState<IModal | null>(null as any);

  const closeModal = () => {
    document.querySelector(`.modal-container`)?.classList.add(`hidden`)
    // document.querySelector(`.modal-container.hidable`)?.classList.add(`hidden-in`)
    setTimeout(() => {
      setModalProps(null)
    }, 100);
  }

  return <ModalContext.Provider value={{ modalProps, setModalProps, closeModal }}>
    {modalProps != null && <Modal></Modal>}
    {children}
  </ModalContext.Provider>
}

export default ModalProvider
