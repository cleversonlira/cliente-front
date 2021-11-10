import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './interfaces/app.component';
import { MainComponent } from './interfaces/main/main.component';
import { FormularioComponent } from './interfaces/main/formulario/formulario.component';
import { CabecalhoComponent } from './interfaces/main/cabecalho/cabecalho.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormularioComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
