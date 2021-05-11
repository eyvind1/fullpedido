import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategorias'
})
export class FilterCategoriasPipe implements PipeTransform {

  transform(value: any, arg:any):any  {
    if (!arg ) {
      return value;
    }
    const results = [];
  
    for (const post of value) {
      if ((post.emp_cate!= null)) {
        if(post.emp_cate.cat_ncod == arg)
        results.push(post);
      }
      
    }
    return results;
  }

}
