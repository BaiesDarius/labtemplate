// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// UI
import { SuiModule } from 'ng2-semantic-ui';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent, NavbarComponent } from './components';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { RouterModule } from '@angular/router';
import { GameBoxComponent } from './components/layout/gameBox/gameBox.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StarRatingModule } from 'angular-star-rating';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { NotificationService } from './service/notificationService';
import { ShopPageComponent } from './components/pages/shopPage/shopPage.component';
import { GameExplorerComponent } from './components/layout/gameExplorer/gameExplorer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ShoppingCartComponent } from './components/pages/shoppingCart/shoppingCart.component';
import { RoutingProtection } from './appRoutingProtection';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    GameBoxComponent,
    GameExplorerComponent,
    ShopPageComponent,
    ShoppingCartComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    NgbModule.forRoot(),
    StarRatingModule.forRoot(),
    ToastModule.forRoot(),
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    NotificationService,
    RoutingProtection,
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
