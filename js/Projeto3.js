class Projeto3
{
 //contructor de classe
 constructor()
 {




 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("PatoM","assets/Animais/PatoM.png");
   this.load.image("PatoF","assets/Animais/PATOF.png");
   this.load.image("I","assets/Letras/I.png");
   this.load.image("F","assets/Letras/F.png");
   this.load.image("S","assets/Letras/S.png");
   this.load.image("U","assets/Letras/U.png");
   this.load.image("L","assets/Letras/L.png");
   this.load.image("agua","assets/linha7a.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");

   this.load.image("inimigo2", "assets/inimigo2aa.png");


 }
 create()
 {
    this.play();
    this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();

      this.add.sprite(0, 550,"agua");

    this.add.sprite(550, 410,"PatoM");

    this.Pato = this.add.sprite(10, 485,"PatoF");
    this.add.sprite(-10, 350,"Linha");
    this.add.sprite(550, 350,"Linha");
    this.add.sprite(50, 350,"Linha");
    this.add.sprite(500, 350,"Linha");
    this.add.sprite(110, 350,"Linha");
    this.add.sprite(450, 350,"Linha");
    this.add.sprite(160, 350,"Linha");
    this.add.sprite(400, 350,"Linha");
    this.add.sprite(210, 350,"Linha");
    this.add.sprite(350, 350,"Linha");
    this.add.sprite(270, 350,"Linha");
    this.add.sprite(300, 350,"Linha");
    this.add.sprite(600, 350,"Linha");
    this.add.sprite(650, 350,"Linha");
    this.add.sprite(700, 350,"Linha");

    this.i = this.add.sprite(180, 250,"I");
    this.i.inputEnabled = true;
    this.i.events.onInputDown.add(this.I4, this);

    this.f = this.add.sprite(250, 250,"F");
    this.f.inputEnabled = true;
    this.f.events.onInputDown.add(this.F4, this);

    this.s = this.add.sprite(325, 255,"S");
    this.s.inputEnabled = true;
    this.s.events.onInputDown.add(this.S4, this);

    this.u = this.add.sprite(400, 255,"U");
    this.u.inputEnabled = true;
    this.u.events.onInputDown.add(this.U4, this);

    this.l = this.add.sprite(480, 250,"L");
    this.l.inputEnabled = true;
    this.l.events.onInputDown.add(this.L4, this);









    this.proximo = this.add.sprite(550, -50,"Proximo");
    this.proximo.inputEnabled = true;
    this.proximo.events.onInputDown.add(this.Proximo3, this);

    game.add.text(556,10,'PRÓXIMO',{fontSize:'30px',fill:'white'});




}
 update()
 {


}

I4()
{
  this.Pato.position.x = 106;
  this.audio = new Audio();
	this.audio.src = "assets/sons/F.mp3";
	this.audio.play();
}
F4()
{
  this.Pato.position.x = 202;
  this.audio = new Audio();
	this.audio.src = "assets/sons/S.mp3";
	this.audio.play();
}
S4()
{
  this.Pato.position.x = 298;
  this.audio = new Audio();
	this.audio.src = "assets/sons/U.mp3";
	this.audio.play();
}
U4()
{
  this.Pato.position.x = 394;
  this.audio = new Audio();
	this.audio.src = "assets/sons/L.mp3";
	this.audio.play();
}
L4()
{
  this.Pato.position.x = 490;

  game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, this.proximo6, this);
}
proximo6(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Proximo2.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 6, 1, this.aqui, this);
}
aqui(){
this.add.sprite(600, 70,"Seta");
}

Proximo3()
{
  game.state.start('Projeto4');
}
play(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Jogo3.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 6, 1, this.jogo3, this);
}
jogo3(){
  this.audio = new Audio();
	this.audio.src = "assets/sons/Jogo3a.mp3";
	this.audio.play();

  game.time.events.repeat(Phaser.Timer.SECOND * 4, 1, this.repita1, this);
}
repita1(){
this.audio = new Audio();
this.audio.src = "assets/sons/I.mp3";
this.audio.play();
}
}
