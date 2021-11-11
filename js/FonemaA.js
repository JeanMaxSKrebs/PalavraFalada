class FonemaA
{
 //contructor de classe
 constructor()
 {
   this.contador = 0;
   this.fundo = null;
   this.letra = new Letras;
   this.cont1000 = 0;
   this.tg;


 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("Escolha","assets/Escolha2a.png");
  
   this.load.image("Linha2","assets/LinhaBE3.png");
   

   


 }
 create()
 {
    //this.audiojogo();

    //this.LetraA();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.add.sprite(0,0,"FF3");

    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();


      this.quad1 = this.add.sprite(30, 190,"Quadrado");

      this.quad2 = this.add.sprite(275, 220,"Quadrado");

      this.quad3 = this.add.sprite(130, 370,"Quadrado");

      this.quad4 = this.add.sprite(418, 370,"Quadrado");

      this.quad5 = this.add.sprite(510, 190,"Quadrado");



    this.abacaxi = this.add.sprite(50, 210,"pequeno",0);
    this.abacaxi.inputEnabled = true;
    this.abacaxi.events.onInputDown.add(this.Abacaxi, this);

    this.anel = this.add.sprite(295, 230,"pequeno",2);
    this.anel.inputEnabled = true;
    this.anel.events.onInputDown.add(this.Anel, this);

    this.mala = this.add.sprite(150, 390,"pequeno",4);
    this.mala.inputEnabled = true;
    this.mala.events.onInputDown.add(this.Mala, this);

    this.alface = this.add.sprite(438, 390,"pequeno",1);
    this.alface.inputEnabled = true;
    this.alface.events.onInputDown.add(this.Alface, this);

    this.bala = this.add.sprite(515, 230,"pequeno",3);
    this.bala.inputEnabled = true;
    this.bala.events.onInputDown.add(this.Bala, this);

    //game.add.text(110,100,"ESCOLHA UMA IMAGEM",{fontSize:'40px',fill:'black'});

    //var voltar = game.add.text(530,550,"VOLTAR",{fontSize:'40px',fill:'black'});
  //  voltar.inputEnabled = true;
    //voltar.events.onInputDown.add(this.voltar, this);

    this.voltar1 = this.add.sprite(520, 550,"Voltar");
    this.voltar1.inputEnabled = true;
    this.voltar1.events.onInputDown.add(this.voltar2, this);

    this.escolha = this.add.sprite(60, 70,"Escolha");

    this.la = this.add.sprite(-10, -10,"LA");

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

        var content = event.results[i][0].transcript.trim();
        recognition.stop();
          game.add.text(300,15,content,{fontSize:'30px',fill:'white'});
         content = content.toLocaleLowerCase();

        switch (content) {
        case "abacaxi":
        letra.AcertouA();
        break;
        case "alface":
        letra.AcertouA();
        break;
        case "anel":
        letra.AcertouA();
        break;
        case "bala":
        letra.AcertouA();
        break;
        case "mala":
        letra.AcertouA();
        break;

        default:
        letra.Errou();
                }
        }
      }
    }
  }
}
voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaA');
}


Abacaxi(){
    this.quad1.position.x = 1000;
    this.quad2.position.x = 1000;
    this.quad3.position.x = 1000;
    this.quad4.position.x = 1000;
    this.quad5.position.x = 1000;
    this.fundo.position = 1000;
    this.add.sprite(0,0,"FA1")

    this.voltar1.position.x = 1000;
    this.anel.position.x = 1000;
    this.abacaxi.position.x = 1000;
    this.alface.position.x = 1000;
    this.bala.position.x = 1000;
    this.mala.position.x = 1000;

    this.escolha.position.x = 1000;
    this.la.position.x = 1000;

    this.voltar3 = this.add.sprite(10, 550,"Voltar2");
    this.voltar3.inputEnabled = true;
    this.voltar3.events.onInputDown.add(this.voltar4, this);

    this.comecar = this.add.sprite(470, 555,"Começar");
    this.comecar.inputEnabled = true;
    this.comecar.events.onInputDown.add(this.INICIO1, this);


    this.add.sprite(105, 70,"Aba");

    var abacaxi2 = this.add.sprite(200, 210,"grande",0);

    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

    this.seta2 = this.add.sprite(560, 480,"Seta2");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
  }


INICIO1(){
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A1, this);

    this.comecar.position.x = 1000;
    this.seta2.position.y = 1000;
    this.repetir.position.x = 1000;
  }
A1(){

    this.audio.src = "assets/sons/A.mp3";
    this.audio.play();

    this.linha = this.add.sprite(128, 135,"Linha2");

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
    this.REPETIR1();
  }
REPETIR1(){
    this.repetir = this.add.sprite(490, 550,"Repetir");
    this.repetir.inputEnabled = true;
    this.repetir.events.onInputDown.add(this.INICIO1, this);
  }


Anel(){
    this.quad1.position.x = 1000;
    this.quad2.position.x = 1000;
    this.quad3.position.x = 1000;
    this.quad4.position.x = 1000;
    this.quad5.position.x = 1000;
    this.fundo.position = 1000;
    this.add.sprite(0,0,"FA2")

    this.voltar1.position.x = 1000;
    this.anel.position.x = 1000;
    this.abacaxi.position.x = 1000;
    this.alface.position.x = 1000;
    this.bala.position.x = 1000;
    this.mala.position.x = 1000;

    this.escolha.position.x = 1000;
    this.la.position.x = 1000;

    this.voltar3 = this.add.sprite(10, 550,"Voltar2");
    this.voltar3.inputEnabled = true;
    this.voltar3.events.onInputDown.add(this.voltar4, this);

    this.comecar2 = this.add.sprite(470, 555,"Começar");
    this.comecar2.inputEnabled = true;
    this.comecar2.events.onInputDown.add(this.INICIO2, this);


    this.add.sprite(200, 70,"Ane");

    var anel2 = this.add.sprite(200, 210,"grande",2);

    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

    this.seta2 = this.add.sprite(560, 480,"Seta2");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
  }


INICIO2(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A2, this);

  this.comecar2.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
A2(){

  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  this.linha = this.add.sprite(219, 135,"Linha2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.NEL2, this);
}
NEL2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/NEL.mp3";
  this.audio.play();

  this.linha.position.x = 1000;
  this.linha2 = this.add.sprite(300, 140,"Linha");
  this.linha3 = this.add.sprite(350, 140,"Linha");

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

Mala(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FA4")

  this.voltar1.position.x = 1000;
  this.anel.position.x = 1000;
  this.abacaxi.position.x = 1000;
  this.alface.position.x = 1000;
  this.bala.position.x = 1000;
  this.mala.position.x = 1000;

  this.escolha.position.x = 1000;
  this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar3 = this.add.sprite(470, 555,"Começar");
  this.comecar3.inputEnabled = true;
  this.comecar3.events.onInputDown.add(this.INICIO3, this);


  this.add.sprite(200, 70,"Mal");

  var mala2 = this.add.sprite(200, 210,"grande",4);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}


INICIO3(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.MA3, this);

  this.comecar3.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.x = 1000;
}
MA3(){

  this.audio.src = "assets/sons/MA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(210, 140,"Linha");
  this.linha2 = this.add.sprite(230, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LA3, this);
}
LA3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 365;
  this.linha2.position.x = 1000;


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




Alface(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FA5")

  this.voltar1.position.x = 1000;
  this.anel.position.x = 1000;
  this.abacaxi.position.x = 1000;
  this.alface.position.x = 1000;
  this.bala.position.x = 1000;
  this.mala.position.x = 1000;

  this.escolha.position.x = 1000;
  this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar4 = this.add.sprite(470, 555,"Começar");
  this.comecar4.inputEnabled = true;
  this.comecar4.events.onInputDown.add(this.INICIO4, this);


  this.add.sprite(150, 70,"Alf");

  var alface2 = this.add.sprite(200, 210,"grande",1);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}



INICIO4(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.AL4, this);

  this.comecar4.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.y = 1000;
}
AL4(){

  this.audio.src = "assets/sons/al.mp3";
  this.audio.play();

  this.linha = this.add.sprite(165, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FA4, this);
}
FA4(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/FA.mp3";
  this.audio.play();

  this.linha.position.x = 290;

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.CE4, this);
}
CE4(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/CE.mp3";
  this.audio.play();

  this.linha.position.x = 415;

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



Bala(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FA3")

  this.voltar1.position.x = 1000;
  this.anel.position.x = 1000;
  this.abacaxi.position.x = 1000;
  this.alface.position.x = 1000;
  this.bala.position.x = 1000;
  this.mala.position.x = 1000;

  this.escolha.position.x = 1000;
  this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar5 = this.add.sprite(470, 555,"Começar");
  this.comecar5.inputEnabled = true;
  this.comecar5.events.onInputDown.add(this.INICIO5, this);


  this.add.sprite(200, 70,"Bal");

  var bala2 = this.add.sprite(200, 210,"grande",3);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO5(){
  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.BA5, this);

  this.comecar5.position.x = 1000;
  this.seta2.position.y = 1000;
  this.repetir.position.y = 1000;
}
BA5(){

  this.audio.src = "assets/sons/BA.mp3";
  this.audio.play();

  this.linha = this.add.sprite(220, 140,"Linha");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LA5, this);
}
LA5(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/LA.mp3";
  this.audio.play();

  this.linha.position.x = 355;

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
        console.log(this.contador);

    for (let i = event.resultIndex; i < event.results.length; i++) {

      if (event.results[i].isFinal) {

        var content = event.results[i][0].transcript.trim();
        
        
        switch (content) {
        case "abacaxi":
        letra.AcertouA();
        break;
        case "anel":
        letra.AcertouA();
        break;
        case "bala":
        letra.AcertouA();
        break;
        case "mala":
        letra.AcertouA();
        break;
        case "alface":
        letra.AcertouA();
        break;

        default:
        letra.Errou();
                }
        }
      }
    }
  }
}






LetraA(){
this.audio = new Audio();
this.audio.src = "assets/sons/Letra, A.mp3";
this.audio.play();
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

voltar4(){
game.state.start('FonemaA');
}
Proximo(){
  game.state.start('Jogo2');
}
}
