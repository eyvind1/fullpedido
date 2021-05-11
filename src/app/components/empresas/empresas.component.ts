import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { DepartamentosService } from '../../services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { GMTF_departamento } from '../../models/GMTF_departamento';
import { GMTF_provincia } from '../../models/GMTF_provincia';
import { GMTF_distrito } from '../../models/GMTF_distrito';
//import { FilterComboBoxPipe } from '../../pipes/filter-combo-box.pipe';

import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { Gmtc_categoria } from 'src/app/models/Gmtc_categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

import {Swiper} from 'swiper';

import { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit, OnChanges {

  @Input() empresas:any[];
  @Output() sendcategoriaselected: EventEmitter <any>;
  @Input() categoria:any;
  departamentos: GMTF_departamento[]=[];
  provincias: GMTF_provincia[]=[];
  distritos: GMTF_distrito[]=[];
  categorias: Gmtc_categoria[]=[];
  constructor(
    private router: Router,
    public config: NgbRatingConfig,
    private _departamentosService:DepartamentosService,
    private _provinciasService: ProvinciasService,
    private _distritoService: DistritosService,
    private firebaseService: FirebaseService,
    private _categoriaService: CategoriasService,
  ) {
      this.sendcategoriaselected = new EventEmitter();
    //config.max = 5.0;
    //config.readonly = true;
   }
  ngOnChanges(): void {
    this.categoriaselected = this.categoria;
  }
  
 
  departamentoselected :any;
  provinciaselected: any;
  distritoselected: any;
  categoriaselected:any ;
  nameDepartamento: string;
  nameProvincia: string;
  nameDistrito: string;
  provinciafiltered:any=[];
  distritofiltered: any=[];
  nameDepartamentofiltered:any=[];
  nameProvinciafiltered:any=[];
  nameDistritofiltered:any=[];
  codigoCategoriafiltered: any=[];
  ngOnInit(): void {
    //console.log(this.empresas);
    this.departamentos = this._departamentosService.getDepartamentos();
    this.provincias = this._provinciasService.getProvincias();
    this.distritos = this._distritoService.getDistritos();
    this.categorias = this._categoriaService.getCategorias();
  }



  verEmpresa(idx:any){
    //console.log(idx);
    this.router.navigate(['/empresa',idx]);
  }

  /* verificarProductos(ver:any){
    for (let index = 0; index < ver.length; index++) {
      if (ver[index].emp_aprod == undefined) {
        ver[index] = "no existe";
      }
      
    }
  } */

  filtrarProvincias(){
    this.provinciafiltered = this.provincias.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    this.nameDepartamentofiltered = this.departamentos.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    this.nameDepartamento = this.nameDepartamentofiltered[0].nombre_departamento;
  }

  filtrarDistritos(){
    this.distritofiltered = this.distritos.filter((data:any)=>(data.id_provincia == this.provinciaselected));
    this.nameProvinciafiltered = this.provincias.filter((data:any)=>(data.id_provincia == this.provinciaselected));
    this.nameProvincia = this.nameProvinciafiltered[0].nombre_provincia;
  }

  filtrarEmpresasDistritos(){
    this.nameDistritofiltered = this.distritos.filter((data:any)=>(data.id_distrito == this.distritoselected));
    this.nameDistrito = this.nameDistritofiltered[0].nombre_distrito;
  }
  filtrarCategorias(){
    
    this.sendcategoriaselected.emit(this.categoriaselected);
    if(this.categoriaselected == 10){
      this.router.navigate(['/restaurantes']);
    }
    //this.codigoCategoriafiltered = this.collection.filter((data:any)=>(data.categoria != undefined));
  
    //this.codigoCategoriafiltered = this.codigoCategoriafiltered.filter((data:any)=>(data.categoria.cat_ncod == this.categoriaselected)); */
    /* this.collection = this.codigoCategoriafiltered.filter((data:any)=>(data.categoria.cat_ncod == this.categoriaselected));
    console.log(this.collection); */
  
  }
  //getNamefromId(id:number):string{
    //this.namefiltered = this.departamentos.filter((data:any)=>(data.id_departamento == id));
    //1this.nameDepartamento = this.namefiltered[0].nombre_departamento;
    //return this.nameDepartamento;
  //}
  
}
