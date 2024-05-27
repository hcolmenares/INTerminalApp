import { Component, OnInit } from '@angular/core';
import { Option, StoryNode } from '../../interfaces/StoryNode.interface';
import { TerminalService } from '../../services/terminal.service';
import { GameData } from '../../interfaces/game-data.interface';
import { STORY_NODES } from '../../../assets/story-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent implements OnInit {
  existGameData: boolean = false;
  isMenuChange: boolean = false;
  menuMessage!: string;
  menuOptions: Option[] = [];

  constructor(
    private terminal : TerminalService
   ) {}

  ngOnInit(): void {
    this.setElements();
    this.initGameSaved();
  }

  setElements():void {
    this.menuOptions = STORY_NODES[0].options;
    this.menuMessage = STORY_NODES[0].message;
  }

  initGameSaved():void {
    const isGameSaved: GameData = this.terminal.loadCache();
    this.existGameData = this.terminal.isObjectEmpty(isGameSaved);
  }

  onMenuChange(validator: boolean): void {
    console.log(validator);
    if(validator) {
      const newOptions: StoryNode = this.terminal.getCurrentNode();
      this.menuMessage = newOptions.message;
      this.menuOptions = newOptions.options;
    }
  }

}
