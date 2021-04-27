function somaN (numero) {
    let n = 0;
    for (let i = 1; i <= numero; i++) {
        n += i;
    };
    return n;
};

console.log(somaN(6));