import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GMTF_departamento } from 'src/app/models/GMTF_departamento';
import { GMTF_distrito } from 'src/app/models/GMTF_distrito';
import { GMTF_provincia } from 'src/app/models/GMTF_provincia';
import { SharedService } from 'src/app/services/common/shared.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {
  restaurantes : any= [];
  departamentos: GMTF_departamento[]=[];
  provincias: GMTF_provincia[]=[];
  distritos: GMTF_distrito[]=[];
  provinciafiltered: GMTF_provincia[];
  nameDepartamentofiltered: GMTF_departamento[];
  nameDepartamento: string;
  departamentoselected: any;
  distritofiltered: GMTF_distrito[];
  provinciaselected: any;
  nameProvinciafiltered: any;
  nameProvincia: any;
  nameDistrito: any;
  nameDistritofiltered: any;
  distritoselected: any;
  constructor(
    private firebaseService: FirebaseService,
    private _departamentosService: DepartamentosService,
    private _provinciasService: ProvinciasService,
    private _distritoService: DistritosService,
    private router: Router,
    private _sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.departamentos = this._departamentosService.getDepartamentos();
    this.provincias = this._provinciasService.getProvincias();
    this.distritos = this._distritoService.getDistritos();
    /* this.firebaseService.getArrayEmpresas().subscribe(resp=>{
      this.restaurantes = resp;
      
      },
    error=>{
      console.error(error)
    } 
    ); */
    FirebaseService.AEMPRESAS.subscribe(resp=>{
      this.restaurantes = resp;
      this.restaurantes= this.restaurantes.filter((data:any)=>(data.emp_cate.cat_ncod == this._sharedService.categoria));
    },error=>{
      console.error(error);  
    }
    ) 
  }

  verEmpresa(idx:any){
    //console.log(idx);
    this.router.navigate(['/empresa',idx]);
  }

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

}
