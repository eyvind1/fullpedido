import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarProductos'
})
export class FiltrarProductosPipe implements PipeTransform {

  transform(value: any,searchValue:string): any {
    if(!value || !searchValue){
      return value;
    }
    /* const results = [];
    for (let index = 0; index < value.length; index++) {
      if(value.emp_aprod[index].prod_cdesc != null)
      {
        results[index] = value.filter(productos => 
          productos.emp_aprod[index].prod_cdesc.toLowerCase().includes(searchValue.toLocaleLowerCase()));
      }
      
      
    }
    return results; */
    return value.filter(produc =>
      produc.prod_cdesc.toLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
