import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ISettings } from "../../interfaces";


const useSectionsNav = () => {
  const { section: currentSectionaPath } = useParams();
  const navigate = useNavigate();
  const currentSectionType = currentSectionaPath == `account-settings` ? ISettings.SectionType.ACCOUNT_SETTINGS : (currentSectionaPath == `restaurants` ? ISettings.SectionType.RESTAURANTS_LIST : (currentSectionaPath == `users` ? ISettings.SectionType.USERS_LIST : ISettings.SectionType.REPORTS));
  const [isExtendedView, setExtendedView] = useState(currentSectionType == ISettings.SectionType.RESTAURANTS_LIST);

  const navigateToSection = (sectionType: ISettings.SectionType) => {
    const sectionPath = ISettings.SectionsInfo[sectionType].path;
    if (sectionType != currentSectionType) navigate(`/settings/${sectionPath}`);
  }

  const isSectionSelectedText = (sectionType: ISettings.SectionType) => {
    const sectionPath = ISettings.SectionsInfo[sectionType].path;
    return sectionType == currentSectionType ? ` selected` : ``
  }

  return { sectionType: currentSectionType, isExtendedView: { value: isExtendedView, set: setExtendedView }, helpers: { navigateToSection, isSectionSelectedText } };
}

export default useSectionsNav;