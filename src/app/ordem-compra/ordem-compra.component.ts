import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { OrdemCompra } from '../shared/ordem-compra.model'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  // recuperando varievel da classe filha do meu formulario lá do html
 @ViewChild("formulario")   public for : NgForm

 public pedido : OrdemCompra

 public idPedido : number

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmar() : void{
    //console.log(this.for)
    let pedido : OrdemCompra =  new OrdemCompra(
      this.for.value.endereco, 
      this.for.value.numero,
      this.for.value.complemento,  
      this.for.value.formaPagamento
    )
    
    this.ordemCompraService.efetivarCompra(pedido).subscribe((numeroId : number)=>{
      this.idPedido = numeroId
      console.log(this.idPedido)
    })

  }
}
