import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) { 
    this._matIconRegistry.addSvgIcon(
      `twitter`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/twitter.svg")
    );
    this._matIconRegistry.addSvgIcon(
      `linkedin`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/linkedin.svg")
    );
    this._matIconRegistry.addSvgIcon(
      `soundcloud`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/soundcloud.svg")
    );
  }
}
