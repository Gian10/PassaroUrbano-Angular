import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { OrdemCompra } from '../shared/ordem-compra.model'

// importar reactive forms
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idOrdemCompraResponse : number

  // controlar os campos
  public formulario : FormGroup = new FormGroup({
    "endereco": new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    "numero": new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    "complemento": new FormControl(null),
    "formaPagamento" :new FormControl(null, [ Validators.required])
  })

  constructor(private ordemCompraService: OrdemCompraService) { }


  ngOnInit() {
    
  }

  public confirmarCompra(): void {
   
    if(this.formulario.status === "INVALID"){
      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()
    }else{
      let ordemCompra : OrdemCompra = new OrdemCompra(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      )

      this.ordemCompraService.efetivarCompra(ordemCompra).subscribe((idOrdemCompra : number)=>{
        this.idOrdemCompraResponse = idOrdemCompra
      })
    }

  }
}
