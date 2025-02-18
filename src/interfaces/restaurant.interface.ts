import { faChair, faParking, faPizzaSlice, faSatellite, faStarHalfStroke, faTruck, faUtensils, faVanShuttle, faWheelchair, faWifi } from "@fortawesome/free-solid-svg-icons";
import { ReactImageGalleryItem } from "react-image-gallery";

export namespace IRestaurant {

  export enum Service {
    DELIVERY,
    FREE_WIFI,
    OUTSIDE_SEATS,
    PARKING,
    BUFFET,
    SUITABLE_FOR_SPECIAL_NEEDS,
  }

  export enum City {
    HEBRON,
    NABLUS,
    JENIN,
    RAMALLAH,
    BETHLEHEM,
    GAZA,
  }

  export enum Cuisine {
    TRADITIONAL,
    HEALTHY,
    SEA_FOOD,
    CHINESE,
    JAPANESE,
    ITALIAN,
  }
  export enum SortedBy {
    MOST_SERVICES,
    CLOSEST_DISTANCE,
    LOWEST_RATED,
    HIGHEST_RATED,
  }

  export enum Company {
    FAMILY,
    CHILDREN,
    STUDY,
    SPECIAL_OCCASIONS,
    BIG_GROUPS
  }

  export const CompanyInfo = {
    [Company.FAMILY]: "عائلات",
    [Company.CHILDREN]: "أطفال",
    [Company.STUDY]: "دراسة",
    [Company.SPECIAL_OCCASIONS]: "مناسبات خاصة",
    [Company.BIG_GROUPS]: "مجموعات كبيرة",
  };


  export const CuisineInfo = {
    [Cuisine.TRADITIONAL]: {
      name: "شعبي",
    },
    [Cuisine.HEALTHY]: {
      name: "صحي",
    },
    [Cuisine.SEA_FOOD]: {
      name: "بحري",
    },
    [Cuisine.CHINESE]: {
      name: "صيني",
    },
    [Cuisine.JAPANESE]: {
      name: "ياباني",
    },
    [Cuisine.ITALIAN]: {
      name: "ايطالي",
    },
  };


  export const ServiceInfo = {
    [Service.FREE_WIFI]: {
      name: 'انترنت مجاني',
      icon: faWifi,
    },
    [Service.PARKING]: {
      name: 'موقف للسيارات',
      icon: faParking,
    },
    [Service.OUTSIDE_SEATS]: {
      name: 'مقاعد خارجية',
      icon: faChair,
    },
    [Service.DELIVERY]: {
      name: 'خدمة التوصيل',
      icon: faTruck,
    },
    [Service.BUFFET]: {
      name: 'بوفيه',
      icon: faUtensils,
    },
    [Service.SUITABLE_FOR_SPECIAL_NEEDS]: {
      name: 'مناسب لذوي الاحتياجات الخاصة',
      icon: faWheelchair,
    },
  };

  export const SortedByInfo = {
    [SortedBy.CLOSEST_DISTANCE]: {
      name: 'أقرب مسافة',
    },
    [SortedBy.HIGHEST_RATED]: {
      name: 'أعلى تقييم',
    },
    [SortedBy.LOWEST_RATED]: {
      name: 'أقل تقييم',
    },
    [SortedBy.MOST_SERVICES]: {
      name: 'أكثر الخدمات',
    },
  };

  export const CityInfo = {
    [City.BETHLEHEM]: {
      arabicName: 'بيت لحم',
    },
    [City.GAZA]: {
      arabicName: 'غزة',
    },
    [City.HEBRON]: {
      arabicName: 'الخليل',
    },
    [City.JENIN]: {
      arabicName: 'جنين',
    },
    [City.NABLUS]: {
      arabicName: 'نابلس',
    },
    [City.RAMALLAH]: {
      arabicName: 'رام الله',
    }
  }

  export interface Review {
    _id?: string;
    company: Company,
    content: string,
    positive?: string,
    negative?: string,
    images?: string[];
    starRating: number;
    userId: string;
    restaurantId?: string,
    userName?: string;
    restaurantName?: string;
  }

  export interface MenuItem {
    _id?: string;
    name: string;
    description: string;
    ingredients: (string | null)[];
<<<<<<< HEAD
    RestaurantID: string;
=======
    restaurantId: string;
>>>>>>> development
    images: string[];
    price: number;
    calories: number;
    category: string;
  }

  export interface Location {
    lng: number,
    lat: number,
  }

  export interface Iservices {
    ServiceName: string,
    ServiceIcon: string,
  }
  export interface RestaurantData1 {
    _id?: string;
    name: string;
    description: string;
    address: string;
    restaurantType: string;
    location: any[];
    place: string;
    phoneNumber: string;
    images: string[];
    cuisine?: Cuisine;
    services: IRestaurant.Service[];
    reviews?: Review[];
    menuItems?: MenuItem[],
    ownerId: String;
    createdAt?: Date;
    updatedAt?: Date;
  }
  export interface RestaurantData {
    _id?: string;
    name: string;
    description: string;
    address: string;
    location: Location;
    phoneNumber: string;
    images: string[];
    cuisine: Cuisine;
    companies?: IRestaurant.Company[];
    services: Service[];
    city?: City,
    reviews?: Review[];
    menuItems?: MenuItem[],
    ownerId: String;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
