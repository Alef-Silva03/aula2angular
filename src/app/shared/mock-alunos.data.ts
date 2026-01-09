import { Aluno } from "../models/aluno.model";

// O que são dados mock?
// São dados de exemplo para testar nossa aplicação

export const ALUNOS_MOCK: Aluno[] = [
    new Aluno(1, 'Ana Costa', 'f', 'https://randomuser.me/api/portraits/women/1.jpg', 'Angular', 8, 9),
    new Aluno(2, 'jhonatan', 'm', 'https://randomuser.me/api/portraits/men/2.jpg', 'Java', 10, 5),
    new Aluno(3, 'Miguel', 'm', 'https://randomuser.me/api/portraits/men/3.jpg', 'Angular', 10, 10),
    new Aluno(4, 'Joao', 'm', 'https://randomuser.me/api/portraits/men/4.jpg', 'Java', 7, 9),
    new Aluno(5, 'Patricia', 'f', 'https://randomuser.me/api/portraits/women/5.jpg', 'Angular', 1, 2),
    new Aluno(6, 'leticia', 'f', 'https://randomuser.me/api/portraits/women/6.jpg', 'Angular', 2, 3),
    new Aluno(7, 'Pedro', 'm', 'https://randomuser.me/api/portraits/men/7.jpg', 'JAva', 10, 10)
];

// Processar notas de todos os alunos mock
ALUNOS_MOCK.forEach(aluno => aluno.processarNotas())