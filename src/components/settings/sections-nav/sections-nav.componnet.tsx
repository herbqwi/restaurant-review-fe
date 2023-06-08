import { faAngleLeft, faAngleRight, faArchive, faCog, faExchangeAlt, faHeadset, faIndustry, faPizzaSlice, faRightFromBracket, faTableColumns, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ShowTimer from '../../base/show-timer/show-timer.component';
import './sections-nav.css'
import useSectionsNav from '../../../hooks/pages-logic/sections-nav.hook';
import { ISettings } from '../../../interfaces';

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
  const isSectionSelectedText = isSelected() ? ` selected` : ``;

  return <div onClick={onClick ? onClick : clickHandler} className={`section${isSectionSelectedText}`}><p><FontAwesomeIcon icon={sectionIcon}></FontAwesomeIcon>{sectionName}</p></div>
}

const SectionsNav = () => {
  const { isExtendedView } = useSectionsNav();

  return <ShowTimer timeout={0}>
    <div className={`sections-nav ${isExtendedView.value == true ? `extended` : ``}`}>

      <div className='nav main-menu'>
        <SectionItem sectionType={ISettings.SectionType.ACCOUNT_SETTINGS}></SectionItem>
        <SectionItem sectionType={ISettings.SectionType.RESTAURANTS_LIST} onClick={() => { isExtendedView.set(true) }}></SectionItem>
        <SectionItem sectionType={ISettings.SectionType.USERS_LIST}></SectionItem>
        <SectionItem sectionType={ISettings.SectionType.REPORTS}></SectionItem>
      </div>

      <div className='nav secondary-menu'>
        <DetailedSectionItem sectionName='الرجوع للخلف' sectionIcon={faAngleRight} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false} onClick={() => { isExtendedView.set(false) }}></DetailedSectionItem>
        <div className="scrollable">
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => true}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
          <DetailedSectionItem sectionName='مطعم الخليل' sectionIcon={faPizzaSlice} sectionType={ISettings.SectionType.RESTAURANTS_LIST} isSelected={() => false}></DetailedSectionItem>
        </div>
      </div>

      <hr />
      <SectionItem sectionType={ISettings.SectionType.CUSTOMER_SUPPORT}></SectionItem>
      <div className={`section logout`}><p><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> تسجيل الخروج</p></div>
    </div>
  </ShowTimer>
}

export default SectionsNav;
