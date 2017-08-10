import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { LoadingComponent } from './core/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent,
    LoadingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,


    // Routing
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
