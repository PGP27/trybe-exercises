let n = 5;
let m = n;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m - 1; j++) {
        process.stdout.write(" ");
    }
    for (let k = 0; k <= i; k++) {
        process.stdout.write("*");
    }
    m--;
    console.log();
}