import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { UsersModel } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';
import { InformacionService } from 'src/app/services/informacion.service';
import { Sweetalert } from '../../function';
import { MatDialog } from '@angular/material/dialog';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Gmtc_categoria } from 'src/app/models/Gmtc_categoria';
import { GMTF_departamento } from 'src/app/models/GMTF_departamento';
import { GMTF_distrito } from 'src/app/models/GMTF_distrito';
import { GMTF_provincia } from 'src/app/models/GMTF_provincia';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { DistritosService } from 'src/app/services/distritos.service';
import { Gmtc_plan } from 'src/app/models/Gmtc_plan';
import { Router } from '@angular/router';
import { Gmtc_empresa } from 'src/app/models/Gmtc_empresa';
import { ErrorStateMatcher } from '@angular/material/core';
import { Gmtc_producto } from 'src/app/models/Gmtc_producto';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  numberDoc:string;
  user:UsersModel;
  empresa:Gmtc_empresa;
  public mostrar:boolean;
  error:boolean;
  mensajeError:string;
  public ocultar:boolean;
  confirmpassword:string;
  departamentos: GMTF_departamento[]=[];
  provincias: GMTF_provincia[]=[];
  distritos: GMTF_distrito[]=[];
  categorias: Gmtc_categoria[]=[];
  categoriaselected:number;
  nombre:any;
  empresas:any;
  tipoDocumento:any;
  tipoDocumento2:any;
  esRuc:boolean;
  esRus:boolean;
  /** formularios */
  public documentoForm: FormGroup;
 
  public datosForm: FormGroup;
  
  numbersPattern = "^-?[0-9]+$";
  direccionPattern = "^[a-zA-Z0-9' *'-.]+$";
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

  usuario:any=[];
  provinciafiltered: GMTF_provincia[];
  departamentoselected: any;
  nameDepartamentofiltered: GMTF_departamento[];
  nameDepartamento: string;
  distritofiltered: GMTF_distrito[];
  nameProvinciafiltered: GMTF_provincia[];
  nameProvincia: string;
  provinciaselected: any;
  distritoselected: any;
  esDni:boolean;
  constructor(
    private _categoriaService: CategoriasService,
    public dialog: MatDialog,
    private _departamentosService:DepartamentosService,
    private _provinciasService: ProvinciasService,
    private _distritoService: DistritosService,
    public fb: FormBuilder,
    private firebase: FirebaseService,
    private _informacion: InformacionService,
  ) {
      this.mostrar = false;
      this.error = false;
      this.ocultar = true;
      this.esRuc = false;
      this.user = new UsersModel();
      
      this.esDni = true;
   }

  ngOnInit(): void {
    this.documentoForm = this.fb.group({
      documento:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(11),
        Validators.pattern(this.numbersPattern)
      ]] 
    })
    this.datosForm = this.fb.group({
      email:['',[
        Validators.required,
        Validators.email,
      ]],
      password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]],
      confirmPassword:['',[
        Validators.required,
      ]],
      telefono:['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(9),
        Validators.pattern(this.numbersPattern),
      ]],
      categoria:['',[
        Validators.required,
      ]],
      departamento:['',[
        Validators.required,
      ]],
      provincia:['',[
        Validators.required,
      ]],
      distrito:['',[
        Validators.required,
      ]],
      direccion:['',[
        Validators.required,
        Validators.pattern(this.direccionPattern),
        Validators.minLength(6),
        Validators.maxLength(40)
      ]],
      acceptTerms:[false,[
        Validators.requiredTrue
      ]]
    })
    /* this._informacion.getInformationUser("dni","70000639").subscribe(data=>{
      this.usuario = data;
      console.log(data);
    }) */
    /* obtener categorias */
    this.categorias = this._categoriaService.getCategorias();
    this.departamentos = this._departamentosService.getDepartamentos();
    this.provincias = this._provinciasService.getProvincias();
    this.distritos = this._distritoService.getDistritos();
    FirebaseService.AEMPRESAS.subscribe(resp =>{
      this.empresas = resp;
    });
    
  }

  get documentoF() {
    return this.documentoForm.controls;
  }

  get dataF() { 
    return this.datosForm.controls;
  }

  /* validacion del documento */
  newForm(){
    if(this.documentoForm.invalid){
      return;
    }
    else {
      const {documento} = this.documentoForm.value;
      this.empresas = this.empresas.filter((data)=>(data.emp_cruc == documento));
        if(Object.keys(this.empresas).length > 0){
          
          Sweetalert.fnc("error","El usuario ya existe",null);
          return;
        }
        else{
          this.numberDoc = documento;
          if(documento.length ==8){
            this.tipoDocumento = "dni";
            this.datosForm.get("categoria").disable();
          }
          if(documento.length == 11){
            this.esDni = false;
            let position;
            position = documento.indexOf("10");
            if(position == 0){
              this.tipoDocumento2 = "rus";
              this.esRus = true;
            }
            else{
              this.tipoDocumento = "ruc";
              this.datosForm.get("departamento").disable();
              this.datosForm.get("provincia").disable();
              this.datosForm.get("distrito").disable();
              this.datosForm.get("direccion").disable();
            }
            
          } 
          this._informacion.getInformationUser(this.tipoDocumento,this.numberDoc).subscribe(data=>{
            this.usuario = data;//arreglar
            console.log(data);
          });
          this.error = false;
          this.openDialog();
        }
    }
  }
/**Registro del usuario */
  saveNewUser(){
    if(this.datosForm.invalid){
      console.log(this.datosForm)
      return;
    }
    const {
      email, 
      password,
      telefono,
      categoria,
      departamento,
      provincia,
      distrito,
      direccion
     } = this.datosForm.value;
    let categoria2:Gmtc_categoria;
    let plan:Gmtc_plan;
    let ubigeo:string;
    let cncomer:string;
    let cdepa: string
    let cdirec: string;
    let crass: string;
    let cprov: string;
    let cdist: string;
    let nmonto: number;
    
    if(categoria != null && this.tipoDocumento == "ruc"){
      let nombre_cat: string;
      let cod_cat: number;
      //ubigeo = this.getCodigoUbigeoporNombre(this.usuario.distrito);
      cod_cat = this.categoriaselected;
      nombre_cat = this.getNombreCategoria();
      categoria2 = new Gmtc_categoria(nombre_cat,cod_cat);
      cncomer = "";
      crass = ""; 
      cdepa = "";
      cdist = "";
      cprov = ""; 
      ubigeo = "";
      nmonto = 50;
      plan =  new Gmtc_plan("PYME","",2,2,3,1,0,3,1,10,2);
      cdirec = "";
    }
    else if(this.tipoDocumento2 == "rus"){
      cdirec = direccion;
      ubigeo = this.getCodigoUbigeoporID(this.distritoselected)
      crass = "";
      cncomer = "";
      categoria2 = new Gmtc_categoria("OTROS",0);
      cdepa = this.getNombreDepartamento(this.departamentoselected) ;
      cdist = this.getNombreDistrito(this.distritoselected) ;
      cprov = this.getNombreProvincia(this.provinciaselected); 
      nmonto = 0;
      plan =  new Gmtc_plan("PYME","",2,2,3,1,0,3,1,10,2);
    }
    else{
      cdirec = direccion;
      ubigeo = this.getCodigoUbigeoporID(this.distritoselected);
      crass = "";
      cncomer = "";
      categoria2 = new Gmtc_categoria("OTROS",0);
      cdepa = this.getNombreDepartamento(this.departamentoselected) ;
      cdist = this.getNombreDistrito(this.distritoselected) ;
      //console.log(this.distritoselected)
      cprov = this.getNombreProvincia(this.provinciaselected); 
      nmonto = 0;
      plan =  new Gmtc_plan("COMPRAS","",0,0,0,0,0,0,0,0,0);
    }
    //this.firebase.registerUser(this.empresa); //guarda el usuario en la bd
    // //necesario 
    //console.log(this.user);
    //return;
    this.empresa = new Gmtc_empresa(
      true,
      "",
      null,
      [],
      [],
      [],
      categoria2,
      cdepa.toUpperCase(),
      cdirec,
      cdist.toUpperCase(),
      email,
      "PERMITIDO",
      "",
      cncomer,
      password,
      "",
      cprov.toUpperCase(),
      crass,
      this.numberDoc,
      telefono,
      ubigeo,
      2.5,
      0,
      nmonto,
      1,
      plan,
      false);
    //console.log(this.empresa);
    this.firebase.registerUser(this.empresa).then(resp=>{
      Sweetalert.fnc("success","Registrado con éxito","/home");
    }).catch(error=>(
      console.error(error)
    ));
  }
  
  
  
  

  /**Dialog de terminos y condiciones */
  openDialog() {
    /* const dialogRef = this.dialog.open(TerminosyCondiciones,
      {
        width: '80%',
        panelClass: 'custom-dialog-container'
      });

    dialogRef.afterClosed().subscribe(result => {
      if(result){ */
        this.mostrar = true;
        this.ocultar = false;
        
        if (this.tipoDocumento == "ruc") {
          this.esRuc = true;
          
        }
        //console.log(this.user);
        //console.log(`Dialog result: ${result}`);
      //}
      //else{
        //console.log("triste");
      //}
      
    //});
  }



  //obtener el nombre de la categoria mediante su codigo
  getNombreCategoria():string{
    this.nombre = this.categorias.filter((data:any) =>(
      data.cat_ncod ==  this.categoriaselected
    ));
    return this.nombre[0].cat_cdes;
  }

  // obtiene el codigo ubigeo por el id del distrito
  getCodigoUbigeoporID(codigoDistrito:number):string{
    let codigo = this.distritofiltered.filter((data:any) =>(
      data.id_distrito == codigoDistrito
    ));
    if(codigo[0] == undefined){
      this.datosForm.controls['distrito'].setErrors({'incorrect':true})
    }
    else{
      return codigo[0].ubigeo_distrito;
    }
    
  }

  //obtiene el codigo ubigeo por el nombre del distrito
  getCodigoUbigeoporNombre(nombreDistrito):string{
    let codigo = this.distritos.filter((data:any)=>(
      data.nombre_distrito.toLowerCase() == nombreDistrito.toLowerCase()
    ));
    return codigo[0].ubigeo_distrito;
  }
  getNombreDepartamento(codigo):string{
    let nombre = this.departamentos.filter((data:any)=>(
      data.id_departamento == codigo
    ));
    return nombre[0].nombre_departamento;
  }
  
  getNombreProvincia(codigo):string{
    let nombre = this.provinciafiltered.filter((data:any)=>(
      data.id_provincia == codigo
    ));
    //console.log(nombre[0])
    if(nombre[0] == undefined){
      this.datosForm.controls['provincia'].setErrors({'incorrect':true})
    }
    else{
      return nombre[0].nombre_provincia;
    }
    
  }

  getNombreDistrito(codigo):string{
    let nombre = this.distritofiltered.filter((data:any)=>(
      data.id_distrito == codigo
    ));
    if(nombre[0] == undefined){
      this.datosForm.controls['distrito'].setErrors({'incorrect':true})
    }
    else{
      return nombre[0].nombre_distrito;
    }
  }
  // filtra provincias por el departamento seleccionado
  filtrarProvincias(){
    this.provinciafiltered = this.provincias.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    this.nameDepartamentofiltered = this.departamentos.filter((data:any)=>(data.id_departamento == this.departamentoselected));
    //this.nameDepartamento = this.nameDepartamentofiltered[0].nombre_departamento;
  }

  // filtra distritos por la provincia seleccionada
  filtrarDistritos(){
    this.distritofiltered = this.distritos.filter((data:any)=>(data.id_provincia == this.provinciaselected));
    this.nameProvinciafiltered = this.provincias.filter((data:any)=>(data.id_provincia == this.provinciaselected));
    //this.nameProvincia = this.nameProvinciafiltered[0].nombre_provincia;
  }

}


@Component({
  selector: './terminosycondiciones',
  templateUrl: './terminosycondiciones.html',
  styleUrls: ['./register.component.css']
})
export class TerminosyCondiciones {}