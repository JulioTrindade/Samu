import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { resumoComponent } from './resumo.component';
import { dados_ufComponent } from './dadosUf.component';
import { todos_dadosComponent } from './dadosGerais.component';
import { HttpModule }    from '@angular/http';
import {UFService} from './services/uf.service';
import {SamuService} from './services/samu.service';
import {ModeloNovoService} from './services/novo.service';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    resumoComponent,
    dados_ufComponent,
    todos_dadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  {
    path: 'resumo',
    component: resumoComponent
  },
  {
    path: 'dados_uf',
    component: dados_ufComponent
  },
  {
    path: 'todos_dados',
    component: todos_dadosComponent
  }
])
  ],
  providers: [UFService, SamuService, ModeloNovoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
