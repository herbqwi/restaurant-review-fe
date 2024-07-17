import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ISettings } from "../../interfaces";


const useSectionsNav = () => {
  const { section: currentSectionsPath } = useParams();
  const navigate = useNavigate();
  const currentSectionType = currentSectionsPath == `account-settings` ? ISettings.SectionType.ACCOUNT_SETTINGS : (currentSectionsPath == `restaurants` ? ISettings.SectionType.RESTAURANTS_LIST : (currentSectionsPath == `users` ? ISettings.SectionType.USERS_LIST : (currentSectionsPath == 'reports' ? ISettings.SectionType.REPORTS : ISettings.SectionType.CUSTOMER_SUPPORT)));
  const [isExtendedView, setExtendedView] = useState(currentSectionType == ISettings.SectionType.RESTAURANTS_LIST);

  const navigateToSection = (sectionType: ISettings.SectionType) => {
    const sectionPath = ISettings.SectionsInfo[sectionType].path;
    if (sectionType != currentSectionType) navigate(`/settings/${sectionPath}`);
  }

  const isSectionSelectedText = (sectionType: ISettings.SectionType) => {
    return sectionType == currentSectionType ? ` selected` : ''
  }

  return { sectionType: currentSectionType, isExtendedView: { value: isExtendedView, set: setExtendedView }, helpers: { navigateToSection, isSectionSelectedText } };
}

export default useSectionsNav;