import "./header.css";
import HeaderButton from "./header-button/header-button.component";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NotificationContext } from "../notification/notification-container/notification-container.component";
import { NotificationType } from "../notification/notification-body/notification-body.component";
import Logo from "./logo/logo.component";
import { faGear, faIceCream, faPizzaSlice, faSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowTimer, { AnimationType } from "../show-timer/show-timer.component";
import { UserContext } from "../../../contexts/user.context";
<<<<<<< HEAD
import { IUser } from "../../../interfaces/user.interface";
=======
import useSParams from "../../../hooks/sparams.hook";
>>>>>>> development

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { user } = useContext(UserContext);
  const { pushNotification } = useContext(NotificationContext)
  const [isRegisterLayout, setRegisterLayout] = useSParams<boolean>(`register`);
  const navigate = useNavigate();

  const firstName = user.value?.firstName
  const lastName = user.value?.lastName
  const img = user.value?.image

  const logout = () => {
    pushNotification(NotificationType.Notice, `لقد قمت بتسجيل الخروج`)
    user.set(null)
    navigate(`/login`)
  }

  return (
    <div className={`header-container${pathname.includes(`/home`) ? ` home` : ''}`}>

      <div className="left-nav">
        <ShowTimer timeout={0} animationType={AnimationType.FADE_IN}><Logo></Logo></ShowTimer>
<<<<<<< HEAD
        <ShowTimer timeout={100} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname == `/home` ? `selected` : ``}`} to="/home">الرئيسية</HeaderButton></ShowTimer>
        <ShowTimer timeout={200} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname == `/restaurants` ? `selected` : ``}`} to="/restaurants">قائمة المطاعم</HeaderButton></ShowTimer>
        {(user.value?.role !== IUser.Role.ADMIN && user.value !== null) && <ShowTimer timeout={300} animationType={AnimationType.FADE_IN}>{<HeaderButton className={`${pathname.includes(`/settings/restaurants/`) ? `selected` : ``}`} to={`/settings/restaurants/${user.value?._id}`}>إضافة مطعم</HeaderButton>}</ShowTimer>}
=======
        <ShowTimer timeout={100} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname == `/home` ? `selected` : ''}`} to="/home">الرئيسية</HeaderButton></ShowTimer>
        <ShowTimer timeout={200} animationType={AnimationType.FADE_IN}><HeaderButton className={`${pathname == `/restaurants` ? `selected` : ''}`} to="/restaurants">قائمة المطاعم</HeaderButton></ShowTimer>
>>>>>>> development
      </div>

      <div className="right-nav">
        {/* {user && <div className='user-info'>
          <img src="https://www.nicepng.com/png/full/137-1379898_anonymous-headshot-icon-user-png.png" alt="User Image" />
          <p>{user.fullName}</p>
        </div>} */}


        {user.value == null ?
          <>
            <ShowTimer timeout={500} animationType={AnimationType.FADE_IN}>
              <HeaderButton className={`${pathname.includes(`/login`) ? `selected` : ``}`} to="/login">
                تسجيل الدخول
              </HeaderButton>
            </ShowTimer>
            <ShowTimer timeout={600} animationType={AnimationType.FADE_IN}>
              <HeaderButton
                className={`inverted ${pathname.includes(`/login`) && isRegisterLayout ? `selected ` : ``}`}
                to="/login?register=true"
              >
                <FontAwesomeIcon icon={faSignature} fontSize={18} color="white" /> انضم الان
              </HeaderButton>
            </ShowTimer>
          </> :
          <>
            <div onClick={() => { navigate('/settings/account-settings') }} className="user-info">
              <p>{firstName} {lastName}</p>
              {img && <div className="user-image">
                <img src={img} alt="User Image" />
              </div>}
            </div>
            {/* <HeaderButton
              className={`${pathname.startsWith(`/settings`) ? `selected` : ``}`}
              to="/settings/account-settings"
            >
              <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
            </HeaderButton> */}
            {/* <HeaderButton to="/login" onClick={() => logout()} animationType={AnimationType.FADE_IN}>
              تسجيل الخروج
            </HeaderButton> */}
          </>
        }
      </div>


    </div>
  );
};

export default Header;
