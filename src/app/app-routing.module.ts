import { ContactComponent } from './Components/contact/contact.component';
import { TeamComponent } from './Components/team/team.component';
import { WorkComponent } from './Components/work/work.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LandingComponent } from './Components/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './Components/clients/clients.component';


const routes: Routes = [
  { path: '', component: LandingComponent , pathMatch:'full' },
  { path: 'about', component: AboutComponent , },
  { path: 'work', component: WorkComponent , },
  { path: 'team', component: TeamComponent , },
  { path: 'clients', component: ClientsComponent , },
  { path: 'contact', component: ContactComponent , },
  { path: '**', component: NotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
