class FonemaR
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
   this.load.image("Pirulito","assets/FonemaR/Pirulito.png");
   this.load.image("Rato","assets/FonemaR/rato.png");
   this.load.image("Rio","assets/FonemaR/Rio.png");
   this.load.image("Roda","assets/FonemaR/Roda.png");
   this.load.image("Remedio","assets/FonemaR/Remedio.png");
   
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("LR","assets/LetraR.png");

   this.load.image("Ra","assets/Ra.png");
   this.load.image("Re","assets/Re.png");
   this.load.image("Ri","assets/Ri.png");
   this.load.image("Ro","assets/Ro.png");
   this.load.image("Ru","assets/Ru.png");
   this.load.image("Escolha2","assets/Escolha5.png");
  this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Escolha","assets/Escolha2.png");

   this.load.image("Rato","assets/FonemaR/Rato.png");
   this.load.image("Buraco","assets/FonemaR/Buraco.png");
   this.load.image("Ancora","assets/FonemaR/Ancora.png");
   this.load.image("Rato2","assets/FonemaR/Rato2.png");
   this.load.image("Buraco2","assets/FonemaR/Buraco2.png");
   this.load.image("Ancora2","assets/FonemaR/Ancora2.png");
   this.load.image("FRA1","assets/FRA1.png");
   this.load.image("FRA2","assets/FRA2.png");
   this.load.image("FRA3","assets/FRA3.png");
   this.load.image("Rat","assets/Rat.png");
   this.load.image("Bur","assets/Bur.png");
   this.load.image("Anc","assets/Anc3.png");

   this.load.image("Remedio","assets/FonemaR/Remedio.png");
   this.load.image("Parede","assets/FonemaR/Parede.png");
   this.load.image("Arvore","assets/FonemaR/Arvore.png");
   this.load.image("Remedio2","assets/FonemaR/Remedio2.png");
   this.load.image("Parede2","assets/FonemaR/Parede2.png");
   this.load.image("Arvore2","assets/FonemaR/Arvore2.png");
   this.load.image("FRE1","assets/FRE1.png");
   this.load.image("FRE2","assets/FRE2.png");
   this.load.image("FRE3","assets/FRE3.png");
   this.load.image("Rem","assets/Rem.png");
   this.load.image("Par","assets/Par.png");
   this.load.image("Arv","assets/Arv2.png");

   this.load.image("Rio","assets/FonemaR/Rio.png");
   this.load.image("Ferida","assets/FonemaR/Ferida.png");
   this.load.image("Siri","assets/FonemaR/Siri.png");
   this.load.image("Rio2","assets/FonemaR/Rio2.png");
   this.load.image("Ferida2","assets/FonemaR/Ferida2.png");
   this.load.image("Siri2","assets/FonemaR/Siri2.png");
   this.load.image("FRI1","assets/FRI1.png");
   this.load.image("FRI2","assets/FRI2.png");
   this.load.image("FRI3","assets/FRI3.png");
   this.load.image("Rio3","assets/Rio.png");
   this.load.image("Fer","assets/Fer3.png");
   this.load.image("Sir","assets/Sir.png");

   this.load.image("Roda","assets/FonemaR/Roda.png");
   this.load.image("Coroa","assets/FonemaR/Coroa.png");
   this.load.image("Ouro","assets/FonemaR/Ouro.png");
   this.load.image("Roda2","assets/FonemaR/Roda2.png");
   this.load.image("Coroa2","assets/FonemaR/Coroa2.png");
   this.load.image("Ouro2","assets/FonemaR/Ouro2.png");
   this.load.image("FRO1","assets/FRO1.png");
   this.load.image("FRO2","assets/FRO2.png");
   this.load.image("FRO3","assets/FRO3.png");
   this.load.image("Rod","assets/Rod.png");
   this.load.image("Cor","assets/Cor2.png");
   this.load.image("Our","assets/Our.png");

   this.load.image("Rua","assets/FonemaR/Rua.png");
   this.load.image("Pirulito","assets/FonemaR/Pirulito.png");
   this.load.image("Peru","assets/FonemaR/Peru.png");
   this.load.image("Rua2","assets/FonemaR/Rua2.png");
   this.load.image("Pirulito2","assets/FonemaR/Pirulito2.png");
   this.load.image("Peru2","assets/FonemaR/Peru2.png");
   this.load.image("FRU1","assets/FRU1.png");
   this.load.image("FRU2","assets/FRU2.png");
   this.load.image("FRU3","assets/FRU3.png");
   this.load.image("Rua3","assets/Rua.png");
   this.load.image("Pir","assets/Pir.png");
   this.load.image("Per","assets/Per2.png");

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



      this.ra = this.add.sprite(38, 205,"Ra");
      this.ra.inputEnabled = true;
      this.ra.events.onInputDown.add(this.Ra, this);

      this.re = this.add.sprite(280, 235,"Re");
      this.re.inputEnabled = true;
      this.re.events.onInputDown.add(this.Re, this);

      this.ro = this.add.sprite(137, 385,"Ro");
      this.ro.inputEnabled = true;
      this.ro.events.onInputDown.add(this.Ro, this);

      this.ru = this.add.sprite(424, 390,"Ru");
      this.ru.inputEnabled = true;
      this.ru.events.onInputDown.add(this.Ru, this);

      this.ri = this.add.sprite(520, 205,"Ri");
      this.ri.inputEnabled = true;
      this.ri.events.onInputDown.add(this.Ri, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lr = this.add.sprite(-10, -10,"LR");







}
 update()
 {
}

Ra(){
  this.ra.position.x = 1000;
  this.re.position.x = 1000;
  this.ri.position.x = 1000;
  this.ro.position.x = 1000;
  this.ru.position.x = 1000;

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

  this.lr.position.x = 1000;

  this.rato = this.add.sprite(50, 240,"pequeno2", 51);
  this.rato.inputEnabled = true;
  this.rato.events.onInputDown.add(this.Rato, this);

  this.buraco = this.add.sprite(295, 380,"pequeno2", 52);
  this.buraco.inputEnabled = true;
  this.buraco.events.onInputDown.add(this.Buraco, this);

  this.ancora = this.add.sprite(540, 240,"pequeno",22);
  this.ancora.inputEnabled = true;
  this.ancora.events.onInputDown.add(this.Ancora, this);
}

Rato(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.rato.position.x = 1000;
  this.ancora.position.x = 1000;
  this.buraco.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(200, 70,"Rat");

  var rato2 = this.add.sprite(190, 230,"grande2", 51);

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

  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 360;

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

Buraco(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.buraco.position.x = 1000;
  this.ancora.position.x = 1000;
  this.rato.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(145, 70,"Bur");

  var buraco2 = this.add.sprite(200, 210,"grande2", 52);

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
  this.audio.src = "assets/sons/BU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 408;

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

Ancora(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ancora.position.x = 1000;
  this.rato.position.x = 1000;
  this.buraco.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(145, 70,"Anc4");

  var ancora2 = this.add.sprite(240, 230,"grande",22);

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

  this.audio.src = "assets/sons/an.mp3";
  this.audio.play();

  this.linha = this.add.sprite(135, 140,"Linha");

  this.linha2 = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA3JA3, this);
}
JA3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RA.mp3";
  this.audio.play();

  this.linha.position.x = 420;

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

Re(){
  this.ra.position.x = 1000;
  this.re.position.x = 1000;
  this.ri.position.x = 1000;
  this.ro.position.x = 1000;
  this.ru.position.x = 1000;

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

  this.lr.position.x = 1000;

  this.remedio = this.add.sprite(55, 240,"pequeno2", 54);
  this.remedio.inputEnabled = true;
  this.remedio.events.onInputDown.add(this.Remedio, this);

  this.parede = this.add.sprite(305, 370,"pequeno2", 55);
  this.parede.inputEnabled = true;
  this.parede.events.onInputDown.add(this.Parede, this);

  this.arvore = this.add.sprite(530, 255,"pequeno", 52);
  this.arvore.inputEnabled = true;
  this.arvore.events.onInputDown.add(this.Arvore, this);
}

Remedio(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.remedio.position.x = 1000;
  this.arvore.position.x = 1000;
  this.parede.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(100, 60,"Rem");

  var remedio2 = this.add.sprite(190, 230,"grande2", 54);

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

  this.audio.src = "assets/sons/Re.mp3";
  this.audio.play();

  this.linha = this.add.sprite(115, 150,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ME2.mp3";
  this.audio.play();

  this.linha.position.x = 240;

  this.linha2 = this.add.sprite(255, 150,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI1JE1, this);
}
DI1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DI.mp3";
  this.audio.play();

  this.linha.position.x = 385;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.O1JE1, this);
}
O1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/O2.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(510, 142,"Linha2");

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

Parede(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.parede.position.x = 1000;
  this.remedio.position.x = 1000;
  this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


    this.add.sprite(150, 60,"Par");

  var parede2 = this.add.sprite(230, 230,"grande2", 55);

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

  this.audio.src = "assets/sons/PA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 130,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Re.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DE2.mp3";
  this.audio.play();

  this.linha.position.x = 410;

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

Arvore(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.arvore.position.x = 1000;
  this.remedio.position.x = 1000;
  this.parede.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(145, 60,"Arv");

  var arvore2 = this.add.sprite(190, 240,"grande", 52);

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
  this.audio.src = "assets/sons/AR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/vo.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3FE3, this);
}
RE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Re.mp3";
  this.audio.play();

  this.linha.position.x = 415;

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


Ri(){
  this.ra.position.x = 1000;
  this.re.position.x = 1000;
  this.ri.position.x = 1000;
  this.ro.position.x = 1000;
  this.ru.position.x = 1000;

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

  this.lr.position.x = 1000;

  this.rio = this.add.sprite(48, 240,"pequeno2", 57);
  this.rio.inputEnabled = true;
  this.rio.events.onInputDown.add(this.Rio, this);

  this.ferida = this.add.sprite(295, 370,"pequeno2", 58);
  this.ferida.inputEnabled = true;
  this.ferida.events.onInputDown.add(this.Ferida, this);

  this.siri = this.add.sprite(530, 240,"pequeno2", 59);
  this.siri.inputEnabled = true;
  this.siri.events.onInputDown.add(this.Siri, this);
}

Rio(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.rio.position.x = 1000;
  this.ferida.position.x = 1000;
  this.siri.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(195, 70,"Rio3");

  var rio2 = this.add.sprite(200, 230,"grande2", 57);

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

  this.audio.src = "assets/sons/RI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(240, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/O2.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(365, 130,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CI1, this);
}
FIM1CI1(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1CI1();
}
REPETIR1CI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI1, this);
}

Ferida(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ferida.position.x = 1000;
  this.siri.position.x = 1000;
  this.rio.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(135, 70,"Fer");

  var ferida2 = this.add.sprite(200, 240,"grande2", 58);

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

  this.audio.src = "assets/sons/FE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RI.mp3";
  this.audio.play();

  this.linha.position.x = 275;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha.position.x = 395;

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

Siri(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.siri.position.x = 1000;
  this.ferida.position.x = 1000;
  this.rio.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI3, this);


  this.add.sprite(190, 70,"Sir");

  var siri2 = this.add.sprite(190, 210,"grande2", 59);

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

  this.audio.src = "assets/sons/SI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PLO3DI3, this);
}
PLO3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RI.mp3";
  this.audio.play();

  this.linha.position.x = 340;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DI3, this);
}
FIM3DI3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DI3();
}
REPETIR2DI3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI3, this);
}

Ro(){
  this.ra.position.x = 1000;
  this.re.position.x = 1000;
  this.ri.position.x = 1000;
  this.ro.position.x = 1000;
  this.ru.position.x = 1000;

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

  this.lr.position.x = 1000;

  this.roda = this.add.sprite(50, 255,"pequeno2", 60);
  this.roda.inputEnabled = true;
  this.roda.events.onInputDown.add(this.Roda, this);

  this.coroa = this.add.sprite(295, 395,"pequeno2", 61);
  this.coroa.inputEnabled = true;
  this.coroa.events.onInputDown.add(this.Coroa, this);

  this.ouro = this.add.sprite(528, 245,"pequeno2", 62);
  this.ouro.inputEnabled = true;
  this.ouro.events.onInputDown.add(this.Ouro, this);
}

Roda(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.roda.position.x = 1000;
  this.coroa.position.x = 1000;
  this.ouro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(190, 70,"Rod");

  var roda2 = this.add.sprite(195, 240,"grande2", 60);

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

  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  this.linha2 = this.add.sprite(355, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CO1, this);
}
FIM1CO1(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1CO1();
}
REPETIR1CO1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO1, this);
}





Coroa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.roda.position.x = 1000;
  this.coroa.position.x = 1000;
  this.ouro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(140, 70,"Cor");

  var coroa2 = this.add.sprite(190, 240,"grande2", 61);

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

  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha.position.x = 305;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2 = this.add.sprite(438, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2CO2, this);
}
FIM2CO2(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2CO2();
}
REPETIR2CO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO2, this);
}





Ouro(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.roda.position.x = 1000;
  this.coroa.position.x = 1000;
  this.ouro.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(195, 70,"Our");

  var ouro2 = this.add.sprite(205, 210,"grande2", 62);

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
  this.audio.src = "assets/sons/OU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RO.mp3";
  this.audio.play();

  this.linha.position.x = 350;

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

Ru(){
  this.ra.position.x = 1000;
  this.re.position.x = 1000;
  this.ri.position.x = 1000;
  this.ro.position.x = 1000;
  this.ru.position.x = 1000;

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

  this.lr.position.x = 1000;

  this.rua = this.add.sprite(50, 270,"pequeno2", 63);
  this.rua.inputEnabled = true;
  this.rua.events.onInputDown.add(this.Rua, this);

  this.pirulito = this.add.sprite(295, 370,"pequeno2", 64);
  this.pirulito.inputEnabled = true;
  this.pirulito.events.onInputDown.add(this.Pirulito, this);

  this.peru = this.add.sprite(530, 255,"pequeno2", 65);
  this.peru.inputEnabled = true;
  this.peru.events.onInputDown.add(this.Peru, this);
}
Rua(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.rua.position.x = 1000;
  this.pirulito.position.x = 1000;
  this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(190, 70,"Rua3");

  var rua2 = this.add.sprite(190, 240,"grande2", 63);

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

  this.audio.src = "assets/sons/ru.mp3";
  this.audio.play();

  this.linha = this.add.sprite(240, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(370, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CU1, this);
}
FIM1CU1(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR1CU1();
}
REPETIR1CU1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CU1, this);
}






Pirulito(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pirulito.position.x = 1000;
  this.rua.position.x = 1000;
  this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(105, 70,"Pir");

  var pirulito2 = this.add.sprite(190, 240,"grande2", 64);

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

  this.audio.src = "assets/sons/PI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(100, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ru.mp3";
  this.audio.play();

  this.linha.position.x = 217;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LI.mp3";
  this.audio.play();

  this.linha.position.x = 345;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2DU2, this);
}
RA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha.position.x = 475;

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

Peru(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FRU3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.pirulito.position.x = 1000;
  this.rua.position.x = 1000;
  this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lr.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU3, this);


  this.add.sprite(210, 70,"Per");

  var peru2 = this.add.sprite(215, 210,"grande2", 65);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO1DU3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.E3DU3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
E3DU3(){

  this.audio.src = "assets/sons/PE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU3DU3, this);
}
DU3DU3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ru.mp3";
  this.audio.play();

  this.linha.position.x = 345;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3DU3, this);
}
FIM3DU3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR2DU3();
}
REPETIR2DU3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DU3, this);
}

voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaR');
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
case "ancora":
letra.AcertouR();
break;
case "árvore":
letra.AcertouR();
break;
case "buraco":
letra.AcertouR();
break;
case "canguru":
letra.AcertouR();
break;
case "coroa":
letra.AcertouR();
break;
case "ferida":
letra.AcertouR();
break;
case "gorila":
letra.AcertouR();
break;
case "ouro":
letra.AcertouR();
break;
case "parede":
letra.AcertouR();
break;
case "peru":
letra.AcertouR();
break;
case "pirulito":
letra.AcertouR();
break;
case "rato":
letra.AcertouR();
break;
case "remédio":
letra.AcertouR();
break;
case "rio":
letra.AcertouR();
break;
case "roda":
letra.AcertouR();
break;
case "rua":
letra.AcertouR();
break;
case "siri":
letra.AcertouR();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraR()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, R.mp3";
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
