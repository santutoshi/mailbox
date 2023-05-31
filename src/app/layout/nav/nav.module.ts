import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { UserProfileModule } from 'projects/user-profile/src/public-api';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, UserProfileModule, SharedModule],
  exports: [NavComponent],
})
export class NavModule {}
