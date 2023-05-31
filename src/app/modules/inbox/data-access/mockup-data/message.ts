import { MessageModel } from '../models/message.model';

export const MESSAGES_DATA: Array<MessageModel> = [
  {
    id: 1,
    name: 'Sam Miller',
    subject: 'Portfolio',
    email: 'sammiller@gmail.com',
    message:
      'Stop wasting time looking for files buried in folders. Visually organize all your assets in one place',
    attachment: null,
    date: new Date(),
    userProfile: '',
  },
];
