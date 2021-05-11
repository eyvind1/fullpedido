import { Component, OnInit,Input, AfterViewInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import { Subscription } from 'rxjs';
import { Swiper } from 'swiper';
import { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],

})
export class CarruselComponent implements OnInit, AfterViewInit,OnChanges{
  
  @Input() promociones:any[];
  public mySwiper: Swiper ;
  
  constructor() 
    {}

  ngOnChanges(changes: SimpleChanges): void {
    //this.promociones_img= this.promociones.filter((data:any)=>(data.emp_cat == this.categoriaselected));
    //onsole.log(this.promociones);  
    //console.log(this.categoriaselected); 
    //this.updateCarrusel();
  }
  
  
  ngOnInit(): void {
    this.promociones_img = this.promociones;
    
  }
 
  promociones_img : any=[];
  idcategoria:any;

  
  ngAfterViewInit():void {
    this.mySwiper= new Swiper('.slideshow1', {
      // Optional parameters
      slidesPerView:1,
      loop: true,
      autoplay: {
        delay: 2000,
      },
  
      breakpoints: {
        800:{
          slidesPerView:2,
        }
      },

      
    });
    
    /* this.mySwiper.on('beforeLoopFix', function () {
      this.mySwiper.update();
      console.log('slide actualizado');
    }); */
    
    

  }
 
  onSlideNext(){
    this.mySwiper.slideNext();

  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  
  }
  
  
}

