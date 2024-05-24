import { Component, OnInit } from '@angular/core';
import { Message } from '../../../interfaces/message.interface';
import { TerminalService } from '../../../services/terminal.service';
import { GameData } from '../../../interfaces/game-data.interface';
import { OptionText } from '../../../interfaces/option-text.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {
  existGameData: boolean = false;
  menuMessage!: Message;
  menuOptions: OptionText[] = [];

  constructor(
    private terminal : TerminalService
   ) {}

  ngOnInit(): void {
    this.setElements();
    this.initGameSaved();
  }

  setElements():void {
    this.menuOptions = this.terminal.initialOptions;
    this.menuMessage = this.terminal.initialMessage;
  }

  initGameSaved():void {
    const isGameSaved: GameData = this.terminal.loadCache();
    this.existGameData = this.terminal.isObjectEmpty(isGameSaved);
  }

}
