import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavModule } from '../nav/nav.module';

import { ContentLayoutComponent } from './content-layout.component';
import { contentRoutes } from './content.routes';

@NgModule({
  declarations: [ContentLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(contentRoutes), NavModule],
})
export class ContentLayoutModule {}
