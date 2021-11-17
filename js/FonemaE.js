class FonemaE
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
   
   
   
   
   
   this.load.image("Escolha","assets/Escolha2a.png");
   
   
   
   this.load.image("Repetir","assets/Repetir2.png");
   
   
 }
create(){
    this.fundo = this.add.sprite(0,0,"ceu");
    this.add.sprite(0,0,"FF3");

    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();


      this.quad1 = this.add.sprite(30, 190,"Quadrado");

      this.quad2 = this.add.sprite(275, 220,"Quadrado");

      this.quad3 = this.add.sprite(130, 370,"Quadrado");

      this.quad4 = this.add.sprite(418, 370,"Quadrado");

      this.quad5 = this.add.sprite(510, 190,"Quadrado");



    this.pente = this.add.sprite(50, 210,"pequeno", 56);
    this.pente.inputEnabled = true;
    this.pente.events.onInputDown.add(this.Pente, this);

    this.elefante = this.add.sprite(295, 230,"pequeno", 53);
    this.elefante.inputEnabled = true;
    this.elefante.events.onInputDown.add(this.Elefante, this);

    this.espada = this.add.sprite(150, 390,"pequeno", 55);
    this.espada.inputEnabled = true;
    this.espada.events.onInputDown.add(this.Espada, this);

    this.escova = this.add.sprite(455, 390,"pequeno", 54);
    this.escova.inputEnabled = true;
    this.escova.events.onInputDown.add(this.Escova, this);

    this.arvore = this.add.sprite(540, 215,"pequeno", 52);
    this.arvore.inputEnabled = true;
    this.arvore.events.onInputDown.add(this.Arvore, this);


    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(60, 70,"Escolha");

    this.le = this.add.sprite(-10, -10,"LE");

}

update(){
}
voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaE');
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
        case "pente":
        letra.AcertouE();
        break;
        case "elefante":
        letra.AcertouE();
        break;
        case "espada":
        letra.AcertouE();
        break;
        case "escova":
        letra.AcertouE();
        break;
        case "árvore":
        letra.AcertouE();
        break;

        default:
        letra.Errou();
                }

        }
      }
    }
  }
}
Pente(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FE1")

  this.voltar1.position.x = 1000;
  this.pente.position.x = 1000;
  this.elefante.position.x = 1000;
  this.espada.position.x = 1000;
  this.escova.position.x = 1000;
  this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(150, 70,"Pen");

  var pente2 = this.add.sprite(200, 210,"grande", 56);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1(){
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.PEN1, this);

    this.comecar.position.x = 1000;
    this.seta2.position.y = 1000;
    this.repetir.position.x = 1000;
  }
PEN1(){

    this.audio.src = "assets/sons/PEN.mp3";
    this.audio.play();

    this.linha = this.add.sprite(175, 140,"Linha");

    this.linha2 = this.add.sprite(265, 140,"Linha");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE1, this);
  }
TE1(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/TE.mp3";
    this.audio.play();

    this.linha.position.x = 405;

    this.linha2.position.x = 1000;

    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1, this);
  }
FIM1(){
    this.linha.position.x = 1000;
    this.start();
    this.REPETIR1();
  }
REPETIR1(){
    this.repetir = this.add.sprite(490, 550,"Repetir");
    this.repetir.inputEnabled = true;
    this.repetir.events.onInputDown.add(this.INICIO1, this);
  }



Elefante(){
    this.quad1.position.x = 1000;
    this.quad2.position.x = 1000;
    this.quad3.position.x = 1000;
    this.quad4.position.x = 1000;
    this.quad5.position.x = 1000;
    this.fundo.position = 1000;
    this.add.sprite(0,0,"FE2")

    this.voltar1.position.x = 1000;
    this.pente.position.x = 1000;
    this.elefante.position.x = 1000;
    this.espada.position.x = 1000;
    this.escova.position.x = 1000;
    this.arvore.position.x = 1000;

    this.escolha.position.x = 1000;
    //this.la.position.x = 1000;

    this.voltar3 = this.add.sprite(10, 550,"Voltar2");
    this.voltar3.inputEnabled = true;
    this.voltar3.events.onInputDown.add(this.voltar4, this);

    this.comecar2 = this.add.sprite(470, 555,"Começar");
    this.comecar2.inputEnabled = true;
    this.comecar2.events.onInputDown.add(this.INICIO2, this);


    this.add.sprite(80, 70,"Ele");

    var elefante2 = this.add.sprite(200, 210,"grande", 53);

    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

    this.seta2 = this.add.sprite(560, 480,"Seta2");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
  }


INICIO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.E2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
E2(){

  this.audio.src = "assets/sons/E2.mp3";
  this.audio.play();

  this.linha = this.add.sprite(96, 135,"Linha3");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LE2, this);
}
LE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LE.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2 = this.add.sprite(155, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FAN2, this);
}
FAN2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FAN.mp3";
  this.audio.play();

  this.linha.position.x = 1000;

  this.linha2.position.x = 275;

  this.linha3 = this.add.sprite(350, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.TE2, this);
}
TE2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/TE.mp3";
  this.audio.play();

  this.linha2.position.x = 480;

  this.linha3.position.x = 1000;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2, this);
}
FIM2(){
  this.linha2.position.x = 1000;
  this.linha3.position.x = 1000;
  this.start();
  this.REPETIR2();
}
REPETIR2(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO2, this);
}



Espada(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FE3")

  this.voltar1.position.x = 1000;
  this.pente.position.x = 1000;
  this.elefante.position.x = 1000;
  this.espada.position.x = 1000;
  this.escova.position.x = 1000;
  this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3, this);


  this.add.sprite(105, 70,"Esp");

  var espada2 = this.add.sprite(200, 210,"grande", 55);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}


INICIO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.ES3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
ES3(){

  this.audio.src = "assets/sons/ES.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.PA3, this);
}
PA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/PA.mp3";
  this.audio.play();

  this.linha.position.x = 285;


  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.DA3, this);
}
DA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/DA.mp3";
  this.audio.play();

  this.linha.position.x = 415;


  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3, this);
}
FIM3(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR3();
}
REPETIR3(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO3, this);
}


Escova(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FE4")

  this.voltar1.position.x = 1000;
  this.pente.position.x = 1000;
  this.elefante.position.x = 1000;
  this.espada.position.x = 1000;
  this.escova.position.x = 1000;
  this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar4 = this.add.sprite(470, 555,"Começar");
  this.comecar4.inputEnabled = true;
  this.comecar4.events.onInputDown.add(this.INICIO4, this);


  this.add.sprite(105, 70,"Esc");

  var escova2 = this.add.sprite(235, 210,"grande", 54);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO4(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.ES4, this);

  this.comecar4.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
ES4(){

  this.audio.src = "assets/sons/ES.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CO4, this);
}
CO4(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CO.mp3";
  this.audio.play();

  this.linha.position.x = 285;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.VA4, this);
}
VA4(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/VA.mp3";
  this.audio.play();

  this.linha.position.x = 420;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM4, this);
}
FIM4(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR4();
}
REPETIR4(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO4, this);
}



Arvore(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FE5")

  this.voltar1.position.x = 1000;
  this.pente.position.x = 1000;
  this.elefante.position.x = 1000;
  this.espada.position.x = 1000;
  this.escova.position.x = 1000;
  this.arvore.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar5 = this.add.sprite(470, 555,"Começar");
  this.comecar5.inputEnabled = true;
  this.comecar5.events.onInputDown.add(this.INICIO5, this);


  this.add.sprite(110, 65,"Arv");

  var arvore2 = this.add.sprite(225, 210,"grande", 52);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO5(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AR5, this);

  this.comecar5.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
AR5(){

  this.audio.src = "assets/sons/AR.mp3";
  this.audio.play();

  this.linha = this.add.sprite(160, 145,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.VO5, this);
}
VO5(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/vo.mp3";
  this.audio.play();

  this.linha.position.x = 295;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.RE5, this);
}
RE5(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Re.mp3";
  this.audio.play();

  this.linha.position.x = 425;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM5, this);
}
FIM5(){
  this.linha.position.x = 1000;
  this.start();
  this.REPETIR5();
}
REPETIR5(){
  this.repetir = this.add.sprite(490, 550,"Repetir");
  this.repetir.inputEnabled = true;
  this.repetir.events.onInputDown.add(this.INICIO5, this);
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

Proximo()
{
  game.state.start('Jogo2');
}
}
