import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { GameRoutingModule } from './game-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
// Pages
import { MainComponent } from './pages/main/main.component';
import { PacmanComponent } from './pages/pacman/pacman.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WallbreakerComponent } from './pages/wallbreaker/wallbreaker.component';


@NgModule({
  declarations: [
    MainComponent,
    PacmanComponent,
    MenuComponent,
    WallbreakerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ]
})
export class GameModule { }
