class Projeto2
{
 //contructor de classe
 constructor()
 {


 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("ceu","assets/fundo17.jpg");
   this.load.image("Peixe","assets/Animais/Peixe2.png");
   this.load.image("Porco","assets/Animais/Porco2.png");
   
   this.load.image("P","assets/Letras/P.png");
   this.load.image("E","assets/Letras/E.png");
   this.load.image("I","assets/Letras/I.png");
   this.load.image("X","assets/Letras/X.png");
   this.load.image("T","assets/Letras/T.png");
   this.load.image("R","assets/Letras/R.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2aa.png");

   this.load.image("1","assets/1.png");
   this.load.image("2","assets/2.png");
   this.load.image("3","assets/3.png");


 }
 create()
 {
    this.play();

      game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.repita1, this);

    this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start2, this);


    this.add.sprite(50, 10,"pequeno3", 38);

    this.add.sprite(50, 210,"pequeno2", 46);



    this.add.sprite(300, 70,"P");
    this.add.sprite(455, 65,"I");
    this.add.sprite(610, 65,"E");

    this.add.sprite(300, 215,"P");
    this.add.sprite(455, 220,"R");
    this.add.sprite(610, 225,"O");


    this.c = this.add.sprite(50, 400,"C");
    this.c.inputEnabled = true;
    this.c.events.onInputDown.add(this.C2, this);

    this.e = this.add.sprite(150, 500,"E");
    this.e.inputEnabled = true;
    this.e.events.onInputDown.add(this.E2, this);

    this.x = this.add.sprite(250, 400,"X");
    this.x.inputEnabled = true;
    this.x.events.onInputDown.add(this.X2, this);

    this.o = this.add.sprite(350, 510,"O");
    this.o.inputEnabled = true;
    this.o.events.onInputDown.add(this.O2, this);



    this.add.sprite(300, 125,"Linha");
    this.add.sprite(380, 125,"Linha");
    this.add.sprite(460, 125,"Linha");
    this.add.sprite(540, 125,"Linha");
    this.add.sprite(620, 125,"Linha");

    this.add.sprite(300, 270,"Linha");
    this.add.sprite(380, 270,"Linha");
    this.add.sprite(460, 270,"Linha");
    this.add.sprite(540, 270,"Linha");
    this.add.sprite(620, 270,"Linha");





    this.proximo2 = this.add.sprite(550, 500,"Proximo");
    this.proximo2.inputEnabled = true;
    this.proximo2.events.onInputDown.add(this.Proximo2, this);

    game.add.text(556,560,'PRÓXIMO',{fontSize:'30px',fill:'white'});




}
 update()
 {


}

start2() {

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

        if(content = 'E'){
          X2();
        }
        /*if(content = 'X'){
          C2();
        }
        if(content = 'C'){
          AA2();
        }
        if(content = 'A'){
          CC2();
        }
        if(content = 'C'){
          O2();
        }
        if(content = 'O'){
      }*/
      }
    }
  }

}
}

E2()
{
  this.e.position.x = 370;
  this.e.position.y = 65;

  this.audio = new Audio();
	this.audio.src = "assets/sons/X.mp3";
	this.audio.play();
}
X2()
{
  this.x.position.x = 520;
  this.x.position.y = 75;

    this.audio = new Audio();
  	this.audio.src = "assets/sons/Jogo2a.mp3";
  	this.audio.play();

    game.time.events.repeat(Phaser.Timer.SECOND * 4, 1, this.repita2, this);

}
O2()
{
  this.o.position.x = 370;
  this.o.position.y = 225;

  this.audio = new Audio();
  this.audio.src = "assets/sons/C.mp3";
  this.audio.play();
}
C2()
{
  this.c.position.x = 520;
  this.c.position.y = 205;

  this.audio = new Audio();
  this.audio.src = "assets/sons/Jogo2aa.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.repita3, this);
}
Proximo2()
{
  game.state.start('Projeto3');
}
play(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Jogo2.mp3";
	this.audio.play();
}
repita1(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Repita2a.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.repita1a, this);
}
repita1a(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/E.mp3";
	this.audio.play();
}
repita2(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Repita2a.mp3";
	this.audio.play();
game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.repita2a, this);
}
repita2a(){
this.audio = new Audio();
this.audio.src = "assets/sons/O.mp3";
this.audio.play();
}
repita3(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Repita4.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.repita4, this);
}
repita4(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/I.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.repita5, this);
}
repita5(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Xe.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Jogo2aaa, this);
}
Jogo2aaa(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Jogo2aaa.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.repita6, this);
}
repita6(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Repita5.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.por, this);
}
por(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/pôr.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CO, this);
}
CO(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/CO.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.proximo5, this);
}
proximo5(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/proximo1.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 4, 1, this.jogo3, this);
}
jogo3(){
  this.add.sprite(590, 480,"Seta2");
}

}
