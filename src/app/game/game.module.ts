import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { MaterialModule } from '../material/material.module';
import { GameRoutingModule } from './game-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
// Pages
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PacmanComponent } from './pages/pacman/pacman.component';
import { WallbreakerComponent } from './pages/wallbreaker/wallbreaker.component';
import { MinesweeperComponent } from './pages/minesweeper/minesweeper.component';
import { TetrisComponent } from './pages/tetris/tetris.component';
import { RunningComponent } from './pages/running/running.component';
// Components
import { GameLoaderComponent } from './components/game-loader/game-loader.component';


@NgModule({
  declarations: [
    // Pages
    MainComponent,
    PacmanComponent,
    MenuComponent,
    WallbreakerComponent,
    MinesweeperComponent,
    TetrisComponent,
    RunningComponent,
    // Components
    GameLoaderComponent
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
