import { Component, Input } from '@angular/core';
import { Message } from '../../../interfaces/message.interface';

@Component({
  selector: 'shared-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})

export class MessageComponent {
  @Input() message: Message = { content: '' };
}
