import { Gmtc_categoria } from "./Gmtc_categoria";
import { Gmtc_tipo_promocion } from "./Gmtc_tipo_promocion";
import { Gmtc_ubigeo } from "./Gmtc_ubigeo";

export class Gmtc_promocion {
    prom_cnombre: string;
	prom_cruc_emp: string;
	prom_aubigeo: Array<Gmtc_ubigeo>;
	prom_tipo: Gmtc_tipo_promocion;
	prom_dfecha_creacion: Date;
	prom_dfecha_caducidad: Date;
	emp_cate: Gmtc_categoria;
	prom_ncosto: number;
	prom_estado: boolean;
    constructor() {
        
    }
}