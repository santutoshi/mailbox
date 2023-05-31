export interface MessageModel {
  id: number;
  name: string;
  subject: string;
  email: string;
  date: Date;
  message: string;
  attachment?: any;
  userProfile: string;
}
