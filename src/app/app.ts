import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aluno } from './models/aluno.model';
import { AlunoServices } from './services/aluno.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('aula2angular');
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoServices){}

  ngOnInit(): void {
    this.alunos = this.alunoService.obterAlunos()();
  }
  

}
