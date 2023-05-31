import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserProfileModule } from 'projects/user-profile/src/public-api';
import { MessageModel } from 'src/app/modules/inbox/data-access/models/message.model';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-mail-card',
  standalone: true,
  templateUrl: './mail-card.component.html',
  imports: [CommonModule, UserProfileModule, SharedModule],
  providers: [DatePipe],
})
export class MailCardComponent {
  @Input() data!: MessageModel;
}
