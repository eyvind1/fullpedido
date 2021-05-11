import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortEmpresas'
})
export class SortEmpresasPipe implements PipeTransform {

  transform(value: any, arg:any):any  {
    if (!arg ) {
      return value;
    }
    const results = [];
  
    for (const post of value) {
      if ((post.emp_aprod != undefined)) {
        results.push(post);
      }
      
    }
    return results;
  }

}
