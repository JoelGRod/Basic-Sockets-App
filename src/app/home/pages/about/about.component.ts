import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// Services
import { IconRegistryService } from 'src/app/shared/services/icon-registry.service';

export interface Section {
  name: string;
  updated: Date;
}

export interface Skill {
  name: string;
  color?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(
    private _iconRegistryService: IconRegistryService
  ) { }

  // Content - List
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  // Content - Chips
  main_skills: Skill[] = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Angular 2+' },
    { name: 'NodeJs' },
    { name: 'MongoDb' },
    { name: 'MySQL' },
    { name: 'VSCode' },
    { name: 'MacOs' },
    { name: 'Debian' }
  ];

  secondary_skills: Skill[] = [
    { name: 'VueJs' },
    { name: 'PHP' },
    { name: 'Laravel' },
    { name: 'Eclipse' },
    { name: 'Netbeans' },
    { name: 'Virtual Box' },
    { name: 'Gimp' },
    { name: 'Vagrant' },
    { name: 'Docker' },
    { name: 'Unity' },
    { name: 'Ableton Live' }
  ];

  drop(event: CdkDragDrop<Skill[]>) {
    moveItemInArray(this.main_skills, event.previousIndex, event.currentIndex);
  }


}
