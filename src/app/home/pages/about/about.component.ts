import { Component } from '@angular/core';
// Services
import { HomeService } from '../../services/home.service';
import { IconRegistryService } from 'src/app/shared/services/icon-registry.service';
// Interfaces
import { Profile, Section, Skill } from '../../interfaces/home-interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(
    private _iconRegistryService: IconRegistryService,
    private _home_service: HomeService
  ) { }

  // Content - List
  public get profile_info(): Profile {
    return this._home_service.profile_info;
  }

  public get experiences(): Section[] {
    return this._home_service.experiences;
  }

  public get educations(): Section[] {
    return this._home_service.educations;
  }

  // Content - Chips
  public get main_skills(): Skill[] {
    return this._home_service.main_skills;
  }

  public get secondary_skills(): Skill[] {
    return this._home_service.secondary_skills;
  }

}
