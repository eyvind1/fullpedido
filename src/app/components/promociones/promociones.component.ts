import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSelectFilterModule } from 'mat-select-filter';
import { Gmtc_categoria } from '../../models/Gmtc_categoria';
import { GMTF_departamento } from '../../models/GMTF_departamento';
import { GMTF_provincia } from '../../models/GMTF_provincia';
import { GMTF_distrito } from '../../models/GMTF_distrito';

import { CategoriasService } from 'src/app/services/categorias.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit, OnChanges {

  @Input() promociones:any[];
  @Input() categoriaselected:any ;
  promocionesfiltered:any[];
  
  categorias: Gmtc_categoria[]=[];
  departamentos: GMTF_departamento[]=[];
  provincias: GMTF_provincia[]=[];
  distritos: GMTF_distrito[]=[];
  constructor(
    
    //private _categoriaService: CategoriasService,
    private _firebaseService: FirebaseService,
  ) { }
  ngOnChanges(): void {
    //this.promociones = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cubigeo === "000000"))));
  }
  categoriaselected2 :string;
  departamentoselected :any;
  provinciaselected: any;
  distritoselected: any;
  provinciafiltered:any=[];
  distritofiltered: any=[];
  promociones_img: any=[];
  ngOnInit(): void {
    //this.categorias = this._categoriaService.getCategorias();

    /* this._firebaseService.getArrayPromociones().subscribe(resp=>{
      this.promociones=resp;
      this.promociones_img = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cubigeo === "000000"))));
      
      },
      error=>{
        console.error(error)
      }
    ); */
    
    
    
  }
  

  filtrarImagenes(depart:string){
    this.promociones_img = this.promociones.filter((data:any)=>(data.prom_aubigeo.find((e:any)=>(e.ubi_cdepart === depart ))));
    //console.log(this.promociones_img);
  }
}
