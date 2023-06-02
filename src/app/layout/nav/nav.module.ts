import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebworkerService } from 'src/app/worker/webworker.service';
import { CalculationService } from 'src/app/worker/calculation.service';
import { UserProfileModule } from 'user-profile';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, UserProfileModule, SharedModule],
  exports: [NavComponent],
  providers: [WebworkerService, CalculationService],
})
export class NavModule {}
