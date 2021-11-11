class FonemaZ
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
   this.load.image("Buzina","assets/FonemaZ/Buzina.png");
   this.load.image("Zebra","assets/FonemaZ/Zebra.png");
   this.load.image("Zumbi","assets/FonemaZ/Zumbi.png");
   
   this.load.image("LZ","assets/LetraZ.png");

   this.load.image("Za","assets/Za.png");
   this.load.image("Ze","assets/Ze.png");
   this.load.image("Zi","assets/Zi.png");
   this.load.image("Zo","assets/Zo.png");
   this.load.image("Zu","assets/Zu.png");
   
   //this.load.image("Xarope","assets/FonemaX/Xarope.png");
   //this.load.image("Enxada","assets/FonemaX/Enxada.png");
   this.load.image("Cinza","assets/FonemaZ/Cinza.png");
   //this.load.image("Xarope2","assets/FonemaX/Xarope2.png");
   //this.load.image("Enxada2","assets/FonemaX/Enxada2.png");
   this.load.image("Cinza2","assets/FonemaZ/Cinza2.png");
   this.load.image("FZA1","assets/FZA1.png");
   this.load.image("FZA2","assets/FZA2.png");
   this.load.image("FZA3","assets/FZA3.png");
   this.load.image("Cin","assets/Cin2.png");
   //this.load.image("Enx","assets/Enx.png");
   //this.load.image("Cox","assets/Cox.png");

   this.load.image("Zebra","assets/FonemaZ/Zebra.png");
   this.load.image("Azeitona","assets/FonemaZ/Azeitona.png");
   //this.load.image("Peixe","assets/FonemaX/Peixe.png");
   this.load.image("Zebra2","assets/FonemaZ/Zebra2.png");
   this.load.image("Azeitona2","assets/FonemaZ/Azeitona2.png");
   //this.load.image("Cinza2","assets/FonemaZ/Cinza2.png");
   this.load.image("FZE1","assets/FZE1.png");
   this.load.image("FZE2","assets/FZE2.png");
   this.load.image("FZE3","assets/FZE3.png");
   this.load.image("Zeb","assets/Zeb.png");
   this.load.image("Aze","assets/Aze.png");
   //this.load.image("Cox","assets/Cox.png");

   this.load.image("Ziper","assets/FonemaZ/Ziper.png");
   this.load.image("Buzina","assets/FonemaZ/Buzina.png");
   //this.load.image("Abacaxi","assets/FonemaX/Abacaxi.png");
   this.load.image("Ziper2","assets/FonemaZ/Ziper2.png");
   this.load.image("Buzina2","assets/FonemaZ/Buzina2.png");
   //this.load.image("Cinza2","assets/FonemaZ/Cinza2.png");
   this.load.image("FZI1","assets/FZI1.png");
   this.load.image("FZI2","assets/FZI2.png");
   this.load.image("FZI3","assets/FZI3.png");
   this.load.image("Zip","assets/Zip.png");
   this.load.image("Buz","assets/Buz2.png");
   //this.load.image("Cox","assets/Cox.png");

   //this.load.image("Volante","assets/FonemaV/Volante.png");
   //this.load.image("Caixote","assets/FonemaX/Caixote.png");
   //this.load.image("Lixo","assets/FonemaX/Lixo.png");
   //this.load.image("Zebra2","assets/FonemaZ/Zebra2.png");
   //this.load.image("Azeitona2","assets/FonemaZ/Azeitona2.png");
   //this.load.image("Cinza2","assets/FonemaZ/Cinza2.png");
   this.load.image("FZO1","assets/FZO1.png");
   this.load.image("FZO2","assets/FZO2.png");
   this.load.image("FZO3","assets/FZO3.png");
   //this.load.image("Zeb","assets/Zeb.png");
   //this.load.image("Aze","assets/Aze.png");
   //this.load.image("Cox","assets/Cox.png");

   this.load.image("Zumbi","assets/FonemaZ/Zumbi.png");
   //this.load.image("Vuvuzela","assets/FonemaV/Vuvuzela.png");
   //this.load.image("Tatu","assets/FonemaT/Tatu.png");
   this.load.image("Zumbi2","assets/FonemaZ/Zumbi2.png");
   //this.load.image("Azeitona2","assets/FonemaZ/Azeitona2.png");
   //this.load.image("Cinza2","assets/FonemaZ/Cinza2.png");
   this.load.image("FZU1","assets/FZU1.png");
   this.load.image("FZU2","assets/FZU2.png");
   this.load.image("FZU3","assets/FZU3.png");
   this.load.image("Zum","assets/Zum2.png");
   //this.load.image("Aze","assets/Aze.png");
   //this.load.image("Cox","assets/Cox.png");


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



      this.za = this.add.sprite(38, 205,"Za");
      this.za.inputEnabled = true;
      this.za.events.onInputDown.add(this.Za, this);

      this.ze = this.add.sprite(280, 235,"Ze");
      this.ze.inputEnabled = true;
      this.ze.events.onInputDown.add(this.Ze, this);

      this.zo = this.add.sprite(137, 385,"Zo");
      this.zo.inputEnabled = true;
      this.zo.events.onInputDown.add(this.Zo, this);

      this.zu = this.add.sprite(424, 390,"Zu");
      this.zu.inputEnabled = true;
      this.zu.events.onInputDown.add(this.Zu, this);

      this.zi = this.add.sprite(517, 205,"Zi");
      this.zi.inputEnabled = true;
      this.zi.events.onInputDown.add(this.Zi, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(100, 70,"Escolha");

      this.lz = this.add.sprite(0, 0,"LZ");






}
 update()
 {
}

Za(){
  this.za.position.x = 1000;
  this.ze.position.x = 1000;
  this.zi.position.x = 1000;
  this.zo.position.x = 1000;
  this.zu.position.x = 1000;

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

  this.lz.position.x = 1000;

  /*this.xarope = this.add.sprite(48, 260,"pequeno2", 44);
  this.xarope.inputEnabled = true;
  this.xarope.events.onInputDown.add(this.Xarope, this);

  this.enxada = this.add.sprite(290, 375,"pequeno3", 34);
  this.enxada.inputEnabled = true;
  this.enxada.events.onInputDown.add(this.Enxada, this);*/

  this.cinza = this.add.sprite(530, 265,"pequeno3", 43);
  this.cinza.inputEnabled = true;
  this.cinza.events.onInputDown.add(this.Cinza, this);
}

Cinza(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FZA1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.cinza.position.x = 1000;
  //this.gravata.position.x = 1000;
  //this.uva.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lz.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JA1, this);


  this.add.sprite(145, 70,"Cin");

  var cinza2 = this.add.sprite(195, 230,"grande3", 43);

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

  this.audio.src = "assets/sons/CIN.mp3";
  this.audio.play();

  this.linha = this.add.sprite(180, 140,"Linha");

  this.linha2 = this.add.sprite(240, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1JA1, this);
}
CA1JA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ZA.mp3";
  this.audio.play();

  this.linha.position.x = 365;

  this.linha2.position.x = 375;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1JA1, this);
}
FIM1JA1(){
  this.linha.position.x = 1000;

  this.linha2.position.x = 1000;
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

Ze(){
  this.za.position.x = 1000;
  this.ze.position.x = 1000;
  this.zi.position.x = 1000;
  this.zo.position.x = 1000;
  this.zu.position.x = 1000;

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

  this.lz.position.x = 1000;

  this.zebra = this.add.sprite(50, 245,"pequeno3", 44);
  this.zebra.inputEnabled = true;
  this.zebra.events.onInputDown.add(this.Zebra, this);

  this.azeitona = this.add.sprite(293, 370,"pequeno3", 45);
  this.azeitona.inputEnabled = true;
  this.azeitona.events.onInputDown.add(this.Azeitona, this);

  /*this.peixe = this.add.sprite(530, 240,"pequeno3", 38);
  this.peixe.inputEnabled = true;
  this.peixe.events.onInputDown.add(this.Peixe, this);*/
}

Zebra(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FZE1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.azeitona.position.x = 1000;
  this.zebra.position.x = 1000;
  //this.chave.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lz.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE1, this);


  this.add.sprite(145, 70,"Zeb");

  var zebra2 = this.add.sprite(200, 230,"grande3", 44);

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

  this.audio.src = "assets/sons/ZE2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(185, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GUE1JE1, this);
}
GUE1JE1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BRA.mp3";
  this.audio.play();

  this.linha.position.x = 315;

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

Azeitona(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FZE2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.azeitona.position.x = 1000;
  this.zebra.position.x = 1000;
  //this.vela.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lz.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1JE2, this);


  this.add.sprite(70, 70,"Aze");

  var azeitona2 = this.add.sprite(190, 230,"grande3", 45);

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

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(73, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RAN2JE2, this);
}
RAN2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ZE2.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(140, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JE2JE2, this);
}
JE2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/I.mp3";
  this.audio.play();

  this.linha2.position.x = 1000;

  this.linha.position.x = 265;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I2JE2, this);
}
I2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TO2.mp3";
  this.audio.play();

  this.linha2.position.x = 340;

  this.linha.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.RA2JE2, this);
}
RA2JE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha2.position.x = 470;

  this.linha3 = this.add.sprite(485, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2JE2, this);
}
FIM2JE2(){
  this.linha2.position.x = 1000;

  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2JE2();
}
REPETIR2JE2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1JE2, this);
}

Zi(){
  this.za.position.x = 1000;
  this.ze.position.x = 1000;
  this.zi.position.x = 1000;
  this.zo.position.x = 1000;
  this.zu.position.x = 1000;

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

  this.lz.position.x = 1000;

  //this.ziper = this.add.sprite(63, 240,"Ziper");
  //this.ziper.inputEnabled = true;
  //this.ziper.events.onInputDown.add(this.Ziper, this);

  this.buzina = this.add.sprite(295, 370,"pequeno",16);
  this.buzina.inputEnabled = true;
  this.buzina.events.onInputDown.add(this.Buzina, this);

  /*this.abacaxi = this.add.sprite(532, 240,"pequeno", 0);
  this.abacaxi.inputEnabled = true;
  this.abacaxi.events.onInputDown.add(this.Abacaxi, this);*/
}

Ziper(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FZI1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.ziper.position.x = 1000;
  this.buzina.position.x = 1000;
  //this.davi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lz.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CI1, this);


  this.add.sprite(140, 70,"Zip");

  var ziper2 = this.add.sprite(190, 250,"Ziper2");

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

Buzina(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FZI2");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.buzina.position.x = 1000;
  //this.ziper.position.x = 1000;
  //this.davi.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lz.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1DI2, this);


  this.add.sprite(145, 70,"Buz");

  var buzina2 = this.add.sprite(190, 240,"grande", 16);

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

  this.audio.src = "assets/sons/BU.mp3";
  this.audio.play();

  this.linha = this.add.sprite(150, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA2DI2, this);
}
MA2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/ZI.mp3";
  this.audio.play();

  this.linha.position.x = 272;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DI2DI2, this);
}
DI2DI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NA.mp3";
  this.audio.play();

  this.linha.position.x = 402;

  this.linha2 = this.add.sprite(410, 140,"Linha");

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

Zo(){

}

Zu(){
  this.za.position.x = 1000;
  this.ze.position.x = 1000;
  this.zi.position.x = 1000;
  this.zo.position.x = 1000;
  this.zu.position.x = 1000;

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

  this.lz.position.x = 1000;

  this.zumbi = this.add.sprite(72, 245,"pequeno", 20);
  this.zumbi.inputEnabled = true;
  this.zumbi.events.onInputDown.add(this.Zumbi, this);

  /*this.vuvuzela = this.add.sprite(295, 370,"pequeno3", 32);
  this.vuvuzela.inputEnabled = true;
  this.vuvuzela.events.onInputDown.add(this.Vuvuzela, this);

  this.tatu = this.add.sprite(530, 255,"pequeno3", 13);
  this.tatu.inputEnabled = true;
  this.tatu.events.onInputDown.add(this.Tatu, this);*/
}

Zumbi(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FZU1");
  this.fundo.position.x = 1000;

  this.voltar1.position.x = 1000;
  this.zumbi.position.x = 1000;
  //this.vuvuzela.position.x = 1000;
  //this.peru.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lz.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1CU1, this);


  this.add.sprite(145, 70,"Zum");

  var zumbi2 = this.add.sprite(190, 240,"grande", 20);

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

  this.audio.src = "assets/sons/ZUM.mp3";
  this.audio.play();

  this.linha = this.add.sprite(180, 140,"Linha");

  this.linha2 = this.add.sprite(275, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.E1CU1, this);
}
E1CU1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BI.mp3";
  this.audio.play();

  this.linha.position.x = 400;
  this.linha2.position.x = 1000;

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

voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaZ');
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
case "azeitona":
letra.AcertouZ();
break;
case "buzina":
letra.AcertouZ();
break;
case "cinza":
letra.AcertouZ();
break;
case "zebra":
letra.AcertouZ();
break;
case "zíper":
letra.AcertouZ();
break;
case "zumbi":
letra.AcertouZ();
break;
 default:
  letra.Errou();
        }
        }
      }
    }
  }
}
LetraZ()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, Z.mp3";
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
