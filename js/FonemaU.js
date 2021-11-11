class FonemaU
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
   this.load.image("Urso","assets/FonemaU/urso.png");
   this.load.image("Urubu","assets/FonemaU/Urubu.png");
   this.load.image("Uva","assets/FonemaU/uva.png");
   this.load.image("Luva","assets/FonemaU/Luva.png");
   this.load.image("Unha","assets/FonemaU/Unha.png");
   
  

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

        this.quad1 = this.add.sprite(30, 200,"Quadrado");

        this.quad2 = this.add.sprite(275, 230,"Quadrado");

        this.quad3 = this.add.sprite(130, 380,"Quadrado");

        this.quad4 = this.add.sprite(418, 380,"Quadrado");

        this.quad5 = this.add.sprite(510, 200,"Quadrado");



      this.urso = this.add.sprite(50, 220,"pequeno2", 74);
      this.urso.inputEnabled = true;
      this.urso.events.onInputDown.add(this.Urso, this);

      this.luva = this.add.sprite(295, 255,"pequeno2", 22);
      this.luva.inputEnabled = true;
      this.luva.events.onInputDown.add(this.Luva, this);

      this.unha = this.add.sprite(150, 410,"pequeno3", 17);
      this.unha.inputEnabled = true;
      this.unha.events.onInputDown.add(this.Unha, this);

      this.uva = this.add.sprite(438, 395,"pequeno3", 18);
      this.uva.inputEnabled = true;
      this.uva.events.onInputDown.add(this.Uva, this);

      this.urubu = this.add.sprite(530, 230,"pequeno3", 16);
      this.urubu.inputEnabled = true;
      this.urubu.events.onInputDown.add(this.Urubu, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(60, 70,"Escolha");

      this.lu = this.add.sprite(-10, -10,"LU");







}
 update()
 {
}
Urso(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FU3")

  this.voltar1.position.x = 1000;
  this.urso.position.x = 1000;
  this.urubu.position.x = 1000;
  this.luva.position.x = 1000;
  this.uva.position.x = 1000;
  this.unha.position.x = 1000;

  this.escolha.position.x = 1000;
  this.lu.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(200, 70,"Urs");

  var urso2 = this.add.sprite(200, 210,"grande2", 74);

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

    this.audio.src = "assets/sons/UR.mp3";
    this.audio.play();

    this.linha = this.add.sprite(212, 140,"Linha");


    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I1, this);
  }
I1(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/SO.mp3";
    this.audio.play();

    this.linha.position.x = 347;

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

Luva(){
          this.quad1.position.x = 1000;
          this.quad2.position.x = 1000;
          this.quad3.position.x = 1000;
          this.quad4.position.x = 1000;
          this.quad5.position.x = 1000;
          this.fundo.position = 1000;
          this.add.sprite(0,0,"FU4")

          this.voltar1.position.x = 1000;
          this.luva.position.x = 1000;
          this.uva.position.x = 1000;
          this.urso.position.x = 1000;
          this.unha.position.x = 1000;
          this.urubu.position.x = 1000;

          this.escolha.position.x = 1000;
          this.lu.position.x = 1000;

          this.voltar3 = this.add.sprite(10, 550,"Voltar2");
          this.voltar3.inputEnabled = true;
          this.voltar3.events.onInputDown.add(this.voltar4, this);

          this.comecar = this.add.sprite(470, 555,"Começar");
          this.comecar.inputEnabled = true;
          this.comecar.events.onInputDown.add(this.INICIO2, this);


          this.add.sprite(195, 70,"Luv");

          var luva2 = this.add.sprite(200, 210,"grande2", 22);

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

          this.audio.src = "assets/sons/LU.mp3";
          this.audio.play();

          this.linha = this.add.sprite(217, 140,"Linha");

          game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA2, this);
        }
BA2(){
          this.audio = new Audio();
          this.audio.src = "assets/sons/VA.mp3";
          this.audio.play();

          this.linha.position.x = 350;

          game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2, this);
        }
FIM2(){
          this.linha.position.x = 1000;
          this.start();
          this.REPETIR2();
        }
REPETIR2(){
          this.repetir = this.add.sprite(490, 550,"Repetir");
          this.repetir.inputEnabled = true;
          this.repetir.events.onInputDown.add(this.INICIO2, this);
        }

Unha(){
              this.quad1.position.x = 1000;
              this.quad2.position.x = 1000;
              this.quad3.position.x = 1000;
              this.quad4.position.x = 1000;
              this.quad5.position.x = 1000;
              this.fundo.position = 1000;
              this.add.sprite(0,0,"FU2")

              this.voltar1.position.x = 1000;
              this.unha.position.x = 1000;
              this.luva.position.x = 1000;
              this.uva.position.x = 1000;
              this.urso.position.x = 1000;
              this.urubu.position.x = 1000;

              this.escolha.position.x = 1000;
              this.lu.position.x = 1000;

              this.voltar3 = this.add.sprite(10, 550,"Voltar2");
              this.voltar3.inputEnabled = true;
              this.voltar3.events.onInputDown.add(this.voltar4, this);

              this.comecar3 = this.add.sprite(470, 555,"Começar");
              this.comecar3.inputEnabled = true;
              this.comecar3.events.onInputDown.add(this.INICIO3, this);


              this.add.sprite(200, 70,"Unh");

              var unha2 = this.add.sprite(200, 210,"grande3", 17);

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

              this.audio.src = "assets/sons/U.mp3";
              this.audio.play();

              this.linha = this.add.sprite(203, 135,"Linha2");

              game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA3, this);
            }
MA3(){
              this.audio = new Audio();
              this.audio.src = "assets/sons/NHA.mp3";
              this.audio.play();

              this.linha.position.x = 1000;

              this.linha2 = this.add.sprite(280, 140,"Linha");

              this.linha3 = this.add.sprite(370, 140,"Linha");


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

Uva(){
      this.quad1.position.x = 1000;
      this.quad2.position.x = 1000;
      this.quad3.position.x = 1000;
      this.quad4.position.x = 1000;
      this.quad5.position.x = 1000;
      this.fundo.position = 1000;
      this.add.sprite(0,0,"FU5")

      this.voltar1.position.x = 1000;
      this.uva.position.x = 1000;
      this.luva.position.x = 1000;
      this.unha.position.x = 1000;
      this.urso.position.x = 1000;
      this.urubu.position.x = 1000;

      this.escolha.position.x = 1000;
      this.lu.position.x = 1000;

      this.voltar3 = this.add.sprite(10, 550,"Voltar2");
      this.voltar3.inputEnabled = true;
      this.voltar3.events.onInputDown.add(this.voltar4, this);

      this.comecar4 = this.add.sprite(470, 555,"Começar");
      this.comecar4.inputEnabled = true;
      this.comecar4.events.onInputDown.add(this.INICIO4, this);


      this.add.sprite(190, 70,"Uva3");

      var uva2 = this.add.sprite(195, 210,"grande3", 18);

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

      this.audio.src = "assets/sons/U.mp3";
      this.audio.play();

      this.linha = this.add.sprite(240, 135,"Linha2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GRE4, this);
    }
GRE4(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/VA.mp3";
      this.audio.play();

      this.linha.position.x = 1000;

      this.linha2 = this.add.sprite(320, 140,"Linha");

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

Urubu(){
          this.quad1.position.x = 1000;
          this.quad2.position.x = 1000;
          this.quad3.position.x = 1000;
          this.quad4.position.x = 1000;
          this.quad5.position.x = 1000;
          this.fundo.position = 1000;
          this.add.sprite(0,0,"FU1")

          this.voltar1.position.x = 1000;
          this.urubu.position.x = 1000;
          this.unha.position.x = 1000;
          this.luva.position.x = 1000;
          this.uva.position.x = 1000;
          this.urso.position.x = 1000;

          this.escolha.position.x = 1000;
          this.lu.position.x = 1000;

          this.voltar3 = this.add.sprite(10, 550,"Voltar2");
          this.voltar3.inputEnabled = true;
          this.voltar3.events.onInputDown.add(this.voltar4, this);

          this.comecar5 = this.add.sprite(470, 555,"Começar");
          this.comecar5.inputEnabled = true;
          this.comecar5.events.onInputDown.add(this.INICIO5, this);


          this.add.sprite(145, 70,"Uru");

          var urubu2 = this.add.sprite(195, 220,"grande3", 16);

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

          this.audio.src = "assets/sons/U.mp3";
          this.audio.play();

          this.linha = this.add.sprite(177, 130,"Linha2");

          game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LHA5, this);
        }
LHA5(){
          this.audio = new Audio();
          this.audio.src = "assets/sons/RU.mp3";
          this.audio.play();

          this.linha.position.x = 1000;

          this.linha2 = this.add.sprite(252, 135,"Linha");

          game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BU5, this);
        }
BU5(){
                  this.audio = new Audio();
                  this.audio.src = "assets/sons/BU.mp3";
                  this.audio.play();

                  this.linha2.position.x = 385;

                  game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM5, this);
                }
FIM5(){
          this.linha2.position.x = 1000;
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
  game.state.start('FonemaU');
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
        case "luva":
        letra.AcertouU();
        break;
        case "unha":
        letra.AcertouU();
        break;
        case "urso":
        letra.AcertouU();
        break;
        case "urubu":
        letra.AcertouU();
        break;
        case "uva":
        letra.AcertouU();
        break;

        default:
        letra.Errou();
                }
        }
      }
    }
  }
}
LetraU()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, U.mp3";
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
