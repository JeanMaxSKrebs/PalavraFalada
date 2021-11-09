var i = 0;
// var imagens = [
//     "Abacaxi", "Alface", "Anel", "Bala", "Mala", "Abacate", "Barba", "Batata", "Bebe", "Bexiga", "Cabelo", "Bambu", "Banana", "Bebida", "Bico", "Boca", "Buzina", 
// "Cebola", "Lobo", "Onibus", "Zumbi", "Alce", "Ancora", "Bacia", "Caderno", "Capacete", "Cavalo", "Cenoura", "Cinto", "Circulo", "Coruja", "Cueca", "Cuia", "Jacu", "Pipoca", 
// "Saci", "Suco", "Acidente", "Amendoim", "Andando", "Armadilha", "Calcado", "", "Dedo", "Diamante", "Doce", "Duende", "Edu", "Explodi", "Ferradura", "Moeda", "Rede", "Arvore", 
// "Elefante", "Escova", "Espada", "Pente", "Alface", "Bife", "Cafeteira", "Faca", "Ferradura", "Figo", "Foca", "Fofoca", "", "Garfo", "Girafa", "Perfume", "Bigode", "Cagado", "Cogumelo", "Fogo", 
// "Gato", "Gelo", "Girafa", "Golfinho", "Gota", "Tigela", "Caixa", "Igreja", "Ilha", "Ima"
// ];

// var imagens = [
//     "jacare", "pijama", "cereja", "jegue", "laranjeira", "jipe", "joaninha", "tijolo", "beijo", "juiz", "caju", "laranja", "bolacha", "janela", "leao", "elefante", 
//     "controle", "limao", "galinha", "lobo", "envelope", "cavalo", "luva", "aluno", "maca", "cama", "melancia", "camelo", "perfume", "milho", "comida", "moto", "muro", 
//     "tumulo", "navio", "ovo", "ovelha", "lobo", "olho", "pato", "sapato", "lupa", "pena", "tapete", "xarope", "pinguim", "porco", "pipoca", "sapo", "pudim", "espuma", 
//     "rato", "buraco", "ancora", "remedio", "parede", "arvore", "rio", "ferida", "siri", "roda", "coroa", "ouro", "rua", "pirulito", "peru", "sapo", "casaco", "bolsa", 
//     "selo", "pulseira", "sino", "sofa", "tesoura", "urso", "suco", "presunto"
// ];

var imagens = [
    "tapete", "batata", "bota", "tesoura", "peteca", "tomate", "tigre", "latinha", "jabuti", 
"touro", "cartola", "apito", "tucano", "tatu", "urso", "luva", "urubu", "unha", "uva", "vaca", "gravata", "uva", "vela", "sorvete", "chave", "violao",
"aviao", "davi", "volante", "arvore", "ovo", "vulcao", "vuvuzela", "xarope", "enxada", "coxa", "xerife", "lixeira", "peixe", "bexiga", "abacaxi", "caixote", "lixo", 
"cinza", "zebra", "azeitona", "buzina", "zumbi"
];



var texto = "";

for (let index = 0; index < imagens.length; index++){
    // texto = texto + "\""+imagens[index]+"\")<br/>";
    // texto = texto + "\"pequeno3\", "+(index+i)+")<br/>";
    texto = texto + "\""+imagens[index]+"2\")<br/>";
    texto = texto + "\"grande3\", "+(index+i)+")<br/>";

}

escreve.innerHTML = texto;

/*


*/