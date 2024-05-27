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
  @Output() changeOptions: EventEmitter<boolean> = new EventEmitter(false);

  comeBackOption:Option = {
    text: 'Volver',
    nextId: 0
  }

  constructor(
    private terminal : TerminalService
  ) {}

  ngOnInit(): void {
    this.initOptions();
  }

  initOptions():void {
    const existOption = this.options.filter( option => option.text === this.comeBackOption.text);
    if(existOption.length >= 1) return;
    this.options.push(this.comeBackOption);
  }

  navigateTo(nextNode: number = 0):void {
    this.terminal.goToNextNode(nextNode);
    this.changeOptions.emit(true);
  }

}
