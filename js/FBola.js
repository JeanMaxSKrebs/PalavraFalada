class FBola
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
   this.load.image("Boca2","assets/FonemaB/Boca2.png");
   this.load.image("Cebola","assets/FonemaB/Cebola.png");
   this.load.image("Cebola2","assets/FonemaB/Cebola2.png");
   this.load.image("Lobo","assets/FonemaB/Lobo.png");
   this.load.image("Lobo2","assets/FonemaB/Lobo2.png");
   this.load.image("Banana2","assets/FonemaB/Banana2.png");
   this.load.image("Bule","assets/FonemaB/Bule2.png");
   this.load.image("Bule2","assets/FonemaB/Bule3.png");
   this.load.image("Bicicleta","assets/FonemaB/Bicicleta3.png");
   this.load.image("Bicicleta2","assets/FonemaB/Bicicleta4.png");
   
    
   this.load.image("FF3","assets/Fundo321.png");
   this.load.image("LB","assets/Lb3.png");
   this.load.image("FBO2","assets/FBO2.png");
   this.load.image("FBO3","assets/FBO3.png");
   this.load.image("FBO4","assets/FBO4.png");
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Voltar2","assets/Voltar2.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("Boc","assets/Boc.png");
   this.load.image("Lob","assets/Lob.png");
   this.load.image("Ceb","assets/Ceb.png");
   this.load.image("Ban","assets/Ban.png");
   this.load.image("Bul","assets/Bul.png");


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



    this.boca = this.add.sprite(50, 275,"pequeno",15);
    this.boca.inputEnabled = true;
    this.boca.events.onInputDown.add(this.Boca, this);

    this.lobo = this.add.sprite(295, 370,"pequeno",18);
    this.lobo.inputEnabled = true;
    this.lobo.events.onInputDown.add(this.Lobo, this);

    //this.banana = this.add.sprite(150, 400,"pequeno",12);
    //this.banana.inputEnabled = true;
    //this.banana.events.onInputDown.add(this.Banana, this);

    //this.bule = this.add.sprite(438, 400,"Bule");
    //this.bule.inputEnabled = true;
    //this.bule.events.onInputDown.add(this.Bule, this);

    this.cebola = this.add.sprite(560, 240,"pequeno",17);
    this.cebola.inputEnabled = true;
    this.cebola.events.onInputDown.add(this.Cebola, this);


    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(130, 70,"Escolha");

    this.lb = this.add.sprite(-10, 0,"LB");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.Outra, this);





}
 update()
 {
}
Boca(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FCE");
  this.fundo2.sendToBack();

  this.voltar1.position.x = 1000;
  this.cebola.sendToBack();
  this.lobo.sendToBack();
  this.boca.sendToBack();

  this.escolha.sendToBack();
  this.lb.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(200, 70,"Boc");

  var boca2 = this.add.sprite(200, 250,"grande", 15);

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

Lobo(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBO3");
  this.fundo2.sendToBack();

  this.voltar1.position.x = 1000;
  this.cebola.sendToBack();
  this.lobo.sendToBack();
  this.boca.sendToBack();

  this.escolha.sendToBack();
  this.lb.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar2 = this.add.sprite(470, 555,"Começar");
  this.comecar2.inputEnabled = true;
  this.comecar2.events.onInputDown.add(this.INICIO2, this);


  this.add.sprite(200, 70,"Lob");

  var boca2 = this.add.sprite(200, 250,"grande", 18);

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


Cebola(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position.x = 1000;
  this.fundo2 = this.add.sprite(0,0,"FBO4");
  this.fundo2.sendToBack();

  this.voltar1.position.x = 1000;
  this.cebola.sendToBack();
  this.lobo.sendToBack();
  this.boca.sendToBack();

  this.escolha.sendToBack();
  this.lb.sendToBack();

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3, this);


  this.add.sprite(125, 70,"Ceb");

  var boca2 = this.add.sprite(265, 210,"grande", 17);

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
  this.repetir.events.onInputDown.add(this.INICIO3, this);
}



Outra(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Outra2.mp3";
	this.audio.play();
}
voltar2(){
  game.state.start('FonemaB');
}
voltar4(){
  game.state.start('FBola');
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
        //game.add.text(300,15,content,{fontSize:'30px',fill:'white'});

          if(content == 'm'){
            this.A2();
          }
        }
      }
    }
  }
}
LetraB(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, B.mp3";
	this.audio.play();

}
Proximo()
{
  game.state.start('Jogo2');
}
}
