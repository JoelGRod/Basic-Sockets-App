import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JwtValidatorGuard } from './shared/guards/jwt-validator.guard';

const routes: Routes = [
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
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
