class TelaFinal
{
 //contructor de classe
 constructor()
 {
   //Aqui vai os atributos de Fase
   this.cursors = null;
   this.piso = null;

 }
 init()
 {
   this.physics.startSystem(Phaser.Physics.ARCADE);

 }
 preload()

 {
   this.load.image("ceu","assets/fundo80.jpg");
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
    game.add.text(150,170,'FIM DE JOGO!',{fontSize:'60px',fill:'black'});
    game.add.text(180,240,'PARABÉNS!',{fontSize:'60px',fill:'black'});


    this.proximo2 = this.add.sprite(230, 300,"Proximo");
    this.proximo2.inputEnabled = true;
    this.proximo2.events.onInputDown.add(this.Proximo2, this);
    this.proximo2 = this.add.sprite(350, 300,"Proximo");
    this.proximo2.inputEnabled = true;
    this.proximo2.events.onInputDown.add(this.Proximo2, this);

    game.add.text(240,360,'JOGAR DE NOVO',{fontSize:'30px',fill:'white'});




}
 update()
 {

  //if(this.premios.grupo.children.length+this.inimigos.grupo.children.length < 4)


}
Proximo2()
{
  game.state.start('Iniciar');
}

}
