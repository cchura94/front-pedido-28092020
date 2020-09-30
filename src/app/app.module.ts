import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //importando
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Formulario reactivo
import { ReactiveFormsModule } from '@angular/forms';
// Habilitar para consumo de servicis api rest full
import { HttpClientModule } from '@angular/common/http';

//Toaster

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  //componentes
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    LoginComponent,
  ],
  //modules
  imports: [
    BrowserModule,
    AppRoutingModule, //aqui estamos habilitando el modulo routes (AppRoutingModule)
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
