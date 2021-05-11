import { Gmtc_item } from "./Gmtc_item";

export class Gmtc_estado_orden {
    est_cnombre : string;
    est_lista : Array<Gmtc_item>;
    constructor(nombre:string,lista:Array<Gmtc_item>){
        this.est_cnombre = nombre;
        this.est_lista = lista;
    }
}