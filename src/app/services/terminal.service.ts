import { Injectable } from '@angular/core';
import { GameData } from '../interfaces/game-data.interface';
import { OptionText } from '../interfaces/option-text.interface';
import { Message } from '../interfaces/message.interface';
import { Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})

export class TerminalService {
  newGame: string = '{}';
  existCacheStorage?: GameData | string;

  initialMessage: Message = {
    content: '¡Bienvenido al terminal de novelas interactivas!',
  };

  initialOptions: OptionText[] = [
    { option: 'Nueva Partida', router: 'terminal' },
    { option: 'Continuar' },
    { option: 'Cargar' },
  ];

  yesNoOptions: OptionText[] = [{ option: 'Si' }, { option: 'No' }];

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
}
