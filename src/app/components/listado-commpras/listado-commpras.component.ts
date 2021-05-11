import { DatePipe, registerLocaleData } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Gmtc_orden } from 'src/app/models/Gmtc_orden';
import { FirebaseService } from 'src/app/services/firebase.service';
import localeEsPe from '@angular/common/locales/es-PE';
import { Gmtc_det_orden } from 'src/app/models/Gmtc_det_orden';
import { Gmtc_estado_orden } from 'src/app/models/Gmtc_estado_orden';
import { Gmtc_item } from 'src/app/models/Gmtc_item';
import { Sweetalert } from '../../function';



registerLocaleData(localeEsPe);

declare function NumeroALetras(number): any;
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-listado-commpras',
  templateUrl: './listado-commpras.component.html',
  styleUrls: ['./listado-commpras.component.css']
})



export class ListadoCommprasComponent implements OnInit {
  @Input() products: any;
  @Input() empresa: any;
  @Output() productRemoved = new EventEmitter();
  hide = true;
  user: any;
  precioTotal: number;
  orden = new Gmtc_orden;
  showMyMessage: boolean;
  message: string;
  empresas: any;
  dniPattern = "^[0-9]*$";
  rucPattern = "^[0-9]*$";
  length_orden: any;
  length_ordenes: number;
  inboundClick: boolean = false;
  gohome = true;
  /* dniCtrl = new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(this.dniPattern),
  ]); */
  dniForm = new FormGroup({
    dni: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.dniPattern),
    ]),
    /* recaptcha: new FormControl('',[
     Validators.required
   ])  */
  });
  rucForm = new FormGroup({
    ruc: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.rucPattern),
    ]),
    clave: new FormControl('', [
      Validators.required
    ])
  });
  matcher = new MyErrorStateMatcher();
  // siteKey:string = '6LfE70EaAAAAADRk4Zi1x8_5PkbeMRRHiRF38MF0';
  constructor(
    private router: Router,
    private _firebaseServiceEmpresas: FirebaseService,
    private _firebaseServiceOrdenes: FirebaseService,
    private datePipe: DatePipe,
  ) {
    /* this.fecha = Date.now();
    this.fecha_fin = this.fecha+this.day_millis; */
    /* console.log(this.datePipe.transform(this.fecha,'d MMMM y, H:mm:ss','','es-PE'));
    console.log(this.datePipe.transform(this.fecha_fin+1,'d MMMM y, H:mm:ss','','es-PE')); */
  }



  ngOnInit(): void {
    /**obtener la lista de empresas para verificar el dni o ruc */
    FirebaseService.AEMPRESAS.subscribe(resp => {
      this.empresas = resp;
    });



  }


  /** Gets the total cost of all products. */
  getTotalCost() {
    this.precioTotal = this.products.map(t => t.precio).reduce((acc, value) => acc + value, 0);
    return this.precioTotal;
  }

  /** actualiza el precio por cantidad y envia todos los productos con num = 0*/
  modelChanged(product, i) {
    this.products[i].precio = this.products[i].prod_nprev1 * this.products[i].num;
    if (this.products[i].num === 0) {
      this.productRemoved.emit(this.products);
    }
  }
  /** dirigir a otra ruta */
  verRegistro() {
    //this.router.navigate(['/register']);
  }
  /** mostrar un mensaje */
  mostrarMensaje() {
    this.showMyMessage = true;
  }

  getDni(event: Event) {
    //event.preventDefault();
    const { dni } = this.dniForm.value;
    const dniExists = this.empresas.find((name) => name.emp_cruc === dni); // find dni by name
    //console.log(dniExists);
    if (dniExists) {
      this.showMyMessage = true;

      if (this.products.length > 0) {
        let ordenfinal: Gmtc_orden;
        ordenfinal = this.generateOrden(dni, dniExists);
        //console.log(ordenfinal);
        this.guardarOrden(ordenfinal);
        this.inboundClick = true;
        this.gohome = false;
      }
    }
    else {
      this.showMyMessage = false;
      //console.log(this.products);
    }
  }

  getRuc(event: Event) {
    //event.preventDefault();
    const { ruc, clave } = this.rucForm.value;
    this.user = this.empresas.filter((data) => (
      data.emp_cruc == ruc
    ));
    const rucExists = this.user.find((name) => name.emp_cruc === ruc); // find ruc by name
    const passwordExists = this.user.find((name) => name.emp_cpassw === clave);
    if (rucExists && passwordExists) {
      this.showMyMessage = true;

      if (this.products.length > 0) {
        let ordenfinal: Gmtc_orden;
        ordenfinal = this.generateOrden(ruc, rucExists);
        //console.log(ordenfinal);
        this.guardarOrden(ordenfinal); //guarda la orden en firestore
        this.inboundClick = true;
        this.gohome = false;

      }
      else {
        this.showMyMessage = false;
        //console.log(this.products);

      }
    }
    else {
      Sweetalert.fnc("error", "El usuario no existe", null);
    }
  }

  generateOrden(documento, informacion): Gmtc_orden {

    //this.length_orden = this._firebaseServiceOrdenes.getLengthOrdenCompra();
    //console.log(this.length_orden.length);
    /*this._firebaseServiceOrdenes.getLengthOrdenCompra().subscribe(resp=>{
      this.length_orden = resp;
      this.length_ordenes = this.length_orden.length;
      console.log(this.length_ordenes);*/
    //this.orden.ord_nnum = this.length_ordenes + 1;
    /*}); 
    console.log(this.length_ordenes);*/
    let currentdate = new Date(Date.now());
    //this.fecha_fin = this.fecha+this.day_millis;
    this.orden.emp_cruc_rec = this.empresa.emp_cruc;
    this.orden.emp_crazs_rec = this.empresa.emp_crass;
    this.orden.emp_cdire_rec = this.empresa.emp_cdir;
    this.orden.ord_cserie = "OM001";
    //this.orden.ord_nnum = this.length_orden.length +1 ;  // tamaño de las ordenes por fecha extraer el ultimo 
    this.orden.ord_dfemi = currentdate;
    this.orden.ord_dfvenc = currentdate;
    this.orden.emp_cruc_emi = documento;
    this.orden.emp_crazs_emi = informacion.emp_crass;
    this.orden.emp_cdire_emi = informacion.emp_cdir;
    this.orden.emp_cubig_emi = informacion.emp_cubig;
    this.orden.tmnd_ccod = "PEN";
    this.orden.tmnd_cdesc = "Nuevo sol";
    this.orden.ord_npvent = this.precioTotal - (this.precioTotal * 0.18); // precio total menos igv 18%
    this.orden.ord_ntdes = 0;// 0
    this.orden.ord_ntota = this.precioTotal;
    this.orden.ord_cleyen = NumeroALetras(this.precioTotal);//preguntar
    this.orden.ord_ccondi = "1 CONTADO";//1 contado
    this.orden.ord_ndias = 0; //preguntar 0
    this.orden.ord_npago = 0;//preguntar 0,0
    this.orden.cotiz_cdoc = "";//string vacia
    let detallesarray: Array<Gmtc_det_orden> = []
    for (let index = 0; index < this.products.length; index++) {
      detallesarray.push(new Gmtc_det_orden(
        "NO ENTREGADO",
        0,
        this.products[index].prod_nprev1,
        this.products[index].prod_nprev1,
        this.products[index].num,
        this.products[index].prod_ccod,
        this.products[index].prod_cdesc,
        this.products[index].umed_ccods));
    }
    this.orden.detalle = detallesarray;

    let itemarray: Array<Gmtc_item> = []
    itemarray.push(new Gmtc_item("CREADO", true, currentdate));
    itemarray.push(new Gmtc_item("ATENDIDO", false, null));
    itemarray.push(new Gmtc_item("EMBALAJE", false, null));
    itemarray.push(new Gmtc_item("ENVIADO", false, null));
    itemarray.push(new Gmtc_item("RECIBIDO", false, null));

    let estadoOrden: Gmtc_estado_orden;
    estadoOrden = new Gmtc_estado_orden("DELIVERY", itemarray);
    this.orden.ord_nnum = Math.floor(Math.random() * 100);
    this.orden.ord_estado = estadoOrden;
    this.orden.estado = true;
    this.orden.usu_cclave = "0000000000";
    //console.log(this.orden);
    return this.orden;
  }

  guardarOrden(orden: Gmtc_orden): void {
    this._firebaseServiceOrdenes.createOrdenCompra(orden);
  }
  goHome() {
    this.router.navigate(['/home']);
  }

  get f() { return this.dniForm.controls; }
  get g() { return this.rucForm.controls; }
}

