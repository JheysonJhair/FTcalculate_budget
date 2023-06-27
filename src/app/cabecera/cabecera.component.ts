import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Input() presupuestoDisponible: number;
  @Input() ingresosTotal:number;
  @Input() egresosTotal:number;
  @Input() porcentajeTotal:number;
}
