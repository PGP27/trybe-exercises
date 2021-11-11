function repete (array) {
    let cont = [];
    for (let j = 0; j < array.length - 1; j++) {
        cont[j] = 0;
        for (let i = j + 1; i < array.length; i++) {
            if (array[j] === array[i]) {
                cont[j]++;
            };
        };
    };
    let m = cont[0];
    let index = 0;
    for (let k = 1; k < cont.length; k++) {
        if (cont[k] > m) {
            m = cont[k];
            index = k;
        };
    };
    return array[index];
};

let a = [2,1,1,2,6,2,3,5];

console.log(repete(a));