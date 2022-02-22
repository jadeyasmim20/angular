import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquiteturaComponent } from './arquitetura/arquitetura.component';
import { ComandosComponent } from './comandos/comandos.component';
import { DataComponent } from './data/data.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path: "arquitetura",
    component: ArquiteturaComponent
  },
  {
    path: "comandos",
    component: ComandosComponent
  },
  {
    path: "diretivas",
    component: DiretivasComponent
  },  
  {
    path: "data",
    component: DataComponent
  },   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

