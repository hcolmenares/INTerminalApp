import { Injectable } from '@angular/core';
import { StoryNode, Option } from '../interfaces/StoryNode.interface';
import { MENU_NODES } from '../../assets/menu-data';
import { STORY_NODES } from '../../assets/story-data';
import { NEWGAME_NODES } from '../../assets/new-game';

@Injectable({
  providedIn: 'root',
})
export class TerminalService {
  private _currentNodeId: number = 0;
  private _currentStoryNode: StoryNode[] = MENU_NODES;
  private _showInput: boolean = false;

  constructor() {}

  getCurrentNode(node: StoryNode[]): StoryNode {
    return node.find((nodeOption) => nodeOption.id === this._currentNodeId) || MENU_NODES[0];
  }

  goToNextNode(nextId: number) {
    this._currentNodeId = nextId;
  }

  onNodeChange(option: number): void {
    switch (this._currentStoryNode) {
      case MENU_NODES:
        this.handleMenuOptions(option);
        break;
      case NEWGAME_NODES:
        this.handleNewGameOptions(option);
        break;
      case STORY_NODES:
        this.handleStoryOptions(option);
        break;
      default:
        this.goToNextNode(option);
        break;
    }
  }

  private handleMenuOptions(option: number): void {
    switch (option) {
      case 1:
        this.newGame();
        break;
      case 2:
        this.continueGame();
        break;
      case 3:
        this.loadGame();
        break;
      default:
        break;
    }
  }

  private handleNewGameOptions(option: number): void {
    switch (option) {
      case 0:
        this._showInput = !this._showInput;
        break;
      case 2:
        this.initStory();
        break;
      default:
        break;
    }
  }

  private handleStoryOptions(option: number): void {
    this.goToNextNode(option);
  }

  newGame(): void {
    this._currentStoryNode = NEWGAME_NODES;
    this._showInput = true;
    this.goToNextNode(0); // Asume que el primer nodo de NEWGAME_NODES tiene id 0
  }

  initStory(): void {
    this._currentStoryNode = STORY_NODES;
    this.handleStoryOptions(0);
  }

  continueGame(): void {
    console.log('Banderita desde continue');
  }

  loadGame(): void {
    console.log('Banderita desde load');
  }

  changeInput():void {
    this._showInput = !this._showInput;
  }

  get currentStoryNode(): StoryNode[] {
    return this._currentStoryNode;
  }

  get showInput(): boolean {
    return this._showInput;
  }
}
