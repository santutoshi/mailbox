import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SanitizeUrlPipe,
  UserProfileComponent,
} from './user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, SanitizeUrlPipe],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
