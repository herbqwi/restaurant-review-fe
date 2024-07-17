import { useEffect, useState } from "react"
import userController from "../../../controllers/user.controller"
import { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';
import { IUser } from "../../../interfaces/user.interface";
import { formatDate } from "../../../services/general.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faAngleDoubleDown, faAngleDoubleUp, faUserXmark } from "@fortawesome/free-solid-svg-icons";
=======
import { faEraser, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IModal, ModalContext, ModalType } from "../../../contexts/modal.context";
import ConfirmDeleteRestaurantModal from "../../../components/modal/confirm-delete-comment/confirm-delete-restaurant";
import { UserContext } from "../../../contexts/user.context";
import { IUser } from "../../../interfaces/user.interface";
import { AxiosResponse } from "axios";
>>>>>>> development

interface DataType {
  key: string,
  full_name: string,
  email: string,
  created_at: string,
  user_type: IUser.Role,
  action: IUser.UserData
}

interface IProps {
  selectedReports: { value: string[], set: any },
  reports: { value: IUser.UserData[], set: any },
  deleteReports: any,
}

<<<<<<< HEAD
const useReportsTable = ({ selectedReports, reports, deleteReports }: IProps) => {
=======
const useReportsTable = ({ reports }: IProps) => {
  const { setModalProps } = useContext(ModalContext);
  const { user } = useContext(UserContext);

  const confirmReport = (reportId: string) => {
    const modalProps: IModal = {
      header: {
        title: `تأكيد الأمر`,
      },
      modalType: ModalType.CONFIRM,
      body: <ConfirmDeleteRestaurantModal />,
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
>>>>>>> development

  const deleteReport = async (reportId: string) => {
    await reportController.deleteReport(reportId)
    const filteredReports = reports.value.filter(report => report._id != reportId);
    reports.set(filteredReports);
  }

  useEffect(() => {
<<<<<<< HEAD
    userController.getAllUsers().then(res => {
=======
    reportController.getAllReports().then((res: AxiosResponse<IReport.ReportData[]>) => {
>>>>>>> development
      if (res.status != 200) {
        // Error message
        return;
      }
<<<<<<< HEAD
      // users.set(res.data);
=======
      if (user.value?.role == IUser.Role.ADMIN) {
        reports.set(res.data);
      } else {
        const filteredReports = res.data.filter(report => report.userId == user.value?._id)
        console.log(`filteredReports: `, filteredReports);
        reports.set(filteredReports)
      }
>>>>>>> development
    })
  }, [])

  const columns: ColumnsType<DataType> = [
    {
<<<<<<< HEAD
      title: 'الصورة',
      dataIndex: 'image',
      key: 'image',
      render: (base64) => base64 != `` ? <img className="user-img" src={base64} /> : <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
        <g clip-path="url(#clip0_1765_7055)">
          <path d="M0 0H512V512H0V0Z" fill="#222D3A" />
          <path d="M330.085 110.955C311.299 90.672 285.059 79.5024 256.097 79.5024C226.981 79.5024 200.655 90.6044 181.955 110.762C163.053 131.141 153.843 158.838 156.005 188.746C160.292 247.751 205.192 295.75 256.097 295.75C307.003 295.75 351.826 247.76 356.18 188.765C358.371 159.128 349.103 131.489 330.085 110.955Z" fill="#B3BAC0" />
          <path d="M53.9275 511.997H458.333C459 503 458.206 483.499 456.333 473.141C448.185 427.941 422.757 389.972 382.789 363.327C347.282 339.675 302.305 326.642 256.13 326.642C209.956 326.642 164.978 339.666 129.471 363.327C89.5038 389.982 64.0754 427.951 55.9275 473.15C54.0546 483.509 53.5001 504.5 53.9275 511.997Z" fill="#B3BAC0" />
        </g>
        <defs>
          <clipPath id="clip0_1765_7055">
            <rect width="512" height="512" fill="white" />
          </clipPath>
        </defs>
      </svg>
=======
      title: 'المحتوى',
      dataIndex: 'content',
      key: 'content',
      render: (text) => <p>{text}</p>,
>>>>>>> development
    },
    {
      title: 'اسم المستخدم',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (text) => text,
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'email',
      key: 'email',
      render: (text) => text,
    },
    {
      title: 'تاريخ الإنشاء',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => text,
    },
    {
      title: 'نوع المستخدم',
      dataIndex: 'user_type',
      key: 'user_type',
      render: (role) => <Tag color={IUser.RoleInfo[role as IUser.Role].color}>{IUser.RoleInfo[role as IUser.Role].arabicName}</Tag>,
    },
    {
      title: 'عملية',
      dataIndex: 'action',
      key: 'action',
<<<<<<< HEAD
      render: (user) => <div className="actions">
        {/* <FontAwesomeIcon onClick={() => { updateUserRole(user) }} className="clickable" icon={user.role == IUser.Role.DEFAULT ? faAngleDoubleUp : faAngleDoubleDown} /> */}
        {/* <FontAwesomeIcon onClick={() => { deleteUsers([user._id]) }} className="clickable" icon={faUserXmark} /> */}
      </div>,
=======
      render: (report: IReport.ReportData) => <>
        {user.value?.role == IUser.Role.ADMIN ? <div className="actions">
          <FontAwesomeIcon onClick={() => { confirmReport(report._id as string) }} className="clickable" icon={faEraser} />
          <FontAwesomeIcon onClick={() => { reportController.deleteReport(report._id as string) }} className="clickable" icon={faTrash} />
        </div> : <div className="actions">
          <FontAwesomeIcon onClick={() => { deleteReport(report._id as string) }} className="clickable" icon={faTrash} />
        </div>}
      </>,
>>>>>>> development
    },
  ];

  const data: DataType[] | null = reports.value.map((report, i) => {
    return {
      key: report._id as string,
      image: report.image,
      full_name: `${report.firstName} ${report.lastName}`,
      email: report.email,
      created_at: formatDate((new Date(report.createdAt as Date))),
      user_type: report.role,
      action: report
    }
  });

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      // selectedUsers.set(selectedRows.map(selectedItem => selectedItem.key))
    },
    getCheckboxProps: (user: DataType) => ({
      id: user.key,
    }),
  };

  return { columns, data, rowSelection }
}

export default useReportsTable;