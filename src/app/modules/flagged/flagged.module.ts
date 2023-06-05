import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlaggedComponent } from './components/flagged/flagged.component';
import { flaggedRoutes } from './flagged.routes';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { InboxStates } from '../inbox/data-access/store/inbox.states';
import { MailCardComponent } from 'src/app/shared/ui/mail-card/mail-card.component';
import { MailDetailComponent } from 'src/app/shared/ui/mail-detail/mail-detail.component';

@NgModule({
  declarations: [FlaggedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(flaggedRoutes),
    NgxsModule.forFeature([InboxStates]),
    MailCardComponent,
    MailDetailComponent,
  ],
})
export class FlaggedModule {}
