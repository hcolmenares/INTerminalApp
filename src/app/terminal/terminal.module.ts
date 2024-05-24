import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalComponent } from './components/terminal/terminal.component';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './components/options/options.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TerminalComponent,
    HomeComponent,
    OptionsComponent
  ],
  imports: [
    CommonModule,
    TerminalRoutingModule,
    SharedModule,
  ]
})
export class TerminalModule { }
