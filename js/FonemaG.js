class FonemaG
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



      this.ga = this.add.sprite(38, 205,"Ga");
      this.ga.inputEnabled = true;
      this.ga.events.onInputDown.add(this.Ga, this);

      this.ge = this.add.sprite(280, 235,"Ge");
      this.ge.inputEnabled = true;
      this.ge.events.onInputDown.add(this.Ge, this);

      this.go = this.add.sprite(137, 385,"Go");
      this.go.inputEnabled = true;
      this.go.events.onInputDown.add(this.Go, this);

      this.gu = this.add.sprite(424, 390,"Gu");
      this.gu.inputEnabled = true;
      this.gu.events.onInputDown.add(this.Gu, this);

      this.gi = this.add.sprite(520, 205,"Gi");
      this.gi.inputEnabled = true;
      this.gi.events.onInputDown.add(this.Gi, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.Voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lg = this.add.sprite(-10, -10,"LG");







}
 update()
 {
}
Ga(){
  this.ga.position.x = 1000;
  this.ge.position.x = 1000;
  this.gi.position.x = 1000;
  this.go.position.x = 1000;
  this.gu.position.x = 1000;

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

  this.lg.position.x = 1000;

  this.gato = this.add.sprite(55, 240,"pequeno", 73);
  this.gato.inputEnabled = true;
  this.gato.events.onInputDown.add(this.Gato, this);

  this.cagado = this.add.sprite(295, 400,"pequeno", 70);
  this.cagado.inputEnabled = true;
  this.cagado.events.onInputDown.add(this.Cagado, this);

  this.bexiga = this.add.sprite(560, 240,"pequeno",9);
  this.bexiga.inputEnabled = true;
  this.bexiga.events.onInputDown.add(this.Bexiga, this);
}

Gato(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.gato.position.x = 1000;
  this.cagado.position.x = 1000;
  this.bexiga.position.x = 1000;

  this.escolha2.position.x = 1000;
  //.ld.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GA1, this);


  this.add.sprite(190, 70,"Gat");

  var gato2 = this.add.sprite(200, 230,"grande", 73);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1GA1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.GA1GA1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
GA1GA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1GA1, this);
}
TO1GA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1GA1, this);
}
FIM1GA1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1GA1();
}
REPETIR1GA1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GA1, this);
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



Cagado(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.gato.position.x = 1000;
  this.cagado.position.x = 1000;
  this.bexiga.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GA2, this);


  this.add.sprite(120, 65,"Cag");

  var cagado2 = this.add.sprite(200, 280,"grande", 70);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1GA2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CA2GA2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CA2GA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(143, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GA2GA2, this);
}
GA2GA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GA.mp3";
  this.audio.play();

  this.linha.position.x = 275;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DO2GA2, this);
}
DO2GA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2GA2, this);
}
FIM2GA2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2GA2();
}
REPETIR2GA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GA2, this);
}


Bexiga(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bexiga.position.x = 1000;
  this.gato.position.x = 1000;
  this.cagado.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GA3, this);


  this.add.sprite(140, 70,"Bex");

  var bexiga2 = this.add.sprite(250, 210,"grande", 9);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1GA3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BE3GA3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BE3GA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI3GA3, this);
}
XI3GA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 276;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GA3GA3, this);
}
GA3GA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GA.mp3";
  this.audio.play();

  this.linha.position.x = 406;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3GA3, this);
}
FIM3GA3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2GA3();
}
REPETIR2GA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GA3, this);
}


Ge(){
  this.ga.position.x = 1000;
  this.ge.position.x = 1000;
  this.gi.position.x = 1000;
  this.go.position.x = 1000;
  this.gu.position.x = 1000;

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

  this.lg.position.x = 1000;

  this.gelo = this.add.sprite(50, 250,"pequeno", 74);
  this.gelo.inputEnabled = true;
  this.gelo.events.onInputDown.add(this.Gelo, this);

  this.tigela = this.add.sprite(295, 395,"pequeno", 78);
  this.tigela.inputEnabled = true;
  this.tigela.events.onInputDown.add(this.Tigela, this);

  /*this.bife = this.add.sprite(535, 240,"pequeno", 58);
  this.bife.inputEnabled = true;
  this.bife.events.onInputDown.add(this.Bife, this);*/
}

Gelo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.gelo.position.x = 1000;
  //this.cafeteira.position.x = 1000;
  //this.bife.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GE1, this);


  this.add.sprite(195, 70,"Gel");

  var gelo2 = this.add.sprite(210, 220,"grande", 74);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1GE1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.GE1GE1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
GE1GE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LO1GE1, this);
}
LO1GE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 345;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1GE1, this);
}
FIM1GE1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1GE1();
}
REPETIR1GE1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GE1, this);
}

Tigela(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tigela.position.x = 1000;
  this.gelo.position.x = 1000;
  //this.bife.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GE2, this);


  this.add.sprite(140, 70,"Tig");

  var tigela2 = this.add.sprite(200, 240,"grande", 78);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1GE2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.TI2GE2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
TI2GE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GE2GE2, this);
}
GE2GE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GE2.mp3";
  this.audio.play();

  this.linha.position.x = 275;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LA2GE2, this);
}
LA2GE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 400;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2GE2, this);
}
FIM2GE2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2GE2();
}
REPETIR2GE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GE2, this);
}


Gi(){
  this.ga.position.x = 1000;
  this.ge.position.x = 1000;
  this.gi.position.x = 1000;
  this.go.position.x = 1000;
  this.gu.position.x = 1000;

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

  this.lg.position.x = 1000;

  this.girafa = this.add.sprite(45, 245,"pequeno", 67);
  this.girafa.inputEnabled = true;
  this.girafa.events.onInputDown.add(this.Girafa, this);

  /*this.armadilha = this.add.sprite(295, 400,"pequeno", 40);
  this.armadilha.inputEnabled = true;
  this.armadilha.events.onInputDown.add(this.Armadilha, this);

  this.explodi = this.add.sprite(525, 240,"pequeno", 48);
  this.explodi.inputEnabled = true;
  this.explodi.events.onInputDown.add(this.Explodi, this);*/
}

Girafa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.girafa.position.x = 1000;
  //this.armadilha.position.x = 1000;
  //this.explodi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GI1, this);


  this.add.sprite(160, 70,"Gir");

  var girafa2 = this.add.sprite(185, 230,"grande", 67);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1GI1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.GI1GI1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
GI1GI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA1GI1, this);
}
RA1GI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FA1GI1, this);
}
FA1GI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FA.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1GI1, this);
}
FIM1GI1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1GI1();
}
REPETIR1GI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GI1, this);
}


Go(){
  this.ga.position.x = 1000;
  this.ge.position.x = 1000;
  this.gi.position.x = 1000;
  this.go.position.x = 1000;
  this.gu.position.x = 1000;

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

  this.lg.position.x = 1000;

  this.gota = this.add.sprite(50, 245,"pequeno", 77);
  this.gota.inputEnabled = true;
  this.gota.events.onInputDown.add(this.Gota, this);

  this.bigode = this.add.sprite(295, 385,"pequeno", 69);
  this.bigode.inputEnabled = true;
  this.bigode.events.onInputDown.add(this.Bigode, this);

  this.fogo = this.add.sprite(535, 240,"pequeno", 72);
  this.fogo.inputEnabled = true;
  this.fogo.events.onInputDown.add(this.Fogo, this);
}

Gota(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.gota.position.x = 1000;
  this.bigode.position.x = 1000;
  this.fogo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GO1, this);


  this.add.sprite(200, 70,"Got");

  var gota2 = this.add.sprite(210, 240,"grande", 77);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1GO1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.GO1GO1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
GO1GO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TA1GO1, this);
}
TA1GO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 360;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1GO1, this);
}
FIM1GO1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1GO1();
}
REPETIR1GO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GO1, this);
}

Bigode(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bigode.position.x = 1000;
  this.fogo.position.x = 1000;
  this.gota.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GO2, this);


  this.add.sprite(120, 70,"Big");

  var bigode2 = this.add.sprite(205, 240,"grande", 69);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1GO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BI2GO2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BI2GO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GO2GO2, this);
}
GO2GO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GO.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DE2GO2, this);
}
DE2GO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/De.mp3";
  this.audio.play();

  this.linha.position.x = 410;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2GO2, this);
}
FIM2GO2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2GO2();
}
REPETIR2GO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GO2, this);
}

Fogo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.fogo.position.x = 1000;
  this.bigode.position.x = 1000;
  this.gota.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GO3, this);


  this.add.sprite(200, 70,"Fog");

  var fogo2 = this.add.sprite(205, 235,"grande", 72);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1GO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.FO3GO3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
FO3GO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GO3GO3, this);
}
GO3GO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GO.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3GO3, this);
}
FIM3GO3(){
  this.linha.position.x = 1000;

  this.start();
  this.REPETIR2GO3();
}
REPETIR2GO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GO3, this);
}

Gu(){
  this.ga.position.x = 1000;
  this.ge.position.x = 1000;
  this.gi.position.x = 1000;
  this.go.position.x = 1000;
  this.gu.position.x = 1000;

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

  this.lg.position.x = 1000;

  /*this.furadeira = this.add.sprite(50, 240,"Furadeira");
  this.furadeira.inputEnabled = true;
  this.furadeira.events.onInputDown.add(this.Furadeira, this);*/

  this.cogumelo = this.add.sprite(295, 385,"pequeno", 71);
  this.cogumelo.inputEnabled = true;
  this.cogumelo.events.onInputDown.add(this.Cogumelo, this);

  /*this.edu = this.add.sprite(530, 255,"pequeno", 47);
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);*/
}



Cogumelo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FGU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cogumelo.position.x = 1000;
  //this.duende.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lg.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.Voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1GU2, this);


  this.add.sprite(70, 70,"Cog");

  var cogumelo2 = this.add.sprite(205, 260,"grande", 71);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1GU2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CO2GU2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CO2GU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(75, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GU2GU2, this);
}
GU2GU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GU.mp3";
  this.audio.play();

  this.linha.position.x = 210;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.ME2GU2, this);
}
ME2GU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ME2.mp3";
  this.audio.play();

  this.linha.position.x = 340;

  this.linha2 = this.add.sprite(355, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LO2GU2, this);
}
LO2GU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 490;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2GU2, this);
}
FIM2GU2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2GU2();
}
REPETIR2GU2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1GU2, this);
}




Voltar4(){
  game.state.start('FonemaG');
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
case "bexiga":
letra.AcertouG();
break;
case "bigode":
letra.AcertouG();
break;
case "cágado":
letra.AcertouG();
break;
case "cogumelo":
letra.AcertouG();
break;
case "fogo":
letra.AcertouG();
break;
case "gato":
letra.AcertouG();
break;
case "gelo":
letra.AcertouG();
break;
case "girafa":
letra.AcertouG();
break;
case "golfinho":
letra.AcertouG();
break;
case "gota":
letra.AcertouG();
break;
case "tigela":
letra.AcertouG();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraG()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, G.mp3";
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
