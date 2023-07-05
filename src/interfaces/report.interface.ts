
export namespace IReport {
  export interface ReportData {
    _id?: string;
    restaurantId: string,
    commentId: string,
    fullName: string,
    createdAt?: Date;
    updatedAt?: Date;
  }
}