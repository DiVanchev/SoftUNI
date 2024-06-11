function multiplyTable(input) {
    let n = Number(input[0]);

    let thirdDigit = n % 10;
    let secondDigit = Math.floor(n / 10) % 10;
    let firstDigit = Math.floor(n / 100);

    for (let a = 1; a <= thirdDigit; a++) {
        for (let b = 1; b <= secondDigit; b++) {
            for (let c = 1; c <= firstDigit; c++) {
                let multiply = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${multiply};`);
            }
        }
    }
}
multiplyTable(["222"])