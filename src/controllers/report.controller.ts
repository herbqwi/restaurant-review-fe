import axios from "axios";
import { IReport } from "../interfaces/report.interface";

const createNewReport = async (report: IReport.ReportData) => {
  const response = await axios.post('http://localhost:8000/report', report);
  return response;
}

const getReport = async (reportId: string) => {
  const response = await axios.get(`http://localhost:8000/report/${reportId}`);
  return response;
}

const getAllReports = async () => {
  const response = await axios.get('http://localhost:8000/report');
  return response;
}

const deleteReport = async (reportId: string) => {
  const response = await axios.delete(`http://localhost:8000/report/${reportId}`);
  return response;
}

export default { createNewReport, getReport, getAllReports, deleteReport };