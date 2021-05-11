import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/common/shared.service';
import {Swiper} from 'swiper';

import { Autoplay } from 'swiper';
Swiper.use([Autoplay]);


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Output() sendcategoriaselected: EventEmitter <any>;
  categoriaselected:any;
  constructor(
    private router: Router,
    private _sharedService: SharedService,
  ) { 
    this.sendcategoriaselected = new EventEmitter();
  }
 
  ngOnInit(): void {
  }
  selectCategoria(str:any){
    this._sharedService.updateCategoria(str);
    //console.log(this._sharedService);
  }

  obtenerCategoria(codigo:number){
    this.categoriaselected = codigo;
    this.selectCategoria(codigo);
    switch (this.categoriaselected) {
      case 1:
        this.router.navigate(['/categoria',"ferreterias-pintura"]);
        break;
      case 2:
        this.router.navigate(['/categoria',"bodegas-tiendas"]);
        break;
      case 3:
        this.router.navigate(['/categoria',"librerias"]);
        break;
      case 4:
        this.router.navigate(['/categoria',"ropa-zapatos"]);
        break;
      case 5: 
      this.router.navigate(['/categoria',"autopartes-lubricentros"]);
        break;
      case 6:
        this.router.navigate(['/categoria',"boticas y farmacias"]);
        break;
      case 7:
        this.router.navigate(['/categoria',"agroindustrias"]);
        break;
      case 8:
        this.router.navigate(['/categoria',"computadoras-accesorios"]);
        break;
      case 9:
        this.router.navigate(['/categoria',"maquinarias"]);
        break;
      case 10:
        this.router.navigate(['/categoria',"restaurantes-cevicherias"]);
        break;
      case 11:
        this.router.navigate(['/categoria',"hogar-muebles"]);
        break;
      case 12:
        this.router.navigate(['/categoria',"gas"]);
        break;
      default:
        break;
    }
    /* if(this.categoriaselected == 10){
      this.router.navigate(['/restaurantes']);
    }
    else{
      this.sendcategoriaselected.emit(this.categoriaselected);
    } */
    
  }

  
}
