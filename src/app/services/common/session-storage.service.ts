import { Inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService extends StorageService {

  constructor(@Inject('WINDOW') private window:any) { 
    super(window.sessionStorage)
  }
}
