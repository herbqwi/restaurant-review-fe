import useUsersTable from '../../../hooks/pages/settings/users-table.hook';
import { IReport } from '../../../interfaces/report.interface';
import { IUser } from '../../../interfaces/user.interface';
import './users-table.css'
import { Table } from 'antd';

interface IProps {
  selectedUsers: { value: string[], set: any },
  reports: { value: IReport.ReportData[], set: any },
  deleteUsers: any,
  className?: string,
}

<<<<<<< HEAD
const ReportsTable = ({ selectedUsers, reports, deleteUsers, className }: IProps) => {
  // const { columns, data, rowSelection } = useReports({ selectedUsers, reports, deleteUsers });
  // return (
  //   <Table
  //     className={`users-table${className ? ` ${className}` : ``}`}
  //     rowSelection={rowSelection}
  //     columns={columns}
  //     dataSource={data}
  //     pagination={{ position: [`bottomCenter`] }}
  //   />
  // );
=======
const ReportsTable = ({ reports, className }: IProps) => {
  const { columns, data } = useReportsTable({ reports });
  return (
    <Table
      className={`reports-table${className ? ` ${className}` : ''}`}
      columns={columns}
      dataSource={data}
      pagination={{ position: [`bottomCenter`] }}
    />
  );
>>>>>>> development
}

export default ReportsTable;