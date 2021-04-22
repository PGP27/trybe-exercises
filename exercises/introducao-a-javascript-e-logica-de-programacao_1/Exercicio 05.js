let a = 30;
let b = 60;
let c = 90;
let d = 0;

if (a >= 180 || a <= 0 || b >= 180 || b <= 0 || c >= 180 || c <= 0) {
    console.log("Erro: existe um ângulo inválido");
    d = 1;
}
if (a + b + c == 180 && d == 0) {
    console.log("true");
}
else {
    console.log("false");
}