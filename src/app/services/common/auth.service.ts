import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  constructor() { }

  private hasToken() { 
    return !!localStorage.getItem('token')
  }

  login() {
    localStorage.setItem('token','JWT');
    this.isLoginSubject.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
}
