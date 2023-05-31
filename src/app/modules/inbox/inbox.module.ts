import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './components/inbox/inbox.component';
import { RouterModule } from '@angular/router';
import { contentRoutes } from './inbox.routes';

@NgModule({
  declarations: [InboxComponent],
  imports: [CommonModule, RouterModule.forChild(contentRoutes)],
})
export class InboxModule {}
