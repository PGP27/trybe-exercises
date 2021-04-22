let salarioBruto = 3000;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto * 0.92;
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto * 0.91;
}

else if (salarioBruto >= 1556.93 && salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto * 0.89;
}

else {
    salarioLiquido = salarioBruto - 570.88;
}

if (salarioLiquido <= 1903.98) {
    salarioLiquido = salarioLiquido;
}

else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.075) - 142.80);
}

else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.15) - 354.8);
}

else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.225) - 636.13);
}

else {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.275) - 869.36);
}

console.log(salarioLiquido);
