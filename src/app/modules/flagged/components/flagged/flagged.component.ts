import { Component } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { MessageModel } from "src/app/modules/inbox/data-access/models/message.model";
import { GetMailAction } from "src/app/modules/inbox/data-access/store/inbox-actions";
import { InboxStateSelector } from "src/app/modules/inbox/data-access/store/inbox.selector";

@Component({
  selector: "app-flagged",
  templateUrl: "./flagged.component.html",
})
export class FlaggedComponent {
  constructor(private _store: Store) {}

  /** Selects slice of total company state */
  @Select(InboxStateSelector.SliceOf("mailList"))
  public mailData$!: Observable<Array<MessageModel> | []>;

  selectedMailData!: MessageModel;

  ngOnInit(): void {
    this._store.dispatch(new GetMailAction());
    this.mailData$.subscribe((res) => {
      this.selectedMail(res[0]);
    });
  }

  /**Get Selected mail Details otherwise load initial */
  selectedMail(mail: MessageModel): void {
    this.selectedMailData = mail;
  }
}
