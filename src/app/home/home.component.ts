import { Component, OnInit } from '@angular/core';


import {OfertasService} from '../ofertas.service'
import {Ofertas} from '../shared/ofertas.model'


// decoraitor
@Component({
  // meta-dados
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Ofertas>

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {

    //this.ofertas = this.ofertaService.get()
    //console.log(this.ofertas)
    
   this.ofertaService.getOfertas()
   .then((ofertaGet : Array<Ofertas>)=>{this.ofertas = ofertaGet})
   //console.log(this.ofertas)
  }

}
