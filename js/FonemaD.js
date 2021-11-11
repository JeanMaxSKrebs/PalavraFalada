class FonemaD
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
  
   this.load.image("Linha2","assets/Linha2aa.png");
   this.load.image("Linha3","assets/LinhaBE3.png");
  

 }
 create()
 {
    //this.audiojogo();


    this.fundo = this.add.sprite(0,0,"ceu");
    this.add.sprite(0,0,"FF3");

    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();


      this.quad1 = this.add.sprite(30, 200,"Quadrado");

      this.quad2 = this.add.sprite(275, 230,"Quadrado");

      this.quad3 = this.add.sprite(130, 380,"Quadrado");

      this.quad4 = this.add.sprite(418, 380,"Quadrado");

      this.quad5 = this.add.sprite(510, 200,"Quadrado");



    this.da = this.add.sprite(38, 205,"Da");
    this.da.inputEnabled = true;
    this.da.events.onInputDown.add(this.Da, this);

    this.de = this.add.sprite(280, 235,"De");
    this.de.inputEnabled = true;
    this.de.events.onInputDown.add(this.De, this);

    this.do = this.add.sprite(137, 385,"Do");
    this.do.inputEnabled = true;
    this.do.events.onInputDown.add(this.Do, this);

    this.du = this.add.sprite(424, 390,"Du");
    this.du.inputEnabled = true;
    this.du.events.onInputDown.add(this.Du, this);

    this.di = this.add.sprite(520, 205,"Di");
    this.di.inputEnabled = true;
    this.di.events.onInputDown.add(this.Di, this);

    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.Voltar2, this);

    this.escolha = this.add.sprite(100, 70,"Escolha");

    this.ld = this.add.sprite(-10, -10,"LD");





}
 update()
 {
}

Da(){
  this.da.position.x = 1000;
  this.de.position.x = 1000;
  this.di.position.x = 1000;
  this.do.position.x = 1000;
  this.du.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha2 = this.add.sprite(45, 70,"Escolha2");

  this.ld.position.x = 1000;

  this.dado = this.add.sprite(49, 235,"pequeno", 43);
  this.dado.inputEnabled = true;
  this.dado.events.onInputDown.add(this.Dado, this);

  this.andando = this.add.sprite(295, 370,"pequeno", 39);
  this.andando.inputEnabled = true;
  this.andando.events.onInputDown.add(this.Andando, this);

  this.moeda = this.add.sprite(535, 240,"pequeno", 50);
  this.moeda.inputEnabled = true;
  this.moeda.events.onInputDown.add(this.Moeda, this);
}

Dado(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.dado.position.x = 1000;
  this.andando.position.x = 1000;
  this.moeda.position.x = 1000;

  this.escolha2.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DA1, this);


  this.add.sprite(190, 70,"Dad");

  var dado2 = this.add.sprite(200, 230,"grande", 43);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1DA1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.DA1DA1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
DA1DA1(){

  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DO1DA1, this);
}
DO1DA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha.position.x = 335;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1DA1, this);
}
FIM1DA1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1DA1();
}
REPETIR1DA1(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DA1, this);
}
COMECAR(){
  this.audio = new Audio();
  this.audio.play();
}
SETA(){
  this.seta2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA2, this);
}
SETA2(){
  this.seta2.position.x = 560;
  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

Andando(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.moeda.position.x = 1000;
  this.andando.position.x = 1000;
  this.dado.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DA2, this);


  this.add.sprite(110, 70,"And");

  var andando2 = this.add.sprite(200, 250,"grande", 39);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DA2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AN2DA2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
AN2DA2(){

  this.audio.src = "assets/sons/AN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(105, 140,"Linha");
  this.linha2 = this.add.sprite(125, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DAN2DA2, this);
}
DAN2DA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DAN.mp3";
  this.audio.play();

  this.linha.position.x = 255;
  this.linha2.position.x = 335;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DO2DA2, this);
}
DO2DA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha.position.x = 475;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2CA2, this);
}
FIM2CA2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DA2();
}
REPETIR2DA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DA2, this);
}


Moeda(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.moeda.position.x = 1000;
  this.andando.position.x = 1000;
  this.dado.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DA3, this);


  this.add.sprite(140, 70,"Moe");

  var moeda2 = this.add.sprite(200, 210,"grande", 50);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DA3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.MO3DA3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
MO3DA3(){

  this.audio.src = "assets/sons/MO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");
  this.linha2 = this.add.sprite(190, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E3DA3, this);
}
E3DA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/E.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(321, 135,"Linha3");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DA3DA3, this);
}
DA3DA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha.position.x = 390;

  this.linha3.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DA3, this);
}
FIM3DA3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DA3();
}
REPETIR2DA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DA3, this);
}


De(){
  this.da.position.x = 1000;
  this.de.position.x = 1000;
  this.di.position.x = 1000;
  this.do.position.x = 1000;
  this.du.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha2 = this.add.sprite(45, 70,"Escolha2");

  this.ld.position.x = 1000;

  this.dedo = this.add.sprite(55, 240,"pequeno", 43);
  this.dedo.inputEnabled = true;
  this.dedo.events.onInputDown.add(this.Dedo, this);

  this.acidente = this.add.sprite(295, 395,"pequeno", 37);
  this.acidente.inputEnabled = true;
  this.acidente.events.onInputDown.add(this.Acidente, this);

  this.rede = this.add.sprite(535, 240,"pequeno", 51);
  this.rede.inputEnabled = true;
  this.rede.events.onInputDown.add(this.Rede, this);
}



Dedo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.dedo.position.x = 1000;
  this.acidente.position.x = 1000;
  this.rede.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DE1, this);


  this.add.sprite(190, 70,"Ded");

  var dedo2 = this.add.sprite(220, 220,"grande", 43);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1DE1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.DE1DE1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
DE1DE1(){

  this.audio.src = "assets/sons/DE2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DO1DE1, this);
}
DO1DE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha.position.x = 335;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1DE1, this);
}
FIM1DE1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1DE1();
}
REPETIR1DE1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DE1, this);
}


Acidente(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.acidente.position.x = 1000;
  this.rede.position.x = 1000;
  this.dedo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DE2, this);


  this.add.sprite(100, 70,"Aci");

  var acidente2 = this.add.sprite(200, 240,"grande", 37);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DE2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A2DE2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
A2DE2(){

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(96, 140,"Linha2");
  this.linha2 = this.add.sprite(118, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CI2DE2, this);
}
CI2DE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(163, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DEN2DE2, this);
}
DEN2DE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DEN.mp3";
  this.audio.play();

  this.linha3.position.x = 285;

  this.linha4 = this.add.sprite(350, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE2DE2, this);
}
TE2DE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha3.position.x = 490;
  this.linha4.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2DE2, this);
}
FIM2DE2(){
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2DE2();
}
REPETIR2DE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DE2, this);
}



Rede(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.rede.position.x = 1000;
  this.acidente.position.x = 1000;
  this.dedo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DE3, this);


  this.add.sprite(190, 70,"Red");

  var rede2 = this.add.sprite(220, 210,"grande", 51);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DE3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.RE3DE3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
RE3DE3(){

  this.audio.src = "assets/sons/RE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DE3DE3, this);
}
DE3DE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DE.mp3";
  this.audio.play();

  this.linha.position.x = 340;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DE3, this);
}
FIM3DE3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DE3();
}
REPETIR2DE3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DE3, this);
}



Di(){
  this.da.position.x = 1000;
  this.de.position.x = 1000;
  this.di.position.x = 1000;
  this.do.position.x = 1000;
  this.du.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha2 = this.add.sprite(45, 70,"Escolha2");

  this.ld.position.x = 1000;

  this.diamante = this.add.sprite(50, 250,"pequeno", 44);
  this.diamante.inputEnabled = true;
  this.diamante.events.onInputDown.add(this.Diamante, this);

  this.armadilha = this.add.sprite(295, 400,"pequeno", 40);
  this.armadilha.inputEnabled = true;
  this.armadilha.events.onInputDown.add(this.Armadilha, this);

  this.explodi = this.add.sprite(525, 240,"pequeno", 48);
  this.explodi.inputEnabled = true;
  this.explodi.events.onInputDown.add(this.Explodi, this);
}


Diamante(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.diamante.position.x = 1000;
  this.armadilha.position.x = 1000;
  this.explodi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI1, this);


  this.add.sprite(75, 70,"Dia");

  var diamante2 = this.add.sprite(200, 250,"grande", 44);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1DI1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.DI1DI1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
DI1DI1(){

  this.audio.src = "assets/sons/DI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(75, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.A1DI1, this);
}
A1DI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(195, 140,"Linha2");
  this.linha3 = this.add.sprite(215, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MAN1DI1, this);
}
MAN1DI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MAN.mp3";
  this.audio.play();

  this.linha.position.x = 260;

  this.linha2.position.x = 1000;
  this.linha3.position.x = 1000;

    this.linha4 = this.add.sprite(370, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE1DI1, this);
}
TE1DI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 495;

  this.linha4.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1DI1, this);
}
FIM1DI1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1DI1();
}
REPETIR1DI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI1, this);
}

Armadilha(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.armadilha.position.x = 1000;
  this.diamante.position.x = 1000;
  this.explodi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(62, 70,"Arm");

  var armadilha2 = this.add.sprite(200, 240,"grande", 40);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DI2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AR2DI2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
AR2DI2(){

  this.audio.src = "assets/sons/AR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(60, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha.position.x = 182;

  this.linha2 = this.add.sprite(201, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DI.mp3";
  this.audio.play();

  this.linha.position.x = 328;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LHA2DI2, this);
}
LHA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LHA.mp3";
  this.audio.play();

  this.linha.position.x = 453;

  this.linha2.position.x = 508;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DI2, this);
}
FIM2DI2(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DI2();
}
REPETIR2DI2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI2, this);
}

Explodi(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.explodi.position.x = 1000;
  this.armadilha.position.x = 1000;
  this.diamante.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI3, this);


  this.add.sprite(125, 70,"Exp");

  var explodi2 = this.add.sprite(190, 210,"grande", 48);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DI3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.EX3DI3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
   this.repetir.position.x = 1000;
}
EX3DI3(){

  this.audio.src = "assets/sons/EX.mp3";
  this.audio.play();

  this.linha = this.add.sprite(140, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PLO3DI3, this);
}
PLO3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PLO.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  this.linha2 = this.add.sprite(310, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI3DI3, this);
}
DI3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DI.mp3";
  this.audio.play();

  this.linha.position.x = 440;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DI3, this);
}
FIM3DI3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DI3();
}
REPETIR2DI3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI3, this);
}




Do(){
  this.da.position.x = 1000;
  this.de.position.x = 1000;
  this.di.position.x = 1000;
  this.do.position.x = 1000;
  this.du.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha2 = this.add.sprite(45, 70,"Escolha2");

  this.ld.position.x = 1000;

  this.doce = this.add.sprite(50, 245,"pequeno", 45);
  this.doce.inputEnabled = true;
  this.doce.events.onInputDown.add(this.Doce, this);

  this.amendoim = this.add.sprite(295, 385,"pequeno", 38);
  this.amendoim.inputEnabled = true;
  this.amendoim.events.onInputDown.add(this.Amendoim, this);

  this.calçado = this.add.sprite(530, 260,"pequeno", 41);
  this.calçado.inputEnabled = true;
  this.calçado.events.onInputDown.add(this.Calçado, this);
}

Doce(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.doce.position.x = 1000;
  this.amendoim.position.x = 1000;
  this.calçado.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DO1, this);


  this.add.sprite(185, 70,"Doc");

  var doce2 = this.add.sprite(200, 240,"grande", 45);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1DO1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.DO1DO1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
DO1DO1(){

  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CE1DO1, this);
}
CE1DO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha.position.x = 340;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1DO1, this);
}
FIM1DO1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1DO1();
}
REPETIR1DO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DO1, this);
}

Amendoim(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.amendoim.position.x = 1000;
  this.doce.position.x = 1000;
  this.calçado.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DO2, this);


  this.add.sprite(65, 70,"Ame");

  var amendoim2 = this.add.sprite(220, 240,"grande", 38);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A2DO2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
A2DO2(){

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(59, 135,"Linha3");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MEN2DO2, this);
}
MEN2DO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MEN.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha3 = this.add.sprite(133, 140,"Linha");
  this.linha4 = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DO2DO2, this);
}
DO2DO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha3.position.x = 360;
  this.linha4.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.IM2DO2, this);
}
IM2DO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/IM.mp3";
  this.audio.play();

  this.linha3.position.x = 495;
  this.linha4.position.x = 505;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DO2, this);
}
FIM2DO2(){
  this.linha3.position.x = 1000;
  this.linha4.position.x = 1000;
  this.start();
  this.REPETIR2DO2();
}
REPETIR2DO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DO2, this);
}



Calçado(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.calçado.position.x = 1000;
  this.amendoim.position.x = 1000;
  this.doce.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DO3, this);


  this.add.sprite(85, 70,"Cal");

  var calçado2 = this.add.sprite(210, 250,"grande", 41);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CAL3DO3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CAL3DO3(){

  this.audio.src = "assets/sons/CAL.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha");

  this.linha2 = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.ÇA3DO3, this);
}
ÇA3DO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ÇA.mp3";
  this.audio.play();

  this.linha.position.x = 320;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DO3DO3, this);
}
DO3DO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha.position.x = 450;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DO3, this);
}
FIM3DO3(){
  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DO3();
}
REPETIR2DO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DO3, this);
}


Du(){
  this.da.position.x = 1000;
  this.de.position.x = 1000;
  this.di.position.x = 1000;
  this.do.position.x = 1000;
  this.du.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha2 = this.add.sprite(45, 70,"Escolha2");

  this.ld.position.x = 1000;

  this.duende = this.add.sprite(50, 240,"pequeno", 46);
  this.duende.inputEnabled = true;
  this.duende.events.onInputDown.add(this.Duende, this);

  this.ferradura = this.add.sprite(295, 370,"pequeno", 49);
  this.ferradura.inputEnabled = true;
  this.ferradura.events.onInputDown.add(this.Ferradura, this);

  this.edu = this.add.sprite(530, 255,"pequeno", 47);
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);
}

Duende(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.duende.position.x = 1000;
  this.ferradura.position.x = 1000;
  this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU1, this);


  this.add.sprite(155, 70,"Due");

  var duende2 = this.add.sprite(240, 210,"grande", 46);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1DU1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.DU1DU1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
DU1DU1(){

  this.audio.src = "assets/sons/DU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.EN1DU1, this);
}
EN1DU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/EN.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DE1DU1, this);
}
DE1DU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DE.mp3";
  this.audio.play();

  this.linha.position.x = 425;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1DU1, this);
}
FIM1DU1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1DU1();
}
REPETIR1DU1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU1, this);
}


Ferradura(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ferradura.position.x = 1000;
  this.duende.position.x = 1000;
  this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(60, 70,"Fer");

  var ferradura2 = this.add.sprite(205, 240,"grande", 49);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DU2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FE2DU2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FE2DU2(){

  this.audio.src = "assets/sons/FE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(55, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RRA.mp3";
  this.audio.play();

  this.linha.position.x = 180;

  this.linha2 = this.add.sprite(240, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DU.mp3";
  this.audio.play();

  this.linha.position.x = 375;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2DU2, this);
}
RA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 510;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DU2, this);
}
FIM2DU2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DU2();
}
REPETIR2DU2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU2, this);
}


Edu(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FDU3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.edu.position.x = 1000;
  this.ferradura.position.x = 1000;
  this.duende.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU3, this);


  this.add.sprite(210, 70,"EduA");

  var edu2 = this.add.sprite(215, 210,"grande", 47);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DU3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.E3DU3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
E3DU3(){

  this.audio.src = "assets/sons/E2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(251, 135,"Linha3");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU3DU3, this);
}
DU3DU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DU.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(320, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DU3, this);
}
FIM3DU3(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DU3();
}
REPETIR2DU3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU3, this);
}

Dado2(){
    game.state.start("FDado")
}

Voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaD');
}
start() {

  const startBtn = document.querySelector('#start');
  const output = document.querySelector('#output');
  this.contador++;

  const recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.start();
  // This event happens when you talk in the microphone

    if(this.contador = 1){
      recognition.onresult = function(event) {
        let letra = new Letras();
        console.log(event.results[0]);

    for (let i = event.resultIndex; i < event.results.length; i++) {

      if (event.results[i].isFinal) {

        var content = event.results[i][0].transcript.trim();
        recognition.stop();

        content = content.toLocaleLowerCase();

switch (content) {
case "dado":
letra.AcertouD();
break;
case "andando":
letra.AcertouD();
break;
case "moeda":
letra.AcertouD();
break;
case "dedo":
letra.AcertouD();
break;
case "acidente":
letra.AcertouD();
break;
case "rede":
letra.AcertouD();
break;
case "diamante":
letra.AcertouD();
break;
case "armadilha":
letra.AcertouD();
break;
case "explode":
letra.AcertouD();
break;
case "doce":
letra.AcertouD();
break;
case "amendoim":
letra.AcertouD();
break;
case "calçado":
letra.AcertouD();
break;
case "duende":
letra.AcertouD();
break;
case "ferradura":
letra.AcertouD();
break;
case "edu":
letra.AcertouD();
break;

default:
letra.Errou();
        }
        }
      }
    }
  }
}
}
