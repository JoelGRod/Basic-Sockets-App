import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ErrMsgDirective } from './directives/err-msg.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
// Dialogs
import { GralDialogComponent } from './components/gral-dialog/gral-dialog.component';
import { DialogService } from './services/dialog.service';



@NgModule({
  declarations: [
    // Components
    FooterComponent,
    MainMenuComponent,
    // Directives
    ErrMsgDirective,
    // Dialogs
    GralDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    // Components
    FooterComponent,
    MainMenuComponent,
    // Directives
    ErrMsgDirective,
    // Dialogs
    GralDialogComponent
  ],
  providers: [ 
    DialogService 
  ]
})
export class SharedModule { }
