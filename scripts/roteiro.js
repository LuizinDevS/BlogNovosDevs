

function controlaAcordeon(id) {
    const card = document.getElementById(id);
    card.classList.toggle('acordeonFechado');
}

function acordeonComponent(idContainer, acordeons) {
    const container = document.getElementById(idContainer);

    acordeons.forEach((acordeon, index) => {
        let wrapper = document.createElement('div');
        wrapper.className = 'roteiroWrapper';

        let titulo = document.createElement('h3');
        titulo.innerText = acordeon.titulo;

        let containerConteudo = document.createElement('div');
        containerConteudo.id = index;
        containerConteudo.classList.add('acordeon', 'acordeonFechado');

        wrapper.addEventListener('click', () => controlaAcordeon(index));

        let conteudo = document.createElement('p');
        conteudo.innerHTML = acordeon.conteudo;

        wrapper.appendChild(titulo);
        containerConteudo.appendChild(conteudo);

        wrapper.appendChild(containerConteudo);

        container.appendChild(wrapper);
    });
}

const acordeons = [
    {
        titulo: '1- Lógica Booleana',
        conteudo: `A lógica booleana é a base para a lógica computacional, está presente em TODAS as linguagens de programação e
        é através delas que realizamos as tomadas de decisão e controlamos o fluxo de execução dos programas.
        É utilizada para escrever as condições para determinados blocos de código serem executados, como em comandos if, else, while, for e etc...
        
        Os principais operadores da lógica booleana são:
                        
        <li>
            AND (E): Retorna verdadeiro somente se todas as condições forem verdadeiras.
            Exemplo: true AND true = true
        </li>
        <li>
            OR (OU): Retorna verdadeiro se pelo menos uma condição for verdadeira.
            Exemplo: true OR false = true
        </li>
        <li>
            NOT (NÃO): Inverte o valor lógico.
            Exemplo: NOT true = false
        </li>`,
        link: 'https://dev.to/linivecristine/logica-booleana-e-operadores-logicos-269a'
    },
    {
        titulo: '2- Variáveis e Tipos Primitivos de Dados',
        conteudo: `Variáveis são espaços na memória do computador utilizados para armazenar dados. Os tipos primitivos representam 
        os tipos básicos de dados disponíveis em uma linguagem de programação, como:
        <li>String: Representa textos (exemplo: "Olá, mundo").</li>
        <li>Number: Representa números (exemplo: 42).</li>
        <li>Boolean: Representa valores verdadeiros ou falsos (true ou false).</li>
        <li>Undefined: Representa uma variável que foi declarada, mas não tem valor.</li>
        <li>Null: Representa a ausência de valor.</li>`,
        link: 'https://www.w3schools.com/js/js_datatypes.asp'
    },
    {
        titulo: '3- Condicionais e Laços de Repetição',
        conteudo: `Condicionais e laços de repetição são fundamentais para controlar o fluxo de execução de um programa:
        <li>Condicionais como if, else e switch permitem executar blocos de código com base em condições.</li>
        <li>Laços como for, while e do-while permitem repetir blocos de código até que uma condição seja atendida.</li>
        Exemplo de condicional:
        if (idade >= 18) { console.log("Maior de idade"); } else { console.log("Menor de idade"); }`,
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration'
    },
    {
        titulo: '4- Arrays, Matrizes e Listas',
        conteudo: `Arrays, matrizes e listas são usados para armazenar coleções de dados:
        <li>Array: Estrutura unidimensional para armazenar valores.</li>
        <li>Matriz: Estrutura bidimensional ou multidimensional (array de arrays).</li>
        <li>Lista: Similar a arrays, mas mais flexível em algumas linguagens (como Python).</li>
        Exemplo de array: const numeros = [1, 2, 3, 4];`,
        link: 'https://www.w3schools.com/js/js_arrays.asp'
    },
    {
        titulo: '5- Algoritmos e Funções',
        conteudo: `Algoritmos são sequências lógicas e finitas de passos para resolver um problema. Funções são blocos reutilizáveis de código:
        <li>Definir uma função: function saudacao(nome) { return "Olá, " + nome; }</li>
        <li>Chamar uma função: saudacao("Maria");</li>
        Funções ajudam a modularizar o código e evitar repetições.`,
        link: 'https://www.freecodecamp.org/news/funcoes-em-javascript/'
    },
    {
        titulo: '6- Programação Orientada a Objetos (POO)',
        conteudo: `POO é um paradigma de programação que organiza o código em torno de objetos e suas interações. 
        Conceitos-chave:
        <li>Classes: Modelos para criar objetos.</li>
        <li>Objetos: Instâncias de classes.</li>
        <li>Herança: Reutilização de código entre classes.</li>
        <li>Encapsulamento: Ocultar detalhes internos.</li>
        <li>Polimorfismo: Capacidade de um método se comportar de maneiras diferentes.</li>`,
        link: 'https://www.alura.com.br/artigos/o-que-e-programacao-orientada-a-objetos'
    },
    {
        titulo: '7- Versionamento de Código (Git e GitHub)',
        conteudo: `Git é uma ferramenta de controle de versão que permite rastrear mudanças no código. GitHub é uma plataforma que hospeda repositórios Git.
        Principais comandos:
        <li>git init: Inicializa um repositório.</li>
        <li>git add: Adiciona mudanças ao staging.</li>
        <li>git commit: Salva mudanças no histórico.</li>
        <li>git push: Envia mudanças para o repositório remoto.</li>`,
        link: 'https://rogerdudler.github.io/git-guide/index.pt_BR.html'
    },
    {
        titulo: '8- Banco de Dados (CRUD)',
        conteudo: `CRUD são as operações básicas em bancos de dados:
        <li>Create: Inserir novos dados.</li>
        <li>Read: Ler ou consultar dados.</li>
        <li>Update: Atualizar dados existentes.</li>
        <li>Delete: Excluir dados.</li>
        Bancos de dados relacionais usam SQL para essas operações.`,
        link: 'https://www.devmedia.com.br/introducao-ao-sql/38384'
    },
    {
        titulo: '9- Escolha de Stack de Atuação',
        conteudo: `Escolher uma stack depende do seu interesse:
        <li>Front-end: Desenvolvimento da interface do usuário (HTML, CSS, JavaScript).</li>
        <li>Back-end: Desenvolvimento da lógica e banco de dados do servidor (Node.js, Python, Java).</li>
        <li>Fullstack: Combinação de front-end e back-end.</li>
        <li>Mobile: Aplicativos para dispositivos móveis (React Native, Flutter).</li>`,
        link: 'https://blog.geekhunter.com.br/front-end-back-end-full-stack/'
    }
];

acordeonComponent('roteiroContainer', acordeons)