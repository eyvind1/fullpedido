import { Gmtc_permisos } from "./Gmtc_permisos";

export class Gmtc_usuario {
    usu_cclave: string;
    usu_cusuario: string;
    usu_ccontra: string;
    permisos: Gmtc_permisos;
    estado:boolean; 

	constructor(
		$usu_cclave: string, 
		$usu_cusuario: string, 
		$usu_ccontra: string, 
		$permisos: Gmtc_permisos, 
		$estado: boolean
		) {
			if (typeof $usu_cclave == "string") {
				this.usu_cclave = $usu_cclave;	
			} else {
				throw new Error('valor usu_cclave inválido')
			}
			if (typeof $usu_cusuario == "string") {
				this.usu_cusuario = $usu_cusuario;
			} else {
				throw new Error('valor usu_cusuario inválido')		
			}
			if (typeof $usu_ccontra == "string") {
				this.usu_ccontra = $usu_ccontra;		
			} else {
				throw new Error('valor usu_ccontra inválido')
			}
			if (typeof $permisos == "object") {
				this.permisos = $permisos;
			} else {
				throw new Error('valor permisos inválido')		
			}
			if (typeof $estado == "boolean") {
				this.estado = $estado;		
			} else {
				throw new Error('valor estado inválido')
			}
		
	}
    
    
}