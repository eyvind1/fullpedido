import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProductosComponent } from './productos/productos.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectFilterModule } from 'mat-select-filter';
import { FilterComboBoxPipe } from '../pipes/filter-combo-box.pipe';
import { LoadingComponent } from './loading/loading.component';
import { MatMenuModule } from '@angular/material/menu'
import { FilterProvinciasPipe } from '../pipes/filter-provincias.pipe';
import { FilterDistritosPipe } from '../pipes/filter-distritos.pipe';
import { OrderByModule } from 'ng-orderby-pipe';
import { SortEmpresasPipe } from '../pipes/sort-empresas.pipe';
import { BuscadorComponent } from './buscador/buscador.component';
import { FilterCategoriasPipe } from '../pipes/filter-categorias.pipe';
import { FilterCategoriasCarruselPipe } from '../pipes/filter-categorias-carrusel.pipe';
import { FiltrarProductosPipe } from '../pipes/filtrar-productos.pipe';
import { ListadoCommprasComponent } from './listado-commpras/listado-commpras.component';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CategoriasComponent } from './categorias/categorias.component';
import { ListadoEmpresasComponent } from './listado-empresas/listado-empresas.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';
import { BeneficiosVendedorComponent } from './beneficios-vendedor/beneficios-vendedor.component';
import { BeneficiosCompradorComponent } from './beneficios-comprador/beneficios-comprador.component';

/* import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment'; */

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    EmpresasComponent,
    EmpresaComponent,
    PromocionesComponent,
    ProductosComponent,
    FilterComboBoxPipe,
    LoadingComponent,
    FilterProvinciasPipe,
    FilterDistritosPipe,
    SortEmpresasPipe,
    BuscadorComponent,
    FilterCategoriasPipe,
    FilterCategoriasCarruselPipe,
    FiltrarProductosPipe,
    ListadoCommprasComponent,
    CategoriasComponent,
    ListadoEmpresasComponent,
    TerminosCondicionesComponent,
    BeneficiosVendedorComponent,
    BeneficiosCompradorComponent,
   
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    EmpresasComponent,
    PromocionesComponent,
    LoadingComponent,
    CategoriasComponent,
    ListadoEmpresasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSelectFilterModule,
    FormsModule,
    MatMenuModule,
    OrderByModule,
    MatTableModule,
    ScrollingModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ]
})
export class ComponentsModule { }
