//Configurações
const config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 300,
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    } 
};

const game = new Phaser.Game(config);

//Arquivos
function preload () {

//Spritesheet Nunhes    
this.load.spritesheet ('nunhes', 'assets/imagens/nunhes.png', {
    frameWidth:21,
    frameHeight:10
});

//Fundo
this.load.image('bg','assets/imagens/casa.png');

//Spritesheet personagem
this.load.spritesheet('gabi', 'assets/imagens/gabi.png', {
    frameWidth:16,
    frameHeight:24
});
}

let personagem;
let nunhes

//Objetos
function create () {
    //Fundo
   this.add.image(500,300, 'bg')
   .setDisplaySize(1000, 300)
   .setOrigin(0.5,1);  


   //Personagem animações
   this.anims.create({
    key:'idle',
    frames: this.anims.generateFrameNumbers('gabi', {start: 0, end: 3}),
    frameRate: 1,
    repeat: -1
    });
    this.anims.create ({
        key: 'andar',
        frames: this.anims.generateFrameNumbers('gabi', {start: 4, end: 6}),
       frameRate: 6,
       repeat: -1 
    });
    personagem = this.add.sprite(200,240,'gabi')
        .setOrigin(1, 0.5)
        .setScale(5);

    personagem.anims.play('idle') 

//Nunhes Animações
    this.anims.create ({
        key:'idleNu',
        frames: this.anims.generateFrameNumbers('nunhes',{start: 0, end: 5}),
        frameRate: 6,
        repeat: -1
    }); 

    nunhes = this.add.sprite(300,270,'nunhes')
        .setOrigin(1 , 0.5)
        .setScale(5)

}



function update () {
    
    
}



//Relógio
const botaoIniciar = document.getElementById('botaoIniciar');
const timerDisplay = document.getElementById('timerDisplay');
let pomodoroInterval = null;
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startPomodoro() {
    let tempoTotal = 25 * 60;   
    if (pomodoroInterval) {
        clearInterval(pomodoroInterval);
    }

    pomodoroInterval = setInterval(() => {
        if (tempoTotal <= 0) {
            clearInterval(pomodoroInterval);
            timerDisplay.textContent = "Tempo esgotado!";
        } else {
            timerDisplay.textContent = formatTime(tempoTotal);
            tempoTotal--;
        }
    }, 1000);
   
}
botaoIniciar.addEventListener('click', startPomodoro);


