import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform( images: any[]): string {
    if (!images) {
      return 'assets/images/no_image.jpg';
    }
    if (images.length > 0) {
      //return images.prod_cimg;
    } else {
      return 'assets/images/no_image.jpg';
    }
  }

}
