import "./login.css";

import { useContext } from "react";
import ShowTimer from "../../components/base/show-timer/show-timer.component";
import { useNavigate } from "react-router";
import LoginForm from "../../components/login/login-form.component";
import { UserContext } from "../../contexts/user.context";

const LoginPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // if (userId != null) navigate(`/home`)
  return (
    <ShowTimer timeout={0}>
      <div className="login-page">
        <LoginForm></LoginForm>
      </div>
    </ShowTimer>
  );
};

export default LoginPage;
