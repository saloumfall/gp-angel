import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { CallbackComponent } from './pages/callback/callback.component';



const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
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
