class FonemaF {
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
 
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("Linha2","assets/Linha2aa.png");
   
   this.load.image("Começar","assets/Comecar2.png");
   
   
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



      this.fa = this.add.sprite(38, 205,"Fa");
      this.fa.inputEnabled = true;
      this.fa.events.onInputDown.add(this.Fa, this);

      this.fe = this.add.sprite(280, 235,"Fe");
      this.fe.inputEnabled = true;
      this.fe.events.onInputDown.add(this.Fe, this);

      this.fo = this.add.sprite(137, 385,"Fo");
      this.fo.inputEnabled = true;
      this.fo.events.onInputDown.add(this.Fo, this);

      this.fu = this.add.sprite(424, 390,"Fu");
      this.fu.inputEnabled = true;
      this.fu.events.onInputDown.add(this.Fu, this);

      this.fi = this.add.sprite(520, 205,"Fi");
      this.fi.inputEnabled = true;
      this.fi.events.onInputDown.add(this.Fi, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.Voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lf = this.add.sprite(-10, -10,"LF");







}
 update()
 {
}
Fa(){
  this.fa.position.x = 1000;
  this.fe.position.x = 1000;
  this.fi.position.x = 1000;
  this.fo.position.x = 1000;
  this.fu.position.x = 1000;

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

  this.lf.position.x = 1000;

  this.faca = this.add.sprite(55, 240,"pequeno", 60);
  this.faca.inputEnabled = true;
  this.faca.events.onInputDown.add(this.Faca, this);

  this.alface = this.add.sprite(295, 370,"pequeno", 1);
  this.alface.inputEnabled = true;
  this.alface.events.onInputDown.add(this.Alface, this);

  this.girafa = this.add.sprite(535, 240,"pequeno", 67);
  this.girafa.inputEnabled = true;
  this.girafa.events.onInputDown.add(this.Girafa, this);
}
Faca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.faca.position.x = 1000;
  this.alface.position.x = 1000;
  this.girafa.position.x = 1000;

  this.escolha2.position.x = 1000;
  //.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FA1, this);


  this.add.sprite(190, 70,"Fac");

  var faca2 = this.add.sprite(200, 230,"grande", 60);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1FA1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FA1FA1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FA1FA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1FA1, this);
}
CA1FA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 340;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1FA1, this);
}
FIM1FA1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1FA1();
}
REPETIR1FA1(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FA1, this);
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

Alface(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.faca.position.x = 1000;
  this.alface.position.x = 1000;
  this.girafa.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FA2, this);


  this.add.sprite(150, 70,"Alf");

  var alface2 = this.add.sprite(200, 250,"grande",1);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1FA2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AL2FA2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
AL2FA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/AL.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FA2FA2, this);
}
FA2FA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CE2FA2, this);
}
CE2FA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2FA2, this);
}
FIM2FA2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2FA2();
}
REPETIR2FA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FA2, this);
}


Girafa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.girafa.position.x = 1000;
  this.alface.position.x = 1000;
  this.faca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FA3, this);


  this.add.sprite(130, 70,"Gir");

  var girafa2 = this.add.sprite(200, 220,"grande", 67);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1FA3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.GI3FA3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
GI3FA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA3FA3, this);
}
RA3FA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FA3FA3, this);
}
FA3FA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FA.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3FA3, this);
}
FIM3FA3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2FA3();
}
REPETIR2FA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FA3, this);
}


Fe(){
  this.fa.position.x = 1000;
  this.fe.position.x = 1000;
  this.fi.position.x = 1000;
  this.fo.position.x = 1000;
  this.fu.position.x = 1000;

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

  this.lf.position.x = 1000;

  this.ferro = this.add.sprite(30, 250,"pequeno", 61);
  this.ferro.inputEnabled = true;
  this.ferro.events.onInputDown.add(this.Ferro, this);

  this.cafeteira = this.add.sprite(295, 395,"pequeno", 59);
  this.cafeteira.inputEnabled = true;
  this.cafeteira.events.onInputDown.add(this.Cafeteira, this);

  this.bife = this.add.sprite(535, 240,"pequeno", 58);
  this.bife.inputEnabled = true;
  this.bife.events.onInputDown.add(this.Bife, this);
}

Ferro(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ferro.position.x = 1000;
  this.cafeteira.position.x = 1000;
  this.bife.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE1, this);


  this.add.sprite(170, 70,"Fer2");

  var ferro2 = this.add.sprite(145, 220,"grande", 61);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1FE1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FE1FE1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FE1FE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FE2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRO1FE1, this);
}
RRO1FE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RRO.mp3";
  this.audio.play();

  this.linha.position.x = 330;
  this.linha2 = this.add.sprite(390, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1FE1, this);
}
FIM1FE1(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1FE1();
}
REPETIR1FE1(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FE1, this);
}

Cafeteira(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cafeteira.position.x = 1000;
  this.ferro.position.x = 1000;
  this.bife.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE2, this);


  this.add.sprite(80, 70,"Caf");

  var cafeteira2 = this.add.sprite(200, 240,"grande", 59);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1FE2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CA2FE2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CA2FE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(75, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE2FE2, this);
}
FE2FE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FE.mp3";
  this.audio.play();

  this.linha.position.x = 205;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE2FE2, this);
}
TE2FE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 325;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I2FE2, this);
}
I2FE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(455, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.RA2FE2, this);
}
RA2FE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 505;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2FE2, this);
}
FIM2FE2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2FE2();
}
REPETIR2FE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FE2, this);
}



Bife(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bife.position.x = 1000;
  this.cafeteira.position.x = 1000;
  this.ferro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(190, 70,"Bif");

  var bife2 = this.add.sprite(205, 210,"grande", 58);

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
  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FE.mp3";
  this.audio.play();

  this.linha.position.x = 335;

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

Fi(){
  this.fa.position.x = 1000;
  this.fe.position.x = 1000;
  this.fi.position.x = 1000;
  this.fo.position.x = 1000;
  this.fu.position.x = 1000;

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

  this.lf.position.x = 1000;

  this.figo = this.add.sprite(50, 250,"pequeno", 62);
  this.figo.inputEnabled = true;
  this.figo.events.onInputDown.add(this.Figo, this);

  /*this.armadilha = this.add.sprite(295, 400,"pequeno", 40);
  this.armadilha.inputEnabled = true;
  this.armadilha.events.onInputDown.add(this.Armadilha, this);

  this.explodi = this.add.sprite(525, 240,"Explodi");
  this.explodi.inputEnabled = true;
  this.explodi.events.onInputDown.add(this.Explodi, this);*/
}

Figo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.figo.position.x = 1000;
  //this.armadilha.position.x = 1000;
  //this.explodi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FI1, this);


  this.add.sprite(200, 70,"Fig");

  var figo2 = this.add.sprite(200, 250,"grande", 62);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1FI1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FI1FI1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FI1FI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GO1FI1, this);
}
GO1FI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GO.mp3";
  this.audio.play();

  this.linha.position.x = 345;


  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1FI1, this);
}
FIM1FI1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1FI1();
}
REPETIR1FI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FI1, this);
}

Fo(){
  this.fa.position.x = 1000;
  this.fe.position.x = 1000;
  this.fi.position.x = 1000;
  this.fo.position.x = 1000;
  this.fu.position.x = 1000;

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

  this.lf.position.x = 1000;

  this.foca = this.add.sprite(50, 245,"pequeno", 63);
  this.foca.inputEnabled = true;
  this.foca.events.onInputDown.add(this.Foca, this);

  this.fofoca = this.add.sprite(295, 385,"pequeno", 64);
  this.fofoca.inputEnabled = true;
  this.fofoca.events.onInputDown.add(this.Fofoca, this);

  this.garfo = this.add.sprite(530, 250,"pequeno", 66);
  this.garfo.inputEnabled = true;
  this.garfo.events.onInputDown.add(this.Garfo, this);
}

Foca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.foca.position.x = 1000;
  this.fofoca.position.x = 1000;
  this.garfo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FO1, this);


  this.add.sprite(195, 70,"Foc");

  var foca2 = this.add.sprite(200, 240,"grande", 63);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1FO1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FO1FO1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FO1FO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FO2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1FO1, this);
}
CA1FO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 355;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1FO1, this);
}
FIM1FO1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1FO1();
}
REPETIR1FO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FO1, this);
}


Fofoca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.fofoca.position.x = 1000;
  this.foca.position.x = 1000;
  this.garfo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FO2, this);


  this.add.sprite(120, 70,"Fof");

  var fofoca2 = this.add.sprite(205, 240,"grande", 64);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1FO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FO2FO2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FO2FO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FO22FO2, this);
}
FO22FO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FO2.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA2FO2, this);
}
CA2FO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2FO2, this);
}
FIM2FO2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2FO2();
}
REPETIR2FO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FO2, this);
}


Garfo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.garfo.position.x = 1000;
  this.foca.position.x = 1000;
  this.fofoca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FO3, this);


  this.add.sprite(140, 70,"Gar");

  var garfo2 = this.add.sprite(210, 250,"grande", 66);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1FO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.GAR3FO3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
GAR3FO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GAR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(180, 140,"Linha");

  this.linha2 = this.add.sprite(245, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FO3FO3, this);
}
FO3FO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FO.mp3";
  this.audio.play();

  this.linha.position.x = 380;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3FO3, this);
}
FIM3FO3(){
  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2FO3();
}
REPETIR2FO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FO3, this);
}


Fu(){
  this.fa.position.x = 1000;
  this.fe.position.x = 1000;
  this.fi.position.x = 1000;
  this.fo.position.x = 1000;
  this.fu.position.x = 1000;

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

  this.lf.position.x = 1000;

  this.furadeira = this.add.sprite(50, 240,"Furadeira");
  this.furadeira.inputEnabled = true;
  this.furadeira.events.onInputDown.add(this.Furadeira, this);

  this.perfume = this.add.sprite(295, 370,"pequeno", 68);
  this.perfume.inputEnabled = true;
  this.perfume.events.onInputDown.add(this.Perfume, this);

  /*this.edu = this.add.sprite(530, 255,"Edu");
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);*/
}

Furadeira(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.furadeira.position.x = 1000;
  this.perfume.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FU1, this);


  this.add.sprite(65, 70,"Fur");

  var furadeira2 = this.add.sprite(200, 210,"Furadeira2");

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1FU1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FU1FU1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FU1FU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(65, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA1FU1, this);
}
RA1FU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 190;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DE1FU1, this);
}
DE1FU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DE3.mp3";
  this.audio.play();

  this.linha.position.x = 325;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I1FU1, this);
}
I1FU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(455, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA11FU1, this);
}
RA11FU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 505;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1FU1, this);
}
FIM1FU1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1FU1();
}
REPETIR1FU1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FU1, this);
}



Perfume(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FFU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.perfume.position.x = 1000;
  this.furadeira.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lf.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(95, 70,"Per");

  var perfume2 = this.add.sprite(190, 230,"grande", 68);

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

  this.audio.src = "assets/sons/PER.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 140,"Linha");

  this.linha2 = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FU.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ME.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  this.linha2.position.x = 433;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DU2, this);
}
FIM2DU2(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DU2();
}
REPETIR2DU2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU2, this);
}


Voltar4(){
  game.state.start('FonemaF');
}
Voltar2(){
  game.state.start('Tela2');
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
case "alface":
letra.AcertouF();
break;
case "bife":
letra.AcertouF();
break;
case "cafeteira":
letra.AcertouF();
break;
case "faca":
letra.AcertouF();
break;
case "ferro":
letra.AcertouF();
break;
case "figo":
letra.AcertouF();
break;
case "foca":
letra.AcertouF();
break;
case "fofoca":
letra.AcertouF();
break;
case "furadeira":
letra.AcertouF();
break;
case "garfo":
letra.AcertouF();
break;
case "girafa":
letra.AcertouF();
break;
case "perfume":
letra.AcertouF();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraF()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, F.mp3";
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
