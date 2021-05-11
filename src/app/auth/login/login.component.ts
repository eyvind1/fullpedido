import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/models/user';
import { DataService } from 'src/app/services/common/data.service';
import { SharedService } from 'src/app/services/common/shared.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Sweetalert } from '../../function';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsersModel = new UsersModel();
  empresa:any;
  constructor(
    private _firebaseService: FirebaseService,
    private router: Router,
    private _data: DataService,
  ) { }

  ngOnInit(): void {
    /* validacion de bootstrap */
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }
  login(form:NgForm){
    if (form.invalid) {
      return;
    }

    Sweetalert.fnc("loading", "Cargando...",null);

    this._firebaseService.consultarUser(this.usuario.emp_cruc).subscribe(resp=>{
      this.empresa=resp;
      //console.log(this.empresa);
      //console.log(this.usuario.emp_cpassw);
      if(this.empresa.length == 1 && this.empresa[0].emp_cpassw == this.usuario.emp_cpassw){
        Sweetalert.fnc("close",null,null);
        this._data.logueado = true;
        this.router.navigate(['/perfil']);
      }
      else{
        Sweetalert.fnc("error","El usuario no existe",null);
        this._data.logueado = false;
      }
    });
    //console.log("exito"); 
  }
}
