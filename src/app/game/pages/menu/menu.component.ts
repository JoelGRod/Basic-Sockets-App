import { Component } from '@angular/core';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public get cards(): CardInfo[] {
    return this._game_service.cards;
  }

  constructor( private _game_service: GameService ) { }

}
