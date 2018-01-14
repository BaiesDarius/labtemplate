
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent , NavbarComponent, LoginComponent } from './components';
import { RegisterComponent } from './components/pages/register/register.component';
import { ShopPageComponent } from './components/pages/shopPage/shopPage.component';
import { RoutingProtection } from './appRoutingProtection';
import { ShoppingCartPageComponent } from './components/pages/shoppingCartPage/shoppingCartPage.component';
import { LoggedPageComponent } from './components/pages/loggedPage/loggedPage.component';
const routes: Routes = [
  { 
    path: '', redirectTo: 'login', pathMatch: 'full' 
  },
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'register', component:RegisterComponent,
  },
  {
    path: 'logged', component: LoggedPageComponent, canActivate: [RoutingProtection],
  },
  {
    path:'shoppingCart', component: ShoppingCartPageComponent, canActivate: [RoutingProtection]
  }
  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
