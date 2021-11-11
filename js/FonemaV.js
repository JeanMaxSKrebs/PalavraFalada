class FonemaV
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
   this.load.image("Vaca","assets/FonemaV/vaca.png");
   this.load.image("Vela","assets/FonemaV/Vela.png");
   this.load.image("Violao","assets/FonemaV/Violao.png");
   this.load.image("Milho","assets/Fonema M/Milho3.png");
  this.load.image("LV","assets/LetraV.png");

   

   this.load.image("Vulcao","assets/FonemaV/Vulcao.png");
   this.load.image("Vuvuzela","assets/FonemaV/Vuvuzela.png");
   //this.load.image("Tatu","assets/FonemaT/Tatu.png");
   this.load.image("Vulcao2","assets/FonemaV/Vulcao3.png");
   this.load.image("Vuvuzela2","assets/FonemaV/Vuvuzela2.png");
   //this.load.image("Uva2","assets/FonemaV/Uva2.png");
   this.load.image("FVU1","assets/FVU1.png");
   this.load.image("FVU2","assets/FVU2.png");
   this.load.image("FVU3","assets/FVU3.png");
   this.load.image("Vul","assets/Vul.png");
   this.load.image("Vuv","assets/Vuv.png");
   //this.load.image("Uva","assets/Uva.png");


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



      this.va = this.add.sprite(38, 205,"Va");
      this.va.inputEnabled = true;
      this.va.events.onInputDown.add(this.Va, this);

      this.ve = this.add.sprite(280, 235,"Ve");
      this.ve.inputEnabled = true;
      this.ve.events.onInputDown.add(this.Ve, this);

      this.vo = this.add.sprite(137, 385,"Vo");
      this.vo.inputEnabled = true;
      this.vo.events.onInputDown.add(this.Vo, this);

      this.vu = this.add.sprite(424, 390,"Vu");
      this.vu.inputEnabled = true;
      this.vu.events.onInputDown.add(this.Vu, this);

      this.vi = this.add.sprite(520, 205,"Vi");
      this.vi.inputEnabled = true;
      this.vi.events.onInputDown.add(this.Vi, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lv = this.add.sprite(-10, -10,"LV");







}
 update()
 {
}

Va(){
  this.va.position.x = 1000;
  this.ve.position.x = 1000;
  this.vi.position.x = 1000;
  this.vo.position.x = 1000;
  this.vu.position.x = 1000;

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

  this.lv.position.x = 1000;

  this.vaca = this.add.sprite(48, 260,"pequeno3", 19);
  this.vaca.inputEnabled = true;
  this.vaca.events.onInputDown.add(this.Vaca, this);

  this.gravata = this.add.sprite(295, 380,"pequeno3", 20);
  this.gravata.inputEnabled = true;
  this.gravata.events.onInputDown.add(this.Gravata, this);

  this.uva = this.add.sprite(535, 240,"pequeno3", 18);
  this.uva.inputEnabled = true;
  this.uva.events.onInputDown.add(this.Uva, this);
}

Vaca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.vaca.position.x = 1000;
  this.gravata.position.x = 1000;
  this.uva.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(190, 70,"Vac");

  var vaca2 = this.add.sprite(190, 230,"grande3", 19);

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

  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(225, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
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

Gravata(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.vaca.position.x = 1000;
  this.gravata.position.x = 1000;
  this.uva.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(100, 70,"Gra");

  var gravata2 = this.add.sprite(200, 210,"grande3", 20);

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
  this.audio.src = "assets/sons/GRA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha");
  this.linha2 = this.add.sprite(190, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha.position.x = 325;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TA.mp3";
  this.audio.play();

  this.linha.position.x = 465;

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

Uva(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.vaca.position.x = 1000;
  this.gravata.position.x = 1000;
  this.uva.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(185, 70,"Uva3");

  var uva2 = this.add.sprite(210, 210,"grande3", 18);

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

  this.audio.src = "assets/sons/U.mp3";
  this.audio.play();

  this.linha = this.add.sprite(240, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(320, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3JA3, this);
}
FIM3JA3(){
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2JA3();
}
REPETIR2JA3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JA3, this);
}

Ve(){
  this.va.position.x = 1000;
  this.ve.position.x = 1000;
  this.vi.position.x = 1000;
  this.vo.position.x = 1000;
  this.vu.position.x = 1000;

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

  this.lv.position.x = 1000;

  this.vela = this.add.sprite(40, 250,"pequeno3", 22);
  this.vela.inputEnabled = true;
  this.vela.events.onInputDown.add(this.Vela, this);

  this.sorvete = this.add.sprite(290, 370,"pequeno3", 23);
  this.sorvete.inputEnabled = true;
  this.sorvete.events.onInputDown.add(this.Sorvete, this);

  this.chave = this.add.sprite(530, 240,"pequeno3", 24);
  this.chave.inputEnabled = true;
  this.chave.events.onInputDown.add(this.Chave, this);
}

Vela(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.vela.position.x = 1000;
  this.sorvete.position.x = 1000;
  this.chave.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(180, 70,"Vel");

  var vela2 = this.add.sprite(200, 230,"grande3", 22);

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

  this.audio.src = "assets/sons/VE2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 335;

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

Sorvete(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sorvete.position.x = 1000;
  this.chave.position.x = 1000;
  this.vela.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(95, 70,"Sor");

  var sorvete2 = this.add.sprite(190, 230,"grande3", 23);

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

  this.audio.src = "assets/sons/SOR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 135,"Linha");
  this.linha2 = this.add.sprite(190, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VE.mp3";
  this.audio.play();

  this.linha.position.x = 322;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 450;

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

Chave(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.chave.position.x = 1000;
  this.sorvete.position.x = 1000;
  this.vela.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(145, 70,"Cha");

  var chave2 = this.add.sprite(200, 240,"grande3", 24);

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
  this.audio.src = "assets/sons/CHA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(175, 140,"Linha");

  this.linha2 = this.add.sprite(255, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VE.mp3";
  this.audio.play();

  this.linha.position.x = 380;
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

Vi(){
  this.va.position.x = 1000;
  this.ve.position.x = 1000;
  this.vi.position.x = 1000;
  this.vo.position.x = 1000;
  this.vu.position.x = 1000;

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

  this.lv.position.x = 1000;

  this.violao = this.add.sprite(48, 240,"pequeno3", 25);
  this.violao.inputEnabled = true;
  this.violao.events.onInputDown.add(this.Violao, this);

  this.aviao = this.add.sprite(295, 380,"pequeno3", 26);
  this.aviao.inputEnabled = true;
  this.aviao.events.onInputDown.add(this.Aviao, this);

  this.davi = this.add.sprite(560, 240,"pequeno3", 27);
  this.davi.inputEnabled = true;
  this.davi.events.onInputDown.add(this.Davi, this);
}

Violao(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.violao.position.x = 1000;
  this.aviao.position.x = 1000;
  this.davi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(140, 55,"Vio");

  var violao2 = this.add.sprite(190, 250,"grande3", 25);

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

  this.audio.src = "assets/sons/VI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(140, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/O.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(262, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LAO1CI1, this);
}
LAO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LÃO.mp3";
  this.audio.play();

  this.linha2.position.x = 1000;

  this.linha.position.x = 335;

  this.linha3 = this.add.sprite(410, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1CI1, this);
}
FIM1CI1(){
  this.linha.position.x = 1000;
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR1CI1();
}
REPETIR1CI1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CI1, this);
}

Aviao(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.aviao.position.x = 1000;
  this.violao.position.x = 1000;
  this.davi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(140, 60,"Avi");

  var aviao2 = this.add.sprite(200, 240,"grande3", 26);

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

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(168, 130,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(235, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ÃO.mp3";
  this.audio.play();

  this.linha2.position.x = 355;
  this.linha3 = this.add.sprite(370, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DI2, this);
}
FIM2DI2(){
  this.linha3.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DI2();
}
REPETIR2DI2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI2, this);
}

Davi(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.davi.position.x = 1000;
  this.violao.position.x = 1000;
  this.aviao.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI3, this);


  this.add.sprite(190, 70,"Dav");

  var davi2 = this.add.sprite(260, 210,"grande3", 27);

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

  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(212, 140,"Linha");

  this.linha2 = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PLO3DI3, this);
}
PLO3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VI.mp3";
  this.audio.play();

  this.linha.position.x = 350;

  this.linha2.position.x = 1000;

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

Vo(){
  this.va.position.x = 1000;
  this.ve.position.x = 1000;
  this.vi.position.x = 1000;
  this.vo.position.x = 1000;
  this.vu.position.x = 1000;

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

  this.lv.position.x = 1000;

  this.volante = this.add.sprite(47, 250,"pequeno3", 28);
  this.volante.inputEnabled = true;
  this.volante.events.onInputDown.add(this.Volante, this);

  this.arvore = this.add.sprite(292, 375,"pequeno", 52);
  this.arvore.inputEnabled = true;
  this.arvore.events.onInputDown.add(this.Arvore, this);

  this.ovo = this.add.sprite(547, 245,"pequeno2", 35);
  this.ovo.inputEnabled = true;
  this.ovo.events.onInputDown.add(this.Ovo, this);
}

Volante(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.volante.position.x = 1000;
  this.arvore.position.x = 1000;
  this.ovo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(100, 70,"Vol");

  var volante2 = this.add.sprite(195, 240,"grande3", 28);

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

  this.audio.src = "assets/sons/VO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LAN.mp3";
  this.audio.play();

  this.linha.position.x = 250;

  this.linha2 = this.add.sprite(330, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA1CO1, this);
}
JA1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 460;

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





Arvore(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.volante.position.x = 1000;
  this.arvore.position.x = 1000;
  this.ovo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(140, 60,"Arv");

  var arvore2 = this.add.sprite(200, 240,"grande", 52);

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

  this.audio.src = "assets/sons/AR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(145, 145,"Linha");
  this.linha2 = this.add.sprite(150, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VO.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RE.mp3";
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





Ovo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ovo.position.x = 1000;
  this.volante.position.x = 1000;
  this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(190, 70,"Ovo3");

  var ovo2 = this.add.sprite(240, 210,"grande2", 35);

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
  this.audio.src = "assets/sons/O.mp3";
  this.audio.play();

  this.linha = this.add.sprite(235, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VO.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(320, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3CO3, this);
}
FIM3CO3(){
  this.linha2.position.x = 1000;

  this.start();
  this.REPETIR2CO3();
}
REPETIR2CO3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO3, this);
}

Vu(){
  this.va.position.x = 1000;
  this.ve.position.x = 1000;
  this.vi.position.x = 1000;
  this.vo.position.x = 1000;
  this.vu.position.x = 1000;

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

  this.lv.position.x = 1000;

  this.vulcao = this.add.sprite(52, 275,"pequeno3", 31);
  this.vulcao.inputEnabled = true;
  this.vulcao.events.onInputDown.add(this.Vulcao, this);

  this.vuvuzela = this.add.sprite(295, 370,"pequeno3", 32);
  this.vuvuzela.inputEnabled = true;
  this.vuvuzela.events.onInputDown.add(this.Vuvuzela, this);

  /*this.tatu = this.add.sprite(530, 255,"pequeno3", 13);
  this.tatu.inputEnabled = true;
  this.tatu.events.onInputDown.add(this.Tatu, this);*/
}

Vulcao(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.vulcao.position.x = 1000;
  this.vuvuzela.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(145, 60,"Vul");

  var vulcao2 = this.add.sprite(130, 240,"grande3", 31);

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

  this.audio.src = "assets/sons/VUL.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 145,"Linha");
  this.linha2 = this.add.sprite(210, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CÃO.mp3";
  this.audio.play();

  this.linha.position.x = 340;
  this.linha2.position.x = 410;

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






Vuvuzela(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FVU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.vuvuzela.position.x = 1000;
  this.vulcao.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lv.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(75, 70,"Vuv");

  var vuvuzela2 = this.add.sprite(190, 240,"grande3", 32);

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

  this.audio.src = "assets/sons/VU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(95, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VU.mp3";
  this.audio.play();

  this.linha.position.x = 227;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ZE.mp3";
  this.audio.play();

  this.linha.position.x = 357;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2DU2, this);
}
RA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 485;

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
  game.state.start('FonemaV');
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
case "árvore":
letra.AcertouV();
break;
case "avião":
letra.AcertouV();
break;
case "caixote":
letra.AcertouV();
break;
case "chave":
letra.AcertouV();
break;
case "davi":
letra.AcertouV();
break;
case "gravata":
letra.AcertouV();
break;
case "ovo":
letra.AcertouV();
break;
case "sorvete":
letra.AcertouV();
break;
case "uva":
letra.AcertouV();
break;
case "vaca":
letra.AcertouV();
break;
case "vela":
letra.AcertouV();
break;
case "violão":
letra.AcertouV();
break;
case "volante":
letra.AcertouV();
break;
case "vulcão":
letra.AcertouV();
break;
case "vuvuzela":
letra.AcertouV();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraV()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, V.mp3";
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
