import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddnewprofileComponent } from './addnewprofile/addnewprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ViewprofilesComponent } from './viewprofiles/viewprofiles.component';


const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'profiles',component:ProfilesComponent,children:[
      {path:"viewprofiles",component:ViewprofilesComponent},
      {path:"addnewprofile",component:AddnewprofileComponent},
      {path:'',redirectTo:'/products/profiles/viewprofiles',pathMatch:'full'}
    ]},
    {path:'',redirectTo:'/products/profiles',pathMatch:'full'}
  ]},
  {path:'aboutus',component: AboutusComponent},
  { path:'', redirectTo:'/home',pathMatch:'full'},
  
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
