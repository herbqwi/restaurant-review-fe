import useUsersTable from '../../../hooks/pages/settings/users-table.hook';
import { IUser } from '../../../interfaces/user.interface';
import './users-table.css'
import { Table } from 'antd';

interface IProps {
  selectedUsers: { value: string[], set: any },
  users: { value: IUser.UserData[], set: any },
  deleteUsers: any,
  className?: string,
}

const UsersTable = ({ selectedUsers, users, deleteUsers, className }: IProps) => {
  const { columns, data, rowSelection } = useUsersTable({ selectedUsers, users, deleteUsers });
  return (
    <Table
      className={`users-table${className ? ` ${className}` : ``}`}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={{ position: [`bottomCenter`] }}
    />
  );
}

export default UsersTable;