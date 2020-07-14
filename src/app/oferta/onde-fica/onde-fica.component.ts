import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router'

import {OfertasService} from '../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ""

  constructor(private rote : ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
    // parent pois estamos trabalhando com os paramentros da rota pai
    this.rote.parent.params.subscribe((paramentro : Params)=>{
      this.service.getOndeFicaId(paramentro.id)
      .then((response : string)=>{this.ondeFica = response})
    })
    
  }

}
