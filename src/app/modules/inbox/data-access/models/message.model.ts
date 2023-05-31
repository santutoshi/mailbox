export interface MessageModel {
  id: number;
  name: string;
  subject: string;
  email: string;
  date: string;
  message: string;
  attachment?: any;
  userProfile: string;
  description?: string;
}
