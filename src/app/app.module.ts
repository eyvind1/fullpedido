import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    APP_ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
