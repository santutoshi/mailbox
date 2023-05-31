import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByPipe } from './pipes/group-by.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [GroupByPipe, TimeAgoPipe],
  imports: [CommonModule],
  exports: [GroupByPipe, TimeAgoPipe],
})
export class SharedModule {}
