import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

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
    private router:Router,
  ) { }

  img_url = {data:[]}
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


    /*this.firebaseServiceService.getProductos().subscribe(resp=>{
      this.img_url.data = resp.map((e:any)=>{
        return {
          url: e.payload.doc.data().plan_img_url,
        }
      })
    },
    error=>{
      console.error(error)
    });*/



  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  verEmpresa(idx:number){
    this.router.navigate(['/empresa',idx]);
  }

}
