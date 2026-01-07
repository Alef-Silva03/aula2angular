export class Aluno{
    //construtor - método que cria o objeto aluno
    constructor(
        public id: number = 0,
        public nome: string = '',
        public sexo: string = '',
        public foto: string = '',
        public disciplina: string = '',
        public nota1: number = 0,
        public nota2: number = 0,
        public media: number = 0,
        public situacao: string = ''

    ){}
    // método para calcular média
    calcularMedia():void{
        this.media = (this.nota1 + this.nota2)/2;
    }

    //método para definir a situação
    definirSituacao():void{
        this.situacao = this.media >= 7 ? 'Aprovado' : 'Reprovado';
    }

    //método completo : calcular a média e a situação
    processarNotas():void{
        this.calcularMedia();
        this.definirSituacao();
    }


}// não pode escrever após