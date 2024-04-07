/*
    - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

         Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

        Passo 2 - identificar o clique no botão 

        Passo 3 - adicionar a classe ativo nos projetos escondidos 

    - Objetivo 2 - esconder o botão de mostrar mais 

        Passo 1 - pegar o botão e esconder ele 
*/


// - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); //pegando o elemento no codigo do site e atribuindo a uma variavel
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)') // atribuindo elementos que possuam a classe projetos e que não possuem a clase ativo

//querySelector = seleciona apenas um elemento com aquele valor
//querySelectoAll = seleciona todos os elementos com aquele valor

//Passo 2 - identificar o clique no botão

//utiliza o evento addEventListener para perceber se houve alguma ação no  botão
botaoMostrarProjetos.addEventListener('click', () => {
    //aqui será executado uma ação quando ocorrer um clique no botão

    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostrarMaisProjetos();

    //- Objetivo 2 - esconder o botão de mostrar mais 
    //Passo 1 - pegar o botão e esconder ele 
    esconderBotao();

});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });
}
