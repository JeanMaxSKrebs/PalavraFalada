class FonemaO
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
   this.load.image("Navio","assets/FonemaO/Navio.png");
   this.load.image("Ovo","assets/FonemaO/Ovo.png");
   this.load.image("Lobo","assets/FonemaO/Lobo.png");
   this.load.image("Olho","assets/FonemaO/Olho.png");
   this.load.image("Ovelha","assets/FonemaO/Ovelha.png");
   
   this.load.image("LO","assets/LetraO.png");

   this.load.image("Escolha","assets/Escolha2a.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("Linha2","assets/LinhaBE3.png");
   this.load.image("FO1","assets/FO1.png");
   this.load.image("FO2","assets/FO2.png");
   this.load.image("FO3","assets/FO3.png");
   this.load.image("FO5","assets/FO5.png");
   this.load.image("FO4","assets/FO4.png");
   this.load.image("Repetir","assets/Repetir2.png");

   this.load.image("Nav","assets/Nav2.png");
   this.load.image("Ovo3","assets/Ovo.png");
   this.load.image("Lob","assets/Lob4.png");
   this.load.image("Olh","assets/Olh.png");
   this.load.image("Ove","assets/Ove.png");
   this.load.image("Navio2","assets/FonemaO/Navio2.png");
   this.load.image("Ovo2","assets/FonemaO/Ovo2.png");
   this.load.image("Ovelha2","assets/FonemaO/Ovelha2.png");
   this.load.image("Lobo2","assets/FonemaO/Lobo2.png");
   this.load.image("Olho2","assets/FonemaO/Olho2.png");


 }
 create()
 {
    //this.audiojogo();
    this.fundo = this.add.sprite(0,0,"ceu");
    this.add.sprite(0,0,"FF3");
  
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



      this.navio = this.add.sprite(50, 220,"pequeno2", 34);
      this.navio.inputEnabled = true;
      this.navio.events.onInputDown.add(this.Navio, this);

      this.ovo = this.add.sprite(312, 255,"pequeno2", 35);
      this.ovo.inputEnabled = true;
      this.ovo.events.onInputDown.add(this.Ovo, this);

      this.lobo = this.add.sprite(150, 410,"pequeno",18);
      this.lobo.inputEnabled = true;
      this.lobo.events.onInputDown.add(this.Lobo, this);

      this.olho = this.add.sprite(438, 395,"pequeno2", 38);
      this.olho.inputEnabled = true;
      this.olho.events.onInputDown.add(this.Olho, this);

      this.ovelha = this.add.sprite(530, 220,"pequeno2", 36);
      this.ovelha.inputEnabled = true;
      this.ovelha.events.onInputDown.add(this.Ovelha, this);

      this.voltar1 = this.add.sprite(520, 550,"Voltar");
      this.voltar1.inputEnabled = true;
      this.voltar1.events.onInputDown.add(this.voltar2, this);

      this.escolha = this.add.sprite(60, 70,"Escolha");

      this.lo = this.add.sprite(-10, -10,"LO");







}
 update()
 {
}

Navio(){
  this.quad1.position.x = 1000;
  this.quad2.position.x = 1000;
  this.quad3.position.x = 1000;
  this.quad4.position.x = 1000;
  this.quad5.position.x = 1000;
  this.fundo.position = 1000;
  this.add.sprite(0,0,"FO1")

  this.voltar1.position.x = 1000;
  this.navio.position.x = 1000;
  this.ovo.position.x = 1000;
  //this.oculos.position.x = 1000;
  this.ovelha.position.x = 1000;
  this.olho.position.x = 1000;

  this.escolha.position.x = 1000;
  //this.la.position.x = 1000;

  this.voltar3 = this.add.sprite(10, 550,"Voltar2");
  this.voltar3.inputEnabled = true;
  this.voltar3.events.onInputDown.add(this.voltar4, this);

  this.comecar = this.add.sprite(470, 555,"Começar");
  this.comecar.inputEnabled = true;
  this.comecar.events.onInputDown.add(this.INICIO1, this);


  this.add.sprite(150, 70,"Nav");

  var navio2 = this.add.sprite(210, 210,"grande2", 34);

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
    this.audio.src = "assets/sons/NA.mp3";
    this.audio.play();

    this.linha = this.add.sprite(187, 140,"Linha");

    this.linha2 = this.add.sprite(205, 140,"Linha");

    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.I1, this);
  }
I1(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/VI.mp3";
    this.audio.play();

    this.linha.position.x = 335;
    this.linha2.position.x = 1000;

    game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.XA1, this);
  }
XA1(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/O.mp3";
      this.audio.play();

      this.linha.position.x = 1000;

      this.linha2.position.x = 1000;

      this.linha3 = this.add.sprite(457, 135,"Linha2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM1, this);
  }
FIM1(){
    this.linha.position.x = 1000;
    this.linha3.position.x = 1000;
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





Ovo(){
        this.quad1.position.x = 1000;
        this.quad2.position.x = 1000;
        this.quad3.position.x = 1000;
        this.quad4.position.x = 1000;
        this.quad5.position.x = 1000;
        this.fundo.position = 1000;
        this.add.sprite(0,0,"FO4")

        this.voltar1.position.x = 1000;
        this.navio.position.x = 1000;
        this.ovo.position.x = 1000;
        //this.oculos.position.x = 1000;
        this.ovelha.position.x = 1000;
        this.olho.position.x = 1000;

        this.escolha.position.x = 1000;
        //this.la.position.x = 1000;

        this.voltar3 = this.add.sprite(10, 550,"Voltar2");
        this.voltar3.inputEnabled = true;
        this.voltar3.events.onInputDown.add(this.voltar4, this);

        this.comecar = this.add.sprite(470, 555,"Começar");
        this.comecar.inputEnabled = true;
        this.comecar.events.onInputDown.add(this.INICIO2, this);


        this.add.sprite(195, 70,"Ovo3");

        var ovo2 = this.add.sprite(240, 210,"grande2", 35);

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

        this.audio.src = "assets/sons/O.mp3";
        this.audio.play();

        this.linha = this.add.sprite(238, 135,"Linha2");

        game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.BA2, this);
      }
  BA2(){
        this.audio = new Audio();
        this.audio.src = "assets/sons/vo.mp3";
        this.audio.play();

        this.linha.position.x = 1000;

        this.linha2 = this.add.sprite(323, 140,"Linha");

        game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM2, this);
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




Lobo(){
            this.quad1.position.x = 1000;
            this.quad2.position.x = 1000;
            this.quad3.position.x = 1000;
            this.quad4.position.x = 1000;
            this.quad5.position.x = 1000;
            this.fundo.position = 1000;
            this.add.sprite(0,0,"FO5")

            this.voltar1.position.x = 1000;
            this.ovo.position.x = 1000;
            this.lobo.position.x = 1000;
            this.ovelha.position.x = 1000;
            this.navio.position.x = 1000;
            this.olho.position.x = 1000;

            this.escolha.position.x = 1000;
            //this.la.position.x = 1000;

            this.voltar3 = this.add.sprite(10, 550,"Voltar2");
            this.voltar3.inputEnabled = true;
            this.voltar3.events.onInputDown.add(this.voltar4, this);

            this.comecar3 = this.add.sprite(470, 555,"Começar");
            this.comecar3.inputEnabled = true;
            this.comecar3.events.onInputDown.add(this.INICIO3, this);


            this.add.sprite(200, 70,"Lob");

            var lobo2 = this.add.sprite(200, 210,"grande", 18);

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

            this.audio.src = "assets/sons/LO.mp3";
            this.audio.play();

            this.linha = this.add.sprite(218, 140,"Linha");

            game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.MA3, this);
          }
MA3(){
            this.audio = new Audio();
            this.audio.src = "assets/sons/BO2.mp3";
            this.audio.play();

            this.linha.position.x = 355;


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




Olho(){
      this.quad1.position.x = 1000;
      this.quad2.position.x = 1000;
      this.quad3.position.x = 1000;
      this.quad4.position.x = 1000;
      this.quad5.position.x = 1000;
      this.fundo.position = 1000;
      this.add.sprite(0,0,"FO2")

      this.voltar1.position.x = 1000;
      this.navio.position.x = 1000;
      this.ovo.position.x = 1000;
      //this.oculos.position.x = 1000;
      this.ovelha.position.x = 1000;
      this.olho.position.x = 1000;

      this.escolha.position.x = 1000;
      //this.la.position.x = 1000;

      this.voltar3 = this.add.sprite(10, 550,"Voltar2");
      this.voltar3.inputEnabled = true;
      this.voltar3.events.onInputDown.add(this.voltar4, this);

      this.comecar4 = this.add.sprite(470, 555,"Começar");
      this.comecar4.inputEnabled = true;
      this.comecar4.events.onInputDown.add(this.INICIO4, this);


      this.add.sprite(190, 70,"Olh");

      var olho2 = this.add.sprite(195, 210,"grande2", 38);

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

      this.audio.src = "assets/sons/O.mp3";
      this.audio.play();

      this.linha = this.add.sprite(200, 135,"Linha2");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.GRE4, this);
    }
GRE4(){
      this.audio = new Audio();
      this.audio.src = "assets/sons/Lho.mp3";
      this.audio.play();

      this.linha.position.x = 1000;

      this.linha2 = this.add.sprite(280, 140,"Linha");
      this.linha3 = this.add.sprite(345, 140,"Linha");

      game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.FIM4, this);
    }
FIM4(){
      this.linha2.position.x = 1000;
      this.linha3.position.x = 1000;
      this.start();
      this.REPETIR4();
    }
REPETIR4(){
      this.repetir = this.add.sprite(490, 550,"Repetir");
      this.repetir.inputEnabled = true;
      this.repetir.events.onInputDown.add(this.INICIO4, this);
    }





Ovelha(){
          this.quad1.position.x = 1000;
          this.quad2.position.x = 1000;
          this.quad3.position.x = 1000;
          this.quad4.position.x = 1000;
          this.quad5.position.x = 1000;
          this.fundo.position = 1000;
          this.add.sprite(0,0,"FO3")

          this.voltar1.position.x = 1000;
          this.navio.position.x = 1000;
          this.ovo.position.x = 1000;
          //this.oculos.position.x = 1000;
          this.ovelha.position.x = 1000;
          this.olho.position.x = 1000;

          this.escolha.position.x = 1000;
          //this.la.position.x = 1000;

          this.voltar3 = this.add.sprite(10, 550,"Voltar2");
          this.voltar3.inputEnabled = true;
          this.voltar3.events.onInputDown.add(this.voltar4, this);

          this.comecar5 = this.add.sprite(470, 555,"Começar");
          this.comecar5.inputEnabled = true;
          this.comecar5.events.onInputDown.add(this.INICIO5, this);


          this.add.sprite(125, 70,"Ove");

          var ovelha2 = this.add.sprite(195, 210,"grande2", 36);

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

          this.audio.src = "assets/sons/O.mp3";
          this.audio.play();

          this.linha = this.add.sprite(150, 135,"Linha2");

          game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.VE5, this);
        }
VE5(){
          this.audio = new Audio();
          this.audio.src = "assets/sons/VE.mp3";
          this.audio.play();

          this.linha.position.x = 1000;

          this.linha2 = this.add.sprite(220, 145,"Linha");

          game.time.events.repeat(Phaser.Timer.SECOND * 0.7, 1, this.LHA5, this);
        }
LHA5(){
          this.audio = new Audio();
          this.audio.src = "assets/sons/LHA.mp3";
          this.audio.play();

          this.linha.position.x = 1000;

          this.linha2.position.x = 345;

          this.linha3 = this.add.sprite(415, 145,"Linha");

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
  game.state.start('FonemaO');
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
        game.add.text(556,100,content,{fontSize:'30px',fill:'black'});
        recognition.stop();

        content = content.toLocaleLowerCase();

        switch (content) {
        case "lobo":
        letra.AcertouO();
        break;
        case "navio":
        letra.AcertouO();
        break;
        case "olho":
        letra.AcertouO();
        break;
        case "ovelha":
        letra.AcertouO();
        break;
        case "ovo":
        letra.AcertouO();
        break;

        default:
        letra.Errou();
                }
        }
      }
    }
  }
}
LetraO()
{
  this.audio = new Audio();
	this.audio.src = "assets/sons/Letra, O.mp3";
	this.audio.play();

}
M2()
{
  this.m.position.x = 40;
  this.m.position.y = 210;

  this.seta1.position.x = 160;
  this.seta1.position.y = 320;


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
  game.state.start('Jogo2');
}
}
