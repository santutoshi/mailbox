import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './components/inbox/inbox.component';
import { RouterModule } from '@angular/router';
import { contentRoutes } from './inbox.routes';
import { MailCardComponent } from 'src/app/shared/ui/mail-card/mail-card.component';
import { NgxsModule } from '@ngxs/store';
import { InboxStates } from './data-access/store/inbox.states';

@NgModule({
  declarations: [InboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes),
    NgxsModule.forFeature([InboxStates]),
    MailCardComponent,
  ],
})
export class InboxModule {}
