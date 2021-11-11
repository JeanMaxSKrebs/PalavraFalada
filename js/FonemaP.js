class FonemaP
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
   
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("LP","assets/LetraP.png");

   this.load.image("Pa","assets/Pa.png");
   this.load.image("Pe","assets/Pe.png");
   this.load.image("Pi","assets/Pi.png");
   this.load.image("Po","assets/Po.png");
   this.load.image("Pu","assets/Pu.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Escolha","assets/Escolha2.png");

   this.load.image("Pato","assets/FonemaP/Pato.png");
   this.load.image("Sapato","assets/FonemaP/Sapato.png");
   this.load.image("Lupa","assets/FonemaP/Lupa.png");
   this.load.image("Pato2","assets/FonemaP/Pato2.png");
   this.load.image("Sapato2","assets/FonemaP/Sapato2.png");
   this.load.image("Lupa2","assets/FonemaP/Lupa2.png");
   this.load.image("FPA1","assets/FPA1.png");
   this.load.image("FPA2","assets/FPA2.png");
   this.load.image("FPA3","assets/FPA3.png");
   this.load.image("Pat","assets/Pat.png");
   this.load.image("Sap","assets/Sap.png");
   this.load.image("Lup","assets/Lup.png");

   this.load.image("Pena","assets/FonemaP/Pena.png");
   this.load.image("Tapete","assets/FonemaP/Tapete.png");
   this.load.image("Xarope","assets/FonemaP/Xarope.png");
   this.load.image("Pena2","assets/FonemaP/Pena2.png");
   this.load.image("Tapete2","assets/FonemaP/Tapete2.png");
   this.load.image("Xarope2","assets/FonemaP/Xarope2.png");
   this.load.image("FPE1","assets/FPE1.png");
   this.load.image("FPE2","assets/FPE2.png");
   this.load.image("FPE3","assets/FPE3.png");
   this.load.image("Pen","assets/Pen2.png");
   this.load.image("Tap","assets/Tap.png");
   this.load.image("Xar","assets/Xar.png");

   this.load.image("Pinguim","assets/FonemaP/Pinguim.png");
   //this.load.image("Menino","assets/FonemaP/Menino.png");
   //this.load.image("Biquini","assets/FonemaP/Biquini.png");
   this.load.image("Pinguim2","assets/FonemaP/Pinguim2.png");
   //this.load.image("Tapete2","assets/FonemaP/Tapete2.png");
   //this.load.image("Xarope2","assets/FonemaP/Xarope2.png");
   this.load.image("FPI1","assets/FPI1.png");
   this.load.image("FPI2","assets/FPI2.png");
   this.load.image("FPI3","assets/FPI3.png");
   this.load.image("Pin","assets/Pin.png");
   //this.load.image("Tap","assets/Tap.png");
   //this.load.image("Xap","assets/Xap.png");

   this.load.image("Porco","assets/FonemaP/Porco.png");
   this.load.image("Pipoca","assets/FonemaP/Pipoca.png");
   this.load.image("Sapo","assets/FonemaP/Sapo.png");
   this.load.image("Porco2","assets/FonemaP/Porco2.png");
   this.load.image("Pipoca2","assets/FonemaP/Pipoca2.png");
   this.load.image("Sapo2","assets/FonemaP/Sapo2.png");
   this.load.image("FPO1","assets/FPO1.png");
   this.load.image("FPO2","assets/FPO2.png");
   this.load.image("FPO3","assets/FPO3.png");
   this.load.image("Por","assets/Por.png");
   this.load.image("Pip","assets/Pip2.png");
   this.load.image("Sap2","assets/Sap2.png");

   this.load.image("Pudim","assets/FonemaP/Pudim.png");
   this.load.image("Espuma","assets/FonemaP/Espuma.png");
   //this.load.image("Bexiga","assets/FonemaG/Bexiga.png");
   this.load.image("Pudim2","assets/FonemaP/Pudim2.png");
   this.load.image("Espuma2","assets/FonemaP/Espuma2.png");
   //this.load.image("Xarope2","assets/FonemaP/Xarope2.png");
   this.load.image("FPU1","assets/FPU1.png");
   this.load.image("FPU2","assets/FPU2.png");
   this.load.image("FPU3","assets/FPU3.png");
   this.load.image("Pud","assets/Pud.png");
   this.load.image("Esp","assets/Esp3.png");
   //this.load.image("Xap","assets/Xap.png");


 }
 create() {
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


      this.pa = this.add.sprite(38, 205,"Pa");
      this.pa.inputEnabled = true;
      this.pa.events.onInputDown.add(this.Pa, this);

      this.pe = this.add.sprite(280, 235,"Pe");
      this.pe.inputEnabled = true;
      this.pe.events.onInputDown.add(this.Pe, this);

      this.po = this.add.sprite(137, 385,"Po");
      this.po.inputEnabled = true;
      this.po.events.onInputDown.add(this.Po, this);

      this.pu = this.add.sprite(424, 390,"Pu");
      this.pu.inputEnabled = true;
      this.pu.events.onInputDown.add(this.Pu, this);

      this.pi = this.add.sprite(520, 205,"Pi");
      this.pi.inputEnabled = true;
      this.pi.events.onInputDown.add(this.Pi, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lp = this.add.sprite(-10, -10,"LP");







}
 update()
 {
}

Pa(){
  this.pa.position.x = 1000;
  this.pe.position.x = 1000;
  this.pi.position.x = 1000;
  this.po.position.x = 1000;
  this.pu.position.x = 1000;

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

  this.lp.position.x = 1000;

  this.pato = this.add.sprite(55, 240,"pequeno2", 39);
  this.pato.inputEnabled = true;
  this.pato.events.onInputDown.add(this.Pato, this);

  this.sapato = this.add.sprite(295, 370,"pequeno2", 40);
  this.sapato.inputEnabled = true;
  this.sapato.events.onInputDown.add(this.Sapato, this);

  this.lupa = this.add.sprite(530, 240,"pequeno2", 41);
  this.lupa.inputEnabled = true;
  this.lupa.events.onInputDown.add(this.Lupa, this);
}

Pato(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pato.position.x = 1000;
  this.sapato.position.x = 1000;
  this.lupa.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(190, 70,"Pat");

  var pato2 = this.add.sprite(200, 230,"grande2", 39);

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

  this.audio.src = "assets/sons/PA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 350;

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






Sapato(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sapato.position.x = 1000;
  this.pato.position.x = 1000;
  this.lupa.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(140, 70,"Sap");

  var sapato2 = this.add.sprite(200, 210,"grande2", 40);

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
  this.audio.src = "assets/sons/SA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(140, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PA.mp3";
  this.audio.play();

  this.linha.position.x = 272;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 415;

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




Lupa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.lupa.position.x = 1000;
  this.sapato.position.x = 1000;
  this.pato.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(190, 70,"Lup");

  var lupa2 = this.add.sprite(210, 210,"grande2", 41);

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

  this.audio.src = "assets/sons/LU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(217, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PA.mp3";
  this.audio.play();

  this.linha.position.x = 343;

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




Pe(){
  this.pa.position.x = 1000;
  this.pe.position.x = 1000;
  this.pi.position.x = 1000;
  this.po.position.x = 1000;
  this.pu.position.x = 1000;

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

  this.lp.position.x = 1000;

  this.pena = this.add.sprite(55, 240,"pequeno2", 42);
  this.pena.inputEnabled = true;
  this.pena.events.onInputDown.add(this.Pena, this);

  this.tapete = this.add.sprite(295, 400,"pequeno2", 43);
  this.tapete.inputEnabled = true;
  this.tapete.events.onInputDown.add(this.Tapete, this);

  this.xarope = this.add.sprite(530, 255,"pequeno2", 44);
  this.xarope.inputEnabled = true;
  this.xarope.events.onInputDown.add(this.Xarope, this);
}

Pena(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pena.position.x = 1000;
  this.tapete.position.x = 1000;
  this.xarope.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(193, 70,"Pen");

  var pena2 = this.add.sprite(210, 230,"grande2", 42);

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

  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha.position.x = 340;

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






Tapete(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tapete.position.x = 1000;
  this.pena.position.x = 1000;
  this.xarope.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(140, 70,"Tap");

  var tapete2 = this.add.sprite(200, 250,"grande2", 43);

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

  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 395;

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






Xarope(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.xarope.position.x = 1000;
  this.tapete.position.x = 1000;
  this.pena.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(140, 70,"Xar");

  var xarope2 = this.add.sprite(210, 240,"grande2", 44);

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
  this.audio.src = "assets/sons/XA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");
  this.linha2 = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha.position.x = 295;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PE3FE3, this);
}
PE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha.position.x = 420;

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






Pi(){
  this.pa.position.x = 1000;
  this.pe.position.x = 1000;
  this.pi.position.x = 1000;
  this.po.position.x = 1000;
  this.pu.position.x = 1000;

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

  this.lp.position.x = 1000;

  this.pinguim = this.add.sprite(50, 245,"pequeno2", 45);
  this.pinguim.inputEnabled = true;
  this.pinguim.events.onInputDown.add(this.Pinguim, this);

  /*this.menino = this.add.sprite(325, 380,"Menino");
  this.menino.inputEnabled = true;
  this.menino.events.onInputDown.add(this.Menino, this);

  this.biquini = this.add.sprite(545, 240,"Biquini");
  this.biquini.inputEnabled = true;
  this.biquini.events.onInputDown.add(this.Biquini, this);*/
}

Pinguim(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pinguim.position.x = 1000;
  //this.menino.position.x = 1000;
  //this.biquini.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(130, 70,"Pin");

  var pinguim2 = this.add.sprite(200, 250,"grande2", 45);

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

  this.audio.src = "assets/sons/PIN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha");

  this.linha2 = this.add.sprite(180, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GUIM.mp3";
  this.audio.play();

  this.linha.position.x = 310;

  this.linha2.position.x = 415;

  this.linha3 = this.add.sprite(455, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CI1, this);
}
FIM1CI1(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR1CI1();
}
REPETIR1CI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI1, this);
}

Po(){
  this.pa.position.x = 1000;
  this.pe.position.x = 1000;
  this.pi.position.x = 1000;
  this.po.position.x = 1000;
  this.pu.position.x = 1000;

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

  this.lp.position.x = 1000;

  this.porco = this.add.sprite(50, 245,"pequeno2", 46);
  this.porco.inputEnabled = true;
  this.porco.events.onInputDown.add(this.Porco, this);

  this.pipoca = this.add.sprite(295, 375,"pequeno", 34);
  this.pipoca.inputEnabled = true;
  this.pipoca.events.onInputDown.add(this.Pipoca, this);

  this.sapo = this.add.sprite(528, 245,"pequeno2", 48);
  this.sapo.inputEnabled = true;
  this.sapo.events.onInputDown.add(this.Sapo, this);
}





Porco(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.porco.position.x = 1000;
  this.pipoca.position.x = 1000;
  this.sapo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(175, 70,"Por");

  var porco2 = this.add.sprite(195, 240,"grande2", 46);

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

  this.audio.src = "assets/sons/POR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(193, 140,"Linha");

  this.linha2 = this.add.sprite(253, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 384;
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





Pipoca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pipoca.position.x = 1000;
  this.sapo.position.x = 1000;
  this.porco.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(140, 70,"Pip");

  var pipoca2 = this.add.sprite(200, 240,"grande", 34);

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

  this.audio.src = "assets/sons/PI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PO.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 395;

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





Sapo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sapo.position.x = 1000;
  this.pipoca.position.x = 1000;
  this.porco.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(195, 70,"Sap2");

  var sapo2 = this.add.sprite(205, 210,"grande2", 48);

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
  this.audio.src = "assets/sons/SA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  this.linha2 = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PO.mp3";
  this.audio.play();

  this.linha.position.x = 350;
  this.linha2.position.x = 1000;

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

Pu(){
  this.pa.position.x = 1000;
  this.pe.position.x = 1000;
  this.pi.position.x = 1000;
  this.po.position.x = 1000;
  this.pu.position.x = 1000;

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

  this.lp.position.x = 1000;

  this.pudim = this.add.sprite(50, 250,"pequeno2", 49);
  this.pudim.inputEnabled = true;
  this.pudim.events.onInputDown.add(this.Pudim, this);

  this.espuma = this.add.sprite(295, 370,"pequeno2", 50);
  this.espuma.inputEnabled = true;
  this.espuma.events.onInputDown.add(this.Espuma, this);

  /*this.edu = this.add.sprite(530, 255,"pequeno", 47);
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);*/
}





Pudim(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pudim.position.x = 1000;
  this.espuma.position.x = 1000;
  //this.caju.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(170, 70,"Pud");

  var pudim2 = this.add.sprite(190, 240,"grande2", 49);

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

  this.audio.src = "assets/sons/PU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(175, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1CU1, this);
}
CA1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DIM.mp3";
  this.audio.play();

  this.linha.position.x = 303;

  this.linha2 = this.add.sprite(385, 140,"Linha");

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






Espuma(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FPU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.espuma.position.x = 1000;
  this.pudim.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lp.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(145, 70,"Esp");

  var espuma2 = this.add.sprite(200, 240,"grande2", 50);

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

  this.audio.src = "assets/sons/ES.mp3";
  this.audio.play();

  this.linha = this.add.sprite(144, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PU.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha.position.x = 395;

  this.linha2 = this.add.sprite(415, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DU2, this);
}
FIM2DU2(){
  this.linha2.position.x = 1000;
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
  game.state.start('FonemaP');
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
case "esponja":
letra.AcertouP();
break;
case "espuma":
letra.AcertouP();
break;
case "lupa":
letra.AcertouP();
break;
case "pato":
letra.AcertouP();
break;
case "pena":
letra.AcertouP();
break;
case "pinguim":
letra.AcertouP();
break;
case "pipoca":
letra.AcertouP();
break;
case "porco":
letra.AcertouP();
break;
case "pudim":
letra.AcertouP();
break;
case "sapato":
letra.AcertouP();
break;
case "sapo":
letra.AcertouP();
break;
case "tapete":
letra.AcertouP();
break;
case "xarope":
letra.AcertouP();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraP()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, P.mp3";
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
