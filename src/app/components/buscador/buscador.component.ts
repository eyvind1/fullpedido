import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  empresas:any[]=[];
  termino:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _firebaseService: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.empresas = this._firebaseService.buscarEmpresas(params['termino']);
      //console.log(this.empresas);
    });
  }

  verEmpresa(idx:any){
    console.log(idx);
    this.router.navigate(['/empresa',idx]);
  }

}
