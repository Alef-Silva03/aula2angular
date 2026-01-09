import { Component, Input } from '@angular/core';
import { Aluno } from '../../models/aluno.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './aluno-list.html',
  styleUrl: './aluno-list.css',
})
export class AlunoList {
  @Input() alunos: Aluno[] = [];

  // MÉTODO trackBy PARA MELHOR PERFORMANCE
  trackById(index: number, aluno: Aluno): number {
    return aluno.id;
  }

}