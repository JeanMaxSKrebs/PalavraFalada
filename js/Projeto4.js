class Projeto4
{
 //contructor de classe
 constructor()
 {
   //Aqui vai os atributos de Fase
   this.cursors = null;
   this.piso = null;
   this.player = null;
   this.considerarColisao = true;
   this.considerarColisao2 = true;
   this.considerarColisao3 = true;
   this.grupoInimigos = null;
   this.grupoPlat = null;
   this.grupoPremios = null;
   this.grupoChave = null;
   this.grupoPorta = null;
   this.grupoChefe = null;
   this.castelo2 = null;
   this.Colisao1 = false;
   this.Colisao2 = false;
   this.Colisao3 = false;
   this.Colisao4 = false;
   this.Colisao5 = false;
   this.Colisao6 = false;
   this.Colisao7 = false;
   this.contador = 0;
   this.con = null;
   this.contagem = null;
   this.contagem2 = 0;
   this.contagemVida = 3;
   this.contadorVida = 0;
   this.contadorporta = 0;
   this.chave = null;
   this.porta = null;
   this.vida = null;
   this.chefe = null;
   this.D = null;
   this.plat = null;
   this.passar = true;
   this.passar2 = true;
   this.passar3 = true;
   this.passar4 = true;
   this.passar5 = true;
   this.morto = false;
   this.m = null;
   this.a = null;
   this.o = null;
   this.c = null;
   this.a2 = null;
   this.considerar1 = true;
   this.considerar2 = true;
   this.considerar3 = true;
   this.considerar4 = true;
   this.considerar5 = true;
   this.tv = false;




 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("PatoM","assets/Animais/PatoM.png");
   this.load.image("PatoF","assets/Animais/PATOF.png");
   
   this.load.image("Amarelo","assets/Cores/Amarelo2.png");
   this.load.image("Verde","assets/Cores/Verde2.jpg");
   this.load.image("Vermelho","assets/Cores/Vermelho2.jpg");
   this.load.image("Branco","assets/Cores/Branco2.png");
   this.load.image("Preto","assets/Cores/Preto2.jpg");
   this.load.image("Azul","assets/Cores/Azul2.jpg");
   this.load.image("agua","assets/linha7a.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");

   this.load.image("inimigo2", "assets/inimigo2aa.png");


 }
 create()
 {
   this.iniciar();
    this.add.sprite(0,0,"ceu");

    this.cursors = this.input.keyboard.createCursorKeys();


    this.add.sprite(-10, 210,"Linha");
    this.add.sprite(550, 210,"Linha");
    this.add.sprite(50, 210,"Linha");
    this.add.sprite(500, 210,"Linha");
    this.add.sprite(110, 210,"Linha");
    this.add.sprite(450, 210,"Linha");
    this.add.sprite(160, 210,"Linha");
    this.add.sprite(400, 210,"Linha");
    this.add.sprite(210, 210,"Linha");
    this.add.sprite(350, 210,"Linha");
    this.add.sprite(270, 210,"Linha");
    this.add.sprite(300, 210,"Linha");
    this.add.sprite(600, 210,"Linha");
    this.add.sprite(650, 210,"Linha");
    this.add.sprite(700, 210,"Linha");


    this.vermelho = this.add.sprite(100, 300,"Vermelho");
    this.vermelho.inputEnabled = true;
    this.vermelho.events.onInputDown.add(this.vermelho2, this);

    this.azul = this.add.sprite(300, 300,"Azul");
    this.azul.inputEnabled = true;
    this.azul.events.onInputDown.add(this.azul2, this);

    this.verde = this.add.sprite(500, 300,"Verde");
    this.verde.inputEnabled = true;
    this.verde.events.onInputDown.add(this.verde2, this);

    this.preto = this.add.sprite(200, 450,"Preto");
    this.preto.inputEnabled = true;
    this.preto.events.onInputDown.add(this.preto2, this);

    this.amarelo = this.add.sprite(400, 450,"Amarelo");
    this.amarelo.inputEnabled = true;
    this.amarelo.events.onInputDown.add(this.amarelo2, this);



    this.proximo = this.add.sprite(550, -50,"Proximo");
    this.proximo.inputEnabled = true;
    this.proximo.events.onInputDown.add(this.Proximo, this);

    game.add.text(556,10,'PRÓXIMO',{fontSize:'30px',fill:'white'});



    this.v = this.add.sprite(1000, 100,"V");
    this.e = this.add.sprite(1000, 90,"E");
    this.r = this.add.sprite(1000, 100,"R");
    this.m = this.add.sprite(1000, 100,"M");
    this.e2 = this.add.sprite(1000, 90,"E");
    this.h = this.add.sprite(1000, 95,"H");
    this.l = this.add.sprite(1000, 100,"L");
    this.o = this.add.sprite(1000, 105,"O");

    this.p = this.add.sprite(1000, 100,"P");
    this.r2 = this.add.sprite(1000, 100,"R");
    this.e3 = this.add.sprite(1000, 90,"E");
    this.t = this.add.sprite(1000, 95,"T");
    this.o2 = this.add.sprite(1000, 105,"O");

    this.a = this.add.sprite(1000, 85,"A");
    this.m2 = this.add.sprite(1000, 100,"M");
    this.a2 = this.add.sprite(1000, 85,"A");
    this.r3 = this.add.sprite(1000, 100,"R");
    this.e4 = this.add.sprite(1000, 90,"E");
    this.l2 = this.add.sprite(1000, 100,"L");
    this.o3 = this.add.sprite(1000, 105,"O");

    this.v2 = this.add.sprite(1000, 105,"V");
    this.e5 = this.add.sprite(1000, 90,"E");
    this.r4 = this.add.sprite(1000, 100,"R");
    this.d = this.add.sprite(1000, 90,"D");
    this.e6 = this.add.sprite(1000, 90,"E");

    this.a3 = this.add.sprite(1000, 85,"A");
    this.z = this.add.sprite(1000, 100,"Z");
    this.u = this.add.sprite(1000, 105,"U");
    this.l3 = this.add.sprite(1000, 100,"L");
}
 update()
 {


}

vermelho2()
{

  this.v.position.x = 100;
  this.e.position.x = 170;
  this.r.position.x = 245;
  this.m.position.x = 310;
  this.e2.position.x = 380;
  this.l.position.x = 450;
  this.h.position.x = 515;
  this.o.position.x = 590;

  this.add.sprite(100, 150,"Linha");
  this.add.sprite(170, 150,"Linha");
  this.add.sprite(240, 150,"Linha");
  this.add.sprite(310, 150,"Linha");
  this.add.sprite(380, 150,"Linha");
  this.add.sprite(450, 150,"Linha");
  this.add.sprite(520, 150,"Linha");
  this.add.sprite(590, 150,"Linha");

  this.p.position.x = 1000;
  this.r2.position.x = 1000;
  this.e3.position.x = 1000;
  this.t.position.x = 1000;
  this.o2.position.x = 1000;

  this.a.position.x = 1000;
  this.m2.position.x = 1000;
  this.a2.position.x = 1000;
  this.r3.position.x = 1000;
  this.e4.position.x = 1000;
  this.l2.position.x = 1000;
  this.o3.position.x = 1000;

  this.a3.position.x = 1000;
  this.z.position.x = 1000;
  this.u.position.x = 1000;
  this.l3.position.x = 1000;

  this.v2.position.x = 1000;
  this.e5.position.x = 1000;
  this.r4.position.x = 1000;
  this.d.position.x = 1000;
  this.e6.position.x = 1000;

  this.audio = new Audio();
  this.audio.src = "assets/sons/Vermelho.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ult4, this);
}

  Ult4(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RepitaU.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.Ver, this);
  }
  Ver(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/Ver.mp3";
    this.audio.play();

    game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Me, this);
  }
  Me(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/Me.mp3";
    this.audio.play();

    game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Lho, this);
  }
  Lho(){
    this.audio = new Audio();
    this.audio.src = "assets/sons/Lho.mp3";
    this.audio.play();

    //game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ver, this);
  }

preto2()
{

  this.p.position.x = 200;
  this.r2.position.x = 270;
  this.e3.position.x = 340;
  this.t.position.x = 410;
  this.o2.position.x = 480;

  this.add.sprite(200, 150,"Linha");
  this.add.sprite(270, 150,"Linha");
  this.add.sprite(340, 150,"Linha");
  this.add.sprite(410, 150,"Linha");
  this.add.sprite(480, 150,"Linha");

  this.v.position.x = 1000;
  this.e.position.x = 1000;
  this.r.position.x = 1000;
  this.m.position.x = 1000;
  this.e2.position.x = 1000;
  this.l.position.x = 1000;
  this.h.position.x = 1000;
  this.o.position.x = 1000;

  this.a.position.x = 1000;
  this.m2.position.x = 1000;
  this.a2.position.x = 1000;
  this.r3.position.x = 1000;
  this.e4.position.x = 1000;
  this.l2.position.x = 1000;
  this.o3.position.x = 1000;

  this.a3.position.x = 1000;
  this.z.position.x = 1000;
  this.u.position.x = 1000;
  this.l3.position.x = 1000;

  this.v2.position.x = 1000;
  this.e5.position.x = 1000;
  this.r4.position.x = 1000;
  this.d.position.x = 1000;
  this.e6.position.x = 1000;

  this.audio = new Audio();
  this.audio.src = "assets/sons/Preto.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ult3, this);
}
Ult3(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RepitaU.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.Pre, this);
}
Pre(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Pre.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.To, this);
}
To(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/To.mp3";
  this.audio.play();

  //game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Re, this);

}
amarelo2()
{

  this.a.position.x = 140;
  this.m2.position.x = 210;
  this.a2.position.x = 280;
  this.r3.position.x = 355;
  this.e4.position.x = 415;
  this.l2.position.x = 485;
  this.o3.position.x = 550;

  this.add.sprite(140, 150,"Linha");
  this.add.sprite(210, 150,"Linha");
  this.add.sprite(280, 150,"Linha");
  this.add.sprite(350, 150,"Linha");
  this.add.sprite(420, 150,"Linha");
  this.add.sprite(485, 150,"Linha");
  this.add.sprite(555, 150,"Linha");

  this.v.position.x = 1000;
  this.e.position.x = 1000;
  this.r.position.x = 1000;
  this.m.position.x = 1000;
  this.e2.position.x = 1000;
  this.l.position.x = 1000;
  this.h.position.x = 1000;
  this.o.position.x = 1000;

  this.p.position.x = 1000;
  this.r2.position.x = 1000;
  this.e3.position.x = 1000;
  this.t.position.x = 1000;
  this.o2.position.x = 1000;

  this.a3.position.x = 1000;
  this.z.position.x = 1000;
  this.u.position.x = 1000;
  this.l3.position.x = 1000;

  this.v2.position.x = 1000;
  this.e5.position.x = 1000;
  this.r4.position.x = 1000;
  this.d.position.x = 1000;
  this.e6.position.x = 1000;

  this.audio = new Audio();
  this.audio.src = "assets/sons/Amarelo.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ult2, this);
}

Ult2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RepitaU.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.Aaa, this);
}
Aaa(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/A.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ma, this);
}
Ma(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Ma.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Re, this);
}
Re(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Re.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Lo, this);
}
Lo(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Lo.mp3";
  this.audio.play();

  //game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ver, this);
}
azul2()
{

  this.a3.position.x = 230;
  this.z.position.x = 305;
  this.u.position.x = 370;
  this.l3.position.x = 440;

  this.add.sprite(230, 150,"Linha");
  this.add.sprite(300, 150,"Linha");
  this.add.sprite(370, 150,"Linha");
  this.add.sprite(440, 150,"Linha");

  this.v.position.x = 1000;
  this.e.position.x = 1000;
  this.r.position.x = 1000;
  this.m.position.x = 1000;
  this.e2.position.x = 1000;
  this.l.position.x = 1000;
  this.h.position.x = 1000;
  this.o.position.x = 1000;

  this.p.position.x = 1000;
  this.r2.position.x = 1000;
  this.e3.position.x = 1000;
  this.t.position.x = 1000;
  this.o2.position.x = 1000;

  this.a.position.x = 1000;
  this.m2.position.x = 1000;
  this.a2.position.x = 1000;
  this.r3.position.x = 1000;
  this.e4.position.x = 1000;
  this.l2.position.x = 1000;
  this.o3.position.x = 1000;

  this.v2.position.x = 1000;
  this.e5.position.x = 1000;
  this.r4.position.x = 1000;
  this.d.position.x = 1000;
  this.e6.position.x = 1000;

  this.audio = new Audio();
	this.audio.src = "assets/sons/Azul.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ult, this);
}

Ult(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/RepitaU.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.Aaaa, this);
}
Aaaa(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/A.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Zul, this);
}
Zul(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Zul.mp3";
	this.audio.play();

  //game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Lho, this);
}
verde2()
{

  this.v2.position.x = 200;
  this.e5.position.x = 270;
  this.r4.position.x = 340;
  this.d.position.x = 405;
  this.e6.position.x = 480;

  this.add.sprite(200, 150,"Linha");
  this.add.sprite(270, 150,"Linha");
  this.add.sprite(340, 150,"Linha");
  this.add.sprite(410, 150,"Linha");
  this.add.sprite(480, 150,"Linha");

  this.v.position.x = 1000;
  this.e.position.x = 1000;
  this.r.position.x = 1000;
  this.m.position.x = 1000;
  this.e2.position.x = 1000;
  this.l.position.x = 1000;
  this.h.position.x = 1000;
  this.o.position.x = 1000;

  this.p.position.x = 1000;
  this.r2.position.x = 1000;
  this.e3.position.x = 1000;
  this.t.position.x = 1000;
  this.o2.position.x = 1000;

  this.a.position.x = 1000;
  this.m2.position.x = 1000;
  this.a2.position.x = 1000;
  this.r3.position.x = 1000;
  this.e4.position.x = 1000;
  this.l2.position.x = 1000;
  this.o3.position.x = 1000;

  this.a3.position.x = 1000;
  this.z.position.x = 1000;
  this.u.position.x = 1000;
  this.l3.position.x = 1000;

  this.audio = new Audio();
  this.audio.src = "assets/sons/Verde.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Ult5, this);
}

Ult5(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/RepitaU.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 3, 1, this.Ver2, this);
}
Ver2(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/Ver.mp3";
  this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.De, this);
}
De(){
  this.audio = new Audio();
  this.audio.src = "assets/sons/De.mp3";
  this.audio.play();

  //game.time.events.repeat(Phaser.Timer.SECOND * 2, 1, this.Re, this);
}
iniciar(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Proximoa.mp3";
	this.audio.play();
}

Proximo()
{
  game.state.start('TelaFinal');
}
}
