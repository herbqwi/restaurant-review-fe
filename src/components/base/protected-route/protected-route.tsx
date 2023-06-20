import { useContext } from "react"
import { UserContext } from "../../../contexts/user.context"
import { Navigate, NavigateFunction } from "react-router";


interface IProps {
  children: any,
}

const ProtectedRoute = ({ children }: IProps) => {
  const { user } = useContext(UserContext);
  return user.value ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute;
