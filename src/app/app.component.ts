import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'fullpedidoangular';
  ngOnInit(): void {
    (function($){
      $(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
    })(jQuery);
  }
}

