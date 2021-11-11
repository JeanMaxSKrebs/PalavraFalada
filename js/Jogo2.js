class Jogo2
{
 //contructor de classe
 constructor()
 {
   this.contador = 0;
   this.textoGeral;


 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("Abelha","assets/Fonema B/Abelha2.png");
   this.load.image("Bola","assets/Fonema B/Bola2.png");
   this.load.image("Bicicleta","assets/Fonema B/Bicicleta3.png");
   this.load.image("Milho","assets/Fonema M/Milho3.png");
   this.load.image("Mumia","assets/Fonema M/Mumia.png");
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");

   this.load.image("inimigo2", "assets/inimigo2aa.png");


 }
 create()
 {
    //this.audiojogo();
    this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.textoGeral =  game.add.text(300,15,"",{fontSize:'30px',fill:'white'});

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start, this);



    this.add.sprite(40, 260,"Abelha");

    this.add.sprite(285, 360,"Bicicleta");

    this.add.sprite(150, 460,"Bola");

    this.add.sprite(520, 450,"pequeno2", 29);

    this.add.sprite(480, 250,"Mumia");



    /*this.a2 = this.add.sprite(350, 460,"A");
    this.a2.inputEnabled = true;
    this.a2.events.onInputDown.add(this.AA2, this);

    this.a = this.add.sprite(150, 450,"A");
    this.a.inputEnabled = true;
    this.a.events.onInputDown.add(this.A2, this);

    this.c = this.add.sprite(250, 330,"C");
    this.c.inputEnabled = true;
    this.c.events.onInputDown.add(this.C2, this);

    this.o = this.add.sprite(550, 450,"O");
    this.o.inputEnabled = true;
    this.o.events.onInputDown.add(this.O2, this);

    this.c2 = this.add.sprite(450, 330,"C");
    this.c2.inputEnabled = true;
    this.c2.events.onInputDown.add(this.CC2, this);

    this.m = this.add.sprite(40, 210,"M");
    this.m.inputEnabled = true;
    this.m.events.onInputDown.add(this.M2, this);*/


    //this.proximo = this.add.sprite(550, 500,"Proximo");
    //this.proximo.inputEnabled = true;
    //this.proximo.events.onInputDown.add(this.Proximo, this);

    //game.add.text(556,560,'PRÓXIMO',{fontSize:'30px',fill:'white'});




    /*this.add.sprite(40, 270,"Linha");
    this.add.sprite(150, 270,"Linha");
    this.add.sprite(260, 270,"Linha");
    this.add.sprite(370, 270,"Linha");
    this.add.sprite(480, 270,"Linha");
    this.add.sprite(590, 270,"Linha");*/

    //this.seta1 = this.add.sprite(50, 320,"Seta");



}
 update()
 {


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
        this.textoGeral.setText(300,15,content,{fontSize:'30px',fill:'white'});

          if(content == 'm'){
            this.A2();
          }
        }
      }
    }
  }
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
  game.state.start('Projeto2');
}
}
