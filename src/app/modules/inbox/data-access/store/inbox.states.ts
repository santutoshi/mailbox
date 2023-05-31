import { Injectable } from '@angular/core';
import { InboxStateModel, initialInboxStateModel } from './inbox-state.model';
import { Action, State, StateContext } from '@ngxs/store';
import { catchError, map, of } from 'rxjs';
import { GetMailAction } from './inbox-actions';
import { InboxService } from '../services/inbox.service';

@State<InboxStateModel>({
  name: 'inbox',
  defaults: initialInboxStateModel,
})
@Injectable()
export class InboxStates {
  constructor(private _inboxService: InboxService) {}
  /**Get Email List*/
  @Action(GetMailAction)
  login(ctx: StateContext<InboxStateModel>, action: GetMailAction): unknown {
    ctx.patchState({ isLoading: true });
    return this._inboxService.getMail().pipe(
      map((mail: any) => {
        ctx.patchState({ mailList: mail });
        console.log(mail);
      }),
      catchError((error: any) => {
        console.log('error', error);
        return of(error);
      })
    );
  }
}
