
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent , NavbarComponent, LoginComponent } from './components';
import { RegisterComponent } from './components/pages/register/register.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'register', component:RegisterComponent,
  }
  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
