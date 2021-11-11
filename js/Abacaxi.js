class Abacaxi
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
   this.load.image("Linha2","assets/LinhaBE.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("FF3","assets/Preto.PNG");
   this.load.image("LB","assets/Lb.PNG");
   this.load.image("Voltar","assets/Voltar.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Escolha","assets/Escolha.png");
   this.load.image("Aba","assets/Aba.png");
   this.load.image("Bic","assets/Bic.png");
   this.load.image("Abe","assets/Abe.png");
   this.load.image("Ban","assets/Ban.png");
   this.load.image("Bul","assets/Bul.png");


 }
 create()
 {
    this.add.sprite(0,0,"ceu");

    this.voltar = this.add.sprite(10, 550,"Voltar");
    this.voltar.inputEnabled = true;
    this.voltar.events.onInputDown.add(this.voltar2, this);

    this.comecar = this.add.sprite(470, 555,"Começar");
    this.comecar.inputEnabled = true;
    this.comecar.events.onInputDown.add(this.INICIO, this);


    this.add.sprite(130, 70,"Aba");

    var abacaxi2 = this.add.sprite(200, 210,"pequeno", 0);

    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

    this.seta2 = this.add.sprite(560, 480,"Seta2");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);

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
        let letra = new Letras();
        console.log(event.results[0]);

    for (let i = event.resultIndex; i < event.results.length; i++) {

      if (event.results[i].isFinal) {

        const content = event.results[i][0].transcript.trim();
        textoG=game.add.text(300,15,content,{fontSize:'30px',fill:'white'});
          if(content == 'abacaxi' || content == 'ABACAXI'){
            game.add.text(400,15,"Teste",{fontSize:'30px',fill:'white'});
          }
        }
      }
    }
  }
}

SETA(){
  this.seta2.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA2, this);
}
SETA2(){
  this.seta2.position.x = 560;
  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}
INICIO(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A, this);

  this.comecar.position.x = 1000;
  this.seta2.position.y = 1000;
}
COMECAR(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Comecar.mp3";
  this.audio.play();
}
A(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(125, 140,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA, this);
}
BA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2 = this.add.sprite(200, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CA, this);
}
CA(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CA.mp3";
  this.audio.play();

  this.linha.position.x = 355;
  this.linha2.position.x = 330;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XI, this);
}
XI(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/XI.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2.position.x = 460;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.FIM, this);
}
FIM(){
  this.linha2.position.x = 1000;
  this.start();
  game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1, this.REPETIR, this);
}
REPETIR(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO, this);
}
voltar2(){
  game.state.start('FonemaA');
}
}
