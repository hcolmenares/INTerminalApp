import { Component, Input, OnInit } from '@angular/core';
import { OptionText } from '../../../interfaces/option-text.interface';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'shared-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})

export class OptionsComponent implements OnInit {
  @Input() options: OptionText[] = [];
  @Input() isDisable: boolean = false;

  comeBackOption:OptionText = {
    option: 'Volver',
    router: ''
  }

  constructor(
    private utils : UtilsService
  ) {}

  ngOnInit(): void {
    this.initOptions();
  }

  initOptions():void {
    const existOption = this.options.filter( option => option.option === this.comeBackOption.option);
    if(existOption.length >= 1) return;
    this.options.push(this.comeBackOption);
  }

  navigateTo(url: string | undefined):void {
    if(url === undefined) return;
    this.utils.gotTo(url);
  }

}
