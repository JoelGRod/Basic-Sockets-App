import { Component } from '@angular/core';
import { CardInfo } from '../../../shared/interfaces/shared-interfaces';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public get home_card_info(): CardInfo {
    return this._home_service.home_card_info;
  }

  constructor(private _home_service: HomeService) { }

}
