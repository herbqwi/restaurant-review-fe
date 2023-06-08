import { faChalkboardTeacher, faCommentDots, faHeadset, faPizzaSlice, faUserCog, faUsersCog } from "@fortawesome/free-solid-svg-icons";

export namespace ISearchInput {
  export enum SearchType {
    RESTAURANT,
    CITY,
    MEAL,
  }

  export interface FilteredSearchItem {
    name: string,
    type: SearchType,
  }
}

export namespace ISettings {
  export enum SectionType {
    ACCOUNT_SETTINGS,
    RESTAURANTS_LIST,
    USERS_LIST,
    REPORTS,
    CUSTOMER_SUPPORT,
  }

  export const SectionsInfo = {
    [SectionType.ACCOUNT_SETTINGS]: {
      name: `اعدادات حسابي`,
      path: `account-settings`,
      icon: faUserCog
    },
    [SectionType.RESTAURANTS_LIST]: {
      name: `قائمة المطاعم المتاحة`,
      path: `restaurants`,
      icon: faPizzaSlice
    },
    [SectionType.USERS_LIST]: {
      name: `قائمة المستخدمين`,
      path: `users`,
      icon: faUsersCog
    },
    [SectionType.REPORTS]: {
      name: `الإبلاغات`,
      path: `reports`,
      icon: faCommentDots
    },
    [SectionType.CUSTOMER_SUPPORT]: {
      name: `الدعم الفني`,
      path: `customer-support`,
      icon: faHeadset
    },
  };
}