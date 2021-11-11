class FonemaM
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
 create() {
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



    /*this.mochila = this.add.sprite(50, 220,"Mochila");

    this.macaco = this.add.sprite(295, 250,"Macaco");

    this.melancia = this.add.sprite(150, 400,"pequeno2", 26);

    this.milho = this.add.sprite(438, 400,"pequeno2", 29);

    this.mumia = this.add.sprite(530, 220,"Mumia");*/



    this.ma = this.add.sprite(38, 205,"Ma");
    this.ma.inputEnabled = true;
    this.ma.events.onInputDown.add(this.Ma, this);

    this.me = this.add.sprite(280, 235,"Me");
    this.me.inputEnabled = true;
    this.me.events.onInputDown.add(this.Me, this);

    this.mo = this.add.sprite(137, 385,"Mo");
    this.mo.inputEnabled = true;
    this.mo.events.onInputDown.add(this.Mo, this);

    this.mu = this.add.sprite(424, 390,"Mu");
    this.mu.inputEnabled = true;
    this.mu.events.onInputDown.add(this.Mu, this);

    this.mi = this.add.sprite(520, 205,"Mi");
    this.mi.inputEnabled = true;
    this.mi.events.onInputDown.add(this.Mi, this);

    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(100, 70,"Escolha");

    this.lm = this.add.sprite(0, 0,"LM");


}
 update() {


}

voltar2(){
  game.state.start('Tela2');
}

voltar4(){
  game.state.start('FonemaM');
}

Ma(){
  this.ma.position.x = 1000;
  this.me.position.x = 1000;
  this.mi.position.x = 1000;
  this.mo.position.x = 1000;
  this.mu.position.x = 1000;

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

  this.lm.position.x = 1000;

  this.maca = this.add.sprite(55, 240,"pequeno2", 24);
  this.maca.inputEnabled = true;
  this.maca.events.onInputDown.add(this.Maca, this);

  //this.armario = this.add.sprite(290, 390,"Armario");
  //this.armario.inputEnabled = true;
  //this.armario.events.onInputDown.add(this.Armario, this);

  this.cama = this.add.sprite(530, 260,"pequeno2", 25);
  this.cama.inputEnabled = true;
  this.cama.events.onInputDown.add(this.Cama, this);
}

Maca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.maca.position.x = 1000;
  //this.armario.position.x = 1000;
  this.cama.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(195, 60,"Mac");

  var maca2 = this.add.sprite(200, 230,"grande2", 24);

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

  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(198, 150,"Linha");

  this.linha2 = this.add.sprite(230, 150,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ÇA2.mp3";
  this.audio.play();

  this.linha.position.x = 360;

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






Armario(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.maca.position.x = 1000;
  this.armario.position.x = 1000;
  this.cama.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(140, 70,"Arm");

  var armario2 = this.add.sprite(200, 250,"Armario2");

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
  this.audio.src = "assets/sons/PI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(130, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JA2.mp3";
  this.audio.play();

  this.linha.position.x = 248;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha.position.x = 380;

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





Cama(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cama.position.x = 1000;
  //this.armario.position.x = 1000;
  this.maca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(195, 70,"Cam");

  var cama2 = this.add.sprite(200, 250,"grande2", 25);

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

  this.audio.src = "assets/sons/CA2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha.position.x = 335;

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






Me(){
  this.ma.position.x = 1000;
  this.me.position.x = 1000;
  this.mi.position.x = 1000;
  this.mo.position.x = 1000;
  this.mu.position.x = 1000;

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

  this.lm.position.x = 1000;

  this.melancia = this.add.sprite(50, 250,"pequeno2", 26);
  this.melancia.inputEnabled = true;
  this.melancia.events.onInputDown.add(this.Melancia, this);

  this.camelo = this.add.sprite(300, 375,"pequeno2", 27);
  this.camelo.inputEnabled = true;
  this.camelo.events.onInputDown.add(this.Camelo, this);

  this.perfume = this.add.sprite(525, 240,"pequeno", 68);
  this.perfume.inputEnabled = true;
  this.perfume.events.onInputDown.add(this.Perfume, this);
}






Melancia(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FME1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.melancia.position.x = 1000;
  this.camelo.position.x = 1000;
  this.perfume.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(60, 70,"Mel");

  var melancia2 = this.add.sprite(200, 250,"grande2", 26);

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

  this.audio.src = "assets/sons/ME2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(85, 140,"Linha");

  this.linha2 = this.add.sprite(105, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LAN.mp3";
  this.audio.play();

  this.linha.position.x = 240;

  this.linha2.position.x = 305;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CI1JE1, this);
}
CI1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CI.mp3";
  this.audio.play();

  this.linha.position.x = 425;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.A1JE1, this);
}
A1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(548, 135,"Linha2");

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







Camelo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FME2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.camelo.position.x = 1000;
  this.melancia.position.x = 1000;
  this.perfume.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(150, 60,"Cam2");

  var camelo2 = this.add.sprite(220, 240,"grande2", 27);

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

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(146, 130,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ME2.mp3";
  this.audio.play();

  this.linha.position.x = 276;

  this.linha2 = this.add.sprite(285, 130,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  this.linha2.position.x = 1000;

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






Perfume(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FME3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.perfume.position.x = 1000;
  this.melancia.position.x = 1000;
  this.camelo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(95, 70,"Per");

  var perfume2 = this.add.sprite(190, 230,"grande", 68);

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
  this.audio.src = "assets/sons/PER.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 140,"Linha");

  this.linha2 = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FU.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.ME3FE3, this);
}
ME3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ME.mp3";
  this.audio.play();

  this.linha.position.x = 423;

  this.linha2.position.x = 433;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3FE3, this);
}
FIM3FE3(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2FE3();
}
REPETIR2FE3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1FE3, this);
}



Mi(){
  this.ma.position.x = 1000;
  this.me.position.x = 1000;
  this.mi.position.x = 1000;
  this.mo.position.x = 1000;
  this.mu.position.x = 1000;

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

  this.lm.position.x = 1000;

  this.milho = this.add.sprite(55, 245,"pequeno2", 29);
  this.milho.inputEnabled = true;
  this.milho.events.onInputDown.add(this.Milho, this);

  this.comida = this.add.sprite(295, 380,"pequeno2", 30);
  this.comida.inputEnabled = true;
  this.comida.events.onInputDown.add(this.Comida, this);

  /*this.explodi = this.add.sprite(525, 240,"pequeno", 48);
  this.explodi.inputEnabled = true;
  this.explodi.events.onInputDown.add(this.Explodi, this);*/
}





Milho(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.milho.position.x = 1000;
  this.comida.position.x = 1000;
  //this.bacia.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(150, 70,"Mil");

  var milho2 = this.add.sprite(210, 250,"grande2", 29);

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

  this.audio.src = "assets/sons/MI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(182, 140,"Linha");

  this.linha2 = this.add.sprite(190, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LHO.mp3";
  this.audio.play();

  this.linha.position.x = 320;

  this.linha2.position.x = 385;

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




Comida(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.comida.position.x = 1000;
  this.milho.position.x = 1000;
  //this.explodi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(145, 70,"Com");

  var comida2 = this.add.sprite(200, 240,"grande2", 30);

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

  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(140, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MI.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  this.linha2 = this.add.sprite(280, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  this.linha2.position.x = 1000;

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





Mo(){
  this.ma.position.x = 1000;
  this.me.position.x = 1000;
  this.mi.position.x = 1000;
  this.mo.position.x = 1000;
  this.mu.position.x = 1000;

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

  this.lm.position.x = 1000;

  this.moto = this.add.sprite(50, 245,"pequeno2", 31);
  this.moto.inputEnabled = true;
  this.moto.events.onInputDown.add(this.Moto, this);

  /*this.envelope = this.add.sprite(295, 385,"pequeno2", 20);
  this.envelope.inputEnabled = true;
  this.envelope.events.onInputDown.add(this.Envelope, this);

  this.cavalo = this.add.sprite(535, 240,"pequeno", 26);
  this.cavalo.inputEnabled = true;
  this.cavalo.events.onInputDown.add(this.Cavalo, this);*/
}




Moto(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.moto.position.x = 1000;
  //this.envelope.position.x = 1000;
  //this.cavalo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(205, 70,"Mot");

  var moto2 = this.add.sprite(200, 240,"grande2", 31);

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

  this.audio.src = "assets/sons/MO2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");

  this.linha2 = this.add.sprite(230, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 375;

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





Mu(){
  this.ma.position.x = 1000;
  this.me.position.x = 1000;
  this.mi.position.x = 1000;
  this.mo.position.x = 1000;
  this.mu.position.x = 1000;

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

  this.lm.position.x = 1000;

  this.muro = this.add.sprite(50, 250,"pequeno2", 32);
  this.muro.inputEnabled = true;
  this.muro.events.onInputDown.add(this.Muro, this);

  this.tumulo = this.add.sprite(295, 370,"pequeno2", 33);
  this.tumulo.inputEnabled = true;
  this.tumulo.events.onInputDown.add(this.Tumulo, this);

  /*this.edu = this.add.sprite(530, 255,"pequeno", 47);
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);*/
}





Muro(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.muro.position.x = 1000;
  this.tumulo.position.x = 1000;
  //this.caju.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(190, 70,"Mur");

  var muro2 = this.add.sprite(190, 240,"grande2", 32);

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

  this.audio.src = "assets/sons/MU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(195, 140,"Linha");

  this.linha2 = this.add.sprite(215, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha.position.x = 355;
  this.linha2.position.x = 1000;

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







Tumulo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FMU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tumulo.position.x = 1000;
  this.muro.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lm.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(135, 60,"Tum");

  var tumulo2 = this.add.sprite(205, 240,"grande2", 33);

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

  this.audio.src = "assets/sons/TU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MU.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  this.linha2 = this.add.sprite(297, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 428;

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


letram(){
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
        game.add.text(556,100,content,{fontSize:'30px',fill:'black'});

        recognition.stop();

        content = content.toLocaleLowerCase();

switch (content) {
case "armario":
letra.AcertouM();
break;
case "cama":
letra.AcertouM();
break;
case "camelo":
letra.AcertouM();
break;
case "comida":
letra.AcertouM();
break;
case "maça":
letra.AcertouM();
break;
case "macaco":
letra.AcertouM();
break;
case "melancia":
letra.AcertouM();
break;
case "milho":
letra.AcertouM();
break;
case "morango":
letra.AcertouM();
break;
case "moto":
letra.AcertouM();
break;
case "muro":
letra.AcertouM();
break;
case "perfume":
letra.AcertouM();
break;
case "túmulo":
letra.AcertouM();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraM()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, M.mp3";
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
