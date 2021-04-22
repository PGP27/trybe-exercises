let custo = 50;
let venda = 80;

if (custo < 0 || venda < 0) {
    console.log("Existe(m) valor(es) inválido(s)");
}

let lucro = (1000 * venda) - (custo * 1200);

console.log(lucro);