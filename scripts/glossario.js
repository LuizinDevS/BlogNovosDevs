function glossarioComponent(idContainer, termos) {
    const container = document.getElementById(idContainer);

    termos.forEach(termo => {
        let wrapper = document.createElement('div');
        let conteudo = document.createElement('li');

        conteudo.innerText = termo.termo + ': ' + termo.definicao;

        wrapper.appendChild(conteudo);

        container.appendChild(wrapper);
    });
}

const termos = [
    {
        termo: 'CRUD',
        definicao: `É um acrônimo para "Create", "Read", "Update" e "Delete" que são 
        as operações básicas possíveis de realizar no banco de dados.`
    },
    {
        termo: 'Ambiente de Produção',
        definicao: `É o ambiente do cliente com dados e situações reais para o qual a aplicação foi desenvolvida. 
        Ela só deve chegar neste ambiente após passar pelos testes na máquina do desenvolvedor e em ambiente de homologação.`
    },
    {
        termo: 'Ambiente de Homologação',
        definicao: `É o ambiente de testes com dados fictícios e situações que simulam o ambiente de produção. 
        A aplicação só deve chegar neste ambiente após passar pelos testes na máquina do desenvolvedor.`
    },
    {
        termo: 'API',
        definicao: `API significa "Application Programming Interface" e é um conjunto de regras que permitem que sistemas diferentes se comuniquem. 
        É amplamente utilizada para integrar serviços e aplicações.`
    },
    {
        termo: 'Deploy',
        definicao: `É o processo de disponibilizar uma aplicação ou serviço em um ambiente (como homologação ou produção), 
        para que ele possa ser acessado e utilizado.`
    },
    {
        termo: 'Scrum',
        definicao: `É uma metodologia ágil usada para gerenciar e organizar projetos, principalmente no desenvolvimento de software, 
        dividindo o trabalho em ciclos chamados "sprints".`
    },
    {
        termo: 'Pipeline',
        definicao: `É uma sequência de etapas automatizadas no processo de desenvolvimento de software, como construção, testes e deploy, 
        frequentemente gerenciado por ferramentas de integração contínua.`
    },
    {
        termo: 'Backlog',
        definicao: `No contexto de metodologias ágeis, é uma lista priorizada de tarefas ou funcionalidades que precisam ser desenvolvidas 
        ou implementadas em um projeto.`
    },
    {
        termo: 'CI/CD',
        definicao: `CI significa "Continuous Integration" e CD significa "Continuous Delivery" ou "Continuous Deployment". 
        É um conjunto de práticas que automatizam a integração e entrega de código para acelerar o desenvolvimento.`
    },
    {
        termo: 'Hotfix',
        definicao: `É uma correção urgente feita diretamente no ambiente de produção para resolver problemas críticos, geralmente sem passar pelo processo completo de testes.`
    },
    {
        termo: 'Sprint',
        definicao: `É um período de tempo (geralmente de 1 a 4 semanas) durante o qual uma equipe de desenvolvimento trabalha 
        para concluir um conjunto de tarefas previamente planejadas.`
    },
    {
        termo: 'Kanban',
        definicao: `É uma metodologia visual de gerenciamento de tarefas, onde atividades são organizadas em colunas que representam 
        o status de progresso, como "A Fazer", "Em Progresso" e "Concluído".`
    },
    {
        termo: 'Tech Debt (Dívida Técnica)',
        definicao: `Refere-se ao custo adicional causado por decisões técnicas tomadas para acelerar a entrega, mas que precisam 
        ser revisadas ou corrigidas no futuro para manter a qualidade do sistema.`
    },
    {
        termo: 'Stakeholder',
        definicao: `São todas as partes interessadas em um projeto, como clientes, gerentes, desenvolvedores ou qualquer pessoa 
        impactada diretamente ou indiretamente pelo projeto.`
    },
    {
        termo: 'Product Owner (PO)',
        definicao: `É o papel no Scrum responsável por maximizar o valor do produto, definindo e priorizando as tarefas no backlog 
        e garantindo que a equipe esteja entregando valor ao cliente.`
    },
    {
        termo: 'MVP (Minimum Viable Product)',
        definicao: `É a versão mínima de um produto que pode ser lançada com o menor esforço possível, contendo apenas as funcionalidades essenciais para validação de mercado.`
    },
    {
        termo: 'Onboarding',
        definicao: `Refere-se ao processo de integração de novos membros em uma equipe ou organização, ajudando-os a se adaptar 
        às ferramentas, cultura e processos existentes.`
    },
    {
        termo: 'Code Review',
        definicao: `É o processo de revisão do código por outros desenvolvedores antes de ele ser integrado ao projeto principal, 
        garantindo qualidade e aderência às práticas de codificação.`
    }
];

glossarioComponent('glossario', termos)

