class FonemaX
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
   this.load.image("Coxa","assets/FonemaX/Coxa.png");
   this.load.image("Lixo","assets/FonemaX/Lixo.png");
   this.load.image("Xerife","assets/FonemaX/Xerife.png");
   
   this.load.image("LX","assets/LetraX.png");

   this.load.image("Xa","assets/Xa.png");
   this.load.image("Xe","assets/Xe.png");
   this.load.image("Xi","assets/Xi.png");
   this.load.image("Xo","assets/Xo.png");
   this.load.image("Xu","assets/Xu.png");
  
   this.load.image("Xarope","assets/FonemaX/Xarope.png");
   this.load.image("Enxada","assets/FonemaX/Enxada.png");
   this.load.image("Coxa","assets/FonemaX/Coxa.png");
   this.load.image("Xarope2","assets/FonemaX/Xarope2.png");
   this.load.image("Enxada2","assets/FonemaX/Enxada2.png");
   this.load.image("Coxa2","assets/FonemaX/Coxa2.png");
   this.load.image("FXA1","assets/FXA1.png");
   this.load.image("FXA2","assets/FXA2.png");
   this.load.image("FXA3","assets/FXA3.png");
   this.load.image("Xar","assets/Xar2.png");
   this.load.image("Enx","assets/Enx.png");
   this.load.image("Cox","assets/Cox.png");

   this.load.image("Xerife","assets/FonemaX/Xerife.png");
   this.load.image("Lixeira","assets/FonemaX/Lixeira.png");
   this.load.image("Peixe","assets/FonemaX/Peixe.png");
   this.load.image("Xerife2","assets/FonemaX/Xerife2.png");
   this.load.image("Lixeira2","assets/FonemaX/Lixeira2.png");
   this.load.image("Peixe2","assets/FonemaX/Peixe2.png");
   this.load.image("FXE1","assets/FXE1.png");
   this.load.image("FXE2","assets/FXE2.png");
   this.load.image("FXE3","assets/FXE3.png");
   this.load.image("Xer","assets/Xer.png");
   this.load.image("Lix","assets/Lix.png");
   this.load.image("Pei","assets/Pei.png");

   this.load.image("Xicara","assets/FonemaX/Xicara.png");
   this.load.image("Bexiga","assets/FonemaX/Bexiga.png");
   this.load.image("Abacaxi","assets/FonemaX/Abacaxi.png");
   this.load.image("Xicara2","assets/FonemaX/Xicara2.png");
   this.load.image("Bexiga2","assets/FonemaX/Bexiga2.png");
   this.load.image("Abacaxi2","assets/FonemaX/Abacaxi2.png");
   this.load.image("FXI1","assets/FXI1.png");
   this.load.image("FXI2","assets/FXI2.png");
   this.load.image("FXI3","assets/FXI3.png");
   this.load.image("Xir","assets/Xir.png");
   this.load.image("Bex","assets/Bex3.png");
   this.load.image("Aba","assets/Aba5.png");

   //this.load.image("Volante","assets/FonemaV/Volante.png");
   this.load.image("Caixote","assets/FonemaX/Caixote.png");
   this.load.image("Lixo","assets/FonemaX/Lixo.png");
   //this.load.image("Xarope2","assets/FonemaX/Xarope2.png");
   this.load.image("Caixote2","assets/FonemaX/Caixote2.png");
   this.load.image("Lixo2","assets/FonemaX/Lixo3.png");
   this.load.image("FXO1","assets/FXO1.png");
   this.load.image("FXO2","assets/FXO2.png");
   this.load.image("FXO3","assets/FXO3.png");
   //this.load.image("Xar","assets/Xar.png");
   this.load.image("Cai","assets/Cai2.png");
   this.load.image("Lix2","assets/Lix2.png");

   //this.load.image("Vulcao","assets/FonemaV/Vulcao.png");
   //this.load.image("Vuvuzela","assets/FonemaV/Vuvuzela.png");
   //this.load.image("Tatu","assets/FonemaT/Tatu.png");


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



      this.xa = this.add.sprite(38, 205,"Xa");
      this.xa.inputEnabled = true;
      this.xa.events.onInputDown.add(this.Xa, this);

      this.xe = this.add.sprite(280, 235,"Xe");
      this.xe.inputEnabled = true;
      this.xe.events.onInputDown.add(this.Xe, this);

      this.xo = this.add.sprite(137, 385,"Xo");
      this.xo.inputEnabled = true;
      this.xo.events.onInputDown.add(this.Xo, this);

      this.xu = this.add.sprite(424, 390,"Xu");
      this.xu.inputEnabled = true;
      this.xu.events.onInputDown.add(this.Xu, this);

      this.xi = this.add.sprite(515, 205,"Xi");
      this.xi.inputEnabled = true;
      this.xi.events.onInputDown.add(this.Xi, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lx = this.add.sprite(-10, -10,"LX");







}
 update()
 {
}

Xa(){
  this.xa.position.x = 1000;
  this.xe.position.x = 1000;
  this.xi.position.x = 1000;
  this.xo.position.x = 1000;
  this.xu.position.x = 1000;

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

  this.lx.position.x = 1000;

  this.xarope = this.add.sprite(48, 260,"pequeno2", 44);
  this.xarope.inputEnabled = true;
  this.xarope.events.onInputDown.add(this.Xarope, this);

  this.enxada = this.add.sprite(290, 375,"pequeno3", 34);
  this.enxada.inputEnabled = true;
  this.enxada.events.onInputDown.add(this.Enxada, this);

  this.coxa = this.add.sprite(525, 245,"pequeno3", 35);
  this.coxa.inputEnabled = true;
  this.coxa.events.onInputDown.add(this.Coxa, this);
}

Xarope(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.enxada.position.x = 1000;
  this.coxa.position.x = 1000;
  this.xarope.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(150, 70,"Xar");

  var xarope2 = this.add.sprite(210, 230,"grande2", 44);

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

  this.audio.src = "assets/sons/XA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(158, 135,"Linha");
  this.linha2 = this.add.sprite(170, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha.position.x = 300;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE1JA1, this);
}
RE1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha.position.x = 425;

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

Enxada(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.coxa.position.x = 1000;
  this.enxada.position.x = 1000;
  this.xarope.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(135, 70,"Enx");

  var enxada2 = this.add.sprite(200, 210,"grande3", 34);

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
  this.audio.src = "assets/sons/EN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XA.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
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

Coxa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.coxa.position.x = 1000;
  this.xarope.position.x = 1000;
  this.enxada.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(195, 70,"Cox");

  var coxa2 = this.add.sprite(180, 210,"grande3", 35);

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

  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XA.mp3";
  this.audio.play();

  this.linha.position.x = 340;

  this.linha2 = this.add.sprite(350, 140,"Linha");

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

Xe(){
  this.xa.position.x = 1000;
  this.xe.position.x = 1000;
  this.xi.position.x = 1000;
  this.xo.position.x = 1000;
  this.xu.position.x = 1000;

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

  this.lx.position.x = 1000;

  this.xerife = this.add.sprite(40, 250,"pequeno3", 36);
  this.xerife.inputEnabled = true;
  this.xerife.events.onInputDown.add(this.Xerife, this);

  this.lixeira = this.add.sprite(290, 370,"pequeno3", 37);
  this.lixeira.inputEnabled = true;
  this.lixeira.events.onInputDown.add(this.Lixeira, this);

  this.peixe = this.add.sprite(530, 255,"pequeno3", 38);
  this.peixe.inputEnabled = true;
  this.peixe.events.onInputDown.add(this.Peixe, this);
}

Xerife(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.xerife.position.x = 1000;
  this.lixeira.position.x = 1000;
  this.peixe.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(140, 70,"Xer");

  var xerife2 = this.add.sprite(170, 230,"grande3", 36);

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

  this.audio.src = "assets/sons/XE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(158, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RI.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE1JE1, this);
}
FE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FE.mp3";
  this.audio.play();

  this.linha.position.x = 405;

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

Lixeira(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.lixeira.position.x = 1000;
  this.xerife.position.x = 1000;
  this.peixe.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(100, 70,"Lix");

  var lixeira2 = this.add.sprite(200, 230,"grande3", 37);

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

  this.audio.src = "assets/sons/LI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XE.mp3";
  this.audio.play();

  this.linha.position.x = 240;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(365, 130,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I2JE2, this);
}
I2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 430;

  this.linha2.position.x = 1000;

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

Peixe(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.peixe.position.x = 1000;
  this.xerife.position.x = 1000;
  this.lixeira.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(145, 70,"Pei");

  var peixe2 = this.add.sprite(200, 240,"grande3", 38);

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
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(302, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XE3FE3, this);
}
XE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XE.mp3";
  this.audio.play();

  this.linha.position.x = 363;

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

Xi(){
  this.xa.position.x = 1000;
  this.xe.position.x = 1000;
  this.xi.position.x = 1000;
  this.xo.position.x = 1000;
  this.xu.position.x = 1000;

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

  this.lx.position.x = 1000;

  //this.xicara = this.add.sprite(52, 255,"Xicara");
  //this.xicara.inputEnabled = true;
  //this.xicara.events.onInputDown.add(this.Xicara, this);

  this.bexiga = this.add.sprite(328, 370,"pequeno",9);
  this.bexiga.inputEnabled = true;
  this.bexiga.events.onInputDown.add(this.Bexiga, this);

  this.abacaxi = this.add.sprite(532, 240,"pequeno", 0);
  this.abacaxi.inputEnabled = true;
  this.abacaxi.events.onInputDown.add(this.Abacaxi, this);
}

Xicara(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.xicara.position.x = 1000;
  this.bexiga.position.x = 1000;
  this.abacaxi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(140, 70,"Xic");

  var xicara2 = this.add.sprite(190, 250,"Xicara2");

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

  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(158, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA1CI1, this);
}
RA1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 405;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CI1, this);
}
FIM1CI1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1CI1();
}
REPETIR1CI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI1, this);
}

Bexiga(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bexiga.position.x = 1000;
  //this.xicara.position.x = 1000;
  this.abacaxi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(140, 70,"Bex");

  var bexiga2 = this.add.sprite(260, 240,"grande", 9);

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

  this.audio.src = "assets/sons/BE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 275;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GA.mp3";
  this.audio.play();

  this.linha.position.x = 403;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DI2, this);
}
FIM2DI2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DI2();
}
REPETIR2DI2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI2, this);
}

Abacaxi(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  //this.xicara.position.x = 1000;
  this.bexiga.position.x = 1000;
  this.abacaxi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI3, this);


  this.add.sprite(100, 70,"Aba");

  var abacaxi2 = this.add.sprite(190, 210,"grande",0);

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

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(113, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PLO3DI3, this);
}
PLO3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(192, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI3DI3, this);
}
DI3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha2.position.x = 322;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI3DI3, this);
}
XI3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha2.position.x = 447;
  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DI3, this);
}
FIM3DI3(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DI3();
}
REPETIR2DI3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI3, this);
}

Xo(){
  this.xa.position.x = 1000;
  this.xe.position.x = 1000;
  this.xi.position.x = 1000;
  this.xo.position.x = 1000;
  this.xu.position.x = 1000;

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

  this.lx.position.x = 1000;

  /*this.volante = this.add.sprite(47, 250,"pequeno3", 28);
  this.volante.inputEnabled = true;
  this.volante.events.onInputDown.add(this.Volante, this);*/

  this.caixote = this.add.sprite(292, 375,"pequeno3", 41);
  this.caixote.inputEnabled = true;
  this.caixote.events.onInputDown.add(this.Caixote, this);

  this.lixo = this.add.sprite(490, 200,"pequeno3", 42);
  this.lixo.inputEnabled = true;
  this.lixo.events.onInputDown.add(this.Lixo, this);
}

Caixote(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.caixote.position.x = 1000;
  this.lixo.position.x = 1000;
  //this.ovo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(90, 70,"Cai");

  var caixote2 = this.add.sprite(200, 240,"grande3", 41);

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

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(115, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(235, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XO.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(315, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE2CO2, this);
}
TE2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 450;

  this.linha3.position.x = 1000;

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





Lixo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FXO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.lixo.position.x = 1000;
  this.caixote.position.x = 1000;
  //this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lx.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(190, 70,"Lix2");

  var lixo2 = this.add.sprite(120, 160,"grande3", 42);

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
  this.audio.src = "assets/sons/LI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(202, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XO.mp3";
  this.audio.play();

  this.linha.position.x = 320;

  this.linha2 = this.add.sprite(330, 140,"Linha");

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


Xu(){

}

voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaX');
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
case "abacaxi":
letra.AcertouX();
break;
case "bexiga":
letra.AcertouX();
break;
case "caixote":
letra.AcertouX();
break;
case "coxa":
letra.AcertouX();
break;
case "enxada":
letra.AcertouX();
break;
case "lixeira":
letra.AcertouX();
break;
case "lixo":
letra.AcertouX();
break;
case "peixe":
letra.AcertouX();
break;
case "xarope":
letra.AcertouX();
break;
case "xerife":
letra.AcertouX();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraX()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, X.mp3";
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
