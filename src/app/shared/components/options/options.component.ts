import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../../../interfaces/StoryNode.interface';
import { TerminalService } from '../../../services/terminal.service';

@Component({
  selector: 'shared-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})

export class OptionsComponent implements OnInit {
  @Input() options: Option[] = [];
  @Input() isDisable: boolean = false;
  @Output() changeOptions: EventEmitter<number> = new EventEmitter();

  comeBackOption:Option = {
    text: 'Volver',
    nextId: 0
  }

  constructor(
    private terminal : TerminalService
  ) {}

  ngOnInit(): void { }

  navigateTo(nextNode: number = 0):void {
    this.changeOptions.emit(nextNode);
  }

}
