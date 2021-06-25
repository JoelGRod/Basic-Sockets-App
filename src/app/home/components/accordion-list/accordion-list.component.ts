import { Component, Input } from '@angular/core';
// Interfaces
import { Section } from '../../interfaces/home-interfaces';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss']
})
export class AccordionListComponent {

  @Input() list_title: string = '';
  @Input() list_items: Section[] = [];
  @Input() item_icon: string = 'note';

  constructor() { }

}
