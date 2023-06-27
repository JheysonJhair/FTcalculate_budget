import { Ingreso } from './../ingresos/ingreso.model';
import { servicioIngreso } from './../ingresos/servicioIngreso.servicio';
import { Component } from '@angular/core';
import { servicioEgreso } from '../egresos/servicioEgreso.servicio';
import { Egreso } from '../egresos/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
    tipo : string = "ingresoOperacion";
    descripcionInput: string;
    valorInput: number;

    constructor(private servicioingreso: servicioIngreso,
                private servicioegreso: servicioEgreso){}
    
    tipoOperacion(evento: Event) {
      this.tipo = (evento.target as HTMLSelectElement).value;
    }

    agregarValor(){
      if(this.tipo === "ingresoOperacion"){
        this.servicioingreso.ingresos.push(  new Ingreso(this.descripcionInput, this.valorInput));
      }else{
        this.servicioegreso.egresos.push(  new Egreso(this.descripcionInput, this.valorInput));
      }
    }
  }
