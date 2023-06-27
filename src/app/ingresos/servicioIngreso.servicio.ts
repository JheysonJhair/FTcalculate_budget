import { Ingreso } from "./ingreso.model";

export class servicioIngreso{
    ingresos: Ingreso[] = [
        new Ingreso("Salario",900),
        new Ingreso("Venta coche",500)
    ];
    eliminar(ingreso: Ingreso){
        const indice = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}
