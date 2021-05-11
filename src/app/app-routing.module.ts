import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EmpresaComponent } from './components/empresa/empresa.component';

import { HomeComponent } from './pages/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { AuthGuard } from './guards/auth.guard';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { BeneficiosVendedorComponent } from './components/beneficios-vendedor/beneficios-vendedor.component';
import { BeneficiosCompradorComponent } from './components/beneficios-comprador/beneficios-comprador.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'empresa/:id', component: EmpresaComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  { path: 'terminos-condiones', component: TerminosCondicionesComponent },
  { path: 'beneficios-vendedor', component: BeneficiosVendedorComponent },
  { path: 'beneficios-comprador', component: BeneficiosCompradorComponent},
  { path: 'categoria/:nombre', component: CategoriaComponent},
  /*{ path: 'perfil', 
    component: PerfilComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard]
  },*/
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
