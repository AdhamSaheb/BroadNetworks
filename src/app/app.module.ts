import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutComponent } from './Components/about/about.component';
import { WorkComponent } from './Components/work/work.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { TeamComponent } from './Components/team/team.component';
import { ContactComponent } from './Components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    NotFoundComponent,
    AboutComponent,
    WorkComponent,
    ClientsComponent,
    TeamComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
