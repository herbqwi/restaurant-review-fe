import express from 'express';
import { IRestaurant } from './restaurant.interface';

export namespace IUser {

  export enum Role {
    DEFAULT,
    RESTAURANT_OWNER,
    ADMIN,
  }

  export enum SecurityQuestion {
    BIRTH_CITY,
    CHILDHOOD_FRIEND,
    FIRST_PET,
    HIGH_SCHOOL,
    FIRST_JOB
  }


  export interface UserData {
    _id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    city?: IRestaurant.City | null;
    image?: string;
    securityQuestion?: SecurityQuestion,
    securityAnswer?: string,
    role: Role;
    token?: string,
    googleToken?: string | null,
    createdAt?: Date;
    updatedAt?: Date;
  }

  export const RoleInfo = {
    [Role.ADMIN]: {
      arabicName: `مسؤول`,
      color: `red`,
    },
    [Role.RESTAURANT_OWNER]: {
      arabicName: `مالك مطعم`,
      color: `purple`,
    },
    [Role.DEFAULT]: {
      arabicName: `مستخدم عادي`,
      color: `#bababa`,
    }
  }

  export const SecurityQuestionInfo = {
    [SecurityQuestion.BIRTH_CITY]: {
      arabicText: `ما هو اسم مدينتك الأم؟`
    },
    [SecurityQuestion.CHILDHOOD_FRIEND]: {
      arabicText: `ما هو الاسم الأول لأفضل صديق لك في الطفولة؟`
    },
    [SecurityQuestion.FIRST_PET]: {
      arabicText: `ما هو اسم أول حيوان أليف لك؟`
    },
    [SecurityQuestion.HIGH_SCHOOL]: {
      arabicText: `ما هو اسم مدرستك الثانوية؟`
    },
    [SecurityQuestion.FIRST_JOB]: {
      arabicText: `ما هو اسم أول شركة عملت لها؟`
    },
  }

  export interface UserRequest extends express.Request<{}, {}, {}, {}> {
    body: UserData
  }
}
