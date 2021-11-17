class FonemaS
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
   this.load.image("Sapo","assets/FonemaS/Sapo.png");
   this.load.image("Selo","assets/FonemaS/Selo.png");
   this.load.image("Suco","assets/FonemaS/Suco.png");
   this.load.image("Sofa","assets/FonemaS/Sofa.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("LS","assets/LetraS.png");

   this.load.image("Sa","assets/Sa.png");
   this.load.image("Se","assets/Se.png");
   this.load.image("Si","assets/Si.png");
   this.load.image("So","assets/So.png");
   this.load.image("Su","assets/Su.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Escolha","assets/Escolha2.png");

   this.load.image("Casaco","assets/FonemaS/Casaco.png");
   this.load.image("Bolsa","assets/FonemaS/Bolsa.png");
   this.load.image("Sapo2","assets/FonemaS/Sapo2.png");
   this.load.image("Casaco2","assets/FonemaS/Casaco2.png");
   this.load.image("Bolsa2","assets/FonemaS/Bolsa2.png");
   this.load.image("FSA1","assets/FSA1.png");
   this.load.image("FSA2","assets/FSA2.png");
   this.load.image("FSA3","assets/FSA3.png");
   this.load.image("Sap","assets/Sap3.png");
   this.load.image("Cas","assets/Cas.png");
   this.load.image("Bol","assets/Bol3.png");

   this.load.image("Selo","assets/FonemaS/Selo.png");
   this.load.image("Pulseira","assets/FonemaS/Pulseira.png");
   //this.load.image("Xarope","assets/FonemaP/Xarope.png");
   this.load.image("Selo2","assets/FonemaS/Selo2.png");
   this.load.image("Pulseira2","assets/FonemaS/Pulseira2.png");
   //this.load.image("Bolsa2","assets/FonemaR/Bolsa2.png");
   this.load.image("FSE1","assets/FSE1.png");
   this.load.image("FSE2","assets/FSE2.png");
   this.load.image("FSE3","assets/FSE3.png");
   this.load.image("Sel","assets/Sel.png");
   this.load.image("Pul","assets/Pul.png");
   //this.load.image("Bol","assets/Bol.png");

   this.load.image("Sino","assets/FonemaS/Sino.png");
   //this.load.image("Menino","assets/FonemaP/Menino.png");
   //this.load.image("Biquini","assets/FonemaP/Biquini.png");
   this.load.image("Sino2","assets/FonemaS/Sino2.png");
   //this.load.image("Pulseira2","assets/FonemaR/Pulseira2.png");
   //this.load.image("Bolsa2","assets/FonemaR/Bolsa2.png");
   this.load.image("FSI1","assets/FSI1.png");
   this.load.image("FSI2","assets/FSI2.png");
   this.load.image("FSI3","assets/FSI3.png");
   this.load.image("Sin","assets/Sin2.png");
   //this.load.image("Pul","assets/Pul.png");
   //this.load.image("Bol","assets/Bol.png");

     //this.load.image("Bol","assets/Bol.png");


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



      this.sa = this.add.sprite(38, 205,"Sa");
      this.sa.inputEnabled = true;
      this.sa.events.onInputDown.add(this.Sa, this);

      this.se = this.add.sprite(280, 235,"Se");
      this.se.inputEnabled = true;
      this.se.events.onInputDown.add(this.Se, this);

      this.so = this.add.sprite(137, 385,"So");
      this.so.inputEnabled = true;
      this.so.events.onInputDown.add(this.So, this);

      this.su = this.add.sprite(424, 390,"Su");
      this.su.inputEnabled = true;
      this.su.events.onInputDown.add(this.Su, this);

      this.si = this.add.sprite(520, 205,"Si");
      this.si.inputEnabled = true;
      this.si.events.onInputDown.add(this.Si, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.ls = this.add.sprite(-10, -10,"LS");







}
 update()
 {
}

Sa(){
  this.sa.position.x = 1000;
  this.se.position.x = 1000;
  this.si.position.x = 1000;
  this.so.position.x = 1000;
  this.su.position.x = 1000;

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

  this.ls.position.x = 1000;

  this.sapo = this.add.sprite(50, 240,"pequeno2", 48);
  this.sapo.inputEnabled = true;
  this.sapo.events.onInputDown.add(this.Sapo, this);

  this.casaco = this.add.sprite(295, 380,"pequeno2", 67);
  this.casaco.inputEnabled = true;
  this.casaco.events.onInputDown.add(this.Casaco, this);

  this.bolsa = this.add.sprite(535, 240,"pequeno2", 68);
  this.bolsa.inputEnabled = true;
  this.bolsa.events.onInputDown.add(this.Bolsa, this);
}

Sapo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sapo.position.x = 1000;
  this.casaco.position.x = 1000;
  this.bolsa.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(200, 70,"Sap");

  var sapo2 = this.add.sprite(200, 230,"grande2", 48);

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

  this.audio.src = "assets/sons/sa.mp3";
  this.audio.play();

  this.linha = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PO.mp3";
  this.audio.play();

  this.linha.position.x = 355;

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

Casaco(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.casaco.position.x = 1000;
  this.bolsa.position.x = 1000;
  this.sapo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(145, 70,"Cas");

  var casaco2 = this.add.sprite(200, 210,"grande2", 67);

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
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/sa.mp3";
  this.audio.play();

  this.linha.position.x = 275;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 410;

  this.linha2 = this.add.sprite(405, 140,"Linha");

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

Bolsa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sapo.position.x = 1000;
  this.casaco.position.x = 1000;
  this.bolsa.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(140, 70,"Bol");

  var bolsa2 = this.add.sprite(210, 210,"grande2", 68);

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

  this.audio.src = "assets/sons/BOL.mp3";
  this.audio.play();

  this.linha = this.add.sprite(185, 140,"Linha");

  this.linha2 = this.add.sprite(240, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/sa.mp3";
  this.audio.play();

  this.linha.position.x = 370;

  this.linha2.position.x = 380;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3JA3, this);
}
FIM3JA3(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2JA3();
}
REPETIR2JA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JA3, this);
}

Se(){
  this.sa.position.x = 1000;
  this.se.position.x = 1000;
  this.si.position.x = 1000;
  this.so.position.x = 1000;
  this.su.position.x = 1000;

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

  this.ls.position.x = 1000;

  this.selo = this.add.sprite(55, 240,"pequeno2", 69);
  this.selo.inputEnabled = true;
  this.selo.events.onInputDown.add(this.Selo, this);

  this.pulseira = this.add.sprite(297, 370,"pequeno2", 70);
  this.pulseira.inputEnabled = true;
  this.pulseira.events.onInputDown.add(this.Pulseira, this);

  /*this.arvore = this.add.sprite(530, 255,"pequeno", 52);
  this.arvore.inputEnabled = true;
  this.arvore.events.onInputDown.add(this.Arvore, this);*/
}

Selo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.selo.position.x = 1000;
  this.pulseira.position.x = 1000;
  //this.parede.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(180, 70,"Sel");

  var selo2 = this.add.sprite(190, 230,"grande2", 69);

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

  this.audio.src = "assets/sons/SE2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 330;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1JE1, this);
}
FIM1JE1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1JE1();
}
REPETIR1JE1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JE1, this);
}

Pulseira(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.selo.position.x = 1000;
  this.pulseira.position.x = 1000;
  //this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(95, 70,"Pul");

  var pulseira = this.add.sprite(190, 220,"grande2", 70);

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

  this.audio.src = "assets/sons/PUL.mp3";
  this.audio.play();

  this.linha = this.add.sprite(110, 140,"Linha");

  this.linha2 = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/SE2.mp3";
  this.audio.play();

  this.linha.position.x = 285;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha3 = this.add.sprite(400, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I2JE2, this);
}
I2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 465;

  this.linha3.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2JE2, this);
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

Si(){
  this.sa.position.x = 1000;
  this.se.position.x = 1000;
  this.si.position.x = 1000;
  this.so.position.x = 1000;
  this.su.position.x = 1000;

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

  this.ls.position.x = 1000;

  this.sino = this.add.sprite(48, 240,"pequeno2", 71);
  this.sino.inputEnabled = true;
  this.sino.events.onInputDown.add(this.Sino, this);

  /*this.ferida = this.add.sprite(295, 370,"pequeno2", 58);
  this.ferida.inputEnabled = true;
  this.ferida.events.onInputDown.add(this.Ferida, this);

  this.siri = this.add.sprite(530, 240,"pequeno2", 59);
  this.siri.inputEnabled = true;
  this.siri.events.onInputDown.add(this.Siri, this);*/
}

Sino(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sino.position.x = 1000;
  //this.ferida.position.x = 1000;
  //this.siri.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(195, 70,"Sin");

  var sino2 = this.add.sprite(200, 250,"grande2", 71);

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

  this.audio.src = "assets/sons/SI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 330;

  this.linha2 = this.add.sprite(345, 140,"Linha");

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

So(){
  this.sa.position.x = 1000;
  this.se.position.x = 1000;
  this.si.position.x = 1000;
  this.so.position.x = 1000;
  this.su.position.x = 1000;

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

  this.ls.position.x = 1000;

  this.sofa = this.add.sprite(50, 255,"pequeno2", 72);
  this.sofa.inputEnabled = true;
  this.sofa.events.onInputDown.add(this.Sofa, this);

  this.tesoura = this.add.sprite(295, 370,"pequeno2", 73);
  this.tesoura.inputEnabled = true;
  this.tesoura.events.onInputDown.add(this.Tesoura, this);

  this.urso = this.add.sprite(528, 245,"pequeno2", 74);
  this.urso.inputEnabled = true;
  this.urso.events.onInputDown.add(this.Urso, this);
}

Sofa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sofa.position.x = 1000;
  //this.coroa.position.x = 1000;
  this.urso.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(190, 70,"Sof");

  var sofa2 = this.add.sprite(195, 295,"grande2", 72);

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

  this.audio.src = "assets/sons/SO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 150,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FA.mp3";
  this.audio.play();

  this.linha.position.x = 345;

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





Tesoura(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tesoura.position.x = 1000;
  this.sofa.position.x = 1000;
  this.urso.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(107, 70,"Tes");

  var tesoura2 = this.add.sprite(200, 240,"grande2", 73);

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

  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(115, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/SO.mp3";
  this.audio.play();

  this.linha.position.x = 245;

  this.linha2 = this.add.sprite(255, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/U.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(385, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PE2CO2, this);
}
PE2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha3.position.x = 1000;
  this.linha.position.x = 463;

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






Urso(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sofa.position.x = 1000;
  this.urso.position.x = 1000;
  //this.ouro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(195, 70,"Urs");

  var urso2 = this.add.sprite(205, 210,"grande2", 74);

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
  this.audio.src = "assets/sons/UR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/SO.mp3";
  this.audio.play();

  this.linha.position.x = 340;

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

Su(){
  this.sa.position.x = 1000;
  this.se.position.x = 1000;
  this.si.position.x = 1000;
  this.so.position.x = 1000;
  this.su.position.x = 1000;

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

  this.ls.position.x = 1000;

  this.suco = this.add.sprite(93, 240,"pequeno", 36);
  this.suco.inputEnabled = true;
  this.suco.events.onInputDown.add(this.Suco, this);

  this.presunto = this.add.sprite(295, 370,"pequeno2", 76);
  this.presunto.inputEnabled = true;
  this.presunto.events.onInputDown.add(this.Presunto, this);

  /*this.peru = this.add.sprite(530, 255,"pequeno2", 65);
  this.peru.inputEnabled = true;
  this.peru.events.onInputDown.add(this.Peru, this);*/
}

Suco(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.suco.position.x = 1000;
  this.presunto.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(190, 70,"Suc");

  var suco2 = this.add.sprite(275, 240,"grande", 36);

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

  this.audio.src = "assets/sons/su.mp3";
  this.audio.play();

  this.linha = this.add.sprite(207, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 340;

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






Presunto(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FSU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.suco.position.x = 1000;
  this.presunto.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ls.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(90, 70,"Pre");

  var presunto2 = this.add.sprite(190, 240,"grande2", 76);

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

  this.audio.src = "assets/sons/Pre.mp3";
  this.audio.play();

  this.linha = this.add.sprite(90, 140,"Linha");

  this.linha2 = this.add.sprite(130, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/SUN.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  this.linha2.position.x = 350;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 485;

  this.linha2.position.x = 1000;

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


voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaS');
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
case "bolsa":
letra.AcertouS();
break;
case "casaco":
letra.AcertouS();
break;
case "presunto":
letra.AcertouS();
break;
case "pulseira":
letra.AcertouS();
break;
case "sapo":
letra.AcertouS();
break;
case "selo":
letra.AcertouS();
break;
case "sino":
letra.AcertouS();
break;
case "sofá":
letra.AcertouS();
break;
case "suco":
letra.AcertouS();
break;
case "tesoura":
letra.AcertouS();
break;
case "urso":
letra.AcertouS();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraS()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, S.mp3";
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
