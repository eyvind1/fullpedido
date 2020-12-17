import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmpresaModel } from '../../models/empresa.model';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent{

  empresa: any ={}

  constructor(
    private activatedRoute: ActivatedRoute,
    private _firebaseServiceService: FirebaseServiceService,
  ) { 
    this.activatedRoute.params.subscribe(params=>{
      this.empresa = this._firebaseServiceService.getEmpresa(params['id']);
      console.log(this.empresa);
    }
    );



  }


}
