import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})

export class MessageComponent {
  @Input() message: string = '';
}
