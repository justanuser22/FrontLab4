import { NoticiaService } from './../../../services/noticia.service';
import { Noticia } from './../../../models/noticia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formularioo',
  templateUrl: './formularioo.component.html',
  styleUrls: ['./formularioo.component.css']
})
export class FormulariooComponent implements OnInit {

  noticia : Noticia = {
    id: 0,
    titulo: "",
    resumen: "",
    imagen: "",
    contenido_html: "",
    publicada: '',
    fecha: null
  }

  constructor(private actRoute : ActivatedRoute, private servicio : NoticiaService, private router : Router) {
    this.actRoute.params.subscribe( data => {
      if (data['id'] != "nuevo") {
        this.getOnee(data['id']);
      }
    })
   }

  ngOnInit(): void {
  }

  guardarr() {
    this.actRoute.params.subscribe((data) => {
      if (data['id'] == "nuevo") {
        this.add1();
        alert('Guardado corréctamente');
        this.router.navigate(['tabla/noticia/']);
      } else {
        this.actualizarr(data['id']);
        alert('Actualizado corréctamente');
        this.router.navigate(['tabla/noticia/']);
      }
    })
  }

  add1() {
    this.servicio.save(this.noticia).subscribe((data) => {
    })
  }

  actualizarr(id: number) {
    this.servicio.update(id, this.noticia).subscribe((data) => {
    })
  }

  getOnee(id : number) {
    this.servicio.findById(id).subscribe(data => {
      this.noticia = data;
    })
  }

}
