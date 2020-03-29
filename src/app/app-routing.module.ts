import { FormulariooComponent } from './components/tablanoticia/formularioo/formularioo.component';
import { TablanoticiaComponent } from './components/tablanoticia/tablanoticia.component';
import { FormularioComponent } from './components/tablaempresa/formulario/formulario.component';
import { TablaempresaComponent } from './components/tablaempresa/tablaempresa.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component : IndexComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'tabla/empresa', component: TablaempresaComponent},
  {path: 'tabla/noticia', component: TablanoticiaComponent},
  {path: 'tabla/empresa/:id', component: FormularioComponent},
  {path: 'tabla/noticia/:id', component: FormulariooComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
