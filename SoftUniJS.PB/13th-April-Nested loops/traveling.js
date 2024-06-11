function traveling(input){
    let index = 0;
    let destination = input[index];
    index++;
    let budget = Number(input[index]);
    index++;

    let savingsCounter = 0;

    while(destination !== "End"){
        let currentDestination = destination;

        while(budget > savingsCounter) {
            let money = Number(input[index]);
            savingsCounter += money;
            index++;

            if(budget <= savingsCounter){
                console.log(`Going to ${currentDestination}!`);
                savingsCounter = 0;
                break;
            }
        }
        
        destination = input[index];
        index++;
        if(destination !== "End"){ 
            budget = Number(input[index]);
            index++;
        }
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);
