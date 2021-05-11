import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
 @Injectable({
  providedIn: 'root'
}) 
export class SharedService {

  categoria: number;
  _categoriaValueBS = new BehaviorSubject<number>(0);
  constructor() {
    this.categoria;

    this._categoriaValueBS.next(this.categoria);
   }

   updateCategoria(cat:number){
     this.categoria = cat;
     this._categoriaValueBS.next(this.categoria);

   } 
}
