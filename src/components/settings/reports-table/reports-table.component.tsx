import './reports-table.css'
import useReportsTable from '../../../hooks/pages/settings/reports-table.hook';
import { IReport } from '../../../interfaces/report.interface';
import { Table } from 'antd';

interface IProps {
  reports: { value: IReport.ReportData[], set: any },
  className?: string,
}

const ReportsTable = ({ reports, className }: IProps) => {
  const { columns, data } = useReportsTable({ reports });
  return (
    <Table
      className={`reports-table${className ? ` ${className}` : ``}`}
      columns={columns}
      dataSource={data}
      pagination={{ position: [`bottomCenter`] }}
    />
  );
}

export default ReportsTable;