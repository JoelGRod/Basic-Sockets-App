import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
// Components
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { DemosComponent } from './pages/demos/demos.component';
import { AngularComponent } from './pages/angular/angular.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeCardComponent } from './components/home-card/home-card.component';


@NgModule({
  declarations: [MainComponent, HomeComponent, DemosComponent, AngularComponent, AboutComponent, HomeCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
