import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,

    // Routing
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
