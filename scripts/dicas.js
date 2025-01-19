class Dica {
    titulo;
    conteudo;

    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
}

function dicasComponent(idContainer, dicas) {
    const container = document.getElementById(idContainer);

    dicas.forEach(dica => {
        let wrapper = document.createElement('div');
        let titulo = document.createElement('h3');
        let conteudo = document.createElement('li');

        titulo.innerText = dica.titulo;
        conteudo.innerText = dica.conteudo;

        wrapper.appendChild(titulo);
        wrapper.appendChild(conteudo);

        container.appendChild(wrapper);
    });
}

const dicas = [
    new Dica('1. Aprenda os fundamentos',
        'Domine lógica de programação, entenda conceitos como variáveis, loops, condicionais, funções e estruturas de dados.'),
    new Dica('2. Escolha uma linguagem de programação',
        'Comece com linguagens como Python ou JavaScript, dependendo do tipo de desenvolvimento que deseja fazer.'),
    new Dica('3. Pratique constantemente',
        'Resolva exercícios em plataformas como HackerRank ou Codewars e crie pequenos projetos para aplicar o que aprendeu.'),
    new Dica('4. Não tenha medo de errar',
        'Leia e entenda mensagens de erro. Elas são fundamentais para corrigir e melhorar seu código.'),
    new Dica('5. Entenda o ciclo de desenvolvimento',
        'Aprenda como funciona desde o planejamento, codificação e testes até a manutenção.'),
    new Dica('6. Use ferramentas adequadas',
        'Familiarize-se com editores ou IDEs como VSCode, controle de versão com Git, e plataformas como GitHub.'),
    new Dica('7. Leia e escreva código de qualidade',
        'Pratique boas práticas, como nomeação de variáveis clara e comentários explicativos.'),
    new Dica('8. Participe da comunidade',
        'Faça perguntas e interaja em fóruns como Stack Overflow, participe de meetups e eventos online.'),
    new Dica('9. Conheça algoritmos e estruturas de dados',
        'Estude listas, filas, pilhas, árvores, grafos, e algoritmos de busca e ordenação.'),
    new Dica('10. Desenvolva a mentalidade de resolver problemas',
        'Trabalhe em diferentes abordagens para uma mesma questão e pense em otimizações.'),
    new Dica('11. Fique atualizado',
        'Acompanhe blogs, canais no YouTube e cursos para aprender novas tecnologias.'),
    new Dica('12. Seja paciente',
        'A programação é um aprendizado contínuo. Celebre pequenas conquistas e mantenha a prática.')
];

dicasComponent('dicas', dicas)