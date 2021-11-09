class Projeto2
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

 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("ceu","assets/fundo17.jpg");
   this.load.image("Peixe","assets/Animais/Peixe2.png");
   this.load.image("Porco","assets/Animais/Porco2.png");
   
   this.load.image("P","assets/Letras/P.png");
   this.load.image("E","assets/Letras/E.png");
   this.load.image("I","assets/Letras/I.png");
   this.load.image("X","assets/Letras/X.png");
   this.load.image("T","assets/Letras/T.png");
   this.load.image("R","assets/Letras/R.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2aa.png");

   this.load.image("1","assets/1.png");
   this.load.image("2","assets/2.png");
   this.load.image("3","assets/3.png");


 }
 create()
 {
    this.add.sprite(0,0,"ceu");
    this.D =  game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.cursors = this.input.keyboard.createCursorKeys();



    this.add.sprite(50, 10,"pequeno3", 38);

    this.add.sprite(50, 210,"pequeno2", 46);



    //this.add.sprite(30, 315,"1");
    //this.add.sprite(30, 415,"2");
    //this.add.sprite(30, 515,"3");

    this.add.sprite(300, 70,"P");
    this.add.sprite(455, 65,"I");
    this.add.sprite(610, 65,"E");

    this.add.sprite(300, 215,"P");
    this.add.sprite(455, 220,"R");
    this.add.sprite(610, 225,"O");



    this.c = this.add.sprite(50, 400,"C");
    this.c.inputEnabled = true;
    this.c.events.onInputDown.add(this.C2, this);

    this.e = this.add.sprite(150, 500,"E");
    this.e.inputEnabled = true;
    this.e.events.onInputDown.add(this.E2, this);

    this.x = this.add.sprite(250, 400,"X");
    this.x.inputEnabled = true;
    this.x.events.onInputDown.add(this.X2, this);

    this.o = this.add.sprite(350, 510,"O");
    this.o.inputEnabled = true;
    this.o.events.onInputDown.add(this.O2, this);




    //this.add.sprite(100, 495,"P");
    //this.add.sprite(167, 485,"A");
    //this.add.sprite(250, 495,"T");
    //this.add.sprite(335, 500,"O");


    this.add.sprite(300, 125,"Linha");
    this.add.sprite(380, 125,"Linha");
    this.add.sprite(460, 125,"Linha");
    this.add.sprite(540, 125,"Linha");
    this.add.sprite(620, 125,"Linha");

    this.add.sprite(300, 270,"Linha");
    this.add.sprite(380, 270,"Linha");
    this.add.sprite(460, 270,"Linha");
    this.add.sprite(540, 270,"Linha");
    this.add.sprite(620, 270,"Linha");



    //this.add.sprite(275, 200,"Linha");
    //this.add.sprite(350, 200,"Linha");
    //this.add.sprite(425, 200,"Linha");
    //this.add.sprite(500, 200,"Linha");
    //this.add.sprite(575, 200,"Linha");

    //game.add.text(556,540,'PRÓXIMO',{fontSize:'30px',fill:'white'});

    this.proximo2 = this.add.sprite(550, 500,"Proximo");
    this.proximo2.inputEnabled = true;
    this.proximo2.events.onInputDown.add(this.Proximo2, this);

    game.add.text(556,560,'PRÓXIMO',{fontSize:'30px',fill:'white'});




}
 update()
 {

  //if(this.premios.grupo.children.length+this.inimigos.grupo.children.length < 4)


}
E2()
{
  this.e.position.x = 370;
  this.e.position.y = 65;
}
X2()
{
  this.x.position.x = 520;
  this.x.position.y = 75;
}
O2()
{
  this.o.position.x = 370;
  this.o.position.y = 225;
}
C2()
{
  this.c.position.x = 520;
  this.c.position.y = 205;
}
Proximo2()
{
  game.state.start('Projeto3');
}

}
