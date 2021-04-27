function palindromo (palavra) {
    let n = palavra.length;
    console.log(n);
    for (let i = 0; i <= n; i++) {
        if (palavra[i] != palavra[n - 1]) {
            return false;
        }
        n--;
    }
    return true;
};

let word = "arara"

console.log(palindromo(word));