import { EmpresaService } from './../../../services/empresa.service';
import { Empresa } from './../../../models/empresa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  empresa : Empresa = {
    id: 0,
    denominacion: "",
    telefono: "",
    horario_atencion: "",
    quienes_somos: "",
    latitud: 0,
    longitud: 0,
    domicilio: "",
    email: ""
  }


  constructor(private actRoute : ActivatedRoute, private servicio : EmpresaService, private router : Router) {
    this.actRoute.params.subscribe( data => {
      if (data['id'] != "nuevo") {
        this.getOne(data['id']);
      }
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    this.actRoute.params.subscribe((data) => {
      if (data['id'] == "nuevo") {
        this.add();
        alert('Guardado corréctamente');
        this.router.navigate(['tabla/empresa/']);
      } else {
        this.actualizar(data['id']);
        alert('Actualizado corréctamente');
        this.router.navigate(['tabla/empresa/']);
      }
    })
  }

  add() {
    this.servicio.save(this.empresa).subscribe((data) => {
    })
  }

  actualizar(id: number) {
    this.servicio.update(id, this.empresa).subscribe((data) => {
    })
  }

  getOne(id : number) {
    this.servicio.findById(id).subscribe(data => {
      this.empresa = data;
    })
  }

}
