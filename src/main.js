const config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 500,
    scene: {
        preload: preload,
        create: create,
        update: update
    } 
};

const game = new Phaser.Game(config);

function preload () {
this.load.image('bg','assets/imagens/casa.png');
}


function create () {
   this.add.image(500,500, 'bg')
   .setDisplaySize(1000, 500)
   .setOrigin(0.5,1);                         
}


function update (time,delta) {

}