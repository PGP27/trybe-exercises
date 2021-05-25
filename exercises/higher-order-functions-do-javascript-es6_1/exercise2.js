const verify = (n1, n2) => n1 === n2 ? 'Parabéns você ganhou' : 'Tente novamente';

const sorteio = (n, func) => {
    const rng = Math.floor(Math.random() * 5) + 1;
    return func(n, rng);
}

console.log(sorteio(1, verify));