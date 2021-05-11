export class Gmtc_emp_fav {
    ruc: string;
    razon_social: string;
	constructor(
		$ruc: string, 
		$razon_social: string
		) {
			if (typeof $ruc == "string") {
				this.ruc = $ruc;	
			} else {
				throw new Error('valor ruc inválido')
			}
			if (typeof $razon_social == "string") {
				this.razon_social = $razon_social;		
			} else {
				throw new Error('valor razon_social inválido')
			}
			
		
	}
    
}