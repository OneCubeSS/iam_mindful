import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { TopNavModule } from './layouts/top-nav/top-nav.module';

const routes: Routes = [
  {path: '',component:HomeComponent},
  { path: 'contact-us', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  {path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
