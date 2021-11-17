class FonemaJ
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

      this.ja = this.add.sprite(38, 205,"Ja");
      this.ja.inputEnabled = true;
      this.ja.events.onInputDown.add(this.Ja, this);

      this.je = this.add.sprite(280, 235,"Je");
      this.je.inputEnabled = true;
      this.je.events.onInputDown.add(this.Je, this);

      this.jo = this.add.sprite(137, 385,"Jo");
      this.jo.inputEnabled = true;
      this.jo.events.onInputDown.add(this.Jo, this);

      this.ju = this.add.sprite(424, 390,"Ju");
      this.ju.inputEnabled = true;
      this.ju.events.onInputDown.add(this.Ju, this);

      this.ji = this.add.sprite(520, 205,"Ji");
      this.ji.inputEnabled = true;
      this.ji.events.onInputDown.add(this.Ji, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lj = this.add.sprite(0, 0,"LJ");



}
 update()
 {
}


Ja(){
  this.ja.position.x = 1000;
  this.je.position.x = 1000;
  this.ji.position.x = 1000;
  this.jo.position.x = 1000;
  this.ju.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha = this.add.sprite(130, 70,"Escolha");

  this.lj.position.x = 1000;

  this.jacare = this.add.sprite(45, 270,"pequeno2", 0);
  this.jacare.inputEnabled = true;
  this.jacare.events.onInputDown.add(this.Jacare, this);

  this.pijama = this.add.sprite(295, 370,"pequeno2", 1);
  this.pijama.inputEnabled = true;
  this.pijama.events.onInputDown.add(this.Pijama, this);

  this.cereja = this.add.sprite(535, 240,"pequeno2", 2);
  this.cereja.inputEnabled = true;
  this.cereja.events.onInputDown.add(this.Cereja, this);
}

Jacare(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.jacare.position.x = 1000;
  this.pijama.position.x = 1000;
  this.cereja.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(150, 70,"Jac2");

  var jacare2 = this.add.sprite(200, 250,"grande2", 0);

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

  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 155,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE1JA1, this);
}
RE1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RE2.mp3";
  this.audio.play();

  this.linha.position.x = 420;

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


Pijama(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pijama.position.x = 1000;
  this.jacare.position.x = 1000;
  this.cereja.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(155, 70,"Pij");

  var pijama2 = this.add.sprite(200, 250,"grande2", 1);

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

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JA2.mp3";
  this.audio.play();

  this.linha.position.x = 263;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha.position.x = 405;

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


Cereja(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cereja.position.x = 1000;
  this.pijama.position.x = 1000;
  this.jacare.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(130, 70,"Cer");

  var cereja2 = this.add.sprite(190, 210,"grande2", 2);

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

  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Re.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA3JA3, this);
}
JA3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha.position.x = 410;

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


Je(){
  this.ja.position.x = 1000;
  this.je.position.x = 1000;
  this.ji.position.x = 1000;
  this.jo.position.x = 1000;
  this.ju.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha = this.add.sprite(130, 70,"Escolha");

  this.lj.position.x = 1000;

  this.jegue = this.add.sprite(70, 240,"pequeno2", 3);
  this.jegue.inputEnabled = true;
  this.jegue.events.onInputDown.add(this.Jegue, this);

  this.laranjeira = this.add.sprite(295, 370,"pequeno2", 4);
  this.laranjeira.inputEnabled = true;
  this.laranjeira.events.onInputDown.add(this.Laranjeira, this);

  }

Jegue(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.jegue.position.x = 1000;
  this.laranjeira.position.x = 1000;
  //this.alce.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(175, 70,"Jeg");

  var jegue2 = this.add.sprite(250, 250,"grande2", 3);

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

  this.audio.src = "assets/sons/JE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GUE.mp3";
  this.audio.play();

  this.linha.position.x = 310;

  this.linha2 = this.add.sprite(375, 140,"Linha");

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



Laranjeira(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.laranjeira.position.x = 1000;
  this.jegue.position.x = 1000;
  //this.alce.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(85, 70,"Lar");

  var laranjeira2 = this.add.sprite(200, 240,"grande2", 4);

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

  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(80, 120,"Linha2");

  this.linha2 = this.add.sprite(110, 120,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RAN.mp3";
  this.audio.play();

  this.linha.position.x = 185;

  this.linha2.position.x = 250;

  this.linha3 = this.add.sprite(285, 120,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/GE.mp3";
  this.audio.play();

  this.linha.position.x = 360;

  this.linha2.position.x = 385;

  this.linha3.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I2JE2, this);
}
I2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha4 = this.add.sprite(467, 120,"Linha2aa");

  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.RA2JE2, this);
}
RA2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 510;

  this.linha2.position.x = 540;

  this.linha4.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2JE2, this);
}
FIM2JE2(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2JE2();
}
REPETIR2JE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JE2, this);
}

Ji(){
  this.ja.position.x = 1000;
  this.je.position.x = 1000;
  this.ji.position.x = 1000;
  this.jo.position.x = 1000;
  this.ju.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha = this.add.sprite(130, 70,"Escolha");

  this.lj.position.x = 1000;

  this.jipe = this.add.sprite(50, 260,"pequeno2", 5);
  this.jipe.inputEnabled = true;
  this.jipe.events.onInputDown.add(this.Jipe, this);

  /*this.bacia = this.add.sprite(295, 400,"pequeno", 23);
  this.bacia.inputEnabled = true;
  this.bacia.events.onInputDown.add(this.Bacia, this);

  this.saci = this.add.sprite(560, 240,"pequeno", 35);
  this.saci.inputEnabled = true;
  this.saci.events.onInputDown.add(this.Saci, this);*/
}

Jipe(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.jipe.position.x = 1000;
  //this.saci.position.x = 1000;
  //this.bacia.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(200, 70,"Jip");

  var jipe2 = this.add.sprite(200, 250,"grande2", 5);

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

  this.audio.src = "assets/sons/JI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(230, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha.position.x = 340;

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



Jo(){
  this.ja.position.x = 1000;
  this.je.position.x = 1000;
  this.ji.position.x = 1000;
  this.jo.position.x = 1000;
  this.ju.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha = this.add.sprite(130, 70,"Escolha");

  this.lj.position.x = 1000;

  this.joaninha = this.add.sprite(50, 245,"pequeno2", 6);
  this.joaninha.inputEnabled = true;
  this.joaninha.events.onInputDown.add(this.Joaninha, this);

  this.tijolo = this.add.sprite(295, 390,"pequeno2", 7);
  this.tijolo.inputEnabled = true;
  this.tijolo.events.onInputDown.add(this.Tijolo, this);

  this.beijo = this.add.sprite(530, 240,"pequeno2", 8);
  this.beijo.inputEnabled = true;
  this.beijo.events.onInputDown.add(this.Beijo, this);
}


Joaninha(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.joaninha.position.x = 1000;
  this.beijo.position.x = 1000;
  this.tijolo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(80, 70,"Joa");

  var joaninha2 = this.add.sprite(200, 240,"grande2", 6);

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

  this.audio.src = "assets/sons/JO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(80, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/a+til.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(210, 135,"Linha2aa");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA1CO1, this);
}
JA1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NI.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU21CO1, this);
}
RU21CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NHA.mp3";
  this.audio.play();

  this.linha.position.x = 417;

  this.linha3 = this.add.sprite(500, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CO1, this);
}
FIM1CO1(){
  this.linha.position.x = 1000;

  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR1CO1();
}
REPETIR1CO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO1, this);
}

Tijolo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.tijolo.position.x = 1000;
  this.joaninha.position.x = 1000;
  this.beijo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(155, 70,"Tij");

  var tijolo2 = this.add.sprite(220, 240,"grande2", 7);

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

  this.audio.src = "assets/sons/TI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JO.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 415;

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

Beijo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.beijo.position.x = 1000;
  this.joaninha.position.x = 1000;
  this.tijolo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(150, 70,"Bei");

  var beijo2 = this.add.sprite(205, 210,"grande2", 8);

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
  this.audio.src = "assets/sons/BE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(195, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E3CO3, this);
}
E3CO3(){
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(305, 135,"Linha2aa");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JO.mp3";
  this.audio.play();

  this.linha.position.x = 375;

  this.linha2.position.x = 1000;

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


Ju(){
  this.ja.position.x = 1000;
  this.je.position.x = 1000;
  this.ji.position.x = 1000;
  this.jo.position.x = 1000;
  this.ju.position.x = 1000;

  this.quad1.position.x = 30;
  this.quad1.position.y = 220;

  this.quad2.position.x = 275;
  this.quad2.position.y = 350;

  this.quad3.position.x = 510;
  this.quad3.position.y = 220;

  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;

  this.escolha.position.x = 1000;

  this.escolha = this.add.sprite(130, 70,"Escolha");

  this.lj.position.x = 1000;

  this.juiz = this.add.sprite(50, 250,"pequeno2", 9);
  this.juiz.inputEnabled = true;
  this.juiz.events.onInputDown.add(this.Juiz, this);

  //this.circulo = this.add.sprite(295, 370,"pequeno", 29);
  //this.circulo.inputEnabled = true;
  //this.circulo.events.onInputDown.add(this.Circulo, this);

  this.caju = this.add.sprite(530, 270,"pequeno2", 10);
  this.caju.inputEnabled = true;
  this.caju.events.onInputDown.add(this.Caju, this);
}


Juiz(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.juiz.position.x = 1000;
  //this.circulo.position.x = 1000;
  this.caju.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(190, 70,"Jui");

  var juiz2 = this.add.sprite(200, 240,"grande2", 9);

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

  this.audio.src = "assets/sons/JU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/IZ.mp3";
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


Caju(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FJU3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.juiz.position.x = 1000;
  //this.cueca.position.x = 1000;
  this.caju.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lj.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU3, this);


  this.add.sprite(200, 70,"Caj");

  var caju2 = this.add.sprite(195, 275,"grande2", 10);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CU3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.JA3CU3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
JA3CU3(){

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CU3CU3, this);
}
CU3CU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JU.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CU3, this);
}
FIM3CU3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CU3();
}
REPETIR2CU3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CU3, this);
}




voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaJ');
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
case "beijo":
letra.AcertouJ();
break;
case "caju":
letra.AcertouJ();
break;
case "cereja":
letra.AcertouJ();
break;
case "jacaré":
letra.AcertouJ();
break;
case "jegue":
letra.AcertouJ();
break;
case "jeep":
letra.AcertouJ();
break;
case "joaninha":
letra.AcertouJ();
break;
case "juiz":
letra.AcertouJ();
break;
case "laranjeira":
letra.AcertouJ();
break;
case "pijama":
letra.AcertouJ();
break;
case "tijolo":
letra.AcertouJ();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraJ()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, J.mp3";
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
