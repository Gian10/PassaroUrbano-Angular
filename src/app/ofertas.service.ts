import {Ofertas} from './shared/ofertas.model'
import {API_OFERTA, API_COMO_USAR, API_ONDE_FICA} from './app.api'

//import http and the injectable
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core' 
import { Observable } from 'rxjs'
import {retry } from 'rxjs/operators'

// decorate the class e inject a service inside for to receive object
@Injectable()
export class OfertasService{

    constructor(private http: HttpClient){}

    public getOfertas() : Promise<Array<Ofertas>>{
        return this.http.get(`${API_OFERTA}?destaque=true`)
        .toPromise()
        .then((response : Array<Ofertas>)=>(response))
    }

    public getOfertasPorCategoria(categoria : string): Promise<Array<Ofertas>>{
        return this.http.get(`${API_OFERTA}?categoria=${categoria}`)
        .toPromise()
        .then((response : Array<Ofertas>)=>(response))
    }

    public getOfertaPorId(id : number) : Promise<Ofertas>{
        return this.http.get(`${API_OFERTA}?id=${id}`)
        .toPromise()
        .then((response : Response)=>{return response[0]})
    }

    public getComoUsarId(id : number) : Promise<string>{
        return this.http.get(`${API_COMO_USAR}?id=${id}`)
        .toPromise()
        .then((response : Response)=>{return response[0].descricao})
    }

    public getOndeFicaId(id : number) : Promise<string>{
        return this.http.get(`${API_ONDE_FICA}?id=${id}`)
        .toPromise()
        .then((response : Response)=>{return response[0].descricao})
    }
    
    // pesquisa por aproxima nesse caso da fake api "_like"
    public pesquisa(texto : string) : Observable<Array<Ofertas>>{
        return this.http.get<Array<Ofertas>>(`${API_OFERTA}?descricao_oferta_like=${texto}`)
        .pipe(retry(5))
    }
}
    