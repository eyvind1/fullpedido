import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Gmtc_orden } from '../models/Gmtc_orden';
import { classToPlain } from 'class-transformer';
import firestore from 'firebase/app';
import { Observable } from 'rxjs';
import { Gmtc_empresa } from '../models/Gmtc_empresa';
import { Gmtc_promocion } from '../models/Gmtc_promocion';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public static AEMPRESAS: Observable<Gmtc_empresa[]>;
  public static APROMOCIONES: Observable<Gmtc_promocion[]>;
  public static EMPRESASGLOBALES: Array<Gmtc_empresa[]>
  array:any[];
  constructor(
    private firestor: AngularFirestore
  ) { }

  getArrayEmpresas(){
    return this.firestor.collection<Gmtc_empresa>("Gmtc_empresa").valueChanges({ idField: "propertyId" });
  }

  getArrayPromociones(nfecha_actual:number){
    return this.firestor.collection<Gmtc_promocion>("Gmtc_promocion", ref=>
      ref.where("prom_dfecha_caducidad", ">=", firestore.firestore.Timestamp.fromMillis(nfecha_actual))).valueChanges();
  }
  getEmpresa(id:string){
    return this.firestor.collection("Gmtc_empresa").doc(id).valueChanges();
  }
  buscarEmpresas(termino:string):any[]{
    let empresasArr:any[]=[];
    
    termino = termino.toLowerCase();
    FirebaseService.AEMPRESAS.subscribe(resp=>{
      this.array = resp;
      this.array = this.array.filter((data:any)=>(data.emp_cruc.length ==11));
      //console.log(this.array);
      for(let i=0; i<this.array.length;i++){
        let emp = this.array[i];

        let nombre = emp.emp_cncomer.toLowerCase();

        if (nombre.indexOf(termino)>=0) {
          emp.idx = i;
          empresasArr.push(emp)
          } 
      }
    })
    return empresasArr;
  }
  
  
  createOrdenCompra(orden:Gmtc_orden){

    return this.firestor.collection("Gmtc_orden").add(classToPlain(orden) );
  }

  registerUser(empresa:Gmtc_empresa){
    return this.firestor.collection("Gmtc_empresa").add(classToPlain(empresa) );
  }

  consultarUser(documento:string){
    return this.firestor.collection("Gmtc_empresa", ref => ref.where('emp_cruc','==',documento)).valueChanges();
  }

  askForUpdates(){
    return this.firestor.collection("Gmtc_cotizacion").stateChanges(["modified"]);
  }

}
