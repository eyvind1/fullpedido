import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  

  constructor(
    private firebaseServiceService: FirebaseServiceService,
  ) { }

  
  collection = {count:0, data:[]}

  ngOnInit(): void {

  
    

    this.firebaseServiceService.getEmpresas().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return {
          activo: e.payload.doc.data().activo,
          ruc: e.payload.doc.data().emp_cruc,
          telefono: e.payload.doc.data().emp_ctelef,
        }
      })
    },
    error=>{
      console.error(error)
    }
    );
  }

  


}
