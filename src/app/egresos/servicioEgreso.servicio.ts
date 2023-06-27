import { Egreso } from "./egreso.model";

export class servicioEgreso{
    egresos: Egreso[] = [
        new Egreso("Renta departamento",400),
        new Egreso("Ropa", 300)
    ];
    eliminar(egreso: Egreso){
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}
