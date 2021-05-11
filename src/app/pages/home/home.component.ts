import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { InformacionService } from 'src/app/services/informacion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public promociones: any = [];
  public empresas: any = [];
  public categoriaselected: any;
  fecha_actual: number;
  ipAddress: string;
  constructor(
    private _firebaseService: FirebaseService,
    private _ip: InformacionService,

  ) {
    this.fecha_actual = Date.now();
  }


  ngOnInit(): void {
    /* ======================CODIFO DEL MODAL DE PROMOCION================================ */
    let cerrar = document.querySelectorAll(".close")[0];
    let modal = document.querySelectorAll(".modal")[0];
    let modalc = document.querySelectorAll(".modal-container")[0];
    let btnCerrar = document.querySelectorAll(".btn-cerrar")[0];


    function mostrar() {

      modal.classList.add("modal-close");
      modalc.classList.add("visibilidad");
    }

    setTimeout(mostrar, 1000);

    cerrar.addEventListener('click', function () {
      modal.classList.toggle("modal-close");


      setTimeout(function () {
        modal.classList.remove("modal-close");
        modalc.classList.remove("visibilidad");
      }, 800)
    })

    btnCerrar.addEventListener('click', function () {
      modal.classList.toggle("modal-close");


      setTimeout(function () {
        modal.classList.remove("modal-close");
        modalc.classList.remove("visibilidad");
      }, 800)
    })

    /* ================================================================================= */
   

    
    FirebaseService.APROMOCIONES.subscribe(resp => {
      this.promociones = resp;
    },
      error => {
        console.error(error)
      }
    );
    

    FirebaseService.AEMPRESAS.subscribe(resp => {
      this.empresas = resp;
      this.empresas = this.empresas.filter((data: any) => (data.emp_cruc.length == 11))
    },
      error => {
        console.error(error)
      }
    );

    //this.getIP();
  }

  changeCategoria(categoria: any) {
    this.categoriaselected = categoria;
  }


  getIP() {
    this._ip.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      //console.log(this.ipAddress);
      /* var geoip = require('geoip-lite');
      var geo = geoip.lookup(this.ipAddress);
      console.log(geo); */
    });
  }
}
