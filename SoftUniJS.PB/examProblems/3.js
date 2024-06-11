function finalCompetition(input){
    let numDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let pointsWon = numDancers * points;
    
    if(place === "Abroad"){
        pointsWon *= 1.5
    }
    
    switch(place){
        case "Bulgaria":
            if(season === "summer"){
                pointsWon *= 0.95;
            }
            else if(season === "winter"){
                pointsWon *= 0.92;
            }
            break;
        case "Abroad":
            if(season === "summer"){
                pointsWon *= 0.9;
            }
            else if(season === "winter"){
                pointsWon *= 0.85;
            }
            break;
    }
    let charity = pointsWon * 0.75;
    let diff = pointsWon - charity;
    let dancerPay = diff / numDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${dancerPay.toFixed(2)}`);
}
finalCompetition(["1",
"89.5",
"summer",
"Abroad"])
;