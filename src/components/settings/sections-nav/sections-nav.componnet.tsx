import { faAdd, faAngleLeft, faAngleRight, faArchive, faCog, faEdit, faExchangeAlt, faHeadset, faIndustry, faPizzaSlice, faRightFromBracket, faTableColumns, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
<<<<<<< HEAD
import { useNavigate, useParams,useLocation } from 'react-router';
=======
import { useNavigate, useParams, useLocation } from 'react-router';
>>>>>>> development
import ShowTimer from '../../base/show-timer/show-timer.component';
import './sections-nav.css'
import useSectionsNav from '../../../hooks/pages-logic/sections-nav.hook';
import userController from '../../../controllers/user.controller';
import { ISettings } from '../../../interfaces';
import restaurantController from '../../../controllers/restaurant.controller';
import { IRestaurant } from '../../../interfaces/restaurant.interface';
import { UserContext } from '../../../contexts/user.context';
import { IUser } from '../../../interfaces/user.interface';
<<<<<<< HEAD
import React from 'react';
import { json } from 'stream/consumers';
=======
import { NotificationContext } from '../../base/notification/notification-container/notification-container.component';
import { NotificationType } from '../../base/notification/notification-body/notification-body.component';
>>>>>>> development

const SectionItem = ({ sectionType, onClick }: { sectionType: ISettings.SectionType, onClick?: any }) => {

  const { helpers } = useSectionsNav();
  const clickHandler = () => { helpers.navigateToSection(sectionType) };
  const isSectionSelectedText = helpers.isSectionSelectedText(sectionType);
  const sectionIcon = ISettings.SectionsInfo[sectionType].icon;
  const sectionName = ISettings.SectionsInfo[sectionType].name;

  return <div onClick={onClick ? onClick : clickHandler} className={`section${isSectionSelectedText}`}><p><FontAwesomeIcon icon={sectionIcon}></FontAwesomeIcon>{sectionName}</p></div>
}

const DetailedSectionItem = ({ sectionName, sectionIcon, sectionType, isSelected, onClick }: { sectionName: string, sectionIcon: any, sectionType: ISettings.SectionType, isSelected: () => boolean, onClick?: any }) => {
  const { helpers } = useSectionsNav();
  const clickHandler = () => { helpers.navigateToSection(sectionType) };
  const isSectionSelectedText = isSelected() ? ` selected` : '';

  return <div onClick={onClick ? onClick : clickHandler} className={`section${isSectionSelectedText}`}><p><FontAwesomeIcon icon={sectionIcon}></FontAwesomeIcon>{sectionName}</p></div>
}

const SectionsNav = () => {
  const { user } = useContext(UserContext);
<<<<<<< HEAD
  const loc =  useLocation()
  const nav =  useNavigate()
  const [Restaurant, setRestaurant] = useState<[IRestaurant.RestaurantData]>()
  useEffect(() => {

    getdata()


  }, [user])
  const getdata = async () => {
    const restinfo = await restaurantController.getRestauranByOwnerID(user.value?._id || "").then(res => {
      setRestaurant(res.data||[])
    })

=======
  const { pushNotification } = useContext(NotificationContext);
  const loc = useLocation()
  const { selectedElement } = useParams()
  const [Restaurant, setRestaurant] = useState<[IRestaurant.RestaurantData]>()
  useEffect(() => {
    getdata()
  }, [selectedElement])
  const getdata = async () => {
    await restaurantController.getRestaurantsByOwnerID(user.value?._id || "").then(res => {
      setRestaurant(res.data || [])
    })
  }

  const logout = () => {
    pushNotification(NotificationType.Notice, `لقد قمت بتسجيل الخروج`)
    user.set(null)
    navigate(`/login`)
>>>>>>> development
  }

  const { isExtendedView } = useSectionsNav();
  const navigate = useNavigate();

  return <ShowTimer timeout={0}>
    <div className={`sections-nav ${isExtendedView.value == true ? 'extended' : ''}${Restaurant != null && Restaurant.length >= 5 ? ' very' : ''}${user.value?.role == IUser.Role.ADMIN ? ' admin' : (user.value?.role == IUser.Role.RESTAURANT_OWNER ? ' owner' : '')}`}>

      <div className={'nav main-menu'}>
        <SectionItem sectionType={ISettings.SectionType.ACCOUNT_SETTINGS}></SectionItem>
        {user.value?.role != null && user.value.role >= 1 && <SectionItem sectionType={ISettings.SectionType.RESTAURANTS_LIST} onClick={() => { isExtendedView.set(true) }}></SectionItem>}
        {user.value?.role == IUser.Role.ADMIN && <SectionItem sectionType={ISettings.SectionType.USERS_LIST}></SectionItem>}
        {<SectionItem sectionType={ISettings.SectionType.REPORTS}></SectionItem>}
      </div>

      <div className='nav secondary-menu'>

        <DetailedSectionItem sectionName='الرجوع للخلف' sectionIcon={faAngleRight} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false} onClick={() => { isExtendedView.set(false) }}></DetailedSectionItem>
        <div className="scrollable">
<<<<<<< HEAD
          {Array.isArray(Restaurant)  && Restaurant.map((r) => {
            return <DetailedSectionItem key={r.name || ""} sectionName={r.name || ""} sectionIcon={faEdit} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => (loc.pathname.includes(`/settings/restaurants/${r.ownerId}/${r._id}`) ? true : false)} onClick={()=>{window.location.href=(`/settings/restaurants/${r.ownerId}/${r._id}`)}}></DetailedSectionItem>
          })
          }
          <DetailedSectionItem sectionName='اضافة مطعم جديد' sectionIcon={faAdd} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => (loc.pathname ===(`/settings/restaurants/${user.value?._id}`) ? true : false)} onClick={()=>{window.location.href=(`/settings/restaurants/${user.value?._id}`)}}></DetailedSectionItem>
=======
          {Array.isArray(Restaurant) && Restaurant.map((r) => {
            return <DetailedSectionItem key={r.name || ""} sectionName={r.name || ""} sectionIcon={faEdit} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => (loc.pathname.includes(`/settings/restaurants/${r._id}`) ? true : false)} onClick={() => { navigate(`/settings/restaurants/${r._id}`) }}></DetailedSectionItem>
          })
          }
          <DetailedSectionItem sectionName='اضافة مطعم جديد' sectionIcon={faAdd} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => (loc.pathname === (`/settings/restaurants/new`) ? true : false)} onClick={() => { navigate((`/settings/restaurants/new`)) }}></DetailedSectionItem>
>>>>>>> development

        </div>
      </div>
      <div>
        <hr />
        <SectionItem sectionType={ISettings.SectionType.CUSTOMER_SUPPORT} />
        <div onClick={logout} className={`section logout`}><p><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> تسجيل الخروج</p></div>
      </div>
    </div>
  </ShowTimer>
}

export default SectionsNav;
