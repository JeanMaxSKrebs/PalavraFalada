class FonemaI
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
   

 }
 create()
 {
    //this.audiojogo();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

    //var btnpermitir = this.add.text(200,150," PERMITIR");

        //btnpermitir.inputEnabled = true;
        //btnpermitir.events.onInputDown.add(this.start, this);

        this.quad1 = this.add.sprite(30, 190,"Quadrado");

        this.quad2 = this.add.sprite(275, 220,"Quadrado");

        this.quad3 = this.add.sprite(130, 370,"Quadrado");

        this.quad4 = this.add.sprite(418, 370,"Quadrado");

        this.quad5 = this.add.sprite(510, 190,"Quadrado");

        this.caixa = this.add.sprite(50, 220,"pequeno", 79);
        this.caixa.inputEnabled = true;
        this.caixa.events.onInputDown.add(this.Caixa, this);

        this.abacaxi = this.add.sprite(300, 240,"pequeno", 0);
        this.abacaxi.inputEnabled = true;
        this.abacaxi.events.onInputDown.add(this.Abacaxi, this);

        this.ima = this.add.sprite(145, 375,"pequeno", 82);
        this.ima.inputEnabled = true;
        this.ima.events.onInputDown.add(this.Ima, this);

        this.igreja = this.add.sprite(438, 390,"pequeno", 80);
        this.igreja.inputEnabled = true;
        this.igreja.events.onInputDown.add(this.Igreja, this);

        this.ilha = this.add.sprite(530, 215,"pequeno", 81);
        this.ilha.inputEnabled = true;
        this.ilha.events.onInputDown.add(this.Ilha, this);

        this.voltar1 = this.add.sprite(520, 550,"Voltar");
        this.voltar1.inputEnabled = true;
        this.voltar1.events.onInputDown.add(this.voltar2, this);

        this.escolha = this.add.sprite(60, 70,"Escolha");

        this.li = this.add.sprite(-10, -10,"LI");







}
 update()
 {
}

Caixa(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FI1")

  this.voltar1.position.x = 1000;
  this.caixa.position.x = 1000;
  this.abacaxi.position.x = 1000;
  this.ilha.position.x = 1000;
  this.ima.position.x = 1000;
  this.igreja.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(150, 70,"Cai");

  var caixa2 = this.add.sprite(200, 210,"grande", 79);

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

  this.seta2 = this.add.sprite(560, 480,"Seta2");

  game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
}

INICIO1(){
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.CA1, this);

    this.comecar.position.x = 1000;
    this.seta2.position.y = 1000;
    this.repetir.position.x = 1000;
  }
CA1(){

    this.audio.src = "assets/sons/CA.mp3";
    this.audio.play();

    this.linha = this.add.sprite(190, 140,"Linha");


    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I1, this);
  }
I1(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/I.mp3";
    this.audio.play();

    this.linha.position.x = 1000;

    this.linha2 = this.add.sprite(310, 135,"Linha2");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XA1, this);
  }
XA1(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/XA.mp3";
      this.audio.play();

      this.linha.position.x = 375;

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



Abacaxi(){
      this.quad1.position.x = 1000;
      this.quad2.position.x = 1000;
      this.quad3.position.x = 1000;
      this.quad4.position.x = 1000;
      this.quad5.position.x = 1000;
      this.fundo.position = 1000;
      this.add.sprite(0,0,"FI2")

      this.voltar1.position.x = 1000;
      this.abacaxi.position.x = 1000;
      this.caixa.position.x = 1000;
      this.ilha.position.x = 1000;
      this.ima.position.x = 1000;
      this.igreja.position.x = 1000;

      this.escolha.position.x = 1000;
      //this.la.position.x = 1000;

      this.voltar3 = this.add.sprite(10, 550,"Voltar2");
      this.voltar3.inputEnabled = true;
      this.voltar3.events.onInputDown.add(this.voltar4, this);

      this.comecar = this.add.sprite(470, 555,"Começar");
      this.comecar.inputEnabled = true;
      this.comecar.events.onInputDown.add(this.INICIO2, this);


      this.add.sprite(135, 70,"Aba");

      var abacaxi2 = this.add.sprite(200, 210,"grande",0);

      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

      this.seta2 = this.add.sprite(560, 480,"Seta2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
    }


INICIO2(){
      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.A2, this);

      this.comecar.position.x = 1000;
      this.seta2.position.y = 1000;
      this.repetir.position.x = 1000;
    }
A2(){

      this.audio.src = "assets/sons/A.mp3";
      this.audio.play();

      this.linha = this.add.sprite(125, 135,"Linha2");

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
      this.REPETIR2();
    }
REPETIR2(){
      this.repetir = this.add.sprite(490, 550,"Repetir");
      this.repetir.inputEnabled = true;
      this.repetir.events.onInputDown.add(this.INICIO2, this);
    }



Ima(){
      this.quad1.position.x = 1000;
      this.quad2.position.x = 1000;
      this.quad3.position.x = 1000;
      this.quad4.position.x = 1000;
      this.quad5.position.x = 1000;
      this.fundo.position = 1000;
      this.add.sprite(0,0,"FI3")

      this.voltar1.position.x = 1000;
      this.ima.position.x = 1000;
      this.abacaxi.position.x = 1000;
      this.caixa.position.x = 1000;
      this.ilha.position.x = 1000;
      this.igreja.position.x = 1000;

      this.escolha.position.x = 1000;
      //this.la.position.x = 1000;

      this.voltar3 = this.add.sprite(10, 550,"Voltar2");
      this.voltar3.inputEnabled = true;
      this.voltar3.events.onInputDown.add(this.voltar4, this);

      this.comecar3 = this.add.sprite(470, 555,"Começar");
      this.comecar3.inputEnabled = true;
      this.comecar3.events.onInputDown.add(this.INICIO3, this);


      this.add.sprite(200, 67,"Ima2a");

      var ima2 = this.add.sprite(200, 210,"grande", 82);

      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

      this.seta2 = this.add.sprite(560, 480,"Seta2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
    }


INICIO3(){
      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.I3, this);

      this.comecar3.position.x = 1000;
      this.seta2.position.y = 1000;
      this.repetir.position.x = 1000;
    }
I3(){

      this.audio.src = "assets/sons/I.mp3";
      this.audio.play();

      this.linha = this.add.sprite(230, 135,"Linha2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA3, this);
    }
MA3(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/MA.mp3";
      this.audio.play();

      this.linha.position.x = 1000;

      this.linha2 = this.add.sprite(295, 140,"Linha");

      this.linha3 = this.add.sprite(322, 140,"Linha");


      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM3, this);
    }
FIM3(){
      this.linha2.position.x = 1000;
      this.linha3.position.x = 1000;
      this.start();
      this.REPETIR3();
    }
REPETIR3(){
      this.repetir = this.add.sprite(490, 550,"Repetir");
      this.repetir.inputEnabled = true;
      this.repetir.events.onInputDown.add(this.INICIO3, this);
    }



Igreja(){
      this.quad1.position.x = 1000;
      this.quad2.position.x = 1000;
      this.quad3.position.x = 1000;
      this.quad4.position.x = 1000;
      this.quad5.position.x = 1000;
      this.fundo.position = 1000;
      this.add.sprite(0,0,"FI4")

      this.voltar1.position.x = 1000;
      this.igreja.position.x = 1000;
      this.ima.position.x = 1000;
      this.caixa.position.x = 1000;
      this.abacaxi.position.x = 1000;
      this.ilha.position.x = 1000;

      this.escolha.position.x = 1000;
      //this.la.position.x = 1000;

      this.voltar3 = this.add.sprite(10, 550,"Voltar2");
      this.voltar3.inputEnabled = true;
      this.voltar3.events.onInputDown.add(this.voltar4, this);

      this.comecar4 = this.add.sprite(470, 555,"Começar");
      this.comecar4.inputEnabled = true;
      this.comecar4.events.onInputDown.add(this.INICIO4, this);


      this.add.sprite(120, 70,"Igr");

      var igreja2 = this.add.sprite(210, 210,"grande", 80);

      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

      this.seta2 = this.add.sprite(560, 480,"Seta2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
    }



    INICIO4(){
      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.I4, this);

      this.comecar4.position.x = 1000;
      this.seta2.position.y = 1000;
      this.repetir.position.x = 1000;
    }
    I4(){

      this.audio.src = "assets/sons/I.mp3";
      this.audio.play();

      this.linha = this.add.sprite(150, 135,"Linha2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GRE4, this);
    }
    GRE4(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/GRE.mp3";
      this.audio.play();

      this.linha.position.x = 1000;

      this.linha2 = this.add.sprite(215, 140,"Linha");

      this.linha3 = this.add.sprite(265, 140,"Linha");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.JA4, this);
    }
    JA4(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/JA.mp3";
      this.audio.play();

      this.linha2.position.x = 400;

      this.linha3.position.x = 1000;

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM4, this);
    }
    FIM4(){
      this.linha2.position.x = 1000;
      this.start();
      this.REPETIR4();
    }
    REPETIR4(){
      this.repetir = this.add.sprite(490, 550,"Repetir");
      this.repetir.inputEnabled = true;
      this.repetir.events.onInputDown.add(this.INICIO4, this);
    }



Ilha(){
      this.quad1.position.x = 1000;
      this.quad2.position.x = 1000;
      this.quad3.position.x = 1000;
      this.quad4.position.x = 1000;
      this.quad5.position.x = 1000;
      this.fundo.position = 1000;
      this.add.sprite(0,0,"FI5")

      this.voltar1.position.x = 1000;
      this.ilha.position.x = 1000;
      this.caixa.position.x = 1000;
      this.ima.position.x = 1000;
      this.igreja.position.x = 1000;
      this.abacaxi.position.x = 1000;

      this.escolha.position.x = 1000;
      //this.la.position.x = 1000;

      this.voltar3 = this.add.sprite(10, 550,"Voltar2");
      this.voltar3.inputEnabled = true;
      this.voltar3.events.onInputDown.add(this.voltar4, this);

      this.comecar5 = this.add.sprite(470, 555,"Começar");
      this.comecar5.inputEnabled = true;
      this.comecar5.events.onInputDown.add(this.INICIO5, this);


      this.add.sprite(200, 70,"Ilh");

      var ilha2 = this.add.sprite(225, 210,"grande", 81);

      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.COMECAR, this);

      this.seta2 = this.add.sprite(560, 480,"Seta2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1, this.SETA, this);
    }

    INICIO5(){
      game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.I5, this);

      this.comecar5.position.x = 1000;
      this.seta2.position.y = 1000;
      this.repetir.position.x = 1000;
    }
    I5(){

      this.audio.src = "assets/sons/I.mp3";
      this.audio.play();

      this.linha = this.add.sprite(215, 140,"Linha2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LHA5, this);
    }
    LHA5(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/LHA.mp3";
      this.audio.play();

      this.linha.position.x = 1000;

      this.linha2 = this.add.sprite(285, 145,"Linha");

      this.linha3 = this.add.sprite(345, 145,"Linha");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM5, this);
    }
    FIM5(){
      this.linha2.position.x = 1000;
      this.linha3.position.x = 1000;
      this.start();
      this.REPETIR5();
    }
    REPETIR5(){
      this.repetir = this.add.sprite(490, 550,"Repetir");
      this.repetir.inputEnabled = true;
      this.repetir.events.onInputDown.add(this.INICIO5, this);
    }




voltar2(){
  game.state.start('Tela2');
}
voltar4(){
  game.state.start('FonemaI');
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
        case "abacaxi":
        letra.AcertouI();
        break;
        case "caixa":
        letra.AcertouI();
        break;
        case "igreja":
        letra.AcertouI();
        break;
        case "ilha":
        letra.AcertouI();
        break;
        case "imã":
        letra.AcertouI();
        break;

        default:
        letra.Errou();
                }
        }
      }
    }
  }
}
LetraI()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, I.mp3";
	this.audio.play();

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
