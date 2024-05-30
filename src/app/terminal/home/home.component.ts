// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { Option, StoryNode } from '../../interfaces/StoryNode.interface';
import { TerminalService } from '../../services/terminal.service';
import { GameStateService } from '../../services/game-state.service';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  menuMessage!: string;
  menuOptions: Option[] = [];
  displayInput: boolean = false;

  constructor(
    private terminal: TerminalService,
    private gameState: GameStateService
  ) {}

  ngOnInit(): void {
    this.setElements();
  }

  savePlayer(playerName: string = ''): void {
    if (playerName === '') return;
    const newPlayer: Player = { name: playerName, progress: 0 };
    this.gameState.savePlayer(newPlayer);
  }

  get storyNode(): StoryNode {
    return this.terminal.getCurrentNode(this.terminal.currentStoryNode);
  }

  setElements(): void {
    this.menuOptions = this.storyNode.options;
    this.menuMessage = this.storyNode.message;
  }

  onMenuChange(option: number): void {
    this.terminal.onNodeChange(option);
    this.setElements();
  }

  onInputValue(input: string): void {
    this.savePlayer(input);
    this.terminal.changeInput();
    this.terminal.goToNextNode(1);
    this.setElements();
  }

  get showInput(): boolean {
    return this.terminal.showInput;
  }

  get player(): Player {
    return this.gameState.getPlayer();
  }
}
