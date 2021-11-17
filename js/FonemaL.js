class FonemaL
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
   

 }
 create()
 {
    //this.audiojogo();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.add.sprite(0,0,"FF3");

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

      this.la = this.add.sprite(38, 205,"La");
      this.la.inputEnabled = true;
      this.la.events.onInputDown.add(this.La, this);

      this.le = this.add.sprite(280, 235,"Le");
      this.le.inputEnabled = true;
      this.le.events.onInputDown.add(this.Le, this);

      this.lo = this.add.sprite(137, 385,"Lo");
      this.lo.inputEnabled = true;
      this.lo.events.onInputDown.add(this.Lo, this);

      this.lu = this.add.sprite(424, 390,"Lu");
      this.lu.inputEnabled = true;
      this.lu.events.onInputDown.add(this.Lu, this);

      this.li = this.add.sprite(520, 205,"Li");
      this.li.inputEnabled = true;
      this.li.events.onInputDown.add(this.Li, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.ll = this.add.sprite(-10, -10,"LL");







}
 update()
 {
}

La(){
  this.la.position.x = 1000;
  this.le.position.x = 1000;
  this.li.position.x = 1000;
  this.lo.position.x = 1000;
  this.lu.position.x = 1000;

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

  this.ll.position.x = 1000;

  this.laranja = this.add.sprite(55, 240,"pequeno2", 11);
  this.laranja.inputEnabled = true;
  this.laranja.events.onInputDown.add(this.Laranja, this);

  this.bolacha = this.add.sprite(295, 370,"pequeno2", 12);
  this.bolacha.inputEnabled = true;
  this.bolacha.events.onInputDown.add(this.Bolacha, this);

  this.janela = this.add.sprite(530, 240,"pequeno2", 13);
  this.janela.inputEnabled = true;
  this.janela.events.onInputDown.add(this.Janela, this);
}

Laranja(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.laranja.position.x = 1000;
  this.bolacha.position.x = 1000;
  this.janela.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(105, 70,"Lar2");

  var laranja2 = this.add.sprite(200, 230,"grande2", 11);

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

  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RAN.mp3";
  this.audio.play();

  this.linha.position.x = 250;

  this.linha2 = this.add.sprite(320, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE1JA1, this);
}
RE1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha.position.x = 455;

  this.linha2.position.x = 1000;

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





Bolacha(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bolacha.position.x = 1000;
  this.janela.position.x = 1000;
  this.laranja.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(140, 70,"Bolacha");

  var bolacha2 = this.add.sprite(200, 250,"grande2", 12);

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
  this.audio.src = "assets/sons/BO2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(135, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CHA.mp3";
  this.audio.play();

  this.linha.position.x = 395;

  this.linha2 = this.add.sprite(460, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2JA2, this);
}
FIM2JA2(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2JA2();
}
REPETIR2JA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JA2, this);
}




Janela(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.janela.position.x = 1000;
  this.bolacha.position.x = 1000;
  this.laranja.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(150, 70,"Jan");

  var janela2 = this.add.sprite(210, 210,"grande2", 13);

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

  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NE.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA3JA3, this);
}
JA3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 425;

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

Le(){
  this.la.position.x = 1000;
  this.le.position.x = 1000;
  this.li.position.x = 1000;
  this.lo.position.x = 1000;
  this.lu.position.x = 1000;

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

  this.ll.position.x = 1000;

  this.leao = this.add.sprite(50, 250,"pequeno2", 14);
  this.leao.inputEnabled = true;
  this.leao.events.onInputDown.add(this.Leao, this);

  this.elefante = this.add.sprite(290, 380,"pequeno", 53);
  this.elefante.inputEnabled = true;
  this.elefante.events.onInputDown.add(this.Elefante, this);

  this.controle = this.add.sprite(530, 260,"pequeno2", 16);
  this.controle.inputEnabled = true;
  this.controle.events.onInputDown.add(this.Controle, this);
}



Leao(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.leao.position.x = 1000;
  this.elefante.position.x = 1000;
  this.controle.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(200, 70,"Lea");

  var leao2 = this.add.sprite(200, 250,"grande2", 14);

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

  this.audio.src = "assets/sons/LE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ao+til.mp3";
  this.audio.play();

  this.linha.position.x = 335;

  this.linha2 = this.add.sprite(350, 145,"Linha");

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




Elefante(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.elefante.position.x = 1000;
  this.leao.position.x = 1000;
  this.controle.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(93, 70,"Ele");

  var elefante2 = this.add.sprite(200, 240,"grande", 53);

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

  this.audio.src = "assets/sons/E.mp3";
  this.audio.play();

  this.linha = this.add.sprite(90, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LE.mp3";
  this.audio.play();

  this.linha2 = this.add.sprite(150, 140,"Linha");

  this.linha.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FAN.mp3";
  this.audio.play();

  this.linha2.position.x = 270;

  this.linha3 = this.add.sprite(345, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I2JE2, this);
}
I2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha3.position.x = 480;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2JE2, this);
}
FIM2JE2(){
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2JE2();
}
REPETIR2JE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JE2, this);
}




Controle(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.controle.position.x = 1000;
  this.elefante.position.x = 1000;
  this.leao.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(95, 70,"Con");

  var controle2 = this.add.sprite(205, 240,"grande2", 16);

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
  this.audio.src = "assets/sons/2CON.mp3";
  this.audio.play();

  this.linha = this.add.sprite(95, 140,"Linha");

  this.linha2 = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TRO.mp3";
  this.audio.play();

  this.linha.position.x = 320;

  this.linha2.position.x = 370;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE23FE3, this);
}
FE23FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LE.mp3";
  this.audio.play();

  this.linha.position.x = 490;

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

Li(){
  this.la.position.x = 1000;
  this.le.position.x = 1000;
  this.li.position.x = 1000;
  this.lo.position.x = 1000;
  this.lu.position.x = 1000;

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

  this.ll.position.x = 1000;

  this.limao = this.add.sprite(45, 245,"pequeno2", 17);
  this.limao.inputEnabled = true;
  this.limao.events.onInputDown.add(this.Limao, this);

  this.galinha = this.add.sprite(295, 380,"pequeno2", 18);
  this.galinha.inputEnabled = true;
  this.galinha.events.onInputDown.add(this.Galinha, this);

  /*this.explodi = this.add.sprite(525, 240,"pequeno", 48);
  this.explodi.inputEnabled = true;
  this.explodi.events.onInputDown.add(this.Explodi, this);*/
}

Limao(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.limao.position.x = 1000;
  this.galinha.position.x = 1000;
  //this.bacia.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(185, 70,"Lim");

  var limao2 = this.add.sprite(200, 250,"grande2", 17);

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

  this.audio.src = "assets/sons/LI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(180, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/mao+til.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  this.linha2 = this.add.sprite(390, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CI1, this);
}
FIM1CI1(){
  this.linha2.position.x = 1000;

  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1CI1();
}
REPETIR1CI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI1, this);
}





Galinha(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.galinha.position.x = 1000;
  this.limao.position.x = 1000;
  //this.explodi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(125, 70,"Gal");

  var galinha2 = this.add.sprite(200, 240,"grande2", 18);

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

  this.audio.src = "assets/sons/GA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(122, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LI.mp3";
  this.audio.play();

  this.linha.position.x = 245;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NHA.mp3";
  this.audio.play();

  this.linha.position.x = 360;

  this.linha2 = this.add.sprite(445, 140,"Linha");


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


Lo(){
  this.la.position.x = 1000;
  this.le.position.x = 1000;
  this.li.position.x = 1000;
  this.lo.position.x = 1000;
  this.lu.position.x = 1000;

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

  this.ll.position.x = 1000;

  this.lobo = this.add.sprite(50, 245,"pequeno",18);
  this.lobo.inputEnabled = true;
  this.lobo.events.onInputDown.add(this.Lobo, this);

  this.envelope = this.add.sprite(295, 385,"pequeno2", 20);
  this.envelope.inputEnabled = true;
  this.envelope.events.onInputDown.add(this.Envelope, this);

  this.cavalo = this.add.sprite(535, 240,"pequeno", 26);
  this.cavalo.inputEnabled = true;
  this.cavalo.events.onInputDown.add(this.Cavalo, this);
}

Lobo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.lobo.position.x = 1000;
  this.envelope.position.x = 1000;
  this.cavalo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(195, 70,"Lob");

  var lobo2 = this.add.sprite(200, 240,"grande", 18);

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

  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BO2.mp3";
  this.audio.play();

  this.linha.position.x = 350;

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






Envelope(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.envelope.position.x = 1000;
  this.lobo.position.x = 1000;
  this.cavalo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(107, 70,"Env");

  var envelope2 = this.add.sprite(200, 240,"grande2", 20);

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

  this.audio.src = "assets/sons/en.mp3";
  this.audio.play();

  this.linha = this.add.sprite(110, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VE.mp3";
  this.audio.play();

  this.linha.position.x = 240;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 360;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PE2CO2, this);
}
PE2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha.position.x = 480;

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





Cavalo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cavalo.position.x = 1000;
  this.lobo.position.x = 1000;
  this.envelope.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(150, 70,"Cav");

  var cavalo2 = this.add.sprite(205, 210,"grande", 26);

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
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO23CO3, this);
}
CO23CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CO3, this);
}
FIM3CO3(){
  this.linha.position.x = 1000;

  this.start();
  this.REPETIR2CO3();
}
REPETIR2CO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO3, this);
}


Lu(){
  this.la.position.x = 1000;
  this.le.position.x = 1000;
  this.li.position.x = 1000;
  this.lo.position.x = 1000;
  this.lu.position.x = 1000;

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

  this.ll.position.x = 1000;

  this.luva = this.add.sprite(50, 240,"pequeno2", 22);
  this.luva.inputEnabled = true;
  this.luva.events.onInputDown.add(this.Luva, this);

  this.aluno = this.add.sprite(300, 370,"pequeno2", 23);
  this.aluno.inputEnabled = true;
  this.aluno.events.onInputDown.add(this.Aluno, this);

  /*this.edu = this.add.sprite(530, 255,"pequeno", 47);
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);*/
}





Luva(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.luva.position.x = 1000;
  this.aluno.position.x = 1000;
  //this.caju.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(190, 70,"Luv");

  var luva2 = this.add.sprite(190, 240,"grande2", 22);

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

  this.audio.src = "assets/sons/LU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha.position.x = 345;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CU1, this);
}
FIM1CU1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1CU1();
}
REPETIR1CU1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CU1, this);
}







Aluno(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FLU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.aluno.position.x = 1000;
  this.luva.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ll.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(170, 70,"Alu");

  var aluno2 = this.add.sprite(205, 240,"grande2", 23);

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

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(166, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LU.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(235, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2.position.x = 360;

  this.linha3 = this.add.sprite(385, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DU2, this);
}
FIM2DU2(){
  this.linha2.position.x = 1000;
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2DU2();
}
REPETIR2DU2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU2, this);
}


voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaL');
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
case "aluno":
letra.AcertouL();
break;
case "bolacha":
letra.AcertouL();
break;
case "cavalo":
letra.AcertouL();
break;
case "controle":
letra.AcertouL();
break;
case "elefante":
letra.AcertouL();
break;
case "envelope":
letra.AcertouL();
break;
case "galinha":
letra.AcertouL();
break;
case "janela":
letra.AcertouL();
break;
case "laranja":
letra.AcertouL();
break;
case "leão":
letra.AcertouL();
break;
case "limão":
letra.AcertouL();
break;
case "lobo":
letra.AcertouL();
break;
case "luva":
letra.AcertouL();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}

Proximo()
{
  game.state.start('Jogo2');
}
}
