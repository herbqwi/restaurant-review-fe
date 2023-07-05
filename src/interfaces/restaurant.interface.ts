import { faChair, faParking, faSatellite, faStarHalfStroke, faVanShuttle, faWifi } from "@fortawesome/free-solid-svg-icons";
import { ReactImageGalleryItem } from "react-image-gallery";

export namespace IRestaurant {

  export enum SortedBy {
    BEST_MATCH,
    MOST_SERVICES,
    CLOSEST_DISTANCE,
    LOWEST_RATED,
    HIGHEST_RATED,
  }

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
    SEA_FOOD,
    FAST_FOOD,
    HEALTHY,
    CHINESE,
    ITALIAN,
    JAPANESE,
  }

  export enum Company {
    FAMILY,
    FRIENDS
  }

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
      icon: faSatellite,
    },
    [Service.DELIVERY]: {
      name: 'خدمة التوصيل',
      icon: faVanShuttle,
    },
    [Service.BUFFET]: {
      name: 'بوفيه',
      icon: faStarHalfStroke,
    },
    [Service.SUITABLE_FOR_SPECIAL_NEEDS]: {
      name: 'مناسب لذوي الاحتياجات الخاصة',
      icon: faChair,
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

  export const CompanyInfo = {
    [Company.FAMILY]: `مع العائلة`,
    [Company.FRIENDS]: `مع الأصدقاء`
  };

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
    name: string;
    description: string;
    ingredients: (string | null)[];
    image: string;
    price: number;
    calories: number;
    category: string;
  }

  export interface Location {
    longitude: number,
    latitude: number,
  }

  export interface RestaurantData {
    _id: string;
    name: string;
    description: string;
    address: string;
    location: Location;
    phoneNumber: string;
    images: string[];
    cuisine: Cuisine;
    services: Service[];
    reviews?: Review[];
    menuItems?: MenuItem[],
    ownerId: String;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
