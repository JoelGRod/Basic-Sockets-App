import { Component } from '@angular/core';
// Services
import { IconRegistryService } from 'src/app/shared/services/icon-registry.service';

export interface Section {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
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
  experiences: Section[] = [
    {
      name: 'IT Systems Technician',
      description: 'Computer maintenance. Preparation, configuration and assembly of individual equipment. Bizerba programming. Servers and computers backups. Development of lightweight Apps with Access. ERP system used: CSB-System. User Support. RGPD.',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
    },
    {
      name: 'Maintenance Administrative',
      description: 'Administrative tasks in the maintenance area.',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
    },
    {
      name: 'Construction Technician',
      description: '',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
    },
    {
      name: 'Technical Architect',
      description: '',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
    }
  ];
  educations: Section[] = [
    {
      name: 'Technical Architecture',
      description: '',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
    },
    {
      name: 'Programmer Analyst',
      description: '',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
    },
    {
      name: 'App. Dev. Web Technology',
      description: '',
      start_date: new Date('1/1/16'),
      end_date: new Date('1/1/16')
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

}
