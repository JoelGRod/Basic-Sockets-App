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
    { name: 'HTML', color: 'accent' },
    { name: 'CSS', color: 'gray'},
    { name: 'JavaScript', color: 'primary' },
    { name: 'TypeScript', color: 'accent' },
    { name: 'NodeJs', color: 'primary' },
    { name: 'Angular 2+', color: 'accent' },
    { name: 'MySQL', color: 'primary' },
    { name: 'MongoDb', color: 'accent' },
    { name: 'VSCode', color: 'primary' },
    { name: 'MacOs', color: 'primary' },
    { name: 'Debian', color: 'gray' }
  ];

  secondary_skills: Skill[] = [
    { name: 'VueJs', color: 'accent' },
    { name: 'PHP', color: 'gray' },
    { name: 'Laravel', color: 'gray' },
    { name: 'Virtual Box', color: 'accent' },
    { name: 'Vagrant', color: 'primary' },
    { name: 'Gimp', color: 'accent' },
    { name: 'Docker', color: 'primary' },
    { name: 'Ableton Live', color: 'accent' },
    { name: 'Unity', color: 'primary' },
    { name: 'Eclipse', color: 'gray' },
    { name: 'Netbeans', color: 'gray' }
  ];

  drop(event: CdkDragDrop<Skill[]>) {
    moveItemInArray(this.secondary_skills, event.previousIndex, event.currentIndex);
  }


}
