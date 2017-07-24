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
    ufs : UF[];
    dados_da_samu : Dados[];
    minha_uf: UF;
    municipios_atendidos: Dados[] = [];
    meu_id = 26;
    media: number = 0;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.minha_uf = this.UF(meu_id);
        this.media = this.calcular();
      this.municipios_atendidos = this.getPorUFMunicipiosAtendidosPorEstado(minha_uf);
    }

    UF(id: number): UF {
      for (let uf of this.ufs) {
          if (uf.id == id) return uf;
      }
    }
  
  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Dados[]{
    let municipios: Dados[] = [];
    for (let mun of this.dados_da_samu){
        if (mun.uf_id == uf.id){
          this.municipios_atendidos.push(mun);
        }
      }
    return municipios;
  }

    calcular(): number {
      var qnt = 0;
      var total = 0;
      for (let mun of this.dados_da_samu){
        if (mun.uf_id == this.meu_id){
          qnt++;
          total+=mun.valor;
        }
      }
        return Math.round(total/qnt);
    }
}
