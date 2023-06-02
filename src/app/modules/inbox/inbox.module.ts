import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './components/inbox/inbox.component';
import { RouterModule } from '@angular/router';
import { contentRoutes } from './inbox.routes';
import { MailCardComponent } from 'src/app/shared/ui/mail-card/mail-card.component';
import { NgxsModule } from '@ngxs/store';
import { InboxStates } from './data-access/store/inbox.states';
import { MailDetailComponent } from 'src/app/shared/ui/mail-detail/mail-detail.component';

@NgModule({
  declarations: [InboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes),
    NgxsModule.forFeature([InboxStates]),
    MailCardComponent,
    MailDetailComponent,
  ],
})
export class InboxModule {}
