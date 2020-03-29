import { Router } from '@angular/router';
import { NoticiaService } from './../../services/noticia.service';
import { Noticia } from './../../models/noticia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablanoticia',
  templateUrl: './tablanoticia.component.html',
  styleUrls: ['./tablanoticia.component.css']
})
export class TablanoticiaComponent implements OnInit {

  noticias : Noticia[] = [];

  constructor(private servicio : NoticiaService, private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.servicio.findAll().subscribe( data => {
      this.noticias = data;
      console.log(this.noticias);
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
    this.router.navigate(['tabla/noticia/nuevo']);
   }

   update (idNoticia: number) {
    this.router.navigate(['tabla/noticia/' + idNoticia]);
  }


}
