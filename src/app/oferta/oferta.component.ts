import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router'

import {OfertasService} from '../ofertas.service'
import {Ofertas} from '../shared/ofertas.model'

// importa funções do observable
//import { interval, Observer } from 'rxjs';
//import {Observable, Subscription} from 'rxjs'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy { 

  public oferta : Ofertas
  public urlImagem : any 

  constructor(private route : ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
    // snapshort recupera o id passado na rota
  

    // params para recuperar id da rota me retorna um observable
    this.route.params.subscribe((paramentro : Params)=>{
      this.service.getOfertaPorId(paramentro.id)
      .then((ofertaId : Ofertas)=>{this.oferta = ofertaId, this.urlImagem = this.oferta.imagens[0]})
    
    })

    

  }

  ngOnDestroy(){
  }
}
