
export class Gmtc_item{
    nombre: string;
    estado: boolean;
    marca: Date;
    constructor(
        nombre:string,
        estado:boolean,
        marca:Date,
        ){
            this.nombre = nombre;
            this.estado = estado;
            this.marca = marca;
        }
}