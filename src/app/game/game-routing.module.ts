import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Pages
import { MainComponent } from './pages/main/main.component';
import { PacmanComponent } from './pages/pacman/pacman.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'pacman', component: PacmanComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
