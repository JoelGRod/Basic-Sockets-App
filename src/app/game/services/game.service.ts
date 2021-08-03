import { Injectable } from '@angular/core';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';
// Repository
import * as eng_repo from '../repository/text/eng.json';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // Getters
  public get cards(): CardInfo[] {
    return [...eng_repo.cards];
  }

  constructor() { }
}
