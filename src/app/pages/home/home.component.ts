import { Component } from '@angular/core';
import { TableComponent } from '../../shared/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  columns = ['Últimas ações', 'Repositório', 'Projeto', 'Data', 'Status'];
  projetos = [
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Bitbucket', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Github', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Gitlab', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Cancelado' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Github', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Bitbucket', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Gitlab', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Cancelado' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Bitbucket', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Github', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Gitlab', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Cancelado' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Bitbucket', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Github', 'Projeto': 'USP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Gitlab', 'Projeto': 'USP', 'Data': '10/03/2025', 'Status': 'Cancelado' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Github', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Bitbucket', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Bitbucket', 'Projeto': 'ASP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Gitlab', 'Projeto': 'USP', 'Data': '10/03/2025', 'Status': 'Concluído' },
    { 'Últimas ações': 'Refatoração de código', 'Repositório': 'Gitlab', 'Projeto': 'USP', 'Data': '10/03/2025', 'Status': 'Cancelado' }
  ];
}
