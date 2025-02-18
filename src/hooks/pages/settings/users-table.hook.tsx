import { useEffect, useState } from "react"
import userController from "../../../controllers/user.controller"
import { ColumnsType } from 'antd/es/table';
import { Tag } from 'antd';
import { IUser } from "../../../interfaces/user.interface";
import { formatDate } from "../../../services/general.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp, faMinus, faUserXmark } from "@fortawesome/free-solid-svg-icons";

interface DataType {
  key: string,
  full_name: string,
  email: string,
  created_at: string,
  user_type: IUser.Role,
  action: IUser.UserData
}

interface IProps {
  selectedUsers: { value: string[], set: any },
  users: { value: IUser.UserData[], set: any },
  deleteUsers: any,
}

const useUsersTable = ({ selectedUsers, users, deleteUsers }: IProps) => {

  const updateUserRole = async (user: IUser.UserData) => {
    let newRole = IUser.Role.RESTAURANT_OWNER;
    const newUsers = users.value.map(iuser => iuser._id == user._id ? { ...iuser, role: (iuser.role == IUser.Role.DEFAULT ? newRole : (newRole = IUser.Role.DEFAULT)) } : iuser)
    const response = await userController.updateUser(user._id as string, { ...user, role: newRole });
    if (response.status == 200) {
      users.set(newUsers);
    }
  }

  useEffect(() => {
    userController.getAllUsers().then(res => {
      if (res.status != 200) {
        // Error message
        return;
      }
      users.set(res.data);
    })
  }, [])

  const columns: ColumnsType<DataType> = [
    {
      title: 'الصورة',
      dataIndex: 'image',
      key: 'image',
      render: (base64) => base64 != '' ? <img className="user-img" src={base64} /> : <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" fill="none">
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
      render: (user: IUser.UserData) => <>{user.role != IUser.Role.ADMIN ? <div className="actions">
        <FontAwesomeIcon onClick={() => { updateUserRole(user) }} className="clickable" icon={user.role == IUser.Role.DEFAULT ? faAngleDoubleUp : faAngleDoubleDown} />
        <FontAwesomeIcon onClick={() => { deleteUsers([user._id]) }} className="clickable" icon={faUserXmark} />
      </div> : <>
        <FontAwesomeIcon icon={faMinus} />
      </>}</>,
    },
  ];

  const data: DataType[] | null = users.value.map((user, i) => {
    return {
      key: user._id as string,
      image: user.image,
      full_name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      created_at: formatDate((new Date(user.createdAt as Date))),
      user_type: user.role,
      action: user
    }
  });

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      selectedUsers.set(selectedRows.map(selectedItem => selectedItem.key))
    },
    getCheckboxProps: (user: DataType) => ({
      id: user.key,
    }),
  };

  return { columns, data, rowSelection }
}

export default useUsersTable;