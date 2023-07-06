
export namespace IReport {
  export interface ReportData {
    _id?: string;
    restaurantId: string,
    commentId: string,
    content?: string,
    fullName: string,
    createdAt?: Date;
    updatedAt?: Date;
  }
}