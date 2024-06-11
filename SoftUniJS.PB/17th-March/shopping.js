function shopping(index){
    let budget = Number(index[0]);
    let gpu = Number(index[1]);
    let cpu = Number(index[2]);
    let ram = Number(index[3]);

    let totalGpu = gpu * 250;
    let cpuPrice = totalGpu * 0.35;
    let totalCpu = cpu * cpuPrice;
    let ramPrice = totalGpu * 0.10;
    let totalRam = ram * ramPrice;

    let totalPrice = totalGpu + totalCpu + totalRam;

    if(gpu > cpu){
        totalPrice = totalPrice - (totalPrice * 0.15);
    }
     let moneyY = Math.abs(budget - totalPrice);
    if(totalPrice <= budget){
        console.log(`You have ${moneyY.toFixed(2)} leva left!`);
    }
    else{
        console.log(`Not enough money! You need ${moneyY.toFixed(2)} leva more!`);
    }

}

shopping(["900",
"2",
"1",
"3"])
;