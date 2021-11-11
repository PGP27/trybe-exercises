let n = 12;

if (n % 2 == 0) {
    let m = (n / 2) - 0.5;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m - 1 + m - i + 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k <= i + i + 1; k++) {
            process.stdout.write("*");
        }
        for (let l = m; l < n + m - i + 1; l++) {
            process.stdout.write(" ");
        }
        if (i == m - 1) {
            process.stdout.write(" ");
        }
        console.log();
    }
}
else {
    let m = (n / 2) + 0.5;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m - 1 + m - i + 1; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k <= i + i; k++) {
            process.stdout.write("*");
        }
        for (let l = m; l < n + m - i + 1; l++) {
            process.stdout.write(" ");
        }
        console.log();
    }
}
