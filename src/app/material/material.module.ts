import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  exports: [
    // Main menu
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    // Chat
    MatCardModule,
    // Menu
    MatButtonToggleModule,
    MatDividerModule,
    // Forms
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
