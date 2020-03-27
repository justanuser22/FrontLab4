import { Empresa } from './../../models/empresa';
import { EmpresaService } from './../../services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  empresas : Empresa[] = [];

  constructor(private servicio : EmpresaService) {
   
   }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.servicio.findAll().subscribe((data) => {
     this.empresas = data;
    },
    err => {
      console.log("Ha habido un error", err)
    }
    );
  }

}
