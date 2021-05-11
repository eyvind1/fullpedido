import { Gmtc_det_orden } from "./Gmtc_det_orden";
import { Gmtc_estado_orden } from "./Gmtc_estado_orden";

export class Gmtc_orden {
    
     emp_cruc_rec : string;
	 emp_crazs_rec : string;
	 emp_cdire_rec : string;
	 ord_cserie : string;
	 ord_nnum : number;
	 ord_dfemi : Date;
	 ord_dfvenc : Date;
	 emp_cruc_emi : string;
	 emp_crazs_emi : string;
     emp_cdire_emi : string;
	 emp_cubig_emi : string;
     tmnd_ccod : string;
     tmnd_cdesc : string;
	 ord_npvent : number;
	 ord_ntdes : number;
	 ord_ntota : number;
	 ord_cleyen : string;
     ord_ccondi : string;
	 ord_ndias : number;
	 ord_npago : number;
	 cotiz_cdoc : string;
	 detalle : Array< Gmtc_det_orden>;
	 ord_estado : Gmtc_estado_orden;
	 estado : boolean;
	 usu_cclave : string;
  }