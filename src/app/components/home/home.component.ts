import { Component, OnInit } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseServiceService } from '../../services/firebase-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private firebaseServiceService: FirebaseServiceService,
  ) { }


  collection = {count:0, data:[]}

  ngOnInit(): void {

    this.firebaseServiceService.getEmpresas().subscribe(resp=>{
      this.collection.data = resp.map((e:any)=>{
        return {
          ruc: e.payload.doc.data().emp_cruc,
          departamento: e.payload.doc.data().emp_cdepa,
          telefono: e.payload.doc.data().emp_ctelef,
        }
      })
    },
    error=>{
      console.error(error)
    }
    );






  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
