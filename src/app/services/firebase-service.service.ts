import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  // metodo para listar las empresas
  getEmpresas(){
    return this.firestore.collection("Gmtc_empresa").snapshotChanges();
  } 

  getEmpresa(idx:string){
    return this.firestore.collection("Gmtc_empresa").snapshotChanges()[idx];
  }


}
