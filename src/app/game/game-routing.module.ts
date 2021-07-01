import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PacmanComponent } from './pages/pacman/pacman.component';
import { WallbreakerComponent } from './pages/wallbreaker/wallbreaker.component';
import { MinesweeperComponent } from './pages/minesweeper/minesweeper.component';
import { TetrisComponent } from './pages/tetris/tetris.component';
import { RunningComponent } from './pages/running/running.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'pacman', component: PacmanComponent },
      { path: 'wallbreaker', component: WallbreakerComponent },
      { path: 'minesweeper', component: MinesweeperComponent },
      { path: 'tetris', component: TetrisComponent },
      { path: 'running', component: RunningComponent },
      { path: '**', redirectTo: 'menu' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
