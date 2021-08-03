import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/home-interfaces';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {

  @Input() profile_info!: Profile;

  constructor() { }

}
