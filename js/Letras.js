class Letras {
  constructor() {
    //this.fonemaB2 = new FonemaB;
  }
  AcertouA(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/Muito.mp3";
    this.audio.play();
    game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
    game.state.start('FonemaA');

  }
    AcertouB(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaB');

    }
    Errou(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Tente.mp3";
    	this.audio.play();
      //game.add.text(15,15,"Errou",{fontSize:'30px',fill:'white'});
    }
    AcertouC(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaC');
    }
    AcertouD(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaD');
    }
    AcertouE(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaE');
    }
    AcertouF(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaF');
    }
    AcertouG(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaG');
    }
    AcertouI(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaI');
    }
    AcertouJ(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaJ');
    }
    AcertouL(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaL');
    }
    AcertouM(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaM');
    }
    AcertouN(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaN');
    }
    AcertouO(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaO');
    }
    AcertouP(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaP');
    }
    AcertouR(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaR');
    }
    AcertouS(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaS');
    }
    AcertouT(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaT');
    }
    AcertouU(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaU');
    }
    AcertouV(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaV');
    }
    AcertouX(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaX');
    }
    AcertouZ(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();
      game.add.text(15,15,"Correto",{fontSize:'30px',fill:'white'});
      game.state.start('FonemaZ');
    }

    Bola(){
      this.audio = new Audio();
    	this.audio.src = "assets/sons/Muito.mp3";
    	this.audio.play();

      game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Bola2, this);
    }
    Bola2(){
      game.state.start('FBola');
    }
    Bicicleta2(){
      game.state.start('FBicicleta');
    }
    Abelha2(){
      game.state.start('FAbelha');
    }
    Banana2(){
      game.state.start('FBanana');
    }
    Bule2(){
      game.state.start('FBule');
    }
    letraA2(){
      game.state.start('FonemaA')
    }
    letraB2(){
      game.state.start('FonemaB')
    }
    letraC2(){
      game.state.start('FonemaC')
    }
    letraD2(){
      game.state.start('FonemaD')
    }
    letraE2(){
      game.state.start('FonemaE')
    }
    letraF2(){
      game.state.start('FonemaF')
    }
    letraG2(){
      game.state.start('FonemaG')
    }
    letraH2(){
      game.state.start('FonemaH')
    }
    letraI2(){
      game.state.start('FonemaI')
    }
    letraJ2(){
      game.state.start('FonemaJ')
    }
    letraK2(){
      game.state.start('FonemaK')
    }
    letraL2(){
      game.state.start('FonemaL')
    }
    letraM2(){
      game.state.start('FonemaM')
    }
    letraN2(){
      game.state.start('FonemaN')
    }
    letraO2(){
      game.state.start('FonemaO')
    }
    letraP2(){
      game.state.start('FonemaP')
    }
    letraQ2(){
      game.state.start('FonemaQ')
    }
    letraR2(){
      game.state.start('FonemaR')
    }
    letraS2(){
      game.state.start('FonemaS')
    }
    letraT2(){
      game.state.start('FonemaT')
    }
    letraU2(){
      game.state.start('FonemaU')
    }
    letraV2(){
      game.state.start('FonemaV')
    }
    letraW2(){
      game.state.start('FonemaW')
    }
    letraX2(){
      game.state.start('FonemaX')
    }
    letraY2(){
      game.state.start('FonemaY')
    }
    letraZ2(){
      game.state.start('FonemaZ')
  }
}
