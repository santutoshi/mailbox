import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageModel } from 'src/app/modules/inbox/data-access/models/message.model';
import { UserProfileModule } from 'user-profile';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-mail-detail',
  standalone: true,
  templateUrl: './mail-detail.component.html',
  imports: [CommonModule, UserProfileModule, SharedModule],
})
export class MailDetailComponent {
  @Input() data!: MessageModel;
}
