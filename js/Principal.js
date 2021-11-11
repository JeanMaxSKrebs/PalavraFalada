
const width = 700;
const height = 600;
var game = new Phaser.Game(width, height, Phaser.CANVAS, "jogo");

//cria o State desejado (Objeto)
var PhaserGame = new Jogo();
var iniciar = new Inicial();
var jogo2 = new Jogo2();

var tela2 = new Tela2();

var fonemaA = new FonemaA();

var fonemaB = new FonemaB();

var fonemaC = new FonemaC();

var fonemaD = new FonemaD();

var fonemaE = new FonemaE();

var fonemaF = new FonemaF();

var fonemaG = new FonemaG();

var fonemaH = new FonemaH();

var fonemaI = new FonemaI();

var fonemaJ = new FonemaJ();

var fonemaL = new FonemaL();

var fonemaM = new FonemaM();

var fonemaN = new FonemaN();

var fonemaO = new FonemaO();

var fonemaP = new FonemaP();

var fonemaR = new FonemaR();

var fonemaS = new FonemaS();

var fonemaT = new FonemaT();

var fonemaU = new FonemaU();

var fonemaV = new FonemaV();

var fonemaW = new FonemaW();

var fonemaX = new FonemaX();

var fonemaY = new FonemaY();

var fonemaZ = new FonemaZ();

var gravar = new Gravar();

var projeto2 = new Projeto2();

var projeto3 = new Projeto3();

var projeto4 = new Projeto4();

var projeto5 = new Projeto5();

var telaFinal = new TelaFinal();


game.state.add("TelaFinal", telaFinal, true);

game.state.add("Projeto5", projeto5, true);

game.state.add("Projeto4", projeto4, true);

game.state.add("Projeto3", projeto3, true);

game.state.add("Projeto2", projeto2, true);

game.state.add("Gravar", gravar, true);

game.state.add("FonemaZ", fonemaZ, true);

game.state.add("FonemaY", fonemaY, true);

game.state.add("FonemaX", fonemaX, true);

game.state.add("FonemaW", fonemaW, true);

game.state.add("FonemaV", fonemaV, true);

game.state.add("FonemaU", fonemaU, true);

game.state.add("FonemaT", fonemaT, true);

game.state.add("FonemaS", fonemaS, true);

game.state.add("FonemaR", fonemaR, true);

game.state.add("FonemaP", fonemaP, true);

game.state.add("FonemaO", fonemaO, true);

game.state.add("FonemaN", fonemaN, true);

game.state.add("FonemaM", fonemaM, true);

game.state.add("FonemaL", fonemaL, true);

game.state.add("FonemaJ", fonemaJ, true);

game.state.add("FonemaI", fonemaI, true);

game.state.add("FonemaH", fonemaH, true);

game.state.add("FonemaG", fonemaG, true);

game.state.add("FonemaF", fonemaF, true);

game.state.add("FonemaE", fonemaE, true);

game.state.add("FonemaD", fonemaD, true);

game.state.add("FonemaC", fonemaC, true);

game.state.add("FonemaB", fonemaB, true);

game.state.add("FonemaA", fonemaA, true);

game.state.add("Tela2", tela2, true);

game.state.add("Jogo2", jogo2, true);

game.state.add("Iniciar", iniciar, true);

game.state.add("Game", PhaserGame, false);




