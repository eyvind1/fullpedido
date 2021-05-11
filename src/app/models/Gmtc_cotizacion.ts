import { Gmtc_estado_cotizacion } from "./Gmtc_estado_cotizacion";

export class Gmtc_cotizacion {
  cotiz_cdepa: string;
  cotiz_cdirec: string;
  cotiz_cdist: string;
  cotiz_cform_pag: string;
  cotiz_cnumer: string;
  cotiz_cprov: string;
  cotiz_cserie: string;
  cotiz_det: any;
  cotiz_dfech_emi: Date;
  cotiz_dfech_ven: Date;
  cotiz_estado:Array< Gmtc_estado_cotizacion>;
  emp_cruc_emi: string;
  emp_cruc_rec: string;
  emp_nraz_emi: string;
  emp_nraz_rec: string;
  usu_cclave: string;
}