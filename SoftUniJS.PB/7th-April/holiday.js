function holiday(input){
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;

    let spendCounter = 0;
    let dayCounter = 0;
    let isSavedTheMoney = true;
    
    while (moneyAvailable < moneyNeeded){
        let action = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        dayCounter++;

        switch (action) {
            case "spend":
                spendCounter++;
                moneyAvailable -= money;
                if(moneyAvailable < 0){
                    moneyAvailable = 0;
                }
                break;
            case "save" :
                moneyAvailable += money;
                spendCounter = 0;
                break;
            default:
                console.log("No such thing!");
                break;    
        }
        if (spendCounter === 5){
            isSavedTheMoney = false;
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            break;
        }     
    }
    if(isSavedTheMoney){
    console.log(`You saved the money for ${dayCounter} days.`); 
    }
}
holiday(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
;
