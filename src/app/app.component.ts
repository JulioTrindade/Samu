import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    dados_da_samu : Dados[];
    municipios_atendidos: Dados[] = [];
    minha_uf = 26;
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.defineTitle();
        this.calcularMunicipios();
    }

    defineTitle(): void {
      for(let uf of this.ufs) {
        if(uf.id == 26) this.title = uf.nome;
      }
    }

    calcularMunicipios(): number{
      var qtd = 0;
      var total = 0;
      for(let mun of this.dados_da_samu){
        if(mun.uf_id == 26){
          qtd++;
          total += mun.valor;
          this.municipios_atendidos.push(mun)
        }
      }
      return Math.round(total/qtd);
    }

    defineId(): void {
      for(let uf of this.ufs) {
        if(uf.id == 26) this.title = uf.nome;
      }
    }

}
