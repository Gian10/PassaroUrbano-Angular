import { Component, OnInit } from '@angular/core';

import {OfertasService} from '../ofertas.service'
import {Ofertas} from '../shared/ofertas.model'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertaService : OfertasService) { }

  public diversao : Array<Ofertas>
  public div : string = "diversao"

  ngOnInit(): void {

    this.ofertaService.getOfertasPorCategoria(this.div)
    .then((ofertaDiversao : Array<Ofertas>)=>{this.diversao = ofertaDiversao})

  }

}
