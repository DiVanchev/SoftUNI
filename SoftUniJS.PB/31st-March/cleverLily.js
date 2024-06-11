function cleverLily(input) {
    let lillyAge = Number(input[0]);
    let priceOfWashingMachine = Number(input[1]);
    let priceForOne = Number(input[2]);

    let moneyCounter = 0;
    let toysCounter = 0;
    let currentMoney = 10;

    for (let i = 1; i <= lillyAge; i++) {
        if (i % 2 === 0) {
            moneyCounter += currentMoney;
            currentMoney += 10;
            moneyCounter--;
        }
        else {
            toysCounter++;
        }
    }

    moneyCounter += toysCounter * priceForOne;

    let diff = Math.abs(moneyCounter - priceOfWashingMachine);

    if (moneyCounter >= priceOfWashingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    }
    else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["21",
    "1570.98",
    "3"])

    ;