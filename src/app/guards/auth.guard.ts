import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { PerfilComponent } from '../pages/perfil/perfil.component';
import { DataService } from '../services/common/data.service';
import { FirebaseService } from '../services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<PerfilComponent> {
  constructor(
    private _data: DataService
  ){}
  canActivate(): boolean{
    if (!this._data.logueado) {
      console.log("holi");
    } else {
      
    }
    return this._data.logueado;
  }

  canDeactivate(
    component: PerfilComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):boolean{
    return true;
  }
  
}
