import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// Components
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { FooterComponent } from './components/footer/footer.component';
// Directives
import { ErrMsgDirective } from './directives/err-msg.directive';
// Dialogs
import { GralDialogComponent } from './components/gral-dialog/gral-dialog.component';
import { DialogService } from './services/dialog.service';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { VerticalCardComponent } from './components/vertical-card/vertical-card.component';



@NgModule({
  declarations: [
    // Gral Components
    FooterComponent,
    MainMenuComponent,
    HomeMenuComponent,
    // Directives
    ErrMsgDirective,
    // Dialogs
    GralDialogComponent,
    PasswordDialogComponent,
    // Cards
    HorizontalCardComponent,
    VerticalCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    // Components
    FooterComponent,
    MainMenuComponent,
    HomeMenuComponent,
    // Directives
    ErrMsgDirective,
    // Dialogs
    GralDialogComponent,
    PasswordDialogComponent,
    // Cards
    HorizontalCardComponent,
    VerticalCardComponent
  ],
  providers: [ 
    DialogService 
  ]
})
export class SharedModule { }
