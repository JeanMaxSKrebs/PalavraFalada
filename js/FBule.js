class FBule
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
   this.load.image("Boca","assets/FonemaB/Boca.png");
   this.load.image("Cebola","assets/FonemaB/Cebola.png");
   this.load.image("Lobo","assets/FonemaB/Lobo.png");
   this.load.image("Banana2","assets/FonemaB/Banana2.png");
   this.load.image("Bule","assets/FonemaB/Bule2.png");
   this.load.image("Bule2","assets/FonemaB/Bule3.png");
   this.load.image("Bicicleta","assets/FonemaB/Bicicleta3.png");
   this.load.image("Bicicleta2","assets/FonemaB/Bicicleta4.png");
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("Bol","assets/Bol.png");
   this.load.image("Bic","assets/Bic.png");
   this.load.image("Abe","assets/Abe.png");
   this.load.image("Ban","assets/Ban.png");
   this.load.image("Bul","assets/Bul.png");
   this.load.image("Onibus","assets/FonemaB/Onibus.png");
   this.load.image("Buzina","assets/FonemaB/Buzina.png");
   this.load.image("Bambu","assets/FonemaB/Bambu.png");
   this.load.image("Onibus2","assets/FonemaB/Onibus2.png");
   this.load.image("Buzina2","assets/FonemaB/Buzina2.png");
   this.load.image("Bambu2","assets/FonemaB/Bambu2.png");
   this.load.image("Oni","assets/Oni.png");
   this.load.image("Bam","assets/Bam.png");
   this.load.image("Buz","assets/Buz.png");
   this.load.image("FBU1","assets/FBU1.png");
   this.load.image("FBU2","assets/FBU2.png");
   this.load.image("FBU3","assets/FBU3.png");
   this.load.image("Voltar2","assets/Voltar2.png");


 }
 create()
 {
    //this.audiojogo();

    //this.LetraB();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start, this);

      this.quad1 = this.add.sprite(30, 220,"Quadrado");

      this.quad2 = this.add.sprite(275, 350,"Quadrado");

      //this.quad3 = this.add.sprite(130, 380,"Quadrado");

      //this.quad4 = this.add.sprite(418, 380,"Quadrado");

      this.quad5 = this.add.sprite(510, 220,"Quadrado");



    this.onibus = this.add.sprite(55, 275,"pequeno",19);
    this.onibus.inputEnabled = true;
    this.onibus.events.onInputDown.add(this.Onibus, this);

    this.bambu = this.add.sprite(295, 370,"pequeno",11);
    this.bambu.inputEnabled = true;
    this.bambu.events.onInputDown.add(this.Bambu, this);

    //this.banana = this.add.sprite(150, 400,"pequeno",12);
    //this.banana.inputEnabled = true;
    //this.banana.events.onInputDown.add(this.Banana, this);

    //this.bule = this.add.sprite(438, 400,"Bule");
    //this.bule.inputEnabled = true;
    //this.bule.events.onInputDown.add(this.Bule, this);

    this.buzina = this.add.sprite(525, 240,"pequeno",16);
    this.buzina.inputEnabled = true;
    this.buzina.events.onInputDown.add(this.Buzina, this);


    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(130, 70,"Escolha");






}
 update()
 {
}




Onibus(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBU1");
  this.fundo.sendToBack();

  this.voltar1.position.x = 1000;
  this.onibus.sendToBack();
  this.bicicleta.sendToBack();
  this.abelha.sendToBack();

  this.escolha.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(140, 70,"Oni");

  var onibus2 = this.add.sprite(200, 250,"grande", 19);

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






Bambu(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBU2");
  this.fundo.sendToBack();

  this.voltar1.position.x = 1000;
  this.bambu.sendToBack();
  this.onibus.sendToBack();
  this.abelha.sendToBack();

  this.escolha.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2, this);


  this.add.sprite(140, 70,"Bam");

  var bambu2 = this.add.sprite(260, 210,"grande", 11);

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




Buzina(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBU3");
  this.fundo.sendToBack();

  this.voltar1.position.x = 1000;
  this.bambu.sendToBack();
  this.onibus.sendToBack();
  this.buzina.sendToBack();

  this.escolha.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2, this);


  this.add.sprite(140, 70,"Buz");

  var buzina2 = this.add.sprite(200, 225,"grande", 16);

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
