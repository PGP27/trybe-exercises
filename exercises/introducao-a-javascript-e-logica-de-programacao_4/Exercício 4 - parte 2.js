function maior (array) {
    let m = array[0].length;
    let index = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > m) {
            m = array[i].length;
            index = array[i];
        };
    };
    return index;
};

let a = ['joao', 'jonas', 'fernanda', 'claudia'];

console.log(maior(a));