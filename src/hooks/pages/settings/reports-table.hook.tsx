import { useContext, useEffect } from "react"
import { ColumnsType } from 'antd/es/table';
import { message } from 'antd';
import { formatDate } from "../../../services/general.utils";
import { IReport } from "../../../interfaces/report.interface";
import reportController from "../../../controllers/report.controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IModal, ModalContext, ModalType } from "../../../contexts/modal.context";
import ConfirmDeleteReportModal from "../../../components/modal/confirm-delete-comment/confirm-delete-comment.component";

interface DataType {
  key: string,
  content: string,
  full_name: string,
  reported_at: string,
  action: IReport.ReportData
}

interface IProps {
  reports: { value: IReport.ReportData[], set: any },
}

const useReportsTable = ({ reports }: IProps) => {
  const { setModalProps } = useContext(ModalContext);

  const confirmReport = (reportId: string) => {
    const modalProps: IModal = {
      header: {
        title: `تأكيد الأمر`,
      },
      modalType: ModalType.CONFIRM,
      body: <ConfirmDeleteReportModal />,
      submit: async () => {
        const response = await reportController.confirmReport(reportId)
        if (response.status != 200)
          return;
        let newReports = reports.value.filter(report => report._id != reportId);
        reports.set(newReports);
      }
    }
    setModalProps(modalProps)
  }

  useEffect(() => {
    reportController.getAllReports().then(res => {
      if (res.status != 200) {
        message.error(`حدث خطأ اثناء نقل البيانات`)
        return;
      }
      reports.set(res.data);
    })
  }, [])

  const columns: ColumnsType<DataType> = [
    {
      title: 'المحتوى',
      dataIndex: 'content',
      key: 'content',
      render: (text) => text,
    },
    {
      title: 'اسم المستخدم',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text) => text,
    },
    {
      title: 'تاريخ الإبلاغ',
      dataIndex: 'reported_at',
      key: 'reported_at',
      render: (text) => text,
    },
    {
      title: 'عملية',
      dataIndex: 'action',
      key: 'action',
      render: (report) => <div className="actions">
        <FontAwesomeIcon onClick={() => { confirmReport(report._id) }} className="clickable" icon={faEraser} />
        <FontAwesomeIcon onClick={() => { reportController.deleteReport(report._id) }} className="clickable" icon={faTrash} />
      </div>,
    },
  ];

  const data: DataType[] | null = reports.value.map(report => {
    return {
      key: report._id as string,
      content: report.content as string,
      full_name: report.fullName,
      reported_at: formatDate((new Date(report.createdAt as Date))),
      action: report
    }
  });

  return { columns, data }
}

export default useReportsTable;