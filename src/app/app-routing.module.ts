import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtValidatorGuard } from './shared/guards/jwt-validator.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatModule ),
    canLoad: [JwtValidatorGuard],
    canActivate: [JwtValidatorGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
