import { Injectable } from '@angular/core';
import { GameData } from '../interfaces/game-data.interface';
import { Player } from '../interfaces/player.interface';
import { StoryNode } from '../interfaces/StoryNode.interface';
import { STORY_NODES } from '../../assets/story-data';

@Injectable({
  providedIn: 'root',
})

export class TerminalService {
  private _currentNodeId: number = 1;

  newGame: string = '{}';
  existCacheStorage?: GameData | string;

  constructor() {}

  isObjectEmpty(objectRef: object): boolean {
    return (
      Object.keys(objectRef).length === 0 && objectRef.constructor === Object
    );
  }

  loadCache() {
    const getString: string | null = localStorage.getItem('savedGame');
    if (getString === null) {
      this.saveCache(this.newGame);
      return (this.existCacheStorage = JSON.parse(this.newGame));
    } else {
      return (this.existCacheStorage = JSON.parse(getString));
    }
  }

  saveCache(data: GameData | string): void {
    if (data === this.newGame) {
      localStorage.setItem('savedGame', data);
    } else {
      const newStorage = JSON.stringify(data);
      localStorage.setItem('savedGame', newStorage);
    }
  }

  deleteCache(): void {
    localStorage.setItem('savedGame', '{}');
  }

  savePlayerProgress(data: Player) {
    const newStorage = JSON.stringify(data);
    localStorage.setItem('playerData', newStorage);
  }

  getCurrentNode(): StoryNode {
    return STORY_NODES.find(node => node.id === this._currentNodeId) || STORY_NODES[0];
  }

  goToNextNode(nextId: number) {
    this._currentNodeId = nextId;
  }
}
