import { Component } from '@angular/core';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent {

  public get cards(): CardInfo[] {
    return this._home_service.cards;
  }

  constructor(private _home_service: HomeService) { }

}
