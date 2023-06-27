import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { servicioEgreso } from './servicioEgreso.servicio';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit{
  @Input() ingresoTotal:number;
  egresos: Egreso [] = [];
  constructor(private servicioegreso : servicioEgreso){
  }
  ngOnInit(){
    this.egresos = this.servicioegreso.egresos;
  }
  eliminarRegistro(egreso: Egreso){
    this.servicioegreso.eliminar(egreso);
  }
  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
