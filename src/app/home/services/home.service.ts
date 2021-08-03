import { Injectable } from '@angular/core';
// Services
import { HttpClient } from '@angular/common/http';
// Interfaces
import { CardInfo } from 'src/app/shared/interfaces/shared-interfaces';
import { Section, Skill, EmailResponse, EmailBody, Profile } from '../interfaces/home-interfaces';
// Environments
import { environment } from 'src/environments/environment';
// RXJS
import { Observable } from 'rxjs';
// Data Repository
import * as eng_repo from '../repository/text/eng.json';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _base_url: string = environment.base_url;

  // Getters
  public get home_card_info(): CardInfo {
    return {...eng_repo.home_card_info};
  }

  public get profile_info(): Profile {
    return {...eng_repo.profile_info};
  }

  public get cards(): CardInfo[] {
    return [...eng_repo.cards];
  }

  public get experiences(): Section[] {
    return [...eng_repo.experiences];
  }
  
  public get educations(): Section[] {
    return [...eng_repo.educations];
  }

  public get main_skills(): Skill[] {
    return [...eng_repo.main_skills];
  }

  public get secondary_skills(): Skill[] {
    return [...eng_repo.secondary_skills];
  }

  constructor( private _http: HttpClient ) { }

  /* ---------------------------------- HTTP --------------------------------------- */
  public send_contact_email(form_body: EmailBody): Observable<EmailResponse> {
    const url: string = `${this._base_url}/email/send_contact_email`;
    const body = {...form_body};

    return this._http.post<EmailResponse>(url, body);
  }
}
