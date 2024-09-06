# Jogo da Memória Interativo - Versão Cigana

Este projeto é um jogo da memória interativo com uma temática cigana, desenvolvido em HTML, CSS e JavaScript. O jogador deve encontrar pares de cartas iguais no menor tempo possível. O projeto utiliza recursos como armazenamento local (localStorage) e manipulação do DOM para a criação dinâmica das cartas e controle do jogo.

## Funcionalidades

- Tela de login simples, onde o jogador insere seu nome para começar o jogo.
- Temporizador para medir o tempo que o jogador leva para completar o jogo.
- Layout responsivo e design simples com cartas estilizadas com imagens temáticas ciganas.
- Armazenamento do nome do jogador no localStorage para ser exibido na tela do jogo.
- Jogo da memória com cartas aleatoriamente embaralhadas em cada partida.

## Estrutura de Arquivos

### HTML

- **index.html**: Página inicial com o formulário de login, onde o jogador insere seu nome para iniciar o jogo.
- **game.html**: Página onde o jogo da memória é exibido. Mostra o nome do jogador e o tempo de jogo.

### CSS

- **reset.css**: Reset básico de CSS para garantir consistência entre navegadores.
- **login.css**: Estilos para a página de login.
- **game.css**: Estilos para a página do jogo, incluindo a disposição das cartas em um grid e os efeitos de rotação das cartas.

### JavaScript

- **login.js**: Validação do formulário de login, armazenamento do nome do jogador no localStorage, e redirecionamento para a página do jogo.
- **game.js**: Lógica do jogo da memória, incluindo o embaralhamento das cartas, controle de tempo e verificação de pares de cartas.

## Tecnologias Utilizadas

- **HTML5**: Marcações semânticas para criar a estrutura do jogo.
- **CSS3**: Estilos para o layout e aparência do jogo, incluindo transições e animações para as cartas.
- **JavaScript**: Manipulação do DOM para implementar a lógica do jogo e interatividade.

## Como Jogar

1. O jogador insere seu nome na página inicial (login).
2. Ao clicar em "Jogar", o nome é salvo no localStorage e o jogador é redirecionado para a página do jogo.
3. O jogo da memória consiste em encontrar pares de cartas iguais. Clique em duas cartas para revelá-las. Se elas forem iguais, permanecem viradas. Caso contrário, as cartas viram novamente.
4. O objetivo é encontrar todos os pares no menor tempo possível.
5. Ao completar o jogo, uma mensagem de parabéns será exibida com o tempo total.

## Status do Projeto

**Este projeto ainda não está finalizado.** Algumas funcionalidades estão em desenvolvimento, e melhorias estão sendo implementadas.
