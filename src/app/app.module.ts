import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { ShopComponent } from './Componentes/shop/shop.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';


/*Rutas*/
import {APP_ROUTING} from './app.routes';
 
//GOGOLE MAPS
import {GoogleMapsModule} from '@angular/google-maps';
import {AgmCoreModule} from '@agm/core';

// FORM

import {FormsModule} from '@angular/forms';
import { AdminComponent } from './Componentes/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactoComponent,
    FooterComponent,
    ShopComponent,
    LoginComponent,
    RegistroComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAZaX7MPVORcZv_RGr8g1PCVUWaPu5fce4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
