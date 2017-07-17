import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';



const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
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
