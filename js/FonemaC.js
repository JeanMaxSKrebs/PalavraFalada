class FonemaC
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
   this.load.image("Começar","assets/Comecar2.png");
   
   this.load.image("Cor","assets/Cor3.png");
   this.load.image("Anc","assets/Anc4.png");
   


 }
 create()
 {
    //this.audiojogo();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.add.sprite(0,0,"FF3");

    //this.LetraC();
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

      this.quad1 = this.add.sprite(30, 200,"Quadrado");

      this.quad2 = this.add.sprite(275, 230,"Quadrado");

      this.quad3 = this.add.sprite(130, 380,"Quadrado");

      this.quad4 = this.add.sprite(418, 380,"Quadrado");

      this.quad5 = this.add.sprite(510, 200,"Quadrado");



    this.ca = this.add.sprite(50, 220,"Ca");
    this.ca.inputEnabled = true;
    this.ca.events.onInputDown.add(this.Ca, this);

    this.ce = this.add.sprite(295, 250,"Ce");
    this.ce.inputEnabled = true;
    this.ce.events.onInputDown.add(this.Ce, this);

    this.co = this.add.sprite(150, 390,"Co");
    this.co.inputEnabled = true;
    this.co.events.onInputDown.add(this.Co, this);

    this.cu = this.add.sprite(438, 400,"Cu");
    this.cu.inputEnabled = true;
    this.cu.events.onInputDown.add(this.Cu, this);

    this.ci = this.add.sprite(530, 220,"Ci");
    this.ci.inputEnabled = true;
    this.ci.events.onInputDown.add(this.Ci, this);

    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);


    this.escolha = this.add.sprite(90, 70,"Escolha");

    this.lc = this.add.sprite(-10, -10,"LC");







}
 update()
{

}
Ca(){
  this.ca.position.x = 1000;
  this.ce.position.x = 1000;
  this.ci.position.x = 1000;
  this.co.position.x = 1000;
  this.cu.position.x = 1000;

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

  this.lc.position.x = 1000;

  this.cavalo = this.add.sprite(55, 240,"pequeno", 26);
  this.cavalo.inputEnabled = true;
  this.cavalo.events.onInputDown.add(this.Cavalo, this);

  this.abacate = this.add.sprite(295, 370,"pequeno",5);
  this.abacate.inputEnabled = true;
  this.abacate.events.onInputDown.add(this.Abacate, this);

  this.pipoca = this.add.sprite(535, 240,"pequeno", 34);
  this.pipoca.inputEnabled = true;
  this.pipoca.events.onInputDown.add(this.Pipoca, this);
}


Cavalo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cavalo.position.x = 1000;
  this.abacate.position.x = 1000;
  this.pipoca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CA1, this);


  this.add.sprite(150, 70,"Cav");

  var cabelo2 = this.add.sprite(200, 250,"grande", 26);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1CA1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CA1CA1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CA1CA1(){

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.VA1CA1, this);
}
VA1CA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LO1CA1, this);
}
LO1CA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CA1, this);
}
FIM1CA1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1CA1();
}
REPETIR1CA1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CA1, this);
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



Abacate(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.abacate.position.x = 1000;
  this.cavalo.position.x = 1000;
  this.pipoca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CA2, this);


  this.add.sprite(130, 70,"Aba22");

  var abacate2 = this.add.sprite(200, 250,"grande",5);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CA2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A2CA2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
A2CA2(){
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA2CA2, this);
}
BA2CA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(195, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA2CA2, this);
}
CA2CA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha2.position.x = 325;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE2CA2, this);
}
TE2CA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 460;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2CA2, this);
}
FIM2CA2(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2CA2();
}
REPETIR2CA2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CA2, this);
}




Pipoca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.abacate.position.x = 1000;
  this.cavalo.position.x = 1000;
  this.pipoca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CA3, this);


  this.add.sprite(140, 70,"Pip");

  var pipoca2 = this.add.sprite(200, 210,"grande", 34);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CA3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.PI3CA3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
PI3CA3(){

  this.audio.src = "assets/sons/PI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PO3CA3, this);
}
PO3CA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PO.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA3CA3, this);
}
CA3CA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 395;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CA3, this);
}
FIM3CA3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CA3();
}
REPETIR2CA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CA3, this);
}





Ce(){
  this.ca.position.x = 1000;
  this.ce.position.x = 1000;
  this.ci.position.x = 1000;
  this.co.position.x = 1000;
  this.cu.position.x = 1000;

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

  this.lc.position.x = 1000;

  this.cenoura = this.add.sprite(55, 240,"pequeno", 27);
  this.cenoura.inputEnabled = true;
  this.cenoura.events.onInputDown.add(this.Cenoura, this);

  this.capacete = this.add.sprite(295, 370,"pequeno", 25);
  this.capacete.inputEnabled = true;
  this.capacete.events.onInputDown.add(this.Capacete, this);

  this.alce = this.add.sprite(525, 240,"pequeno",21);
  this.alce.inputEnabled = true;
  this.alce.events.onInputDown.add(this.Alce, this);
}




Cenoura(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cenoura.position.x = 1000;
  this.capacete.position.x = 1000;
  this.alce.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CE1, this);


  this.add.sprite(100, 70,"Cen");

  var cenoura2 = this.add.sprite(200, 250,"grande", 27);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1CE1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CE1CE1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CE1CE1(){

  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(105, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NO1CE1, this);
}
NO1CE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 240;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.U1CE1, this);
}
U1CE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/U.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(385, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA1CE1, this);
}
RA1CE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 455;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CE1, this);
}
FIM1CE1(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR1CE1();
}
REPETIR1CE1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CE1, this);
}






Capacete(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.capacete.position.x = 1000;
  this.cenoura.position.x = 1000;
  this.alce.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CE2, this);


  this.add.sprite(110, 70,"Cap");

  var capacete2 = this.add.sprite(200, 240,"grande", 25);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CE2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CA2CE2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CA2CE2(){

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(105, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PA2CE2, this);
}
PA2CE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PA.mp3";
  this.audio.play();

  this.linha.position.x = 230;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CE2CE2, this);
}
CE2CE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha.position.x = 355;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE2CE2, this);
}
TE2CE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 480;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2CE2, this);
}
FIM2CE2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CE2();
}
REPETIR2CE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CE2, this);
}







Alce(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.alce.position.x = 1000;
  this.capacete.position.x = 1000;
  this.cenoura.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CE3, this);


  this.add.sprite(200, 70,"Alc");

  var alce2 = this.add.sprite(200, 210,"grande",22);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CE3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AL3CE3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
AL3CE3(){

  this.audio.src = "assets/sons/AL.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");
  this.linha2 = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CE3CE3, this);
}
CE3CE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha.position.x = 350;
  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CE3, this);
}
FIM3CE3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CE3();
}
REPETIR2CE3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CE3, this);
}






Ci(){
  this.ca.position.x = 1000;
  this.ce.position.x = 1000;
  this.ci.position.x = 1000;
  this.co.position.x = 1000;
  this.cu.position.x = 1000;

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

  this.lc.position.x = 1000;

  this.cinto = this.add.sprite(50, 250,"pequeno", 28);
  this.cinto.inputEnabled = true;
  this.cinto.events.onInputDown.add(this.Cinto, this);

  this.bacia = this.add.sprite(295, 400,"pequeno", 23);
  this.bacia.inputEnabled = true;
  this.bacia.events.onInputDown.add(this.Bacia, this);

  this.saci = this.add.sprite(560, 240,"pequeno", 35);
  this.saci.inputEnabled = true;
  this.saci.events.onInputDown.add(this.Saci, this);
}


Cinto(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cinto.position.x = 1000;
  this.saci.position.x = 1000;
  this.bacia.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(155, 70,"Cin");

  var cinto2 = this.add.sprite(200, 250,"grande", 28);

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

  this.audio.src = "assets/sons/CIN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 140,"Linha");

  this.linha2 = this.add.sprite(250, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO.mp3";
  this.audio.play();

  this.linha.position.x = 400;

  this.linha2.position.x = 1000;

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


Bacia(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cinto.position.x = 1000;
  this.bacia.position.x = 1000;
  this.saci.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI2, this);


  this.add.sprite(150, 70,"Bac");

  var bacia2 = this.add.sprite(200, 240,"grande", 23);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CI2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BA2CI2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
BA2CI2(){

  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(175, 140,"Linha");

  this.linha2 = this.add.sprite(190, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CI2CI2, this);
}
CI2CI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CI.mp3";
  this.audio.play();

  this.linha.position.x = 320;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.A2CI2, this);
}
A2CI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(455, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2CI2, this);
}
FIM2CI2(){
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2CI2();
}
REPETIR2CI2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI2, this);
}




Saci(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.saci.position.x = 1000;
  this.bacia.position.x = 1000;
  this.cinto.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI3, this);


  this.add.sprite(200, 70,"Sac");

  var saci2 = this.add.sprite(270, 210,"grande", 35);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CI3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.SA3CI3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
SA3CI3(){

  this.audio.src = "assets/sons/SA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(200, 140,"Linha");

  this.linha2 = this.add.sprite(230, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CI3CI3, this);
}
CI3CI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CI.mp3";
  this.audio.play();

  this.linha.position.x = 365;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CI3, this);
}
FIM3CI3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CI3();
}
REPETIR2CI3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI3, this);
}




Co(){
  this.ca.position.x = 1000;
  this.ce.position.x = 1000;
  this.ci.position.x = 1000;
  this.co.position.x = 1000;
  this.cu.position.x = 1000;

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

  this.lc.position.x = 1000;

  this.coruja = this.add.sprite(50, 250,"pequeno", 30);
  this.coruja.inputEnabled = true;
  this.coruja.events.onInputDown.add(this.Coruja, this);

  this.ancora = this.add.sprite(305, 365,"pequeno",22);
  this.ancora.inputEnabled = true;
  this.ancora.events.onInputDown.add(this.Ancora, this);

  this.suco = this.add.sprite(560, 240,"pequeno", 36);
  this.suco.inputEnabled = true;
  this.suco.events.onInputDown.add(this.Suco, this);
}




Coruja(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.coruja.position.x = 1000;
  this.ancora.position.x = 1000;
  this.suco.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(152, 70,"Cor");

  var coruja2 = this.add.sprite(200, 240,"grande", 30);

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

  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RU.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA1CO1, this);
}
JA1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha.position.x = 420;

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




Ancora(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ancora.position.x = 1000;
  this.coruja.position.x = 1000;
  this.suco.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(155, 65,"Anc");

  var ancora2 = this.add.sprite(220, 240,"grande",22);

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

  this.audio.src = "assets/sons/AN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  this.linha2 = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 300;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 435;

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




Suco(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.suco.position.x = 1000;
  this.ancora.position.x = 1000;
  this.coruja.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(200, 70,"Suc");

  var suco2 = this.add.sprite(295, 210,"grande", 36);

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
  this.audio.src = "assets/sons/SU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  this.linha2 = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 360;

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




Cu(){
  this.ca.position.x = 1000;
  this.ce.position.x = 1000;
  this.ci.position.x = 1000;
  this.co.position.x = 1000;
  this.cu.position.x = 1000;

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

  this.lc.position.x = 1000;

  this.cueca = this.add.sprite(50, 240,"pequeno", 31);
  this.cueca.inputEnabled = true;
  this.cueca.events.onInputDown.add(this.Cueca, this);

  this.circulo = this.add.sprite(295, 370,"pequeno", 29);
  this.circulo.inputEnabled = true;
  this.circulo.events.onInputDown.add(this.Circulo, this);

  this.jacu = this.add.sprite(530, 255,"pequeno", 33);
  this.jacu.inputEnabled = true;
  this.jacu.events.onInputDown.add(this.Jacu, this);
}



Cueca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cueca.position.x = 1000;
  this.circulo.position.x = 1000;
  this.jacu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(155, 70,"Cue");

  var cueca2 = this.add.sprite(200, 240,"grande", 31);

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

  this.audio.src = "assets/sons/CU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(175, 140,"Linha");
  this.linha2 = this.add.sprite(195, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/E.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(325, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1CU1, this);
}
CA1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 395;
  this.linha2.position.x = 410;

  this.linha3.position.x = 1000;

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







Circulo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.circulo.position.x = 1000;
  this.jacu.position.x = 1000;
  this.cueca.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU2, this);


  this.add.sprite(110, 65,"Cir2");

  var circulo2 = this.add.sprite(220, 240,"grande", 29);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1CU2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CIR2CU2, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
CIR2CU2(){

  this.audio.src = "assets/sons/CIR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(130, 143,"Linha");
  this.linha2 = this.add.sprite(180, 143,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CU2CU2, this);
}
CU2CU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CU.mp3";
  this.audio.play();

  this.linha.position.x = 307;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LO2CU2, this);
}
LO2CU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 437;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2CU2, this);
}
FIM2CU2(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2CU2();
}
REPETIR2CU2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CU2, this);
}





Jacu(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCU3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.jacu.position.x = 1000;
  this.cueca.position.x = 1000;
  this.circulo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lc.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU3, this);


  this.add.sprite(200, 70,"Jac");

  var jacu2 = this.add.sprite(225, 210,"grande", 33);

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

  this.audio.src = "assets/sons/JA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(190, 140,"Linha");
  this.linha2 = this.add.sprite(215, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CU3CU3, this);
}
CU3CU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CU.mp3";
  this.audio.play();

  this.linha.position.x = 355;

  this.linha2.position.x = 365;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CU3, this);
}
FIM3CU3(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
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
game.state.start('FonemaC');
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
        case "cavalo":
        letra.AcertouC();
        break;
        case "abacate":
        letra.AcertouC();
        break;
        case "pipoca":
        letra.AcertouC();
        break;
        case "cenoura":
        letra.AcertouC();
        break;
        case "capacete":
        letra.AcertouC();
        break;
        case "alce":
        letra.AcertouC();
        break;
        case "sinto":
        letra.AcertouC();
        break;
        case "bacia":
        letra.AcertouC();
        break;
        case "saci":
        letra.AcertouC();
        break;
        case "coruja":
        letra.AcertouC();
        break;
        case "âncora":
        letra.AcertouC();
        break;
        case "suco":
        letra.AcertouC();
        break;
        case "cueca":
        letra.AcertouC();
        break;
        case "círculo":
        letra.AcertouC();
        break;
        case "jacu":
        letra.AcertouC();
        break;

        default:
        letra.Errou();
                }
        }
      }
    }
  }
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
Proximo(){
  game.state.start('Jogo2');
}
}
