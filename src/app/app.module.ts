import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AdminComponent } from './pages/admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { LoadingComponent } from './core/loading.component';


import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { UtilsService } from './core/utils.service';
import { FilterSortService } from './core/filter-sort.service';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { EventComponent } from './pages/event/event.component';
import { EventDetailComponent } from './pages/event/event-detail/event-detail.component';
import { RsvpComponent } from './pages/event/rsvp/rsvp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent,
    LoadingComponent,
    HomeComponent,
    AdminComponent,
    EventComponent,
    EventDetailComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,


    // Routing
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    AuthService,
    ApiService,
    UtilsService,
    FilterSortService,

    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
