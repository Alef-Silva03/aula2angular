import { Injectable, signal } from '@angular/core';
import { ALUNOS_MOCK } from '../shared/mock-alunos.data';
import { Aluno } from '../models/aluno.model';

/* O que é um service? 
é como um garçom que gerencia os dados
entrega dados para os componentes quando prcisam

*/

@Injectable({
  providedIn: 'root',
})
export class AlunoServices {
  private alunosSignal = signal<Aluno[]>([...ALUNOS_MOCK]);

  // Método para obter a lista dos alunos
  obterAlunos(){
    return this.alunosSignal.asReadonly();
  }

  // Método para obter a lista dos alunos

  // Método para adicionar novo aluno

  // Método para atualizar a lista de alunos
  
  // Método para buscar aluno por id

}
