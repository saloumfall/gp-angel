import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';



import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { UtilsService } from './core/utils.service';
import { FilterSortService } from './core/filter-sort.service';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyRsvpsComponent } from './pages/my-rsvps/my-rsvps.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    MyRsvpsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    CoreModule.forRoot()
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
