import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID } from '@angular/core';
// injetar "," no valor
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

// injetando Form
//import {FormsModule} from '@angular/forms'

// injetando ReactiveFormsModule
import {ReactiveFormsModule} from '@angular/forms'


// injetar o http
import {HttpClientModule} from '@angular/common/http'

//
//injetar Router para roteiar router-outlet
import {RouterModule} from '@angular/router'
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

//pipe na raiz para poder usar
import {descricaoReduzida} from './shared/descricao-reduzida-pipe';


import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component'

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    descricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),

  ],
  // configurar pipe customizado
  providers: [{provide: LOCALE_ID, useValue: 'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
