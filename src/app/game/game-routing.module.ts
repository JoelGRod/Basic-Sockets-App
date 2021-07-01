import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PacmanComponent } from './pages/pacman/pacman.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'pacman', component: PacmanComponent },
      { path: '**', redirectTo: 'menu' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
