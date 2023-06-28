import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { servicioIngreso } from './ingresos/servicioIngreso.servicio';
import { servicioEgreso } from './egresos/servicioEgreso.servicio';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [servicioIngreso, servicioEgreso],
  bootstrap: [AppComponent]
})
export class AppModule { }
