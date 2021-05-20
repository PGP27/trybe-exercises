const long = (word) => {
    let array = word.split(' ');
    let maior = array[0];
    for(let i = 1; i < array.length; i++) {
        array[i].length > maior.length ? maior = array[i] : null;
    }
    return maior;
}

console.log(long('Oi, meu nome é Pedro'));