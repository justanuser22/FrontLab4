import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TablaempresaComponent } from './components/tablaempresa/tablaempresa.component';
import { FormularioComponent } from './components/tablaempresa/formulario/formulario.component';
import { TablanoticiaComponent } from './components/tablanoticia/tablanoticia.component';
import { FormulariooComponent } from './components/tablanoticia/formularioo/formularioo.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    HomeComponent,
    TablaempresaComponent,
    FormularioComponent,
    TablanoticiaComponent,
    FormulariooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
