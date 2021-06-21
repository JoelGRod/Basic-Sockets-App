import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private _matIconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer
  ) { 
    this._matIconRegistry.addSvgIcon(
      `twitter`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/images/icons/twitter.svg")
    );
    this._matIconRegistry.addSvgIcon(
      `linkedin`,
      this._domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/images/icons/linkedin.svg")
    );
  }

  ngOnInit(): void {
  }

}
