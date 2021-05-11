import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/common/shared.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public promociones: any=[];
  fecha_actual : any;
  constructor(
    private _firebaseServicePromociones: FirebaseService,
    private _sharedService: SharedService,
    private _router: Router
    ) {
    this.fecha_actual = Date.now();
   }

  ngOnInit(): void {
    if(FirebaseService.APROMOCIONES == undefined) {
      this._router.navigate(['/login'])
    } else {
      FirebaseService.APROMOCIONES.subscribe(resp=>{
        this.promociones=resp;
        this.promociones = this.promociones.filter((data:any)=>(data.emp_cate.cat_ncod == this._sharedService.categoria));
        //console.log(this.promociones);
        },
        error=>{
          console.error(error)
        }
      );
    }
    
  }

}
