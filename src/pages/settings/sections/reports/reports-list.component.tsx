import { faExclamationCircle, faTrash, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowTimer from '../../../../components/base/show-timer/show-timer.component';
import ContentContainer from '../../content-container/content-container.component';
import UsersTable from '../../../../components/settings/users-table/users-table.component';
import Button from '../../../../components/common/button/button.component';
import { useContext, useState } from 'react';
import { IModal, ModalContext, ModalType } from '../../../../contexts/modal.context';
import ConfirmDeleteUserModal from '../../../../components/modal/confirm-delete-user/confirm-delete-user.component';
import { IUser } from '../../../../interfaces/user.interface';
import userController from '../../../../controllers/user.controller';
import ReportsTable from '../../../../components/settings/reports-table/reports-table.component';
import { IReport } from '../../../../interfaces/report.interface';

const ReportsListSection = () => {
  const [selectedReports, setSelectedReports] = useState<string[]>([]);
  const [reports, setReports] = useState<IReport.ReportData[]>([])
  const { setModalProps } = useContext(ModalContext)

  const deleteUsers = (usersId: string[]) => {
    const modalProps: IModal = {
      header: {
        title: `تأكيد الأمر`,
      },
      modalType: ModalType.CONFIRM,
      body: <ConfirmDeleteUserModal count={usersId.length} />,
      submit: async () => {
        let failed = false;
        let newUsers = reports;
        for (const userId of usersId) {
          const response = await userController.deleteUser(userId);
          if (response.status != 200) failed = true;
          else newUsers = newUsers.filter(user => user._id != userId);
        }
        if (failed)
          return;
        setReports(newUsers);
      }
    }
    setModalProps(modalProps)
  }

  return <section className="contents restaurants">
    <ShowTimer timeout={0}>
      <div className='header'>
        <h1>قائمة الإبلاغات</h1>
        <div className="actions">
          {selectedReports.length != 0 && <Button onClick={() => { deleteUsers(selectedReports) }} ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>}
        </div>
      </div>
    </ShowTimer>
    <ShowTimer timeout={50}><ReportsTable reports={{ value: reports, set: setReports }} /></ShowTimer>
  </section>
}

export default ReportsListSection;
