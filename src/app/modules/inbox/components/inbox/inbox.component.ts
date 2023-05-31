import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MessageModel } from '../../data-access/models/message.model';
import { GetMailAction } from '../../data-access/store/inbox-actions';
import { InboxStateSelector } from '../../data-access/store/inbox.selector';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent implements OnInit {
  constructor(private _store: Store) {}

  /** Selects slice of total company state */
  @Select(InboxStateSelector.SliceOf('mailList'))
  public mailData$!: Observable<Array<MessageModel>>;

  ngOnInit(): void {
    this._store.dispatch(new GetMailAction());
  }
}
