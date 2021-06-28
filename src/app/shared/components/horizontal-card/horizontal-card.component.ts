import { Component, Input } from '@angular/core';
import { CardInfo } from '../../interfaces/shared-interfaces';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss']
})
export class HorizontalCardComponent {

  @Input() card!: CardInfo;

  constructor() { }

}
