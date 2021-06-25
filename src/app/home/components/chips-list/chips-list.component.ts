import { Component, Input } from '@angular/core';
// Interfaces
import { Skill } from '../../interfaces/home-interfaces';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.scss']
})
export class ChipsListComponent {

  @Input() list_title: string = 'Main';
  @Input() chip_list: Skill[] = [];

  constructor() { }

}
