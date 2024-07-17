import axios from 'axios';
import { IUser } from "../interfaces/user.interface";

const authUser = async ({ credentials, token }: { credentials?: { email: string, password: string }, token?: string }) => {
  const payload: any = {}
  if (credentials) payload.credentials = credentials
  if (token) payload.token = token
  try {
    const response = await axios.post(`http://localhost:8000/user/auth`, { credentials, token });
    return response;
  } catch {
    return null;
  }
}

const createNewUser = async (user: IUser.UserData) => {
  try {
    const response = await axios.post(`http://localhost:8000/user`, user);
    return response;
  } catch {
    return null;
  }
}

const isEmailAvailable = async (email: string) => {
  try {
    const response = await axios.get(`http://localhost:8000/user/reserve-email/${email}`);
    if (response.status == 200) return true;
    else return false;
  } catch {
    return false;
  }
}

const getUser = async (userId: string) => {
  const response = await axios.get(`http://localhost:8000/user/${userId}`);
  return response;
}

const getUserByEmail = async (email: string) => {
  const response = await axios.get(`http://localhost:8000/user/email/${email}`);
  return response;
}

const getAllUsers = async () => {
  const response = await axios.get(`http://localhost:8000/user`);
  return response;
}

const deleteUser = async (userId: string) => {
  const response = await axios.delete(`http://localhost:8000/user/${userId}`);
  return response;
}

const deleteOwnedAccount = async () => {
  const response = await axios.delete(`http://localhost:8000/user`);
  return response;
}

const updateUser = async (userId: string, userData: IUser.UserData) => {
  const response = await axios.put(`http://localhost:8000/user/${userId}`, userData);
  return response;
}


export default { authUser, createNewUser, isEmailAvailable, getUser, getUserByEmail, getAllUsers, deleteUser, deleteOwnedAccount, updateUser };
