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
      description: 'EGATESA - Computer maintenance. Preparation, configuration and assembly of individual equipment. Bizerba programming. Servers and computers backups. Development of lightweight Apps with Access. ERP system used: CSB-System. User Support. RGPD.',
      start_date: new Date('01/05/15'),
      end_date: new Date('12/25/18')
    },
    {
      name: 'Maintenance Administrative',
      description: 'GC 7 Islas - Administrative tasks in the maintenance area.',
      start_date: new Date('07/1/12'),
      end_date: new Date('01/1/13')
    },
    {
      name: 'Architecture Technician',
      description: 'Gesplan - Systematization of urban information in the Canary Islands (04/2011 - 10/2011). Obras Canarias SL - Architecture Technician (2008 - 2010). Obras Canarias SL - Construction Worker (07/2006 - 09/2007)',
      start_date: new Date('07/1/06'),
      end_date: new Date('10/1/11')
    }
  ];
  educations: Section[] = [
    {
      name: 'Web App Development',
      description: 'Focan Institute - App. Development With Web Technology - Level 3 Professional Certificate',
      start_date: new Date('04/1/20'),
      end_date: new Date('10/1/20')
    },
    {
      name: 'Programmer Analyst',
      description: 'AFS Training Academy - Programmer Analyst - Level 3 Professional Certificate',
      start_date: new Date('12/1/13'),
      end_date: new Date('07/1/14')
    },
    {
      name: 'Building Engineering',
      description: 'Camilo José Cela University - Building Engineering Degree',
      start_date: new Date('09/1/10'),
      end_date: new Date('06/15/11')
    },
    {
      name: 'Architecture Technician',
      description: 'La Laguna University - Architecture Technician Degree',
      start_date: new Date('10/1/04'),
      end_date: new Date('03/01/09')
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
    { name: 'Debian', color: 'gray' },
    { name: 'Autocad', color: 'gray' },
    { name: 'Revit', color: 'gray' },
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
