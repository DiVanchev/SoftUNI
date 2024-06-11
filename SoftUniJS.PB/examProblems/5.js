function excursionSale(input) {
    let index = 0;
    let numExcursionsSea = Number(input[index]);
    index++;
    let numExcursionsMountain = Number(input[index]);
    index++;

    
    let total = 0;

    let command = input[index];

    while (command !== "Stop") {
        let place = command;

        switch (place) {
            case "sea":
                if(numExcursionsSea > 0){
                total += 680;
                numExcursionsSea--;
                }
                break;
            case "mountain":
                if(numExcursionsMountain > 0){
                total += 499;
                numExcursionsMountain--;
                }
                break;
        }
        
        
        if (numExcursionsSea === 0 && numExcursionsMountain === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }
        
        index++;
        command = input[index];

    }
    console.log(`Profit: ${total} leva.`);
}
excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]);
