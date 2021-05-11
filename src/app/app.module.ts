import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';

import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './pages/about/about.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartamentosService } from './services/departamentos.service';
import { NoImagePipe } from './pipes/no-image.pipe';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent, TerminosyCondiciones } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmEqualValidatorDirective } from './directives/confirm-equal-validator.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';



//import { FilterDistritosPipe } from './pipes/filter-distritos.pipe';
//import { FilterProvinciasPipe } from './pipes/filter-provincias.pipe';
//import { FilterComboBoxPipe } from './pipes/filter-combo-box.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NoImagePipe,
    RegistroComponent,
    LoginComponent,
    RegisterComponent,
    TerminosyCondiciones,
    ConfirmEqualValidatorDirective,
    PerfilComponent,
    CategoriaComponent,
    //FilterCategoriasCarruselPipe,
    //FilterCategoriasPipe,
    //SortEmpresasPipe,
    //FilterDistritosPipe,
    //FilterProvinciasPipe,
    //FilterComboBoxPipe,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectFilterModule,
  ],
  providers: [
    DepartamentosService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
