
import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {OrdemCompra} from './shared/ordem-compra.model'
import { Observable } from 'rxjs'
import {API_ORDEM_SERVICO} from './app.api'
import { map } from 'rxjs/operators'


// depende do servidor que pode exigir cabeçalho
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


@Injectable()
export class OrdemCompraService{
    constructor(private http : HttpClient){}

    public efetivarCompra(ordemCompra : OrdemCompra) : Observable<number>{

       return this.http.post(`${API_ORDEM_SERVICO}`, JSON.stringify(ordemCompra), httpOptions)
       .pipe(map((resposta : any)=> {return resposta.id}))
       
       
    }
}