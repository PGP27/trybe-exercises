const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const nota = (right, student, func) => func(right, student);

const verify = (a1, a2) => {
    let count = 0;
    for (let i = 0; i < a1.length; i+=1) {
        if (a1[i] === a2[i]) {
            count += 1;
        } else {
            if (a1[i] !== 'N.A' && a2[i] !== 'N.A') count += 0.5;
        }
    }
    return count;
};

console.log(nota(rightAnswers, studentAnswers, verify));