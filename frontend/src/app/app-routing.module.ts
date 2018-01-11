
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent , NavbarComponent, LoginComponent } from './components';
import { RegisterComponent } from './components/pages/register/register.component';
import { ShopPageComponent } from './components/pages/shopPage/shopPage.component';
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
  },
  {
    path:'gameShopPage', component: ShopPageComponent,
  }
  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
