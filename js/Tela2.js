class Tela2
{
 //contructor de classe
 constructor()
 {
   this.contador = 0;
   this.letra = new Letras();


 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
  

 


 }
 create(){
    //this.audiojogo();

    //this.Ola();
    
    this.add.sprite(0,0,"ceuTela2");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.linha = this.add.sprite(0, 0,"FF");

    var voltar = this.add.sprite(600, 20,"voltar");
    voltar.inputEnabled = true;
    voltar.events.onInputDown.add(this.Voltar, this);


    var letraA = this.add.sprite(25, 200,"letras",0);
    letraA.inputEnabled = true;
    letraA.events.onInputDown.add(this.letra.letraA2, this);

    var letraB = this.add.sprite(115, 200,"letras",1);
    letraB.inputEnabled = true;
    letraB.events.onInputDown.add(this.letra.letraB2, this);

    var letraC = this.add.sprite(205, 200,"letras",2);
    letraC.inputEnabled = true;
    letraC.events.onInputDown.add(this.letra.letraC2, this);

    var letraD = this.add.sprite(295, 200,"letras",3);
    letraD.inputEnabled = true;
    letraD.events.onInputDown.add(this.letra.letraD2, this);

    var letraE = this.add.sprite(385, 200,"letras",4);
    letraE.inputEnabled = true;
    letraE.events.onInputDown.add(this.letra.letraE2, this);

    var letraF = this.add.sprite(475, 200,"letras",5);
    letraF.inputEnabled = true;
    letraF.events.onInputDown.add(this.letra.letraF2, this);

    var letraG = this.add.sprite(565, 200,"letras",6);
    letraG.inputEnabled = true;
    letraG.events.onInputDown.add(this.letra.letraG2, this);

    /*var letraH = this.add.sprite(25, 300,"H");
    letraH.inputEnabled = true;
    letraH.events.onInputDown.add(this.letra.letraH2, this);*/

    var letraI = this.add.sprite(25, 340,"letras",8);
    letraI.inputEnabled = true;
    letraI.events.onInputDown.add(this.letra.letraI2, this);

    var letraJ = this.add.sprite(115, 340,"letras",9);
    letraJ.inputEnabled = true;
    letraJ.events.onInputDown.add(this.letra.letraJ2, this);

    /*var letraK = this.add.sprite(295, 300,"K");
    letraK.inputEnabled = true;
    letraK.events.onInputDown.add(this.letra.letraK2, this);*/

    var letraL = this.add.sprite(205, 340,"letras",11);
    letraL.inputEnabled = true;
    letraL.events.onInputDown.add(this.letra.letraL2, this);

    var letraM = this.add.sprite(295, 340,"letras",12);
    letraM.inputEnabled = true;
    letraM.events.onInputDown.add(this.letra.letraM2, this);

    var letraN = this.add.sprite(385, 340,"letras",13);
    letraN.inputEnabled = true;
    letraN.events.onInputDown.add(this.letra.letraN2, this);

    var letraO = this.add.sprite(475, 340,"letras",14)
    letraO.inputEnabled = true;
    letraO.events.onInputDown.add(this.letra.letraO2, this);

    var letraP = this.add.sprite(565, 340,"letras",15);
    letraP.inputEnabled = true;
    letraP.events.onInputDown.add(this.letra.letraP2, this);

    /*var letraQ = this.add.sprite(195, 400,"Q");
    letraQ.inputEnabled = true;
    letraQ.events.onInputDown.add(this.letra.letraQ2, this);*/

    var letraR = this.add.sprite(25, 480,"letras",17);
    letraR.inputEnabled = true;
    letraR.events.onInputDown.add(this.letra.letraR2, this);

    var letraS = this.add.sprite(115, 480,"letras",18);
    letraS.inputEnabled = true;
    letraS.events.onInputDown.add(this.letra.letraS2, this);

    var letraT = this.add.sprite(205, 480,"letras",19);
    letraT.inputEnabled = true;
    letraT.events.onInputDown.add(this.letra.letraT2, this);

    var letraU = this.add.sprite(295, 480,"letras",20);
    letraU.inputEnabled = true;
    letraU.events.onInputDown.add(this.letra.letraU2, this);

    var letraV = this.add.sprite(385, 480,"letras",21);
    letraV.inputEnabled = true;
    letraV.events.onInputDown.add(this.letra.letraV2, this);

    /*var letraW = this.add.sprite(115, 500,"W");
    letraW.inputEnabled = true;
    letraW.events.onInputDown.add(this.letra.letraW2, this);*/

    var letraX = this.add.sprite(475, 480,"letras",23);
    letraX.inputEnabled = true;
    letraX.events.onInputDown.add(this.letra.letraX2, this);

    /*var letraY = this.add.sprite(295, 500,"Y");
    letraY.inputEnabled = true;
    letraY.events.onInputDown.add(this.letra.letraY2, this);*/

    var letraZ = this.add.sprite(565, 480,"letras",25);
    letraZ.inputEnabled = true;
    letraZ.events.onInputDown.add(this.letra.letraZ2, this);

    
      //this.linha = this.add.sprite(185, 50,"FF2");

      


}
 update() {


}



PTras(){
  this.text2.position.x = 2000;
}


salvar(){
  var nome = this.txtNome.value;

  if(nome == "A"){
    game.state.start('FonemaA')
  }
  if(nome == "B"){
    game.state.start('FonemaB')
  }
  if(nome == "C"){
    game.state.start('FonemaC')
  }
  if(nome == "D"){
    game.state.start('FonemaD')
  }
  if(nome == "E"){
    game.state.start('FonemaE')
  }
  if(nome == "F"){
    game.state.start('FonemaF')
  }
  if(nome == "G"){
    game.state.start('FonemaG')
  }
  if(nome == "H"){
    game.state.start('FonemaH')
  }
  if(nome == "I"){
    game.state.start('FonemaI')
  }
  if(nome == "J"){
    game.state.start('FonemaJ')
  }
  if(nome == "K"){
    game.state.start('FonemaK')
  }
  if(nome == "L"){
    game.state.start('FonemaL')
  }
  if(nome == "M"){
    game.state.start('FonemaM')
  }
  if(nome == "N"){
    game.state.start('FonemaN')
  }
  if(nome == "O"){
    game.state.start('FonemaO')
  }
  if(nome == "P"){
    game.state.start('FonemaP')
  }
  if(nome == "Q"){
    game.state.start('FonemaQ')
  }
  if(nome == "R"){
    game.state.start('FonemaR')
  }
  if(nome == "S"){
    game.state.start('FonemaS')
  }
  if(nome == "T"){
    game.state.start('FonemaT')
  }
  if(nome == "U"){
    game.state.start('FonemaU')
  }
  if(nome == "V"){
    game.state.start('FonemaV')
  }
  if(nome == "W"){
    game.state.start('FonemaW')
  }
  if(nome == "X"){
    game.state.start('FonemaX')
  }
  if(nome == "Y"){
    game.state.start('FonemaY')
  }
  if(nome == "Z"){
    game.state.start('FonemaZ')
  }
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

        const content = event.results[i][0].transcript.trim();
        game.add.text(300,15,content,{fontSize:'30px',fill:'white'});

          if(content == 'a' || content == 'A'){
            letra.letraA2();
          }
          if(content == 'b' || content == 'B'){
            letra.letraB2();
          }
          if(content == 'c' || content == 'C'){
            letra.letraC2();
          }
          if(content == 'd' || content == 'D'){
            letra.letraD2();
          }
          if(content == 'e' || content == 'E'){
            letra.letraE2();
          }
          if(content == 'f' || content == 'F'){
            letra.letraF2();
          }
          if(content == 'g' || content == 'G'){
            letra.letraG2();
          }
          if(content == 'h' || content == 'H'){
            letra.letraH2();
          }
          if(content == 'i' || content == 'I'){
            letra.letraI2();
          }
          if(content == 'j' || content == 'J'){
            letra.letraJ2();
          }
          if(content == 'k' || content == 'K'){
            letra.letraK2();
          }
          if(content == 'l' || content == 'L'){
            letra.letraL2();
          }
          if(content == 'm' || content == 'M'){
            letra.letraM2();
          }
          if(content == 'n' || content == 'N'){
            letra.letraN2();
          }
          if(content == 'o' || content == 'O'){
            letra.letraO2();
          }
          if(content == 'p' || content == 'P'){
            letra.letraP2();
          }
          if(content == 'q' || content == 'Q'){
            letra.letraQ2();
          }
          if(content == 'r' || content == 'R'){
            letra.letraR2();
          }
          if(content == 's' || content == 'S'){
            letra.letraS2();
          }
          if(content == 't' || content == 'T'){
            letra.letraT2();
          }
          if(content == 'u' || content == 'U'){
            letra.letraU2();
          }
          if(content == 'v' || content == 'V'){
            letra.letraV2();
          }
          if(content == 'w' || content == 'W'){
            letra.letraW2();
          }
          if(content == 'x' || content == 'X'){
            letra.letraX2();
          }
          if(content == 'y' || content == 'Y'){
            letra.letraY2();
          }
          if(content == 'z' || content == 'Z'){
            letra.letraZ2();
          }
        }
      }
    }
  }
}

Proximo2()
{
  game.state.start('FonemaA')
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

Voltar()
{
  game.state.start('Iniciar');
}
}
