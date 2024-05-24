import { Component } from '@angular/core';
import { Message } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.scss'
})

export class TerminalComponent {
  menuMessage: Message = {
    content: 'Inicio de la historia...'
  };

}
