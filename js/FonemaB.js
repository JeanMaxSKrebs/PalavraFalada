class FonemaB
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

    //this.LetraB();
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.add.sprite(0,0,"FF3");

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start, this);

      this.quad1 = this.add.sprite(30, 200,"Quadrado");

      this.quad2 = this.add.sprite(275, 230,"Quadrado");

      this.quad3 = this.add.sprite(130, 380,"Quadrado");

      this.quad4 = this.add.sprite(418, 380,"Quadrado");

      this.quad5 = this.add.sprite(510, 200,"Quadrado");



    this.ba = this.add.sprite(35, 205,"Ba");
    this.ba.inputEnabled = true;
    this.ba.events.onInputDown.add(this.Ba, this);

    this.be = this.add.sprite(295, 250,"Be");
    this.be.inputEnabled = true;
    this.be.events.onInputDown.add(this.Be, this);

    this.bo = this.add.sprite(150, 400,"Bo");
    this.bo.inputEnabled = true;
    this.bo.events.onInputDown.add(this.Bo, this);

    this.bu = this.add.sprite(438, 400,"Bu");
    this.bu.inputEnabled = true;
    this.bu.events.onInputDown.add(this.Bu, this);

    this.bi = this.add.sprite(530, 220,"Bi");
    this.bi.inputEnabled = true;
    this.bi.events.onInputDown.add(this.Bi, this);


    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(95, 70,"Escolha");

    this.lb = this.add.sprite(-10, -10,"LB");



}
 update()
 {
}
voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaB');
}

Bicicleta(){
  game.state.start('Bicicleta');
}

Banana(){
  game.state.start('Banana');
}

Bule(){
  game.state.start('Bule');
}

Abelha(){
  game.state.start('Abelha');
}

Ba(){
  this.ba.position.x = 1000;
  this.be.position.x = 1000;
  this.bi.position.x = 1000;
  this.bo.position.x = 1000;
  this.bu.position.x = 1000;

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

  this.lb.position.x = 1000;

  this.abacate = this.add.sprite(55, 240,"pequeno",5);
  this.abacate.inputEnabled = true;
  this.abacate.events.onInputDown.add(this.Abacate, this);

  this.barba = this.add.sprite(295, 370,"pequeno",6);
  this.barba.inputEnabled = true;
  this.barba.events.onInputDown.add(this.Barba, this);

  this.batata = this.add.sprite(535, 240,"pequeno",7);
  this.batata.inputEnabled = true;
  this.batata.events.onInputDown.add(this.Batata, this);
}



Abacate(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.abacate.position.x = 1000;
  this.barba.position.x = 1000;
  this.batata.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1BA, this);


  this.add.sprite(130, 70,"Aba2a");

  var abacate2 = this.add.sprite(200, 250,"grande",5);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);

  this.falar = 1;
}



INICIO1BA(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A1BA, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
A1BA(){
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(121, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA1BA, this);
}
BA1BA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(195, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1BA, this);
}
CA1BA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 345;
  this.linha2.position.x = 325;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE1BA, this);
}
TE1BA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 460;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM1BA, this);
}
FIM1BA(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1BA();
}
REPETIR1BA(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1BA, this);
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




Barba(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.barba.position.x = 1000;
  this.abacate.position.x = 1000;
  this.batata.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2BA2, this);


  this.add.sprite(170, 70,"Bar");

  var barba2 = this.add.sprite(200, 250,"grande",6);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);

  this.falar = 2;
}

INICIO2BA2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BAR2BA2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BAR2BA2(){
  this.audio.src = "assets/sons/BAR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");
  this.linha2 = this.add.sprite(250, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA2BA2, this);
}
BA2BA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 385;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2BA2, this);
}
FIM2BA2(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2BA2();
}
REPETIR2BA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2BA2, this);
}




Batata(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.batata.position.x = 1000;
  this.barba.position.x = 1000;
  this.abacate.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar2");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3BA3, this);


  this.add.sprite(140, 70,"Bat");

  var batata = this.add.sprite(210, 225,"grande", 7);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);

  this.falar = 3;
}

INICIO3BA3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BA3BA3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BA3BA3(){
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(137, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TA3BA3, this);
}
TA3BA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(275, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TA3aBA3, this);
}
TA3aBA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 420;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3BA3, this);
}
FIM3BA3(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR3BA3();
}
REPETIR3BA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO3BA3, this);
}





Be(){
  this.ba.position.x = 1000;
  this.be.position.x = 1000;
  this.bi.position.x = 1000;
  this.bo.position.x = 1000;
  this.bu.position.x = 1000;

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

  this.lb.position.x = 1000;

  this.cabelo = this.add.sprite(55, 240,"pequeno",10);
  this.cabelo.inputEnabled = true;
  this.cabelo.events.onInputDown.add(this.Cabelo, this);

  this.bebe = this.add.sprite(295, 370,"pequeno",8);
  this.bebe.inputEnabled = true;
  this.bebe.events.onInputDown.add(this.Bebe, this);

  this.bexiga = this.add.sprite(560, 240,"pequeno",9);
  this.bexiga.inputEnabled = true;
  this.bexiga.events.onInputDown.add(this.Bexiga, this);
}



Cabelo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cabelo.position.x = 1000;
  this.bebe.position.x = 1000;
  this.bexiga.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1BE, this);


  this.add.sprite(150, 70,"Cab");

  var cabelo2 = this.add.sprite(215, 240,"grande", 10);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1BE(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CA1BE, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CA1BE(){

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(157, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BE1BE, this);
}
BE1BE(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BE.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LO1BE, this);
}
LO1BE(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 410;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1BE, this);
}
FIM1BE(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1BE();
}
REPETIR1BE(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1BE, this);
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



Bebe(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cabelo.position.x = 1000;
  this.bebe.position.x = 1000;
  this.bexiga.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar2");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2BE2, this);


  this.add.sprite(200, 70,"Beb");

  var bebe2 = this.add.sprite(200, 250,"grande", 8);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO2BE2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BE2BE2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BE2BE2(){
  this.audio.src = "assets/sons/BE2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(225, 155,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BE2aBE2, this);
}
BE2aBE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BE2.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2BE2, this);
}
FIM2BE2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2BE2();
}
REPETIR2BE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2BE2, this);
}



Bexiga(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBI4");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cabelo.position.x = 1000;
  this.bebe.position.x = 1000;
  this.bexiga.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3BE3, this);


  this.add.sprite(145, 70,"Bex");

  var bexiga2 = this.add.sprite(250, 225,"grande", 9);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO3BE3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BE3BE3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BE3BE3(){

  this.audio.src = "assets/sons/BE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(152, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI3BE3, this);
}
XI3BE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 275;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GA3BE3, this);
}
GA3BE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GA.mp3";
  this.audio.play();

  this.linha.position.x = 400;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3BE3, this);
}
FIM3BE3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR3BE3();
}
REPETIR3BE3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO3BE3, this);
}




Bi(){
  this.ba.position.x = 1000;
  this.be.position.x = 1000;
  this.bi.position.x = 1000;
  this.bo.position.x = 1000;
  this.bu.position.x = 1000;

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

  this.lb.position.x = 1000;

  this.bico = this.add.sprite(55, 255,"pequeno",14);
  this.bico.inputEnabled = true;
  this.bico.events.onInputDown.add(this.Bico, this);

  this.bebida = this.add.sprite(295, 390,"pequeno",13);
  this.bebida.inputEnabled = true;
  this.bebida.events.onInputDown.add(this.Bebida, this);

  this.zumbi = this.add.sprite(560, 240,"pequeno", 20);
  this.zumbi.inputEnabled = true;
  this.zumbi.events.onInputDown.add(this.Zumbi, this);
}

Bico(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBI");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bebida.position.x = 1000;
  this.bico.position.x = 1000;
  this.zumbi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1BI, this);


  this.add.sprite(200, 70,"Bic2");

  var bico2 = this.add.sprite(200, 250,"grande", 14);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1BI(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BI1BI, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BI1BI(){

  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO1BI, this);
}
CO1BI(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1BI, this);
}
FIM1BI(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1BI();
}
REPETIR1BI(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1BI, this);
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




Bebida(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bico.position.x = 1000;
  this.zumbi.position.x = 1000;
  this.bebida.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar2");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2BI2, this);


  this.add.sprite(140, 70,"Beb2");

  var boca2 = this.add.sprite(200, 250,"grande", 13);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO2BI2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BE2BI2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BE2BI2(){

  this.audio.src = "assets/sons/BE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BI2BI2, this);
}
BI2BI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DA2BI2, this);
}
DA2BI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2BI2, this);
}
FIM2BI2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2BI2();
}
REPETIR2BI2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2BI2, this);
}



Zumbi(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bico.position.x = 1000;
  this.zumbi.position.x = 1000;
  this.bebida.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar2");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3BI3, this);


  this.add.sprite(140, 70,"Zum");

  var zumbi2 = this.add.sprite(210, 225,"grande", 20);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO3BI3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.ZUM3BI3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
ZUM3BI3(){

  this.audio.src = "assets/sons/ZUM.mp3";
  this.audio.play();

  this.linha = this.add.sprite(185, 140,"Linha");
  this.linha2 = this.add.sprite(270, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BI3BI3, this);
}
BI3BI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha.position.x = 400;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3BI3, this);
}
FIM3BI3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR3BI3();
}
REPETIR3BI3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO3BI3, this);
}

Bo(){
  this.ba.position.x = 1000;
  this.be.position.x = 1000;
  this.bi.position.x = 1000;
  this.bo.position.x = 1000;
  this.bu.position.x = 1000;

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

  this.lb.position.x = 1000;

  this.boca = this.add.sprite(50, 275,"pequeno",15);
  this.boca.inputEnabled = true;
  this.boca.events.onInputDown.add(this.Boca, this);

  this.lobo = this.add.sprite(295, 370,"pequeno",18);
  this.lobo.inputEnabled = true;
  this.lobo.events.onInputDown.add(this.Lobo, this);

  this.cebola = this.add.sprite(560, 240,"pequeno",17);
  this.cebola.inputEnabled = true;
  this.cebola.events.onInputDown.add(this.Cebola, this);
}



Boca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cebola.position.x = 1000;
  this.lobo.position.x = 1000;
  this.boca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar2");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1BO1, this);


  this.add.sprite(200, 70,"Boc");

  var boca2 = this.add.sprite(200, 250,"grande", 15);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1BO1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BO1BO1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BO1BO1(){

  this.audio.src = "assets/sons/BO2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1BO1, this);
}
CA1BO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 365;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1BO1, this);
}
FIM1BO1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1BO1();
}
REPETIR1BO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1BO1, this);
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

Lobo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cebola.position.x = 1000;
  this.lobo.position.x = 1000;
  this.boca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar2");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2BO2, this);


  this.add.sprite(200, 70,"Lob");

  var boca2 = this.add.sprite(200, 250,"grande", 18);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO2BO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.LO2BO2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
LO2BO2(){

  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BO2BO2, this);
}
BO2BO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BO2.mp3";
  this.audio.play();

  this.linha.position.x = 365;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2BO2, this);
}
FIM2BO2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2BO2();
}
REPETIR2BO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2BO2, this);
}





Cebola(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBO4");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cebola.position.x = 1000;
  this.lobo.position.x = 1000;
  this.boca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar2");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3BO3, this);


  this.add.sprite(140, 70,"Ceb");

  var boca2 = this.add.sprite(265, 210,"grande", 17);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO3BO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CE3BO3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CE3BO3(){

  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BO3BO3, this);
}
BO3BO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BO2.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LA3BO3, this);
}
LA3BO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 405;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3BO3, this);
}
FIM3BO3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR3BO3();
}
REPETIR3BO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO3BO3, this);
}



Bu(){
  this.ba.position.x = 1000;
  this.be.position.x = 1000;
  this.bi.position.x = 1000;
  this.bo.position.x = 1000;
  this.bu.position.x = 1000;

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

  this.lb.position.x = 1000;

  this.onibus = this.add.sprite(55, 275,"pequeno",19);
  this.onibus.inputEnabled = true;
  this.onibus.events.onInputDown.add(this.Onibus, this);

  this.bambu = this.add.sprite(295, 370,"pequeno",11);
  this.bambu.inputEnabled = true;
  this.bambu.events.onInputDown.add(this.Bambu, this);

  this.buzina = this.add.sprite(525, 240,"pequeno",16);
  this.buzina.inputEnabled = true;
  this.buzina.events.onInputDown.add(this.Buzina, this);
}




Onibus(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.onibus.position.x = 1000;
  this.bambu.position.x = 1000;
  this.buzina.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1BU1, this);


  this.add.sprite(125, 70,"Oni");

  var onibus2 = this.add.sprite(200, 250,"grande", 19);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1BU1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.O1BU1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
O1BU1(){

  this.audio.src = "assets/sons/O2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(146, 150,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NI1BU1, this);
}
NI1BU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(222, 155,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BUS1BU1, this);
}
BUS1BU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BUS.mp3";
  this.audio.play();

  this.linha2.position.x = 360;
  this.linha3 = this.add.sprite(410, 155,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1BU1, this);
}
FIM1BU1(){
  this.linha2.position.x = 1000;
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR1BU1();
}
REPETIR1BU1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1BU1, this);
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


Bambu(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bambu.position.x = 1000;
  this.onibus.position.x = 1000;
  this.buzina.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar2");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2BU2, this);


  this.add.sprite(143, 70,"Bam");

  var bambu2 = this.add.sprite(260, 210,"grande", 11);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO2BU2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BAM2BU2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BAM2BU2(){

  this.audio.src = "assets/sons/BAM.mp3";
  this.audio.play();

  this.linha = this.add.sprite(170, 140,"Linha");
  this.linha2 = this.add.sprite(250, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BU2BU2, this);
}
BU2BU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BU.mp3";
  this.audio.play();

  this.linha.position.x = 385;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2BU2, this);
}
FIM2BU2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2BU2();
}
REPETIR2BU2(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2BU2, this);
}



Buzina(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBU3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.bambu.position.x = 1000;
  this.onibus.position.x = 1000;
  this.buzina.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lb.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar2");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3BU3, this);


  this.add.sprite(145, 70,"Buz");

  var buzina2 = this.add.sprite(200, 225,"grande", 16);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO3BU3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BU3BU3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BU3BU3(){

  this.audio.src = "assets/sons/BU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.ZI3BU3, this);
}
ZI3BU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ZI.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NA3BU3, this);
}
NA3BU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha.position.x = 400;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3BU3, this);
}
FIM3BU3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR3BU3();
}
REPETIR3BU3(){
  this.repetir = this.add.sprite(490, 550,"Repetir2");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO3BU3, this);
}


start() {

  const startBtn = document.querySelector('#start');
  const output = document.querySelector('#output');
  this.contador++;

  var recognition = new webkitSpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = "pt-BR";
  recognition.continuous = false;
  recognition.start();
  // This event happens when you talk in the microphone

    if(this.contador = 1){
      recognition.onresult = function(event) {
        let letra = new Letras();
        console.log(event.results[0]);
        console.log(this.contador);

    for (let i = event.resultIndex; i < event.results.length; i++) {

      if (event.results[i].isFinal) {

        var content = event.results[i][0].transcript.trim();
        recognition.stop();

            content = content.toLocaleLowerCase();
        switch (content) {
        case "abacate":
        letra.AcertouB();
        break;
        case "barba":
        letra.AcertouB();
        break;
        case "batata":
        letra.AcertouB();
        break;
        case "cabelo":
        letra.AcertouB();
        break;
        case "bebê":
        letra.AcertouB();
        break;
        case "bexiga":
        letra.AcertouB();
        break;
        case "bico":
        letra.AcertouB();
        break;
        case "bebida":
        letra.AcertouB();
        break;
        case "zumbi":
        letra.AcertouB();
        break;
        case "boca":
        letra.AcertouB();
        break;
        case "lobo":
        letra.AcertouB();
        break;
        case "cebola":
        letra.AcertouB();
        break;
        case "ônibus":
        letra.AcertouB();
        break;
        case "bambu":
        letra.AcertouB();
        break;
        case "buzina":
        letra.AcertouB();
        break;

        default:
        letra.Errou();
                }
        //recognition.stop();
        return;
        }
      }
    }
  }


}
LetraB()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, B.mp3";
	this.audio.play();

}
M2()
{
  this.m.position.x = 40;
  this.m.position.y = 210;

  this.seta1.position.x = 160;
  this.seta1.position.y = 320;


}
Acertou()
{
  game.add.text(10,15,"Correto",{fontSize:'30px',fill:'white'});
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
