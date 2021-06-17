import { Component, Input } from '@angular/core';
import { CardInfo } from '../../interfaces/shared-interfaces';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent {

  @Input() card!: CardInfo;

  constructor() { }

}
