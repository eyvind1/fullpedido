import { Injectable } from '@angular/core';
import { Gmtc_categoria } from '../models/Gmtc_categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private categoriaList : Gmtc_categoria[] = [
    {cat_cdes:"FERRETERIAS, PINTURAS Y ADITIVOS" , cat_ncod : 1},
    {cat_cdes:"BODEGAS   Y TIENDAS  LICORERIAS  ACCESORIOS DE LIMPIEZA" , cat_ncod : 2},
    {cat_cdes:"LIBRERIAS" , cat_ncod : 3},
    {cat_cdes:"ROPA, ZAPATOS Y BISUTERIA" , cat_ncod : 4},
    {cat_cdes:"AUTOPARTES Y LUBRICENTROS" , cat_ncod : 5},
    {cat_cdes:"BOTICAS Y FARMACIAS" , cat_ncod : 6},
    {cat_cdes:"AGROINDUINDUSTRIAS" , cat_ncod : 7},
    {cat_cdes:"COMPUTADORAS Y ACCESORIOS" , cat_ncod : 8},
    {cat_cdes:"MAQUINARIAS" , cat_ncod : 9},
    {cat_cdes:"RESTAURANTES, CEVICHERIAS Y SNACK" , cat_ncod: 10},
    {cat_cdes:"HOGAR, MUEBLES Y ACCESORIOS", cat_ncod: 11},
    {cat_cdes:"GAS", cat_ncod: 12},
    {cat_cdes:"TODOS" , cat_ncod : 99},
  ];

  constructor() {}
  getCategorias(){
    return this.categoriaList;
  }
}
