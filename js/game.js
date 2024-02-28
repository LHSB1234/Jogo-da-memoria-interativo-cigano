const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector ('.jogador');
const timer = document.querySelector ('.timer');

const ciganos = [
    'ABailarina',
    'ACigana',
    'AProfetisa',
    'ARainha',
    'Melusina',
    'OAnjo',
    'OFerreiro',
    'OGigante',
    'OGuerreiro',
    'OLadrao',
    'OMusico',
    'ORei',
    'SantaSara',
    'OBarao',
    'OCasal',
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const checkFim = () => {
    const desabilitarCarta = document.querySelectorAll('.desabilitar-carta');

    if (desabilitarCarta.length === 30) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} você ganhou!`);
    }

}

const checkCarta = () => {
    const primeiroCigano = primeiraCarta.getAttribute('data-cigano');
    const segundoCigano = segundaCarta.getAttribute('data-cigano');

    if (primeiroCigano === segundoCigano) {

        primeiraCarta.firstChild.classList.add('desabilitar-carta');
        segundaCarta.firstChild.classList.add('desabilitar-carta');

        primeiraCarta = '';
        segundaCarta = '';

        checkFim();

    } else {

        setTimeout(() => {

            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            primeiraCarta = '';
            segundaCarta = '';

        }, 800);

    }
}

const revealCarta = ({ target }) => {

    if (target.parentNode.className.includes('revelar-carta')) {
        return;
    }

    if (primeiraCarta === '' ) {
        target.parentNode.classList.add('revelar-carta');
        primeiraCarta = target.parentNode;
    
    } else if (segundaCarta === '') {

        target.parentNode.classList.add('revelar-carta');
        segundaCarta = target.parentNode;

        checkCarta();

    }
}

const createCarta = (cigano) => {

    const carta = createElement('div', 'carta');
    const frente = createElement('div', 'face frente');
    const verso = createElement('div', 'face verso');

    frente.style.backgroundImage = `url('../imagens/${cigano}.png')`;

    carta.appendChild(frente);
    carta.appendChild(verso);

    carta.addEventListener('click', revealCarta);
    carta.setAttribute('data-cigano', cigano);

    return carta;
}

const loadGame = () => {
    const duplicateCiganos = [...ciganos, ...ciganos];
  
    const shuffle = (array) => {
      let currentIndex = array.length, randomIndex;
  
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
  
        [array[currentIndex - 1], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex - 1],
        ];
  
        currentIndex--;
      }
  
      return array;
    };
  
    const shuffledArray = shuffle(duplicateCiganos);
  
    shuffledArray.forEach((cigano) => {
      const carta = createCarta(cigano);
      grid.appendChild(carta);
    });
  };

let loop;

const startTimer = () => {
    loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('jogador');
    startTimer();
    loadGame();
}

