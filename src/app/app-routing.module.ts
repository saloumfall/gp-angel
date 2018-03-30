import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],
    children: [
      {
        path: '',
        component: AdminComponent
      }
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }];



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
