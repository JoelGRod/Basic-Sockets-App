import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { DemosComponent } from './pages/demos/demos.component';
import { AngularComponent } from './pages/angular/angular.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'demos', component: DemosComponent },
    { path: 'angular', component: AngularComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
