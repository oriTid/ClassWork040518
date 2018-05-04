import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { CountriesComponent } from './countries/countries.component';
import { allCountriesAPI } from './Shared/services/SinCountrtServices.services';

const appRoutes: Routes = [
 
  { path: 'home', component: HomeComponent },
 
  { path: 'pgn', component: PageNotFoundComponent },

  {path : 'countries', component:CountriesComponent},

  
  //default path - will redirect the current path to 'home'
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 // ** is an angular placeholder for any path that does not exist
 { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent,
    CountriesComponent
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [allCountriesAPI], //שם קלאס של סרביס
  bootstrap: [AppComponent]
})
export class AppModule { }
