import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDistritos'
})
export class FilterDistritosPipe implements PipeTransform {

  transform(value: any, arg:any):any  {
    if (!arg ) {
      return value;
    }
    const results = [];
  
    for (const post of value) {
      if ((post.emp_cdist.toLowerCase().indexOf(arg.toLowerCase())>-1)) {
        results.push(post);
      }
      
    }
    return results;
  }

}
