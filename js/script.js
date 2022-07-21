const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
//Outra forma de puxar as coisas para trabalhoar no script é através do getElementByClassName ou getElementById. O querySelector funciona tanto para id quanto para classes, o que vai mudar vai ser o uso do . ou de #

//É uma forma de criar funções do JS 6. Entre parênteses seriam os parâmetros e entre chaves o retorno. É chamada de arrow function, função anônima ou closures
const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500)
    //SetTimeout é uma função que vai execurtar outra função após determinado tempo
    //O tempo de 500ms é por causa do tempo do pulo no CSS, que é de 500ms
};

// O setInterval cria um intervalo de execução da função. QUando houver colisão do mario com o cano no eixo X vamos ter o game over. O loop vai servir para verificar se houve ou não a colisão e se o jogador continua ou não
const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";

        clearInterval(loopGame)

    }

    
}, 10);

document.addEventListener("keydown", jump);