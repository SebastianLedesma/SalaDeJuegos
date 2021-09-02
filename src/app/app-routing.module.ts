import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';

const routes: Routes = [
  {path:'',pathMatch:'full' ,component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'bienvenido', component: BienvenidoComponent},
  {path:'quiensoy', component: QuiensoyComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
