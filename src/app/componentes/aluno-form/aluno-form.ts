import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css',
})
export class AlunoForm {
  aluno = model.required<Aluno>();
  //output() - emite eventos para o componente pai
  onSubmit = output<void>();

  // Método chamado ao submete o formulário
  cadastrarAluno(): void {
    if (this.validarFormulario()) {
      this.onSubmit.emit();
    }
  }

  private validarFormulario(): boolean {
    const a = this.aluno();
    return a.nome.length > 0 &&
      a.nota1 >= 0 && a.nota2 > 0;
  }

  // Gerar uma foto aleatória
  gerarFotoAleatoria():void{
    const randomId = Math.floor(Math.random() * 100)+1;
    const genero = this.aluno().sexo === 'f'? 'women':'men';
    this.aluno().foto = `https://randomuser.me/api/portraits/${genero}/${randomId}.jpg`;
  }

}
