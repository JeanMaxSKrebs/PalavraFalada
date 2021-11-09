var game = new Phaser.Game(700,600, Phaser.CANVAS, '');

var PhaserGame = new Jogo();

var inicial = new Inicial();

var ranking = new Pontuacao();

game.state.add('Inicial', inicial, true);

game.state.add('Pontuacao', ranking, true);

game.state.add("Pontuacao", ranking, true);

game.state.add('Game', PhaserGame, false);
