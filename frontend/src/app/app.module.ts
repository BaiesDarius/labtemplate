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
import { RoutingProtection } from './appRoutingProtection';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { GamesTableComponent } from './components/layout/gamesTable/gamesTable.component';
import { ShoppingCartPageComponent } from './components/pages/shoppingCartPage/shoppingCartPage.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoggedPageComponent } from './components/pages/loggedPage/loggedPage.component';
import { AdminPageComponent } from './components/pages/adminPage/adminPage.component';

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
    GamesTableComponent,
    ShoppingCartPageComponent,
    HeaderComponent,
    LoggedPageComponent,
    AdminPageComponent,
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
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
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
