import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { servicioIngreso } from './servicioIngreso.servicio';
import { servicioEgreso } from '../egresos/servicioEgreso.servicio';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso [] = [];
  constructor(private servicioingreso : servicioIngreso){
  }
  ngOnInit(){
    this.ingresos = this.servicioingreso.ingresos;
  }
  eliminarRegistro(ingreso: Ingreso){
    this.servicioingreso.eliminar(ingreso);
  }
}
