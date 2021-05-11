import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FirebaseService } from '../../services/firebase.service';
//import { url } from 'inspector';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresa: any = [];
  productos:any;
  cartProductList = [];

  //public empresas = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
    private elementRef: ElementRef,
  ) {
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params['id']);
      /* this.firebaseService.getArrayEmpresas().subscribe(resp=>{
        this.empresas = resp[params['id']];   
      } */
      this.getProductos(params['id']);
    
      
    });
   }

  ngOnInit(): void {  
    
    /* codigo del modal "ver mi lista de compras" */
    let mostrar = document.getElementById("cta");
    let modal = document.getElementById("modal-close");
    let cerrar = document.getElementById("close");

    mostrar.addEventListener('click', function() {
        modal.classList.toggle("modal-close");
    })

    cerrar.addEventListener('click', function(){
      modal.classList.toggle("modal-close");
    })
  }

  

  getProductos(id:any){
    this.firebaseService.getEmpresa(id).subscribe(resp=>{
      this.empresa = resp;
      //console.log(this.empresa)
    });  
    
    /* FirebaseService.AEMPRESAS.subscribe(resp=>{
      this.empresa = resp.find(data=>(data.propertyId == id))
      console.log(this.empresa);
    }) */
  }

 /*  search(){
    if (this.productos == "") {
      this.ngOnInit();
    }else{
      this.empresa = this.empresa.filter((resp:any) =>{
        console.log(resp.productos.toLowercase().match(this.productos.toLowerCase()));
        return resp.productos.toLowercase().match(this.productos.toLowerCase());
      })
    }
  } */
  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find((name) => name.prod_cdesc === product.prod_cdesc); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1, precio:product.prod_nprev1}); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
    //console.log(this.cartProductList);
  }

  removeProduct(product) {
    //console.log(this.cartProductList);
    this.cartProductList = this.cartProductList.filter(
      ( name ) => name.num !== 0
    );
  }

  /*background de la empresa*/
  getBackground(categoria){
    switch (categoria) {
      case 1:
        return "url('../../../assets/images/scaled.jpg')";//naranja
      case 2:
        return "url('../../../assets/images/tienda.jpg')";//
      case 3:
        return "url('../../../assets/images/librerias.jpg')";//
      case 4:
        return "url('../../../assets/images/ropa.jpg')";
      case 5:
        return "url('../../../assets/images/carros.jpg')";
      case 6:
        return "url('../../../assets/images/farmacias.jpg')";
      case 7:
        return "url('../../../assets/images/agroindustrias.jpg')";//verde alfalfa
      case 8:
        return "url('../../../assets/images/computadoras.jpg')";
      case 9:
        return "url('../../../assets/images/maquinarias.jpg')";
      case 10:
        return "url('../../../assets/images/restaurants.jpg')";
      case 11:
        return "url('../../../assets/images/muebles2.jpg')";//cafe madera
      case 12:
        return "url('../../../assets/images/gas3.png')";
      case 99:
        return "url('../../../assets/images/otros.jpg')";

      default:
        break;
    }
  }

  getColorBackground(categoria){
    switch (categoria) {
      case 1:
        return "#3b83bd";
      case 2:
        return "white";
      case 3:
        return "white";
      case 4:
        return "white";
      case 5:
        return "white";
      case 6:
        return "white";
      case 7:
        return "white";
      case 8:
        return "white";
      case 9:
        return "white";
      case 10:
        return "orange";
      case 11:
        return "#804000";
      case 99:
        return "white";

      default:
        break;
    }
  }


}
