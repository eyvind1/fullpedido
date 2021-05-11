import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gmtc_categoria } from 'src/app/models/Gmtc_categoria';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/common/shared.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //categorias: Gmtc_categoria[]=[];
  //categoriaselected: any;
  fecha_actual: number;
  constructor(
    private _categoriaService: CategoriasService,
    private router: Router,
    private _sharedService: SharedService,
    private _firebaseService: FirebaseService,
  ) { 
    this.fecha_actual = Date.now();
  }

  ngOnInit(): void {
    //this.categorias= this._categoriaService.getCategorias();
    //this._sharedService.categoria = this.categoriaselected; 
    FirebaseService.AEMPRESAS = this._firebaseService.getArrayEmpresas();
    FirebaseService.APROMOCIONES = this._firebaseService.getArrayPromociones(this.fecha_actual);
  }

  buscarEmpresa(termino:string){
    //console.log(termino)
    this.router.navigate(['/buscar',termino]);
  }
  //selectCategoria(str:any){
    //this._sharedService.updateCategoria(str);
    //console.log(this._sharedService);
  //}
}
