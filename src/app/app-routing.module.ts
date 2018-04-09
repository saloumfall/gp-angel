import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './pages/home/home-routing.module';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { EventComponent } from './pages/event/event.component';
import { CreateEventComponent } from './pages/admin/create-event/create-event.component';
import { UpdateEventComponent } from './pages/admin/update-event/update-event.component';



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
        path: 'event/new',
        component: CreateEventComponent
      },
      {
        path: 'event/update/:id',
        component: UpdateEventComponent
      },
      {
        path: '',
        component: AdminComponent
      }
    ]
  },
  {
    path: 'event/:id',
    component: EventComponent,
    canActivate: [
      AuthGuard
    ]
  },

  {
    path: 'callback',
    component: CallbackComponent
  }
];



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
