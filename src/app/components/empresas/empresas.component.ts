import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(
    private firebaseServiceService: FirebaseServiceService,
  ) { }

  collection = {count:0, data:[]}

  ngOnInit(): void {

    this.firebaseServiceService.getEmpresas().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return {
          ruc: e.payload.doc.data().emp_cruc,
          departamento: e.payload.doc.data().emp_cdepa,
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
