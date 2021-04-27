function final (word, end) {
    for (let i = end.length - 1; i >= 0; i--) {
        for (let j = i + word.length - end.length; j >= 0; j--) {
            if (end[i] != word[j]) {
                return false;
            }
            else{
                break;
            }
        };
    };
    return true;
};

let a = 'Trybe';
let b = 'be';

console.log(final(a,b));