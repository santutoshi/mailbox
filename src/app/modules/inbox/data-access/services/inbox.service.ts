import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MESSAGES_DATA } from '../mockup-data/message';
import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor() {}

  getMail(): Observable<Array<MessageModel>> {
    return of(MESSAGES_DATA);
  }
}
