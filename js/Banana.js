class Banana
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
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("Quadrado","assets/Quadrado3.png");

   this.load.image("Voltar","assets/Voltar.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Repetir","assets/Repetir2.png");
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

    this.cursors = this.input.keyboard.createCursorKeys();



    this.voltar = this.add.sprite(10, 550,"Voltar");
    this.voltar.inputEnabled = true;
    this.voltar.events.onInputDown.add(this.voltar2, this);

    this.comecar = this.add.sprite(470, 555,"Começar");
    this.comecar.inputEnabled = true;
    this.comecar.events.onInputDown.add(this.INICIO, this);


    this.add.sprite(145, 70,"Ban");

    var alface = this.add.sprite(195, 210,"grande", 12);

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
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BA, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
}
COMECAR(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Comecar.mp3";
  this.audio.play();
  this.letra.Banana2();
}
BA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NA, this);
}
NA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA1.mp3";
  this.audio.play();

  this.linha.position.x = 295;
  this.linha2 = this.add.sprite(300, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NA2, this);
}
NA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA2.mp3";
  this.audio.play();

  this.linha.position.x = 442;
  this.linha2.position.x = 445;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM, this);
}
FIM(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;

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
