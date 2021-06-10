import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Moduless
import { MaterialModule } from '../material/material.module';
import { HomeRoutingModule } from './home-routing.module';
// Components
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
