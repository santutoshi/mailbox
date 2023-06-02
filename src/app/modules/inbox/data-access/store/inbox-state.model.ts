import { INITIAL_MESSAGE } from '../mockup-data/message';
import { MessageModel } from '../models/message.model';

export interface InboxStateModel {
  isLoading: boolean;
  mailList: Array<MessageModel>;
  selectedMail: MessageModel;
}

export const initialInboxStateModel = {
  isLoading: false,
  mailList: [],
  selectedMail: INITIAL_MESSAGE,
};
