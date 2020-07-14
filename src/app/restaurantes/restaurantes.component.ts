import { Component, OnInit } from '@angular/core';

import {OfertasService} from '../ofertas.service'
import {Ofertas} from '../shared/ofertas.model'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  constructor(private service: OfertasService) { }

  public restaurantes : Array<Ofertas>
  public res : string = "restaurante"

  ngOnInit(): void {

    this.service.getOfertasPorCategoria(this.res)
    .then((ofertaRestaurante : Array<Ofertas>)=>{this.restaurantes = ofertaRestaurante})

  }

}
