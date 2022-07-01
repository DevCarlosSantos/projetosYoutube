const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');



const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    
}

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (tuboPosition <= 125 && tuboPosition > 0 && marioPosition < 105  ) {

        tubo.style.animation = "nome";
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = "nome";
        mario.style.bottom = `${marioPosition - 50 }px`;

        mario.src = './imagens/derrota.png';
        mario.style.width = '250px';

        clearInterval(loop);
        
    }
}
)

document.addEventListener('keydown', jump);