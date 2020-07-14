import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router'
import {OfertasService} from '../../ofertas.service'

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar : string = ""

  constructor(private rote : ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
// parent pois pega paramentros da rota do componente pai Oferta
    this.rote.parent.params.subscribe((paramentros : Params)=>{
      this.service.getComoUsarId(paramentros.id)
      .then((response : string)=>{this.comoUsar = response})
    })
  }

}
