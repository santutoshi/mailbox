import { InboxStateModel } from './inbox-state.model';
import { InboxStates } from './inbox.states';
import { createSelector } from '@ngxs/store';

export class InboxStateSelector {
  static SliceOf<K extends keyof InboxStateModel>(stateKey: K): any {
    return createSelector([InboxStates], (state: InboxStateModel) => {
      /**
       * NOTE: if you want to mutate it's origin from a component, please clone the value an return.
       * If you want to reflect your changes from the UI, use action to perform mutation on the state.
       */
      return state[stateKey]; // by doing so, we can have its type when selecting.
    });
  }
}
