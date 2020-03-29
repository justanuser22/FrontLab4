import { EmpresaService } from './../../services/empresa.service';
import { Empresa } from './../../models/empresa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablaempresa',
  templateUrl: './tablaempresa.component.html',
  styleUrls: ['./tablaempresa.component.css']
})
export class TablaempresaComponent implements OnInit {

  empresas : Empresa[] = [];

  constructor(private servicio : EmpresaService, private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.servicio.findAll().subscribe( data => {
      this.empresas = data;
      console.log(this.empresas);
    });
  }



  delete(id: number) {
    const opcion = confirm("¿Desea eliminar este registro?");
    if (opcion) {
      this.servicio.delete(id).subscribe(() => {
        console.log('BORRADO');
        window.location.reload();
      })
    } else {
        console.log('NO BORRADO');
    }
  }

  agregar() {
    this.router.navigate(['tabla/empresa/nuevo']);
   }

   update (idEmpresa: number) {
    this.router.navigate(['tabla/empresa/' + idEmpresa]);
  }

}
