import { isNonEmptyArrayof } from "../common/utilsobjects";
import { Gmtc_categoria } from "./Gmtc_categoria";
import { Gmtc_emp_fav } from "./Gmtc_emp_fav";
import { Gmtc_plan } from "./Gmtc_plan";
import { Gmtc_producto } from "./Gmtc_producto";
import { Gmtc_usuario } from "./Gmtc_usuario";

export class Gmtc_empresa {
    activo:boolean;
    aeco_cdesc: string;
    dfechvan: Date;
    emp_afav: Array<Gmtc_emp_fav>;
    emp_aprod: Array<Gmtc_producto>;
    emp_ausuarios: any;
    emp_cate: Gmtc_categoria;
    emp_cdepa: string;
    emp_cdir: string;
    emp_cdist: string;
    emp_cemail: string;
    emp_cestado: string;
    emp_clogo: string;
    emp_cncomer: string;
    emp_cpassw: string;
    emp_cprodest: string;
    emp_cprov: string;
    emp_crass: string;
    emp_cruc: string;
    emp_ctelef: string;
    emp_cubig: string;
    emp_ncalif: number;
    emp_ngasto: number;
    emp_nmonto: number;
    emp_nnum_califica: number;
    emp_plan: Gmtc_plan;
    facturacion: boolean;
    propertyId?:string;
    constructor(
        activo: boolean,
        aeco_cdesc: string,
        dfechvan: Date,
        emp_afav: Array<Gmtc_emp_fav>,
        emp_aprod: Array<Gmtc_producto>,
        emp_ausuarios: Array<Gmtc_usuario>,
        emp_cate: Gmtc_categoria,
        emp_cdepa: string,
        emp_cdir: string,
        emp_cdist: string,
        emp_cemail: string,
        emp_cestado: string,
        emp_clogo: string,
        emp_cncomer: string,
        emp_cpassw: string,
        emp_cprodest: string,
        emp_cprov: string,
        emp_crass: string,
        emp_cruc: string,
        emp_ctelef: string,
        emp_cubig: string,
        emp_ncalif: number,
        emp_ngasto: number,
        emp_nmonto: number,
        emp_nnum_califica: number,
        emp_plan: Gmtc_plan,
        facturacion: boolean,
    ) {
        if (typeof emp_cruc == "string") {
            this.emp_cruc = emp_cruc;    
        } else {
            throw new Error('valor emp_cruc inválido');
        }
        if (typeof emp_crass == "string") {
            this.emp_crass = emp_crass;    
        } else {
            throw new Error('valor emp_crass inválido');
        }
		if (typeof emp_cdir == "string") {
            this.emp_cdir = emp_cdir;    
        } else {
            throw new Error('valor emp_cdir inválido');
        }
		if (typeof emp_cdepa == "string") {
            this.emp_cdepa = emp_cdepa;    
        } else {
            throw new Error('valor emp_cdepa inválido');
        }
		if (typeof emp_cprov == "string") {
            this.emp_cprov = emp_cprov;    
        } else {
            throw new Error('valor emp_cprov inválido');
        }
		if (typeof emp_cdist == "string") {
            this.emp_cdist = emp_cdist;    
        } else {
            throw new Error('valor emp_cdist inválido');
        }
		if (typeof aeco_cdesc == "string") {
            this.aeco_cdesc = aeco_cdesc;    
        } else {
            throw new Error('valor aeco_cdesc inválido');
        }
		if (typeof emp_cubig == "string") {
            this.emp_cubig = emp_cubig;    
        } else {
            throw new Error('valor emp_cubig inválido');
        }
		if (typeof emp_cemail == "string") {
            this.emp_cemail = emp_cemail;    
        } else {
            throw new Error('valor emp_cemail inválido');
        }
		if (typeof emp_ctelef == "string") {
            this.emp_ctelef = emp_ctelef;    
        } else {
            throw new Error('valor emp_ctelef inválido');
        }
		if (typeof emp_cestado == "string") {
            this.emp_cestado = emp_cestado;    
        } else {
            throw new Error('valor emp_cestado inválido');
        }
		if (typeof emp_cpassw == "string") {
            this.emp_cpassw = emp_cpassw;    
        } else {
            throw new Error('valor emp_cpassw inválido');
        }
		if (typeof emp_ncalif == "number") {
            this.emp_ncalif = emp_ncalif;    
        } else {
            throw new Error('valor emp_ncalif inválido')
        }
		if (typeof dfechvan == "object") {
            this.dfechvan = dfechvan;    
        } else {
            throw new Error('valor dfechvan inválido')
        }
		if (typeof emp_cprodest == "string") {
            this.emp_cprodest = emp_cprodest;
        } else {
            throw new Error('valor emp_cprodest inválido');    
        }
		if (typeof emp_cncomer == "string") {
            this.emp_cncomer = emp_cncomer;
        } else {
            throw new Error('valor emp_cncomer inválido');    
        }
        this.emp_aprod = emp_aprod;  
        this.emp_afav = emp_afav;    
		/* if ( isNonEmptyArrayof(emp_aprod,"object") ) {
            this.emp_aprod = emp_aprod;    
        } else {
            throw new Error('valor emp_aprod inválido')
        }
        
		if (isNonEmptyArrayof(emp_afav,"object")) {
            this.emp_afav = emp_afav;    
        } else {
            throw new Error('valor emp_afav inválido')
        } */
		if (typeof emp_plan == "object") {
            this.emp_plan = emp_plan;    
        } else {
            throw new Error('valor emp_plan inválido')
        }
		if (typeof emp_nmonto == "number") {
            this.emp_nmonto = emp_nmonto;    
        } else {
            throw new Error('valor emp_nmonto inválido')
        }
		if (typeof emp_ngasto == "number") {
            this.emp_ngasto = emp_ngasto;    
        } else {
            throw new Error('valor emp_ngasto inválido')
        }
		if (typeof emp_cate == "object") {
            this.emp_cate = emp_cate;
        } else {
            throw new Error('valor emp_cate inválido')    
        }
		if (typeof emp_nnum_califica == "number") {
            this.emp_nnum_califica = emp_nnum_califica;    
        } else {
            throw new Error('valor emp_nnum_califica inválido')
        }
		if (typeof emp_clogo == "string") {
            this.emp_clogo = emp_clogo;    
        } else {
            throw new Error('valor emp_clogo inválido')
        }
        this.emp_ausuarios = emp_ausuarios; 
		/* if (isNonEmptyArrayof(emp_ausuarios,"object")) {
            this.emp_ausuarios = emp_ausuarios;    
        } else {
            throw new Error('valor emp_ausuarios inválido')
        } */
		if (typeof facturacion == "boolean") {
            this.facturacion = facturacion;
        } else {
            throw new Error('valor facturacion inválido')    
        }
		if (typeof activo == "boolean") {
            this.activo = activo;    
        } else {
            throw new Error('valor activo inválido')
        }
		
    }
}