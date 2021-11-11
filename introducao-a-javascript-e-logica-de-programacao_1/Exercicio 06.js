let a = "peao";

if (a.toLowerCase() == "peao") {
    console.log("uma casa para frente");
}
else if (a.toLowerCase() == "torre") {
    console.log("várias casas para frente, trás, esquerda e direita");
}
else if (a.toLowerCase() == "cavalo") {
    console.log("uma casa para frente ou para trás e duas casas para a esquerda ou para a direta, ou duas casas para frente ou para trás e uma casa para a esquerda ou para a direta");
}
else if (a.toLowerCase() == "bispo") {
    console.log("várias casas paras as diagonais");
}
else if (a.toLowerCase() == "rainha") {
    console.log("várias casas para qualquer direção");
}
else if (a.toLowerCase() == "rei") {
    console.log("uma casa para qualquer direção");
}