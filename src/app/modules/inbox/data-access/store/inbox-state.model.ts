import { MessageModel } from '../models/message.model';

export interface InboxStateModel {
  isLoading: boolean;
  mailList: Array<MessageModel>;
}

export const initialInboxStateModel = {
  isLoading: false,
  mailList: [],
};
