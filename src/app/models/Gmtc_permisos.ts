export class Gmtc_permisos {
    per_perfil: boolean;
	per_usuario: boolean;
	per_producto: boolean;
	per_compra: boolean;
	per_venta: boolean;
	per_inver_promo: boolean;
	per_inver_promo_inversion: boolean;

	constructor(
		$per_perfil: boolean, 
		$per_usuario: boolean, 
		$per_producto: boolean, 
		$per_compra: boolean, 
		$per_venta: boolean, 
		$per_inver_promo: boolean, 
		$per_inver_promo_inversion: boolean
		) {
			if (typeof $per_perfil == "boolean") {
				this.per_perfil = $per_perfil;	
			} else {
				throw new Error('valor per_perfil inválido')
			}
			if (typeof $per_usuario == "boolean") {
				this.per_usuario = $per_usuario;		
			} else {
				throw new Error('valor per_usuario inválido')
			}
			if (typeof $per_producto == "boolean") {
				this.per_producto = $per_producto;		
			} else {
				throw new Error('valor per_producto inválido')
			}
			if (typeof $per_compra == "boolean") {
				this.per_compra = $per_compra;		
			} else {
				throw new Error('valor per_compra inválido')
			}
			if (typeof $per_venta == "boolean") {
				this.per_venta = $per_venta;		
			} else {
				throw new Error('valor per_venta inválido')
			}
			if (typeof $per_inver_promo == "boolean") {
				this.per_inver_promo = $per_inver_promo;		
			} else {
				throw new Error('valor per_inver_promo inválido')
			}
			if (typeof $per_inver_promo_inversion == "boolean") {
				this.per_inver_promo_inversion = $per_inver_promo_inversion;		
			} else {
				throw new Error('valor per_inver_promo_inversion inválido')
			}
		
	}
    
}