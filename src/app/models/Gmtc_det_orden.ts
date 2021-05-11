export class Gmtc_det_orden {
    dorden_ccondi : string;
    dorden_ndescu : number;
    dorden_npc : number;
    dorden_npvunit : number;
    dven_ncant : number;
    prod_ccod : string;
    prod_cdesc : string;
    prod_uni_med : string;
    constructor( 
        condicion:string,
        descuento: number,
        npc : number,
        pvunit: number,
        cantidad: number,
        codigo: string,
        descripcion: string,
        medida: string)
        {
            this.dorden_ccondi = condicion;
            this.dorden_ndescu = descuento;
            this.dorden_npc = npc;
            this.dorden_npvunit = pvunit;
            this.dven_ncant = cantidad;
            this.prod_ccod = codigo;
            this.prod_cdesc = descripcion;
            this.prod_uni_med = medida;
        }
}