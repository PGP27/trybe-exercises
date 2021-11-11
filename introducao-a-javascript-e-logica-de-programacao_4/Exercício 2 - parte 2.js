function maior (array) {
    let m = array[0];
    let index = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > m) {
            m = array[i];
            index = i;
        };
    };
    return index;
};

let a = [1,6,9,2];

console.log(maior(a));