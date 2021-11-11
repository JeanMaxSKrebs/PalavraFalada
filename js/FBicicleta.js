class FBicicleta
{
 //contructor de classe
 constructor()
 {
   this.contador = 0;


 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("Bico","assets/FonemaB/Bico.png");
   this.load.image("Bebida","assets/FonemaB/Bebida.png");
   this.load.image("Bebida2","assets/FonemaB/Bebida2.png");
   this.load.image("Zumbi","assets/FonemaB/Zumbi.png");
   this.load.image("Zumbi2","assets/FonemaB/Zumbi2.png");
   this.load.image("Banana2","assets/FonemaB/Banana2.png");
   this.load.image("Bule","assets/FonemaB/Bule2.png");
   this.load.image("Bico2","assets/FonemaB/Bico2.png");
   this.load.image("Bicicleta","assets/FonemaB/Bicicleta3.png");
   this.load.image("Bicicleta2","assets/FonemaB/Bicicleta4.png");
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("FF3","assets/Fundo321.png");
   this.load.image("LB","assets/Lb3.PNG");
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("Bol","assets/Bol.png");
   this.load.image("Bic2","assets/Bic2.png");
   this.load.image("FBE2","assets/FBE2.png");
   this.load.image("FBE3","assets/FBE3.png");
   this.load.image("FBI","assets/FBI.png");
   this.load.image("Beb","assets/Beb.png");
   this.load.image("Zum","assets/Zum.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Voltar2","assets/Voltar.png");


 }
 create()
 {
    //this.audiojogo();

    //this.LetraB();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.add.sprite(0,0,"FF3");

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start, this);

      this.quad1 = this.add.sprite(30, 220,"Quadrado");

      this.quad2 = this.add.sprite(275, 350,"Quadrado");

      //this.quad3 = this.add.sprite(130, 380,"Quadrado");

      //this.quad4 = this.add.sprite(418, 380,"Quadrado");

      this.quad5 = this.add.sprite(510, 220,"Quadrado");



    this.bico = this.add.sprite(55, 255,"pequeno",14);
    this.bico.inputEnabled = true;
    this.bico.events.onInputDown.add(this.Bico, this);

    this.bebida = this.add.sprite(295, 390,"pequeno",13);
    this.bebida.inputEnabled = true;
    this.bebida.events.onInputDown.add(this.Bebida, this);

    this.zumbi = this.add.sprite(560, 240,"pequeno", 20);
    this.zumbi.inputEnabled = true;
    this.zumbi.events.onInputDown.add(this.Zumbi, this);


    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(130, 70,"Escolha");

    this.lb = this.add.sprite(-10, 0,"LB");





}
 update()
 {
}


Bico(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBI");
  this.fundo.sendToBack();

  this.voltar1.position.x = 1000;
  this.bebida.sendToBack();
  this.bico.sendToBack();
  this.zumbi.sendToBack();

  this.escolha.sendToBack();
  this.lb.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(200, 70,"Bic2");

  var bico2 = this.add.sprite(200, 250,"grande", 14);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
}
A1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA1, this);
}
BA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA1, this);
}
CA1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 355;
  this.linha2.position.x = 330;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI1, this);
}
XI1(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 460;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM1, this);
}
FIM1(){
  this.linha2.position.x = 1000;
  this.start();
  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.REPETIR1, this);
}
REPETIR1(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO1, this);
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
  this.fundo.sendToBack();

  this.voltar1.position.x = 1000;
  this.bico.sendToBack();
  this.zumbi.sendToBack();
  this.bebida.sendToBack();

  this.escolha.sendToBack();
  this.lb.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2, this);


  this.add.sprite(140, 70,"Beb");

  var boca2 = this.add.sprite(200, 250,"grande", 13);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A1, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
}
A2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA2, this);
}
BA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA2, this);
}
CA2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 355;
  this.linha2.position.x = 330;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI2, this);
}
XI2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 460;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM2, this);
}
FIM2(){
  this.linha2.position.x = 1000;
  this.start();
  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.REPETIR2, this);
}
REPETIR2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2, this);
}




Zumbi(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBE3");
  this.fundo.sendToBack();

  this.voltar1.position.x = 1000;
  this.bico.sendToBack();
  this.zumbi.sendToBack();
  this.bebida.sendToBack();

  this.escolha.sendToBack();
  this.lb.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2, this);


  this.add.sprite(140, 70,"Zum");

  var zumbi2 = this.add.sprite(250, 225,"grande", 20);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A3, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
}
A3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA3, this);
}
BA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA3, this);
}
CA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 355;
  this.linha2.position.x = 330;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI3, this);
}
XI3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 460;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM3, this);
}
FIM3(){
  this.linha2.position.x = 1000;
  this.start();
  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.REPETIR3, this);
}
REPETIR3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2, this);
}

voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaB');
}
Bola(){
  game.state.start('Bola');
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
        console.log(event.results[0]);

    for (let i = event.resultIndex; i < event.results.length; i++) {

      if (event.results[i].isFinal) {

        const content = event.results[i][0].transcript.trim();
        game.add.text(300,15,content,{fontSize:'30px',fill:'white'});

          if(content == 'm'){
            this.A2();
          }
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
