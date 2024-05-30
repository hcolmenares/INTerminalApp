import { Injectable } from '@angular/core';
import { GameData } from '../interfaces/game-data.interface';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  newGame: string = '{}';
  existCacheStorage?: GameData | string;

  constructor() { }

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

  savePlayer(data: Player) {
    const newStorage = JSON.stringify(data);
    localStorage.setItem('playerData', newStorage);
  }

  getPlayer(): Player {
    const existPlayerData = localStorage.getItem('playerData');
    const getInfo:string = existPlayerData === null || existPlayerData === undefined ? '{}' : existPlayerData;
    return JSON.parse(getInfo);
  }
}
