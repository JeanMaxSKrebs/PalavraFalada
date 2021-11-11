class Inicial
{
  constructor()
  {
    this.cont = null;
    this.info = null;
  }
  preload()
  {
    let tamanhoTexto = 60;
    
    var style = { font: "bold "+tamanhoTexto+"px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    console.log(style)
    //  The Text is positioned at 0, 100
    this.text = game.add.text(width/2, height/2, "CARREGANDO ....", style);
    this.text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    this.text.setTextBounds(0, 0, 0, 0);
    game.stage.backgroundColor = "#1D8B8B";
    this.load.image("fundo","assets/TelaOficial.jpeg");
    this.load.image("fundo2","assets/fundoInicial2aa.png");
    this.load.image("fundo3","assets/fundoInicial4a.png");
    this.load.image("fundo4","assets/fundoInicial5a.png");
    this.load.image("play","assets/BotaoInicial.jpeg");
    this.load.image("menu","assets/BotaoMenu2.png");
    this.load.image("quadrado","assets/QuadradoInfo.png");
    this.load.image("voltar","assets/VoltarInicial.png");
    this.load.image("info","assets/InfoTeste3.jpg");
    this.load.image("ajuda","assets/ComoJogar.jpg");
     this.load.image("tex1","assets/tex1.png");
    this.load.image("tex2","assets/tex2.png");
    this.load.image("voltar2","assets/VoltarInicial22.png");
    this.load.image("voltar3", "assets/VoltarInicial2.png");
    this.load.image("ceuTela2","assets/Fundo123.png");
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   
   this.load.image("Micro", "assets/Micro22.png");
   this.load.image("FF", "assets/Linhafundo.png");
   this.load.image("FF2", "assets/Fundo1234.png");
   this.load.image("Text", "assets/Text.png");
   this.load.image("Text2", "assets/Text2.png");
   this.load.image("FF3", "assets/FF.png");
   this.load.image("ceuA","assets/A1.png");
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("FF3","assets/FFFF.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("LA","assets/LetraA.png");
   this.load.image("Ane","assets/Ane.png");
   this.load.image("Bal","assets/Bal.png");
   this.load.image("Mal","assets/Mal.png");
   this.load.image("Alf","assets/Alf.png");
  
   this.load.image("Aba","assets/Aba4.png");
   this.load.image("FA1","assets/FBE.png");
   this.load.image("FA2","assets/FA2.png");
   this.load.image("FA3","assets/FA3.png");
   this.load.image("FA5","assets/FA5.png");
   this.load.image("FA4","assets/FA4.png");
   this.load.image("Repetir","assets/Repetir2.png");
  
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");

   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("FF3","assets/Fundo321.PNG");
   this.load.image("LB","assets/LetraB.png");
   this.load.image("Escolha","assets/Escolha4.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("Bol","assets/Bol.png");
   this.load.image("Bic","assets/Bic.png");
   this.load.image("Abe","assets/Abe.png");
   this.load.image("Ban","assets/Ban.png");
   this.load.image("Bul","assets/Bul.png");
   this.load.image("Ba","assets/Ba.png");
   this.load.image("Be","assets/Be.png");
   this.load.image("Bi","assets/Bi.png");
   this.load.image("Bo","assets/Bo.png");
   this.load.image("Bu","assets/Bu.png");
   this.load.image("Aba2a","assets/Aba2a.png");
   this.load.image("Bar","assets/Bar.png");
   this.load.image("Bat","assets/Bat.png");
   this.load.image("FBA1","assets/FBA1.png");
   this.load.image("FBA2","assets/FBA2.png");
   this.load.image("FBA3","assets/FBA3.png");
   this.load.image("Começar2","assets/Comecar2.png");
   this.load.image("Voltar2","assets/Voltar.png");
   this.load.image("Repetir","assets/Repetir.png");
   this.load.image("Repetir2","assets/Repetir2.png");
   this.load.image("Cab","assets/Cab.png");
   this.load.image("Beb","assets/Beb2.png");
   this.load.image("Bex","assets/Bex4.png");
   this.load.image("FBI2","assets/FBI2.png");
   this.load.image("FBI3","assets/FBI3.png");
   this.load.image("FBI4","assets/FBI4.png");
   this.load.image("Bic2","assets/Bic2.png");
   this.load.image("FBE2","assets/FBE2.png");
   this.load.image("FBE3","assets/FBE3.png");
   this.load.image("FBI","assets/FBI.png");
   this.load.image("Beb2","assets/Beb.png");
   this.load.image("Zum","assets/Zum.png");
   this.load.image("FBO2","assets/FBO2.PNG");
   this.load.image("FBO3","assets/FBO3.PNG");
   this.load.image("FBO4","assets/FBO4.PNG");
   this.load.image("Boc","assets/Boc.png");
   this.load.image("Lob","assets/Lob.png");
   this.load.image("Ceb","assets/Ceb2.png");
   this.load.image("Ban","assets/Ban.png");
   this.load.image("Bul","assets/Bul.png");
   this.load.image("Oni","assets/Oni.png");
   this.load.image("Bam","assets/Bam2.png");
   this.load.image("Buz","assets/Buz3.png");
   this.load.image("FBU1","assets/FBU1.png");
   this.load.image("FBU2","assets/FBU2.png");
   this.load.image("FBU3","assets/FBU3.png");
    
   this.load.image("Roxo2", "assets/Roxo2.png");
   this.load.image("FF3","assets/Preto.PNG");
   this.load.image("LC","assets/LetraC.PNG");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("Cav","assets/Cav.png");
   this.load.image("Pip","assets/Pip.png");
   this.load.image("Aba","assets/Aba22.png");
   this.load.image("Cen","assets/Cen.png");
   this.load.image("Cin","assets/Cin.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("FCA","assets/FCA.png");
   this.load.image("FCE","assets/FCE.png");
   this.load.image("FCI","assets/FCI.png");
   this.load.image("FCO","assets/FCO.png");
   this.load.image("FCU","assets/FCU.png");
   this.load.image("Ca","assets/Ca.png");
   this.load.image("Ce","assets/Ce.png");
   this.load.image("Ci","assets/Ci.png");
   this.load.image("Co","assets/Co.png");
   this.load.image("Cu","assets/Cu.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("FCA1","assets/FCA1.png");
   this.load.image("FCA2","assets/FCA2.png");
   this.load.image("FBA1","assets/FBA1.png");
   this.load.image("FCA3","assets/FCA3.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Linha2","assets/LinhaBE.png");

   this.load.image("FCE1","assets/FCE.png");
   this.load.image("FCE2","assets/FCE2.png");
   this.load.image("FCE3","assets/FCE3.png");
   this.load.image("Cen","assets/Cen.png");
   this.load.image("Cap","assets/Cap.png");
   this.load.image("Alc","assets/Alc.png");

   this.load.image("FCI1","assets/FCI.png");
   this.load.image("FCI2","assets/FCI2.png");
   this.load.image("FCI3","assets/FCI3.png");
   this.load.image("Cin","assets/Cin.png");
   this.load.image("Bac","assets/Bac.png");
   this.load.image("Sac","assets/Sac.png");

   this.load.image("FCO1","assets/FCO.png");
   this.load.image("FCO2","assets/FCO2.png");
   this.load.image("FCO3","assets/FCO3.png");
   this.load.image("Cor","assets/Cor.png");
   this.load.image("Anc","assets/Anc2.png");
   this.load.image("Suc","assets/Suc.png");

   this.load.image("FCU1","assets/FCU1.png");
   this.load.image("FCU2","assets/FCU2.png");
   this.load.image("FCU3","assets/FCU3.png");
   this.load.image("Cue","assets/Cue.png");
 
   this.load.image("Jac","assets/Jac.png");

   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
 
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("LD","assets/LetraD.png");
  this.load.image("Começar2","assets/Comecar.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Repetir2","assets/Repetir.png");
   this.load.image("Dad","assets/Dad.png");
   this.load.image("And","assets/And.png");
   this.load.image("Moe","assets/Moe.png");
   this.load.image("FDA1","assets/FDA.png");
   this.load.image("FDA2","assets/FDA2.png");
   this.load.image("FDA3","assets/FDA3.png");
   this.load.image("Da","assets/Da.png");
   this.load.image("De","assets/De.png");
   this.load.image("Di","assets/Di.png");
   this.load.image("Do","assets/Do.png");
   this.load.image("Du","assets/Du.png");
   this.load.image("Fa","assets/Fa.png");
   this.load.image("Escolha2","assets/Escolha5.png");

   this.load.image("Aci","assets/Aci.png");
   this.load.image("Red","assets/Red.png");
   this.load.image("Ded","assets/Ded.png");
   this.load.image("FDE1","assets/FDE1.png");
   this.load.image("FDE2","assets/FDE2.png");
   this.load.image("FDE3","assets/FDE3.png");

   this.load.image("Exp","assets/Exp.png");
   this.load.image("Arm","assets/Arm.png");
   this.load.image("Dia","assets/Dia.png");
   this.load.image("FDI1","assets/FDI1.png");
   this.load.image("FDI2","assets/FDI2.png");
   this.load.image("FDI3","assets/FDI3.png");

   this.load.image("Doc","assets/Doc.png");
   this.load.image("Ame","assets/Ame.png");
   this.load.image("Cal","assets/Cal.png");
   this.load.image("FDO1","assets/FDO1.png");
   this.load.image("FDO2","assets/FDO2.png");
   this.load.image("FDO3","assets/FDO3.png");

   this.load.image("Due","assets/Due.png");
   this.load.image("Fer","assets/Fer.png");
   this.load.image("EduA","assets/EduA.png");
   this.load.image("FDU1","assets/FDU1.png");
   this.load.image("FDU2","assets/FDU2.png");
   this.load.image("FDU3","assets/FDU3.png");
    
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("FE1","assets/FE1.png");
   this.load.image("FE2","assets/FE2.png");
   this.load.image("FE3","assets/FE3.png");
   this.load.image("FE4","assets/FE4.png");
   this.load.image("FE5","assets/FE5.png");
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
  
   this.load.image("Repetir","assets/Repetir2.png");

   this.load.image("Pen","assets/Pen.png");
   this.load.image("Ele","assets/Ele.png");
   this.load.image("Esp","assets/Esp.png");
   this.load.image("Esc","assets/Esc.png");
   this.load.image("Arv","assets/Arv.png");
  
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");

   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("LD","assets/Ld2.png");
   this.load.image("LF","assets/LetraF.png");
   this.load.image("Começar2","assets/Comecar.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Repetir2","assets/Repetir.png");
   this.load.image("Escolha2","assets/Escolha5.png");

   this.load.image("Fa","assets/Fa.png");
   this.load.image("Fe","assets/Fe.png");
   this.load.image("Fi","assets/Fi.png");
   this.load.image("Fo","assets/Fo.png");
   this.load.image("Fu", "assets/Fu.png");

   this.load.image("Fac","assets/Fac.png");
   this.load.image("Alf","assets/Alf2.png");
   this.load.image("Gir","assets/Gir.png");
   this.load.image("FFA1","assets/FFA1.png");
   this.load.image("FFA2","assets/FA5.png");
   this.load.image("FFA3","assets/FFA3.png");

   this.load.image("Fer2","assets/Fer2.png");
   this.load.image("Caf","assets/Caf.png");
   this.load.image("Bif","assets/Bif.png");
   this.load.image("FFE1","assets/FFE1.png");
   this.load.image("FFE2","assets/FFE2.png");
   this.load.image("FFE3","assets/FFE3.png");

   this.load.image("Fig","assets/Fig.png");
   this.load.image("Alf","assets/Alf.png");
   this.load.image("Gir","assets/Gir.png");
   this.load.image("FFI1","assets/FFI1.png");
   this.load.image("FFI2","assets/FFI2.png");
   this.load.image("FFI3","assets/FFI3.png");

   this.load.image("Foc","assets/Foc.png");
   this.load.image("Fof","assets/Fof.png");
   this.load.image("Gar","assets/Gar.png");
   this.load.image("FFO1","assets/FFO1.png");
   this.load.image("FFO2","assets/FFO2.png");
   this.load.image("FFO3","assets/FFO3.png");

   this.load.image("Fur","assets/Fur.png");
   this.load.image("Alf","assets/Alf.png");
   this.load.image("Gir","assets/Gir.png");
   this.load.image("FFU1","assets/FFU1.png");
   this.load.image("FFU2","assets/FFU2.png");
   this.load.image("FFU3","assets/FFU3.png");

   this.load.image("Ga","assets/Ga.png");
   this.load.image("Ge","assets/Ge.png");
   this.load.image("Gi","assets/Gi.png");
   this.load.image("Go","assets/Go.png");
   this.load.image("Gu","assets/Gu.png");
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
  
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("LD","assets/Ld2.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Repetir2","assets/Repetir.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
  
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("inimigo2", "assets/inimigo2aa.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("LD","assets/LetraD.png");
   this.load.image("LE","assets/LetraE.png");

   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Repetir2","assets/Repetir.png");
   this.load.image("Escolha2","assets/Escolha5.png");

   this.load.image("Gat","assets/Gat.png");
   this.load.image("Cag","assets/Cag.png");
   this.load.image("Bex","assets/Bex2.png");
   this.load.image("FGA1","assets/FGA1.png");
   this.load.image("FGA2","assets/FGA2.png");
   this.load.image("FGA3","assets/FBI4.png");

   this.load.image("Gel","assets/Gel.png");
   this.load.image("Tig","assets/Tig.png");
   this.load.image("Bex","assets/Bex2.png");
   this.load.image("FGE1","assets/FGE1.png");
   this.load.image("FGE2","assets/FGE2.png");
   this.load.image("FGA3","assets/FBI4.png");

   this.load.image("Gir","assets/Gir2.png");
   this.load.image("Cag","assets/Cag.png");
   this.load.image("Bex","assets/Bex2.png");
   this.load.image("FGI1","assets/FGI1.png");
   this.load.image("FGA2","assets/FGA2.png");
   this.load.image("FGA3","assets/FBI4.png");

   this.load.image("Got","assets/Got.png");
   this.load.image("Big","assets/Big.png");
   this.load.image("Fog","assets/Fog.png");
   this.load.image("FGO1","assets/FGO1.png");
   this.load.image("FGO2","assets/FGO2.png");
   this.load.image("FGO3","assets/FGO3.png");

   this.load.image("Cog","assets/Cog.png");
   this.load.image("Cag","assets/Cag.png");
   this.load.image("Bex","assets/Bex2.png");
   this.load.image("FGU1","assets/FGU1.png");
   this.load.image("FGU2","assets/FGU2.png");
   this.load.image("FGA3","assets/FBI4.png");

   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("FF3","assets/FFFF.png");
   this.load.image("Escolha","assets/Escolha2.png");
  
   this.load.image("FI1","assets/FI1.png");
   this.load.image("FI2","assets/FBE.png");
   this.load.image("FI3","assets/FI3.png");
   this.load.image("FI5","assets/FI5.png");
   this.load.image("FI4","assets/FI4.png");
   this.load.image("Repetir","assets/Repetir2.png");

   this.load.image("Cai","assets/Cai.png");
   this.load.image("Ima2a","assets/Ima2a.png");
   this.load.image("Igr","assets/Igr.png");
   this.load.image("Aba","assets/Aba.png");
   this.load.image("Ilh","assets/Ilh.png");

   this.load.image("Jegue","assets/FonemaJ/Jegue.png");
   this.load.image("Jipe","assets/FonemaJ/Jipe.png");
   this.load.image("Juiz","assets/FonemaJ/Juiz.JFIF");
   this.load.image("Tijolo","assets/FonemaJ/Tijolo.png");
   this.load.image("ceu","assets/fundo321.png");
   this.load.image("Igreja","assets/FonemaI/Igreja.png");
   this.load.image("Ilha","assets/FonemaI/Ilha.png");
   this.load.image("Ima","assets/FonemaI/Ima.png");
   this.load.image("Caixa","assets/FonemaI/Caixa.png");
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("FF3","assets/FFFF.png");
   //fica esse
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Voltar2","assets/Voltar.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Escolha","assets/Escolha2.png");
  
   this.load.image("FI1","assets/FI1.png");
   this.load.image("FI2","assets/FBE.png");
   this.load.image("FI3","assets/FI3.png");
   this.load.image("FI5","assets/FI5.png");
   this.load.image("FI4","assets/FI4.png");
   this.load.image("Repetir","assets/Repetir2.png");
   this.load.image("Escolha","assets/Escolha2.png");

   this.load.image("Ja","assets/Ja.png");
   this.load.image("Je","assets/Je.png");
   this.load.image("Ji","assets/Ji.png");
   this.load.image("Jo","assets/Jo.png");
   this.load.image("Ju","assets/Ju.png");

   this.load.image("FJA1","assets/FJA1.png");
   this.load.image("FJA2","assets/FJA2.png");
   this.load.image("FJA3","assets/FJA3.png");
   this.load.image("Jac","assets/Jac2.png");
   this.load.image("Pij","assets/Pij.png");
   this.load.image("Cer","assets/Cer.png");

   this.load.image("FJE1","assets/FJE1.png");
   this.load.image("FJE2","assets/FJE2.png");
   this.load.image("FJE3","assets/FJE3.png");
   this.load.image("Jeg","assets/Jeg.png");
   this.load.image("Lar","assets/Lar.png");
   this.load.image("Alc","assets/Alc.png");

   this.load.image("FJI1","assets/FJI1.png");
   this.load.image("FJI2","assets/FJI2.png");
   this.load.image("FJI3","assets/FJI3.png");
   this.load.image("Jip","assets/Jip.png");
   this.load.image("Bac","assets/Bac.png");
   this.load.image("Sac","assets/Sac.png");

   this.load.image("FJO1","assets/FJO1.png");
   this.load.image("FJO2","assets/FJO2.png");
   this.load.image("FJO3","assets/FJO3.png");
   this.load.image("Joa","assets/Joa.png");
   this.load.image("Tij","assets/Tij.png");
   this.load.image("Bei","assets/Bei.png");

   this.load.image("FJU1","assets/FJU1.png");
   this.load.image("FJU2","assets/FJU2.png");
   this.load.image("FJU3","assets/FJU3.png");
   this.load.image("Jui","assets/Jui.png");
   this.load.image("Cir","assets/Cir2.png");
   this.load.image("Caj","assets/Caj.png");

   this.load.image("LJ","assets/LetraJ.png");
   this.load.image("LG","assets/LetraG.png");
   this.load.image("LI","assets/LetraI.png");
   this.load.image("Per","assets/Per3.png");

 
   this.load.image("LL","assets/LetraL.png");
   this.load.image("La","assets/La.png");
   this.load.image("Le","assets/Le.png");
   this.load.image("Li","assets/Li.png");
   this.load.image("Lo","assets/Lo.png");
   this.load.image("Lu","assets/Lu.png");
   this.load.image("Escolha2","assets/Escolha5.png");

   this.load.image("FLA1","assets/FLA1.png");
   this.load.image("FLA2","assets/FLA2.png");
   this.load.image("FLA3","assets/FLA3.png");
   this.load.image("Lar","assets/Lar2.png");
   this.load.image("Jan","assets/Jan.png");
   this.load.image("Bol","assets/Bol2.png");

   this.load.image("FLE1","assets/FLE1.png");
   this.load.image("FLE2","assets/FLE2.png");
   this.load.image("FLE3","assets/FLE3.png");
   this.load.image("Lea","assets/Lea.png");
   this.load.image("Ele","assets/Ele2.png");
   this.load.image("Con","assets/Con2.png");

   this.load.image("FLI1","assets/FLI1.png");
   this.load.image("FLI2","assets/FLI2.png");
   this.load.image("FLI3","assets/FLI3.png");
   this.load.image("Lim","assets/Lim.png");
   this.load.image("Gal","assets/Gal.png");

   this.load.image("FLO1","assets/FLO1.png");
   this.load.image("FLO2","assets/FLO2.png");
   this.load.image("FLO3","assets/FLO3.png");
   this.load.image("Lob","assets/Lob2.png");
   this.load.image("Env","assets/Env.png");
   this.load.image("Cav","assets/Cav2.png");

   this.load.image("FLU1","assets/FLU1.png");
   this.load.image("FLU2","assets/FLU2.png");
   this.load.image("FLU3","assets/FLU3.png");
   this.load.image("Luv","assets/Luv.png");
   this.load.image("Alu","assets/Alu.png");
   
   this.load.image("Seta","assets/Seta3aa.png");
   this.load.image("Seta2","assets/Seta4.png");
   this.load.image("Proximo","assets/Proximo4.png");
   this.load.image("Linha","assets/Linha2a.png");
   this.load.image("Linha2","assets/LinhaBE3.png");
   this.load.image("Quadrado","assets/Quadrado3.png");
   this.load.image("LM","assets/LetraM.png");

   this.load.image("inimigo2", "assets/inimigo2aa.png");

   this.load.image("Ma","assets/Ma.png");
   this.load.image("Me","assets/Me.png");
   this.load.image("Mi","assets/Mi.png");
   this.load.image("Mo","assets/Mo.png");
   this.load.image("Mu","assets/Mu.png");
   this.load.image("Escolha2","assets/Escolha5.png");
   this.load.image("Voltar","assets/Voltar2.png");
   this.load.image("Voltar2","assets/Voltar.png");
   this.load.image("Começar","assets/Comecar2.png");
   this.load.image("Escolha","assets/Escolha2.png");
   this.load.image("Repetir","assets/Repetir2.png");

   this.load.image("FMA1","assets/FMA1.png");
   this.load.image("FMA2","assets/FMA2.png");
   this.load.image("FMA3","assets/FMA3.png");
   this.load.image("Mac","assets/Mac3.png");
   this.load.image("Arm","assets/Arm.png");
   this.load.image("Cam","assets/Cam.png");

   this.load.image("FME1","assets/FME1.png");
   this.load.image("FME2","assets/FME2.png");
   this.load.image("FME3","assets/FME3.png");
   this.load.image("Mel","assets/Mel2.png");
   this.load.image("Cam2","assets/Cam2.png");
   this.load.image("Per","assets/Per.png");

   this.load.image("FMI1","assets/FMI1.png");
   this.load.image("FMI2","assets/FMI2.png");
   this.load.image("FMI3","assets/FMI3.png");
   this.load.image("Mil","assets/Mil.png");
   this.load.image("Com","assets/Com.png");

   this.load.image("FMO1","assets/FMO1.png");
   this.load.image("FMO2","assets/FMO2.png");
   this.load.image("FMO3","assets/FMO3.png");
   this.load.image("Mot","assets/Mot.png");

   this.load.image("FMU1","assets/FMU1.png");
   this.load.image("FMU2","assets/FMU2.png");
   this.load.image("FMU3","assets/FMU3.png");
   this.load.image("Mur","assets/Mur.png");
   this.load.image("Tum","assets/Tum.png");
   this.load.image("FSO1","assets/FSO1.png");
   this.load.image("FSO2","assets/FSO2.png");
   this.load.image("FSO3","assets/FSO3.png");
   this.load.image("Sof","assets/Sof.png");
   this.load.image("Urs","assets/Urs.png");
   this.load.image("Tes","assets/Tes2.png");

   this.load.image("FSU1","assets/FSU1.png");
   this.load.image("FSU2","assets/FSU2.png");
   this.load.image("FSU3","assets/FSU3.png");
   this.load.image("Suc","assets/Suc2.png");
   this.load.image("Pre","assets/Pre.png");

   this.load.image("LU","assets/LetraU.png");

   this.load.image("FU1","assets/FU1.png");
   this.load.image("FU2","assets/FU2.png");
   this.load.image("FU3","assets/FU3.png");
   this.load.image("FU5","assets/FU5.png");
   this.load.image("FU4","assets/FU4.png");
   this.load.image("Repetir","assets/Repetir2.png");

   this.load.image("Urs","assets/Urs2.png");
   this.load.image("Uru","assets/Uru.png");
   this.load.image("Uva3","assets/Uva.png");
   this.load.image("Luv","assets/Luv2.png");
   this.load.image("Unh","assets/Unh.png");
   this.load.image("Va","assets/Va.png");
   this.load.image("Ve","assets/Ve.png");
   this.load.image("Vi","assets/Vi.png");
   this.load.image("Vo","assets/Vo.png");
   this.load.image("Vu","assets/Vu.png");
   
   this.load.image("FVA1","assets/FVA1.png");
   this.load.image("FVA2","assets/FVA2.png");
   this.load.image("FVA3","assets/FVA3.png");
   this.load.image("Vac","assets/Vac.png");
   this.load.image("Gra","assets/Gra.png");
   this.load.image("Uva3","assets/Uva2.png");

   this.load.image("FVE1","assets/FVE1.png");
   this.load.image("FVE2","assets/FVE2.png");
   this.load.image("FVE3","assets/FVE3.png");
   this.load.image("Vel","assets/Vel.png");
   this.load.image("Sor","assets/Sor2.png");
   this.load.image("Cha","assets/Cha.png");

   this.load.image("FVI1","assets/FVI1.png");
   this.load.image("FVI2","assets/FVI2.png");
   this.load.image("FVI3","assets/FVI3.png");
   this.load.image("Vio","assets/Vio.png");
   this.load.image("Avi","assets/Avi.png");
   this.load.image("Dav","assets/Dav.png");

   this.load.image("FVO1","assets/FVO1.png");
   this.load.image("FVO2","assets/FVO2.png");
   this.load.image("FVO3","assets/FVO3.png");
   this.load.image("Vol","assets/Vol.png");
   this.load.image("Arv","assets/Arv3.png");
   this.load.image("Ovo3","assets/Ovo2.png");

   /*var mai=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

   mai.forEach(element => {
    this.load.image(element,"assets/Letra/"+element+".png");
   });
   */

   game.load.spritesheet('letras', 'assets/Letra/alfabeto.png', 100, 75, 26);
   game.load.spritesheet('pequeno', 'assets/FonemaA/p.png', 125, 125, 83);
   game.load.spritesheet('pequeno2', 'assets/FonemaA/p2.png', 125, 125, 77);
   game.load.spritesheet('pequeno3', 'assets/FonemaA/p3.png', 125, 125, 48);
   game.load.spritesheet('grande', 'assets/FonemaA/g.png', 300, 300, 83);
   game.load.spritesheet('grande2', 'assets/FonemaA/g2.png', 300, 300, 77);
   game.load.spritesheet('grande3', 'assets/FonemaA/g3.png', 300, 300, 48);

  }
  create()
  {

    //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //game.scale.pageAligHorizontally = true;
    //game.scale.pageAlignVertically = true;

    this.fundo = this.add.sprite(0,0,"fundo");

    //var option = this.add.sprite(10,10,"Settings");

    //var loja = this.add.sprite(640,10,"Shop");

    //var info = this.add.sprite(10,540,"Info");
    this.play = this.add.sprite(215, 320,"play");
    this.play.inputEnabled = true;
    this.play.events.onInputDown.add(this.vaiJogar, this);

    this.menu = this.add.sprite(560, 40,"menu");
    this.menu.inputEnabled = true;
    this.menu.events.onInputDown.add(this.vaiQuadrado, this);

    /*var voltar = this.add.sprite(600, 500,"voltar3");
    voltar.inputEnabled = true;
    voltar.events.onInputDown.add(this.VoltarInicio, this);*/

    this.quadrado = this.add.sprite(45,800,"quadrado");

  }

    vaiJogar()
  {
    game.state.start('Tela2');
  }
    vaiQuadrado()
  {
    game.time.events.repeat(Phaser.Timer.SECOND * 0.00001, 50, this.vaiQuadrado2, this);
  }
    vaiQuadrado2(){
      this.cont = "1";
      if(this.cont == "1"){
      this.quadrado.y = this.quadrado.y -15;
    }
      this.fundo2 = this.add.sprite(0,0,"fundo2");
      this.fundo2.sendToBack();
      this.fundo.sendToBack();
      this.play.sendToBack();
      this.menu.sendToBack();
      if(this.quadrado.y == 170){
        this.vaiQuadrado3();
        this.quadrado.y = this.quadrado.y + 15;
      }

    }

    fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {

      text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
    
      var newImage = game.add.image(x, y, cacheKey);
    
      newImage.scale.set(0.3);
    
      x += newImage.width + 20;
    
      if (x > 700)
      {
        x = 32;
        y += 332;
      }
    
    }
      vaiQuadrado3(){
        this.quadrado.y = 170;
        this.voltar = this.add.sprite(294, 449,"voltar");
        this.voltar.inputEnabled = true;
        this.voltar.events.onInputDown.add(this.voltarInicial, this);

        this.info = this.add.sprite(183, 275,"info");
        this.info.inputEnabled = true;
        this.info.events.onInputDown.add(this.Info2, this);

        this.ajuda = this.add.sprite(400, 275,"ajuda");
        this.ajuda.inputEnabled = true;
        this.ajuda.events.onInputDown.add(this.Ajuda, this);

        this.tex1 = this.add.sprite(165, 390,"tex1");

        this.tex2 = this.add.sprite(380, 390,"tex2");

        //game.add.text(300,15,"INFORMAÇÕES",{fontSize:'15px',fill:'black'});
      }
      voltarInicial(){
        game.state.start('Iniciar');
      }
      Info2(){

        this.info.sendToBack();
        this.ajuda.x = 1000;
        this.tex1.x = 1000;
        this.tex2.x = 1000;
        this.quadrado.sendToBack();
        this.fundo3 = this.add.sprite(0,0,"fundo3");

        this.voltar1 = this.add.sprite(600, 510,"voltar2");
        this.voltar1.inputEnabled = true;
        this.voltar1.events.onInputDown.add(this.Voltar, this);
      }

      Ajuda(){

        this.fundo4 = this.add.sprite(0,0,"fundo4");
        this.info.position.x = 1000;
        this.ajuda.x = 1000;
        this.tex1.x = 1000;
        this.tex2.x = 1000;
        this.quadrado.sendToBack();

        this.voltar2 = this.add.sprite(600, 510,"voltar2");
        this.voltar2.inputEnabled = true;
        this.voltar2.events.onInputDown.add(this.Voltar, this);

        /*game.add.text(20,150,'Olá, aqui vou ensinar você a como jogar!!!',{fontSize:'30px',fill:'white'});
        game.add.text(50,200,'1- Escolha uma letra:',{fontSize:'30px',fill:'white'});
        game.add.text(50,250,'2- Escolha uma das 5 sílabas da letra que',{fontSize:'30px',fill:'white'});
        game.add.text(50,300,'você escolheu:',{fontSize:'30px',fill:'white'});
        game.add.text(50,350,'3- Escolha a imagem que deseja aprender: ',{fontSize:'30px',fill:'white'});
        game.add.text(50,400,'4- Clique em começar:',{fontSize:'30px',fill:'white'});
        game.add.text(50,450,'5- Repita a palavra:',{fontSize:'30px',fill:'white'});*/
      }

      Voltar()
      {
        game.state.start('Iniciar');
      }

      VoltarInicio()
      {
        document.location.href = "index.html";
      }

}
