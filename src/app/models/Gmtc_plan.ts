export class Gmtc_plan {
    name:string;
    plan_npubli_produc: number;
    plan_norden_compra: number;
    plan_npromo_produc: number;
	plan_npromo_marcae: number;
	plan_npromo_inform: number;
	plan_nubige_nacion: number;
	plan_nubige_depart: number;
	plan_nubige_provin: number;
	plan_nubige_distri: number;
	plan_img_url: string;
    constructor(
        nombre:string,
        imagen:string,
        orden_compra: number,
        promo_inform: number,
        promo_marca: number,
        promo_produc: number,
        publi_produc: number,
        ubigeo_depart: number,
        ubigeo_distrito:number,
        ubigeo_nacion:number,
        ubigeo_provincia:number,
        ) 
        {
            this.name = nombre;
            this.plan_npubli_produc = publi_produc;
            this.plan_norden_compra = orden_compra;
            this.plan_npromo_produc = promo_produc;
            this.plan_npromo_marcae = promo_marca;
            this.plan_npromo_inform = promo_inform;
            this.plan_nubige_nacion = ubigeo_nacion;
            this.plan_nubige_depart = ubigeo_depart;
            this.plan_nubige_provin = ubigeo_provincia;
            this.plan_nubige_distri = ubigeo_distrito;
            this.plan_img_url = imagen;
        }
}