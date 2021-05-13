import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  exports: [
    // Main menu
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    // Chat
    MatCardModule

  ]
})
export class MaterialModule { }
