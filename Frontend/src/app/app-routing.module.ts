import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './adminpanel/admin-home/admin-home.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './userpanel/home/home.component';
import { LoginComponent } from './userpanel/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
      path: 'admin',
      component:AdminHomeComponent
  },
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
