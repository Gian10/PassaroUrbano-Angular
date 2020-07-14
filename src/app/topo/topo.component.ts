import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
import {Ofertas} from '../shared/ofertas.model'

import {Observable, Subject, of} from 'rxjs'
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasService]
})
export class TopoComponent implements OnInit {

  public oferta : Observable<Array<Ofertas>>

// Subject é um proxy: recebe parametros de eventos e dispara observable
  public subjectPesquisa : Subject<string> = new Subject<string>()

  constructor(private service : OfertasService) { }

  ngOnInit() {

    this.oferta = this.subjectPesquisa
    .pipe(debounceTime(1000), 
    distinctUntilChanged(), 
    switchMap((buscar : string)=>{
      // remove espaços em brancos da string
      if(buscar.trim() === ""){
        // retorna um Observable de array de tipo oferta
        return of<Array<Ofertas>>([])
      }
      return this.service.pesquisa(buscar)
    }),
      catchError(erro => 
        {return of<Array<Ofertas>>([])} 
      )
    )
    

    // this.oferta.subscribe((ofer : Array<Ofertas>)=>{
    //   console.log(ofer)
    //   this.offer = ofer
    // })
  }

   public pesquisar(pesquisa : string) : void{
     this.subjectPesquisa.next(pesquisa.trim())
    
    
   // subscribe com 3 funções 
    // this.oferta.subscribe(
    //   (ofertas : Array<Ofertas>) =>{console.log(ofertas)},
    //   (erro : any)=> console.log("url de acesso: "+ erro.url),
    //   () => {console.log("Fuxo de requisição completo")}
    // )  
  }

  public limpar() : void{
    this.subjectPesquisa.next("")
  }

}
