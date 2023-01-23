import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';




const routes: Routes = [
  {path:"" , redirectTo:"home",pathMatch:"full"},
  //{path:"home", component: HomeComponent},
  // {path:"about", component: AboutComponent},
  // {path:"projects", component: ProjectsComponent},
  // {path:"clients", component: ClientsComponent},
  // {path:"contact", component: ContactComponent},
  {path:"**" , redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
