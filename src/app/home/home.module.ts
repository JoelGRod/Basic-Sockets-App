import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
// Pages
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { DemosComponent } from './pages/demos/demos.component';
import { AngularComponent } from './pages/angular/angular.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
// Components
import { AccordionListComponent } from './components/accordion-list/accordion-list.component';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    // Pages
    MainComponent, 
    HomeComponent, 
    DemosComponent, 
    AngularComponent, 
    AboutComponent, 
    ContactComponent, 
    // Components
    AccordionListComponent, 
    ChipsListComponent, 
    ProfileCardComponent, 
    ContactFormComponent, 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
