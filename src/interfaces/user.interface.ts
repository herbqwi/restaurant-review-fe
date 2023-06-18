import express from 'express';

export namespace IUser {

  export enum Role {
    DEFAULT,
    RESTAURANT_OWNER,
    ADMIN,
  }

  export interface UserData {
    _id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    image?: string;
    role: Role;
    token?: string,
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

  export interface UserRequest extends express.Request<{}, {}, {}, {}> {
    body: UserData
  }
}
