function fishingBoat(index){
    
    let budgetOfTheGroup = Number(index[0]);
    let season = index[1];
    let fisherman = Number(index[2]);

    let price = 0;
    let discount = 0;
    
    switch (season) {
        case 'Spring':
            price = 3000; 
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }
    
    if(fisherman <= 6){
        discount = price * 0.90;
    }
    else if(fisherman >= 7 && fisherman <= 11){
        discount = price * 0.85;
    }
    else{
        discount = price * 0.75;
    }

    if(fisherman % 2 === 0 && season !== 'Autumn'){
        discount = discount * 0.95;
    }

    let diff = Math.abs(budgetOfTheGroup - discount)

    if(budgetOfTheGroup >= discount){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3600",
"Autumn",
"6"])

;