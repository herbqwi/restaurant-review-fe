
export namespace IReport {
  export interface ReportData {
    _id?: string;
    restaurantId: string,
    commentId: string,
<<<<<<< HEAD
=======
    content?: string,
    userId: string,
>>>>>>> development
    fullName: string,
    createdAt?: Date;
    updatedAt?: Date;
  }
}