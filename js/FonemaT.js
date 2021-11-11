class FonemaT
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
   this.load.image("Bota","assets/FonemaT/Bota.png");
   this.load.image("Tapete","assets/FonemaT/Tapete.png");
   this.load.image("Tatu","assets/FonemaT/tatu.png");
   this.load.image("Tigre","assets/FonemaT/tigre.png");
   this.load.image("Touro","assets/FonemaT/touro.png");
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("Linha2","assets/LinhaBE3.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("LT","assets/LetraT.png");

   this.load.image("Ta","assets/Ta.png");
   this.load.image("Te","assets/Te.png");
   this.load.image("Ti","assets/Ti.png");
   this.load.image("To","assets/To.png");
   this.load.image("Tu","assets/Tu.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Voltar2","assets/Voltar.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Escolha","assets/Escolha2.png");

   this.load.image("Tapete","assets/FonemaT/Tapete.png");
   this.load.image("Batata","assets/FonemaT/Batata.png");
   this.load.image("Bota","assets/FonemaT/Bota.png");
   this.load.image("Tapete2","assets/FonemaT/Tapete2.png");
   this.load.image("Batata2","assets/FonemaT/Batata2.png");
   this.load.image("Bota2","assets/FonemaT/Bota2.png");
   this.load.image("FTA1","assets/FTA1.png");
   this.load.image("FTA2","assets/FTA2.png");
   this.load.image("FTA3","assets/FTA3.png");
   this.load.image("Tap","assets/Tap2.png");
   this.load.image("Bat","assets/Bat2.png");
   this.load.image("Bot","assets/Bot.png");

   this.load.image("Tesoura","assets/FonemaT/Tesoura.png");
   this.load.image("Peteca","assets/FonemaT/Peteca.png");
   this.load.image("Tomate","assets/FonemaT/Tomate.png");
   this.load.image("Tesoura2","assets/FonemaT/Tesoura2.png");
   this.load.image("Peteca2","assets/FonemaT/Peteca2.png");
   this.load.image("Tomate2","assets/FonemaT/Tomate2.png");
   this.load.image("FTE1","assets/FTE1.png");
   this.load.image("FTE2","assets/FTE2.png");
   this.load.image("FTE3","assets/FTE3.png");
   this.load.image("Tes","assets/Tes.png");
   this.load.image("Pet","assets/Pet.png");
   this.load.image("Tom","assets/Tom2.png");

   this.load.image("Tigre","assets/FonemaT/Tigre.png");
   this.load.image("Latinha","assets/FonemaT/Latinha.png");
   this.load.image("Jabuti","assets/FonemaT/Jabuti.png");
   this.load.image("Tigre2","assets/FonemaT/Tigre2.png");
   this.load.image("Latinha2","assets/FonemaT/Latinha2.png");
   this.load.image("Jabuti2","assets/FonemaT/Jabuti2.png");
   this.load.image("FTI1","assets/FTI1.png");
   this.load.image("FTI2","assets/FTI2.png");
   this.load.image("FTI3","assets/FTI3.png");
   this.load.image("Tig","assets/Tig2.png");
   this.load.image("Lat","assets/Lat.png");
   this.load.image("Jab","assets/Jab.png");

   this.load.image("Touro","assets/FonemaT/Touro.png");
   this.load.image("Cartola","assets/FonemaT/Cartola.png");
   this.load.image("Apito","assets/FonemaT/Apito.png");
   this.load.image("Touro2","assets/FonemaT/Touro2.png");
   this.load.image("Cartola2","assets/FonemaT/Cartola2.png");
   this.load.image("Apito2","assets/FonemaT/Apito2.png");
   this.load.image("FTO1","assets/FTO1.png");
   this.load.image("FTO2","assets/FTO2.png");
   this.load.image("FTO3","assets/FTO3.png");
   this.load.image("Tou","assets/Tou.png");
   this.load.image("Car","assets/Car.png");
   this.load.image("Api","assets/Api.png");

   this.load.image("Tucano","assets/FonemaT/Tucano.png");
   //this.load.image("Presunto","assets/Fonemas/Presunto.png");
   this.load.image("Tatu","assets/FonemaT/Tatu.png");
   this.load.image("Tucano2","assets/FonemaT/Tucano2.png");
   //this.load.image("Batata2","assets/FonemaT/Batata2.png");
   this.load.image("Tatu2","assets/FonemaT/Tatu2.png");
   this.load.image("FTU1","assets/FTU1.png");
   this.load.image("FTU2","assets/FTU2.png");
   this.load.image("FTU3","assets/FTU3.png");
   this.load.image("Tuc","assets/Tuc2.png");
   this.load.image("Tat","assets/Tat.png");
   //this.load.image("Bot","assets/Bot.png");


 }
 create()
 {
    //this.audiojogo();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start, this);

        this.quad1 = this.add.sprite(30, 200,"Quadrado");

        this.quad2 = this.add.sprite(275, 230,"Quadrado");

        this.quad3 = this.add.sprite(130, 380,"Quadrado");

        this.quad4 = this.add.sprite(418, 380,"Quadrado");

        this.quad5 = this.add.sprite(510, 200,"Quadrado");



      this.ta = this.add.sprite(38, 205,"Ta");
      this.ta.inputEnabled = true;
      this.ta.events.onInputDown.add(this.Ta, this);

      this.te = this.add.sprite(280, 235,"Te");
      this.te.inputEnabled = true;
      this.te.events.onInputDown.add(this.Te, this);

      this.to = this.add.sprite(137, 385,"To");
      this.to.inputEnabled = true;
      this.to.events.onInputDown.add(this.To, this);

      this.tu = this.add.sprite(424, 390,"Tu");
      this.tu.inputEnabled = true;
      this.tu.events.onInputDown.add(this.Tu, this);

      this.ti = this.add.sprite(520, 205,"Ti");
      this.ti.inputEnabled = true;
      this.ti.events.onInputDown.add(this.Ti, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lt = this.add.sprite(-10, -10,"LT");







}
 update()
 {
}

Ta(){
  this.ta.position.x = 1000;
  this.te.position.x = 1000;
  this.ti.position.x = 1000;
  this.to.position.x = 1000;
  this.tu.position.x = 1000;

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

  this.lt.position.x = 1000;

  this.tapete = this.add.sprite(50, 270,"pequeno2", 43);
  this.tapete.inputEnabled = true;
  this.tapete.events.onInputDown.add(this.Tapete, this);

  this.batata = this.add.sprite(295, 380,"pequeno",7);
  this.batata.inputEnabled = true;
  this.batata.events.onInputDown.add(this.Batata, this);

  this.bota = this.add.sprite(535, 240,"pequeno3", 2);
  this.bota.inputEnabled = true;
  this.bota.events.onInputDown.add(this.Bota, this);
}

Tapete(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tapete.position.x = 1000;
  this.batata.position.x = 1000;
  this.bota.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(145, 70,"Tap");

  var tapete2 = this.add.sprite(190, 245,"grande2", 43);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1JA1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.JA1JA1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
JA1JA1(){

  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE1JA1, this);
}
RE1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 405;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1JA1, this);
}
FIM1JA1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1JA1();
}
REPETIR1JA1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JA1, this);
}
COMECAR(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Comecar.mp3";
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

Batata(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.batata.position.x = 1000;
  this.tapete.position.x = 1000;
  this.bota.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(150, 70,"Bat");

  var batata2 = this.add.sprite(190, 210,"grande", 7);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1JA2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.PI2JA2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
PI2JA2(){
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 425;


  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2JA2, this);
}
FIM2JA2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2JA2();
}
REPETIR2JA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JA2, this);
}

Bota(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bota.position.x = 1000;
  this.tapete.position.x = 1000;
  this.batata.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(185, 70,"Bot");

  var bota2 = this.add.sprite(210, 210,"grande3", 2);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1JA3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CE3JA3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CE3JA3(){

  this.audio.src = "assets/sons/BO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 345;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3JA3, this);
}
FIM3JA3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2JA3();
}
REPETIR2JA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JA3, this);
}

Te(){
  this.ta.position.x = 1000;
  this.te.position.x = 1000;
  this.ti.position.x = 1000;
  this.to.position.x = 1000;
  this.tu.position.x = 1000;

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

  this.lt.position.x = 1000;

  this.tesoura = this.add.sprite(55, 240,"pequeno2", 73);
  this.tesoura.inputEnabled = true;
  this.tesoura.events.onInputDown.add(this.Tesoura, this);

  this.peteca = this.add.sprite(290, 370,"pequeno3", 4);
  this.peteca.inputEnabled = true;
  this.peteca.events.onInputDown.add(this.Peteca, this);

  this.tomate = this.add.sprite(530, 240,"pequeno3", 5);
  this.tomate.inputEnabled = true;
  this.tomate.events.onInputDown.add(this.Tomate, this);
}

Tesoura(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tesoura.position.x = 1000;
  this.peteca.position.x = 1000;
  this.tomate.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(100, 70,"Tes");

  var tesoura2 = this.add.sprite(190, 230,"grande2", 73);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1JE1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.JE1JE1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
JE1JE1(){

  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(110, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/SO.mp3";
  this.audio.play();

  this.linha.position.x = 240;

  this.linha2 = this.add.sprite(255, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.U1JE1, this);
}
U1JE1(){

  this.audio.src = "assets/sons/U.mp3";
  this.audio.play();

  this.linha3 = this.add.sprite(385, 135,"Linha2");
  this.linha2.position.x = 1000;
  this.linha.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA1JE1, this);
}
RA1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 455;

  this.linha3.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1JE1, this);
}
FIM1JE1(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1JE1();
}
REPETIR1JE1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JE1, this);
}

Peteca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tesoura.position.x = 1000;
  this.peteca.position.x = 1000;
  this.tomate.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(135, 70,"Pet");

  var peteca2 = this.add.sprite(190, 230,"grande3", 4);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1JE2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.LA2JE2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
LA2JE2(){

  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(140, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 400;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2JE2, this);
}
FIM2JE2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2JE2();
}
REPETIR2JE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JE2, this);
}

Tomate(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tesoura.position.x = 1000;
  this.peteca.position.x = 1000;
  this.tomate.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(145, 70,"Tom");

  var tomate2 = this.add.sprite(200, 240,"grande3", 5);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1FE3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BI3FE3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BI3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  this.linha2 = this.add.sprite(305, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE3FE3, this);
}
TE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 440;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3FE3, this);
}
FIM3FE3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2FE3();
}
REPETIR2FE3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FE3, this);
}

Ti(){
  this.ta.position.x = 1000;
  this.te.position.x = 1000;
  this.ti.position.x = 1000;
  this.to.position.x = 1000;
  this.tu.position.x = 1000;

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

  this.lt.position.x = 1000;

  this.tigre = this.add.sprite(48, 240,"pequeno3", 6);
  this.tigre.inputEnabled = true;
  this.tigre.events.onInputDown.add(this.Tigre, this);

  this.latinha = this.add.sprite(295, 370,"pequeno3", 7);
  this.latinha.inputEnabled = true;
  this.latinha.events.onInputDown.add(this.Latinha, this);

  this.jabuti = this.add.sprite(530, 240,"pequeno3", 8);
  this.jabuti.inputEnabled = true;
  this.jabuti.events.onInputDown.add(this.Jabuti, this);
}

Tigre(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tigre.position.x = 1000;
  this.latinha.position.x = 1000;
  this.jabuti.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(145, 70,"Tig");

  var tigre2 = this.add.sprite(200, 250,"grande3", 6);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1CI1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CIN1CI1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CIN1CI1(){

  this.audio.src = "assets/sons/TI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(180, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GRE.mp3";
  this.audio.play();

  this.linha.position.x = 310;

  this.linha2 = this.add.sprite(360, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CI1, this);
}
FIM1CI1(){
  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1CI1();
}
REPETIR1CI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI1, this);
}

Latinha(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.latinha.position.x = 1000;
  this.tigre.position.x = 1000;
  this.jabuti.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(100, 70,"Lat");

  var latinha2 = this.add.sprite(185, 240,"grande3", 7);

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

  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TI.mp3";
  this.audio.play();

  this.linha.position.x = 245;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NHA.mp3";
  this.audio.play();

  this.linha.position.x = 370;

  this.linha2 = this.add.sprite(450, 140,"Linha");

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

Jabuti(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.jabuti.position.x = 1000;
  this.tigre.position.x = 1000;
  this.latinha.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI3, this);


  this.add.sprite(150, 70,"Jab");

  var jabuti2 = this.add.sprite(200, 210,"grande3", 8);

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

  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PLO3DI3, this);
}
PLO3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BU.mp3";
  this.audio.play();

  this.linha.position.x = 293;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI3DI3, this);
}
DI3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TI.mp3";
  this.audio.play();

  this.linha.position.x = 430;

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

To(){
  this.ta.position.x = 1000;
  this.te.position.x = 1000;
  this.ti.position.x = 1000;
  this.to.position.x = 1000;
  this.tu.position.x = 1000;

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

  this.lt.position.x = 1000;

  this.touro = this.add.sprite(50, 255,"pequeno3", 9);
  this.touro.inputEnabled = true;
  this.touro.events.onInputDown.add(this.Touro, this);

  this.cartola = this.add.sprite(292, 375,"pequeno3", 10);
  this.cartola.inputEnabled = true;
  this.cartola.events.onInputDown.add(this.Cartola, this);

  this.apito = this.add.sprite(528, 260,"pequeno3", 11);
  this.apito.inputEnabled = true;
  this.apito.events.onInputDown.add(this.Apito, this);
}

Touro(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.touro.position.x = 1000;
  this.cartola.position.x = 1000;
  this.apito.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(155, 70,"Tou");

  var touro2 = this.add.sprite(200, 240,"grande3", 9);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1CO1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CO1CO1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CO1CO1(){

  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/U.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(320, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA1CO1, this);
}
JA1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha.position.x = 395;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CO1, this);
}
FIM1CO1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1CO1();
}
REPETIR1CO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO1, this);
}





Cartola(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cartola.position.x = 1000;
  this.apito.position.x = 1000;
  this.touro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(100, 70,"Car");

  var cartola2 = this.add.sprite(190, 240,"grande3", 10);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AN2CO2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
AN2CO2(){

  this.audio.src = "assets/sons/CAR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha");

  this.linha2 = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 325;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 455;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2CO2, this);
}
FIM2CO2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CO2();
}
REPETIR2CO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO2, this);
}





Apito(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.apito.position.x = 1000;
  this.cartola.position.x = 1000;
  this.touro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(150, 70,"Api");

  var apito2 = this.add.sprite(205, 250,"grande3", 11);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.SU3CO3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
SU3CO3(){
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(190, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(255, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO3CO3, this);
}
TO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha2.position.x = 380;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CO3, this);
}
FIM3CO3(){
  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2CO3();
}
REPETIR2CO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO3, this);
}

Tu(){
  this.ta.position.x = 1000;
  this.te.position.x = 1000;
  this.ti.position.x = 1000;
  this.to.position.x = 1000;
  this.tu.position.x = 1000;

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

  this.lt.position.x = 1000;

  this.tucano = this.add.sprite(55, 240,"pequeno3", 12);
  this.tucano.inputEnabled = true;
  this.tucano.events.onInputDown.add(this.Tucano, this);

  /*this.presunto = this.add.sprite(295, 370,"pequeno2", 76);
  this.presunto.inputEnabled = true;
  this.presunto.events.onInputDown.add(this.Presunto, this);*/

  this.tatu = this.add.sprite(530, 255,"pequeno3", 13);
  this.tatu.inputEnabled = true;
  this.tatu.events.onInputDown.add(this.Tatu, this);
}

Tucano(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tucano.position.x = 1000;
  this.tatu.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(140, 70,"Tuc");

  var tucano2 = this.add.sprite(190, 240,"grande3", 12);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1CU1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CU1CU1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CU1CU1(){

  this.audio.src = "assets/sons/TU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1CU1, this);
}
CA1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 405;

  this.linha2 = this.add.sprite(420, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CU1, this);
}
FIM1CU1(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1CU1();
}
REPETIR1CU1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CU1, this);
}





Tatu(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FTU3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tucano.position.x = 1000;
  this.tatu.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lt.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU3, this);


  this.add.sprite(200, 70,"Tat");

  var tatu2 = this.add.sprite(205, 210,"grande3", 13);

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

  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU3DU3, this);
}
DU3DU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TU.mp3";
  this.audio.play();

  this.linha.position.x = 355;
  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DU3, this);
}
FIM3DU3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DU3();
}
REPETIR2DU3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU3, this);
}

voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaT');
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
        game.add.text(556,100,content,{fontSize:'30px',fill:'black'});
        recognition.stop();

        content = content.toLocaleLowerCase();

switch (content) {
case "apito":
letra.AcertouT();
break;
case "batata":
letra.AcertouT();
break;
case "bota":
letra.AcertouT();
break;
case "cartola":
letra.AcertouT();
break;
case "jabuti":
letra.AcertouT();
break;
case "latinha":
letra.AcertouT();
break;
case "peteca":
letra.AcertouT();
break;
case "tapete":
letra.AcertouT();
break;
case "tatu":
letra.AcertouT();
break;
case "tesoura":
letra.AcertouT();
break;
case "tigre":
letra.AcertouT();
break;
case "tomate":
letra.AcertouT();
break;
case "touro":
letra.AcertouT();
break;
case "tucano":
letra.AcertouT();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraT()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, T.mp3";
	this.audio.play();

}
M2()
{
  this.m.position.x = 40;
  this.m.position.y = 210;

  this.seta1.position.x = 160;
  this.seta1.position.y = 320;


}
A2()
{
  this.a.position.x = 150;
  this.a.position.y = 195;

  this.seta1.position.x = 160;
  this.seta1.position.y = 320;

  this.audio = new Audio();
	this.audio.src = "assets/sons/A.mp3";
	this.audio.play();

}
C2()
{
  this.c.position.x = 260;
  this.c.position.y = 210;

  this.seta1.position.x = 270;
  this.seta1.position.y = 320;

  this.audio = new Audio();
	this.audio.src = "assets/sons/C.mp3";
	this.audio.play();

}
AA2()
{
  this.a2.position.x = 370;
  this.a2.position.y = 195;

  this.seta1.position.x = 380;
  this.seta1.position.y = 320;

  this.audio = new Audio();
	this.audio.src = "assets/sons/A.mp3";
	this.audio.play();
}
CC2()
{
  this.c2.position.x = 480;
  this.c2.position.y = 210;

  this.seta1.position.x = 490;
  this.seta1.position.y = 320;

  this.audio = new Audio();
	this.audio.src = "assets/sons/C.mp3";
	this.audio.play();
}
O2()
{
  this.o.position.x = 590;
  this.o.position.y = 210;

  this.seta1.position.x = 600;
  this.seta1.position.y = 320;

  this.audio = new Audio();
	this.audio.src = "assets/sons/O.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.jogo1, this);

  game.time.events.repeat(Phaser.Timer.SECOND * 6, 1, this.jogo2, this);


  //game.add.text(135,350,'PARABÉNS',{fontSize:'80px',fill:'black'});
  //game.add.text(25,450,'VOCÊ ACERTOU',{fontSize:'80px',fill:'black'});
}

jogo1(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Parabéns1a.mp3";
	this.audio.play();
}
jogo2(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Proximo1.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 4, 1, this.jogo3, this);
}
jogo3(){
  this.add.sprite(590, 480,"Seta2");
}
audiojogo(){

	//this.audio = new Audio();
	//this.audio.src = "assets/Som.mp3";
	//this.audio.loop = true;
	//this.audio.play();

  this.audio = new Audio();
	this.audio.src = "assets/sons/Inicio2.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.repita100, this);
}
repita100(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Repita.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.start, this);
}

Proximo()
{
  game.state.start('Jogo2');
}
}
