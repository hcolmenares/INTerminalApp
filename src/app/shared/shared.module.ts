import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { OptionsComponent } from './components/options/options.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [
    MessageComponent,
    OptionsComponent,
    InputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageComponent,
    OptionsComponent,
    InputComponent,
  ]
})
export class SharedModule { }
