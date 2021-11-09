class Bule
{
 //contructor de classe
 constructor()
 {
   this.contador = 0;
   this.letra = new Letras;

 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("ceu","assets/FBU.png");
   this.load.image("Bola","assets/FonemaB/Bola2.png");
   this.load.image("Bola2","assets/FonemaB/Bola3.png");
   this.load.image("Abelha","assets/FonemaB/Abelha2.png");
   this.load.image("Abelha2","assets/FonemaB/Abelha3.png");
   this.load.image("Banana","assets/FonemaB/Banana.png");
   this.load.image("Banana2","assets/FonemaB/Banana2.png");
   this.load.image("Bule","assets/FonemaB/Bule2.png");
   this.load.image("Bule2","assets/FonemaB/Bule3.png");
   this.load.image("Bicicleta","assets/FonemaB/Bicicleta3.png");
   this.load.image("Bicicleta2","assets/FonemaB/Bicicleta4.png");
 
    
   this.load.image("FF3","assets/Preto.PNG");
   this.load.image("LB","assets/Lb.PNG");
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Começar","assets/Comecar.png");
   this.load.image("Repetir","assets/Repetir.png");
   this.load.image("Escolha","assets/Escolha.png");
   this.load.image("Bol","assets/Bol.png");
   this.load.image("Bic","assets/Bic.png");
   this.load.image("Abe","assets/Abe.png");
   this.load.image("Ban","assets/Ban.png");
   this.load.image("Bul","assets/Bul.png");


 }
 create()
 {
    this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    // /this.add.sprite(0,0,"FF3");

    this.cursors = this.input.keyboard.createCursorKeys();



    this.voltar = this.add.sprite(10, 550,"Voltar");
    this.voltar.inputEnabled = true;
    this.voltar.events.onInputDown.add(this.voltar2, this);

    this.comecar = this.add.sprite(470, 555,"Começar");
    this.comecar.inputEnabled = true;
    this.comecar.events.onInputDown.add(this.INICIO, this);


    this.add.sprite(200, 70,"Bul");

    var bola2 = this.add.sprite(200, 210,"Bule2");

    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

    this.seta2 = this.add.sprite(560, 480,"Seta2");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);

}
 update()
 {
}
SETA(){
  this.seta2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA2, this);
}
SETA2(){
  this.seta2.position.x = 560;
  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}
INICIO(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BU, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
}
COMECAR(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Comecar.mp3";
  this.audio.play();
  this.letra.Bule2();
}
BU(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LE, this);
}
LE(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LE.mp3";
  this.audio.play();

  this.linha.position.x = 355;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM, this);
}
FIM(){
  this.linha.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.REPETIR, this);
}
REPETIR(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO, this);
}
voltar2(){
  game.state.start('FonemaB');
}
}
