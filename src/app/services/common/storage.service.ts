import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;
  private subjects: Map<string, BehaviorSubject<any>>; 
  constructor(
    storage: Storage
  ) { 
    this.storage = storage;
    this.subjects = new Map<string, BehaviorSubject<any>>();
  }

  watch(key:string):Observable<any> {
    if (!this.subjects.has(key)) {
      this.subjects.set(key,new BehaviorSubject<any>(null));
    } 
    var item = this.storage.getItem(key);
    if (item == "undefined") {
      item = undefined
    } else {
      item = JSON.parse(item)
    }
    this.subjects.get(key).next(item);
    return this.subjects.get(key).asObservable();
  }
  
  set (key : string, value:any) {
    this.storage.setItem(key, JSON.stringify(value));
    if (!this.subjects.has(key)) {
      this.subjects.set(key, new BehaviorSubject<any>(value))
    } else {
      this.subjects.get(key).next(value);
    }
  }

  remove(key:string){
    if (this.subjects.has(key)) {
      this.subjects.get(key).complete();
      this.subjects.delete(key);
    }
    this.storage.removeItem(key);
  }

  clear(){
    this.subjects.clear();
    this.storage.clear();
  }
  
}
