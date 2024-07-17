import { useContext } from "react"
import { UserContext } from "../../../contexts/user.context"
import { Navigate } from "react-router";


interface IProps {
  element: React.ReactElement,
  active?: boolean
}

const ProtectedRoute = (props: IProps) => {
  const { user } = useContext(UserContext);
  return (
    (user.value || !props.active)
      ? props.element
      : <Navigate to="/login" replace />
  )
}

export default ProtectedRoute;
