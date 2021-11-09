class Projeto5
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
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("ceu","assets/fundo7.jpg");
   this.load.image("Macaco","assets/Animais/Macaco2.png");
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");

   this.load.image("inimigo2", "assets/inimigo2aa.png");


 }
 create()
 {
    this.audiojogo();
    this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();


    //LINHA 1

    this.a2 = this.add.sprite(60, 20,"A");
    this.a2.inputEnabled = true;
    this.a2.events.onInputDown.add(this.AA2, this);

    this.b2 = this.add.sprite(160, 20,"B");
    this.b2.inputEnabled = true;
    this.b2.events.onInputDown.add(this.AA2, this);

    this.c2 = this.add.sprite(260, 20,"C");
    this.c2.inputEnabled = true;
    this.c2.events.onInputDown.add(this.AA2, this);

    this.d2 = this.add.sprite(360, 20,"D");
    this.d2.inputEnabled = true;
    this.d2.events.onInputDown.add(this.AA2, this);

    this.e2 = this.add.sprite(460, 20,"E");
    this.e2.inputEnabled = true;
    this.e2.events.onInputDown.add(this.AA2, this);

    this.f2 = this.add.sprite(560, 20,"F");
    this.f2.inputEnabled = true;
    this.f2.events.onInputDown.add(this.AA2, this);

    //LINHA 2

    this.g2 = this.add.sprite(20, 180,"G");
    this.g2.inputEnabled = true;
    this.g2.events.onInputDown.add(this.AA2, this);

    this.h2 = this.add.sprite(130, 180,"H");
    this.h2.inputEnabled = true;
    this.h2.events.onInputDown.add(this.AA2, this);

    this.i2 = this.add.sprite(230, 180,"I");
    this.i2.inputEnabled = true;
    this.i2.events.onInputDown.add(this.AA2, this);

    this.j2 = this.add.sprite(310, 180,"J");
    this.j2.inputEnabled = true;
    this.j2.events.onInputDown.add(this.AA2, this);

    this.k2 = this.add.sprite(415, 180,"K");
    this.k2.inputEnabled = true;
    this.k2.events.onInputDown.add(this.AA2, this);

    this.l2 = this.add.sprite(515, 180,"L");
    this.l2.inputEnabled = true;
    this.l2.events.onInputDown.add(this.AA2, this);

    this.m2 = this.add.sprite(610, 180,"M");
    this.m2.inputEnabled = true;
    this.m2.events.onInputDown.add(this.AA2, this);

    //




    this.proximo = this.add.sprite(550, 500,"Proximo");
    this.proximo.inputEnabled = true;
    this.proximo.events.onInputDown.add(this.Proximo, this);

    game.add.text(556,560,'PRÓXIMO',{fontSize:'30px',fill:'white'});

    this.seta1 = this.add.sprite(70, 120,"Seta");



}
 update()
 {


}
/*start() {

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
}*/

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
  game.state.start('Projeto2');
}
}
