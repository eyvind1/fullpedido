import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
