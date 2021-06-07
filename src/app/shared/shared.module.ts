import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Dialogs
import { GralDialogComponent } from './components/gral-dialog/gral-dialog.component';
import { DialogService } from './services/dialog.service';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';



@NgModule({
  declarations: [
    // Components
    FooterComponent,
    MainMenuComponent,
    // Directives
    ErrMsgDirective,
    // Dialogs
    GralDialogComponent,
    PasswordDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    // Components
    FooterComponent,
    MainMenuComponent,
    // Directives
    ErrMsgDirective,
    // Dialogs
    GralDialogComponent,
    PasswordDialogComponent
  ],
  providers: [ 
    DialogService 
  ]
})
export class SharedModule { }
