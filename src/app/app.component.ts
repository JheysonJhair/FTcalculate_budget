import { Component } from '@angular/core';
import { Ingreso } from './ingresos/ingreso.model';
import { Egreso } from './egresos/egreso.model';
import { servicioIngreso } from './ingresos/servicioIngreso.servicio';
import { servicioEgreso } from './egresos/servicioEgreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos:Ingreso [] = [];
  egresos:Egreso [] = [];

  constructor(private servicioingreso: servicioIngreso,
              private servicioegreso: servicioEgreso){
              this.ingresos = servicioingreso.ingresos;
              this.egresos = servicioegreso.egresos;
  }
  getIngresosTotal(){
    let ingresoTotal: number = 0;
    this.ingresos.forEach( ingreso =>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }
  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egresos.forEach( egreso =>{
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }
  getPorcentajeTotal(){
    return this.getEgresoTotal()/ this.getIngresosTotal();
  }
  getPresupuestoTotal(){
    return this.getIngresosTotal() - this.getEgresoTotal();
  }
}
 