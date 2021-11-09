class FonemaN
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
  this.load.image("Caneca","assets/FonemaN/Caneca.png");
  this.load.image("Navio","assets/FonemaN/Navio.png");
  this.load.image("Nuvem","assets/FonemaN/Nuvem.png");
  this.load.image("Ninho","assets/FonemaN/Ninho.png");
  this.load.image("Sino","assets/FonemaN/Sino.png");
  
 this.load.image("Proximo","assets/Proximo4.png");
 his.load.image("LN","assets/LetraN.png");

  this.load.image("Na","assets/Na.png");
  this.load.image("Ne","assets/Ne.png");
  this.load.image("Ni","assets/Ni.png");
  this.load.image("No","assets/No.png");
  this.load.image("Nu","assets/Nu.png");
  this.load.image("Escolha2","assets/Escolha5.png");
  this.load.image("Começar","assets/Comecar2.png");
  this.load.image("Escolha","assets/Escolha2.png");

  this.load.image("Navio","assets/FonemaN/Navio.png");
  this.load.image("Banana","assets/FonemaN/Banana.png");
  this.load.image("Antena","assets/FonemaN/Antena.png");
  this.load.image("Navio2","assets/FonemaN/Navio2.png");
  this.load.image("Banana2","assets/FonemaN/Banana2.png");
  this.load.image("Antena2","assets/FonemaN/Antena2.png");
  this.load.image("FNA1","assets/FNA1.png");
  this.load.image("FNA2","assets/FNA2.png");
  this.load.image("FNA3","assets/FNA3.png");
  this.load.image("Nav","assets/Nav.png");
  this.load.image("Ban","assets/Ban2.png");
  this.load.image("Ant","assets/Ant.png");

  this.load.image("Neve","assets/FonemaN/Neve.png");
  this.load.image("Chinelo","assets/FonemaN/Chinelo.png");
  this.load.image("Cabine","assets/FonemaN/Cabine.png");
  this.load.image("Neve2","assets/FonemaN/Neve2.png");
  this.load.image("Chinelo2","assets/FonemaN/Chinelo2.png");
  this.load.image("Cabine2","assets/FonemaN/Cabine2.png");
  this.load.image("FNE1","assets/FNE1.png");
  this.load.image("FNE2","assets/FNE2.png");
  this.load.image("FNE3","assets/FNE3.png");
  this.load.image("Nev","assets/Nev.png");
  this.load.image("Chi","assets/Chi.png");
  this.load.image("Cab","assets/Cab2.png");

  this.load.image("Ninho","assets/FonemaN/Ninho.png");
  this.load.image("Menino","assets/FonemaN/Menino.png");
  this.load.image("Biquini","assets/FonemaN/Biquini.png");
  this.load.image("Ninho2","assets/FonemaN/Ninho2.png");
  this.load.image("Menino2","assets/FonemaN/Menino2.png");
  this.load.image("Biquini2","assets/FonemaN/Biquini2.png");
  this.load.image("FNI1","assets/FNI1.png");
  this.load.image("FNI2","assets/FNI2.png");
  this.load.image("FNI3","assets/FNI3.png");
  this.load.image("Nin","assets/Nin2.png");
  this.load.image("Men","assets/Men.png");
  this.load.image("Biq","assets/Biq.png");

  this.load.image("Novelo","assets/FonemaN/Novelo.png");
  this.load.image("Canoa","assets/FonemaN/Canoa.png");
  this.load.image("Sino","assets/FonemaN/Sino.png");
  this.load.image("Novelo2","assets/FonemaN/Novelo2.png");
  this.load.image("Canoa2","assets/FonemaN/Canoa3.png");
  this.load.image("Sino2","assets/FonemaN/Sino2.png");
  this.load.image("FNO1","assets/FNO1.png");
  this.load.image("FNO2","assets/FNO2.png");
  this.load.image("FNO3","assets/FNO3.png");
  this.load.image("Nov","assets/Nov.png");
  this.load.image("Can","assets/Can2.png");
  this.load.image("Sin","assets/Sin.png");

  this.load.image("Nuvem","assets/FonemaN/Nuvem.png");
  this.load.image("Canudo","assets/FonemaN/Canudo.png");
  //this.load.image("Bexiga","assets/FonemaG/Bexiga.png");
  this.load.image("Nuvem2","assets/FonemaN/Nuvem2.png");
  this.load.image("Canudo2","assets/FonemaN/Canudo2.png");
  //this.load.image("Antena2","assets/FonemaM/Antena2.png");
  this.load.image("FNU1","assets/FNU1.png");
  this.load.image("FNU2","assets/FNU2.png");
  this.load.image("FNU3","assets/FNU3.png");
  this.load.image("Nuv","assets/Nuv.png");
  this.load.image("Can2","assets/Can3.png");
  //this.load.image("Ant","assets/Ant.png");


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



      this.na = this.add.sprite(38, 205,"Na");
      this.na.inputEnabled = true;
      this.na.events.onInputDown.add(this.Na, this);

      this.ne = this.add.sprite(280, 235,"Ne");
      this.ne.inputEnabled = true;
      this.ne.events.onInputDown.add(this.Ne, this);

      this.no = this.add.sprite(137, 385,"No");
      this.no.inputEnabled = true;
      this.no.events.onInputDown.add(this.No, this);

      this.nu = this.add.sprite(424, 390,"Nu");
      this.nu.inputEnabled = true;
      this.nu.events.onInputDown.add(this.Nu, this);

      this.ni = this.add.sprite(520, 205,"Ni");
      this.ni.inputEnabled = true;
      this.ni.events.onInputDown.add(this.Ni, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.ln = this.add.sprite(-10, -10,"LN");







}
 update()
 {
}

Na(){
  this.na.position.x = 1000;
  this.ne.position.x = 1000;
  this.ni.position.x = 1000;
  this.no.position.x = 1000;
  this.nu.position.x = 1000;

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

  this.ln.position.x = 1000;

  this.navio = this.add.sprite(55, 240,"pequeno2", 34);
  this.navio.inputEnabled = true;
  this.navio.events.onInputDown.add(this.Navio, this);

  this.banana = this.add.sprite(295, 370,"pequeno",12);
  this.banana.inputEnabled = true;
  this.banana.events.onInputDown.add(this.Banana, this);

  this.antena = this.add.sprite(530, 240,"Antena");
  this.antena.inputEnabled = true;
  this.antena.events.onInputDown.add(this.Antena, this);
}







Navio(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.navio.position.x = 1000;
  this.banana.position.x = 1000;
  this.antena.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(150, 70,"Nav");

  var navio2 = this.add.sprite(200, 230,"grande2", 34);

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

  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(187, 135,"Linha");

  this.linha2 = this.add.sprite(200, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VI.mp3";
  this.audio.play();

  this.linha.position.x = 328;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE1JA1, this);
}
RE1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/O3.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha3 = this.add.sprite(450, 130,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1JA1, this);
}
FIM1JA1(){
  this.linha3.position.x = 1000;
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







Banana(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNA2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.banana.position.x = 1000;
  this.navio.position.x = 1000;
  this.antena.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA2, this);


  this.add.sprite(125, 70,"Ban");

  var banana2 = this.add.sprite(200, 250,"grande", 12);

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
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(142, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA2JA2, this);
}
JA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA1.mp3";
  this.audio.play();

  this.linha.position.x = 270;

  this.linha2 = this.add.sprite(290, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2JA2, this);
}
MA2JA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha.position.x = 425;

  this.linha2.position.x = 440;

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








Antena(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNA3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.antena.position.x = 1000;
  this.banana.position.x = 1000;
  this.navio.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA3, this);


  this.add.sprite(120, 70,"Ant");

  var antena2 = this.add.sprite(210, 210,"Antena2");

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

  this.audio.src = "assets/sons/AN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(140, 140,"Linha");

  this.linha2 = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE3JA3, this);
}
RE3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA3JA3, this);
}
JA3JA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  this.linha2.position.x = 425;

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







Ne(){
  this.na.position.x = 1000;
  this.ne.position.x = 1000;
  this.ni.position.x = 1000;
  this.no.position.x = 1000;
  this.nu.position.x = 1000;

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

  this.ln.position.x = 1000;

  this.neve = this.add.sprite(55, 240,"Neve");
  this.neve.inputEnabled = true;
  this.neve.events.onInputDown.add(this.Neve, this);

  this.chinelo = this.add.sprite(295, 390,"Chinelo");
  this.chinelo.inputEnabled = true;
  this.chinelo.events.onInputDown.add(this.Chinelo, this);

  this.cabine = this.add.sprite(525, 240,"Cabine");
  this.cabine.inputEnabled = true;
  this.cabine.events.onInputDown.add(this.Cabine, this);
}





Neve(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.neve.position.x = 1000;
  this.chinelo.position.x = 1000;
  this.cabine.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(190, 70,"Nev");

  var neve2 = this.add.sprite(210, 230,"Neve2");

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

  this.audio.src = "assets/sons/NE.mp3";
  this.audio.play();

  this.linha = this.add.sprite(215, 140,"Linha");

  this.linha2 = this.add.sprite(225, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VE.mp3";
  this.audio.play();

  this.linha.position.x = 355;

  this.linha2.position.x = 1000;

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





Chinelo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.chinelo.position.x = 1000;
  this.neve.position.x = 1000;
  this.cabine.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(93, 70,"Chi");

  var chinelo2 = this.add.sprite(200, 250,"Chinelo2");

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

  this.audio.src = "assets/sons/CHI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 135,"Linha");

  this.linha2 = this.add.sprite(175, 135,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NE.mp3";
  this.audio.play();

  this.linha.position.x = 305;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 440;

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





Cabine(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNE3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cabine.position.x = 1000;
  this.chinelo.position.x = 1000;
  this.neve.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1FE3, this);


  this.add.sprite(130, 70,"Cab");

  var cabine2 = this.add.sprite(190, 240,"Cabine2");

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
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FE3FE3, this);
}
FE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NE3FE3, this);
}
NE3FE3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NE2.mp3";
  this.audio.play();

  this.linha.position.x = 400;

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

Ni(){
  this.na.position.x = 1000;
  this.ne.position.x = 1000;
  this.ni.position.x = 1000;
  this.no.position.x = 1000;
  this.nu.position.x = 1000;

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

  this.ln.position.x = 1000;

  this.ninho = this.add.sprite(50, 245,"Ninho");
  this.ninho.inputEnabled = true;
  this.ninho.events.onInputDown.add(this.Ninho, this);

  this.menino = this.add.sprite(325, 380,"Menino");
  this.menino.inputEnabled = true;
  this.menino.events.onInputDown.add(this.Menino, this);

  this.biquini = this.add.sprite(545, 240,"Biquini");
  this.biquini.inputEnabled = true;
  this.biquini.events.onInputDown.add(this.Biquini, this);
}






Ninho(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ninho.position.x = 1000;
  this.menino.position.x = 1000;
  this.biquini.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(140, 70,"Nin");

  var ninho2 = this.add.sprite(200, 250,"Ninho2");

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

  this.audio.src = "assets/sons/NI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TO1CI1, this);
}
TO1CI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NHO.mp3";
  this.audio.play();

  this.linha.position.x = 305;

  this.linha2 = this.add.sprite(390, 140,"Linha");

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





Menino(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.menino.position.x = 1000;
  this.ninho.position.x = 1000;
  this.biquini.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(135, 70,"Men");

  var menino2 = this.add.sprite(270, 240,"Menino2");

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

  this.audio.src = "assets/sons/ME.mp3";
  this.audio.play();

  this.linha = this.add.sprite(135, 140,"Linha");
  this.linha2 = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NI.mp3";
  this.audio.play();

  this.linha.position.x = 280;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 415;

  this.linha2.position.x = 425;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2DI2, this);
}
FIM2DI2(){
  this.linha.position.x = 1000;
  this.linha2.position.x = 1000;
  this.start();
  this.REPETIR2DI2();
}
REPETIR2DI2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1DI2, this);
}





Biquini(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNI3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.biquini.position.x = 1000;
  this.menino.position.x = 1000;
  this.ninho.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI3, this);


  this.add.sprite(100, 65,"Biq");

  var biquini2 = this.add.sprite(240, 250,"Biquini2");

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

  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(120, 160,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PLO3DI3, this);
}
PLO3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/QUI.mp3";
  this.audio.play();

  this.linha.position.x = 235;

  this.linha2 = this.add.sprite(310, 160,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI3DI3, this);
}
DI3DI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NI.mp3";
  this.audio.play();

  this.linha.position.x = 445;

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





No(){
  this.na.position.x = 1000;
  this.ne.position.x = 1000;
  this.ni.position.x = 1000;
  this.no.position.x = 1000;
  this.nu.position.x = 1000;

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

  this.ln.position.x = 1000;

  this.novelo = this.add.sprite(50, 245,"Novelo");
  this.novelo.inputEnabled = true;
  this.novelo.events.onInputDown.add(this.Novelo, this);

  this.canoa = this.add.sprite(280, 385,"Canoa");
  this.canoa.inputEnabled = true;
  this.canoa.events.onInputDown.add(this.Canoa, this);

  this.sino = this.add.sprite(528, 240,"pequeno2", 71);
  this.sino.inputEnabled = true;
  this.sino.events.onInputDown.add(this.Sino, this);
}






Novelo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNO1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.novelo.position.x = 1000;
  this.canoa.position.x = 1000;
  this.sino.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO1, this);


  this.add.sprite(130, 70,"Nov");

  var novelo2 = this.add.sprite(200, 240,"Novelo2");

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

  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  this.linha2 = this.add.sprite(170, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RU1CO1, this);
}
RU1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VE.mp3";
  this.audio.play();

  this.linha.position.x = 300;

  this.linha2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA1CO1, this);
}
JA1CO1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LO.mp3";
  this.audio.play();

  this.linha.position.x = 425;

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




Canoa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNO2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.canoa.position.x = 1000;
  this.novelo.position.x = 1000;
  this.sino.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO2, this);


  this.add.sprite(135, 70,"Can");

  var canoa2 = this.add.sprite(40, 240,"Canoa2");

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

  this.linha = this.add.sprite(162, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO2CO2, this);
}
CO2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  this.linha2 = this.add.sprite(315, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RA2CO2, this);
}
RA2CO2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;

  this.linha3 = this.add.sprite(447, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2CO2, this);
}
FIM2CO2(){
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2CO2();
}
REPETIR2CO2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1CO2, this);
}







Sino(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNO3");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.sino.position.x = 1000;
  this.canoa.position.x = 1000;
  this.novelo.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CO3, this);


  this.add.sprite(195, 70,"Sin");

  var sino2 = this.add.sprite(205, 210,"grande2", 71);

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
  this.audio.src = "assets/sons/SI.mp3";
  this.audio.play();

  this.linha = this.add.sprite(205, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO3CO3, this);
}
CO3CO3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NO.mp3";
  this.audio.play();

  this.linha.position.x = 335;

  this.linha2 = this.add.sprite(350, 140,"Linha");

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








Nu(){
  this.na.position.x = 1000;
  this.ne.position.x = 1000;
  this.ni.position.x = 1000;
  this.no.position.x = 1000;
  this.nu.position.x = 1000;

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

  this.ln.position.x = 1000;

  this.nuvem = this.add.sprite(50, 250,"Nuvem");
  this.nuvem.inputEnabled = true;
  this.nuvem.events.onInputDown.add(this.Nuvem, this);

  this.canudo = this.add.sprite(295, 370,"Canudo");
  this.canudo.inputEnabled = true;
  this.canudo.events.onInputDown.add(this.Canudo, this);

  /*this.edu = this.add.sprite(530, 255,"pequeno", 47);
  this.edu.inputEnabled = true;
  this.edu.events.onInputDown.add(this.Edu, this);*/
}






Nuvem(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.nuvem.position.x = 1000;
  this.canudo.position.x = 1000;
  //this.caju.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(140, 70,"Nuv");

  var nuvem2 = this.add.sprite(200, 240,"Nuvem2");

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

  this.audio.src = "assets/sons/NU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");

  this.linha2 = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VEM.mp3";
  this.audio.play();

  this.linha.position.x = 320;
  this.linha2.position.x = 400;

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





Canudo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FNU2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.nuvem.position.x = 1000;
  this.canudo.position.x = 1000;
  //this.edu.position.x = 1000;

  this.escolha.position.x = 1000;
  this.ln.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DU2, this);


  this.add.sprite(135, 70,"Can2");

  var canudo2 = this.add.sprite(200, 240,"Canudo2");

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

  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(135, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RRA2DU2, this);
}
RRA2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NU.mp3";
  this.audio.play();

  this.linha.position.x = 265;

  this.linha2 = this.add.sprite(285, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DU2DU2, this);
}
DU2DU2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DO.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  this.linha2.position.x = 425;

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




voltar2(){
  game.state.start('Tela2');
}

voltar4(){
  game.state.start('FonemaN');
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
case "antena":
letra.AcertouN();
break;
case "banana":
letra.AcertouN();
break;
case "biquíni":
letra.AcertouN();
break;
case "cabine":
letra.AcertouN();
break;
case "caneca":
letra.AcertouN();
break;
case "canoa":
letra.AcertouN();
break;
case "canudo":
letra.AcertouN();
break;
case "chinelo":
letra.AcertouN();
break;
case "menino":
letra.AcertouN();
break;
case "menu":
letra.AcertouN();
break;
case "navio":
letra.AcertouN();
break;
case "neve":
letra.AcertouN();
break;
case "ninho":
letra.AcertouN();
break;
case "novelo":
letra.AcertouN();
break;
case "nuvem":
letra.AcertouN();
break;
case "sino":
letra.AcertouN();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraN()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, N.mp3";
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
