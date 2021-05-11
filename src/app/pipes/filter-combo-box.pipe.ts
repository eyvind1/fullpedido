import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComboBox'
})
export class FilterComboBoxPipe implements PipeTransform {

  transform(value: any, arg:any):any  {
    if (!arg ) {
      return value;
    }
    const results = [];
  
    for (const post of value) {
      if ((post.emp_cdepa.toLowerCase().indexOf(arg.toLowerCase())>-1)) {
        results.push(post);
      }
      
    }
    return results;
  }

}
