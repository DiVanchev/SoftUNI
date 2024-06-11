function worldTennis(input){
    let index = 0;
    let tourNum = Number (input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let points = 0;
    let wCounter = 0;
    
    for(let i = 0; i <= tourNum; i++){
        let tourStage = String(input[index]);
        index++;
        
        switch(tourStage){
            case 'W':
                points += 2000;
                wCounter++;
                break;
            case 'F':
                points += 1200;
                break;
            case 'SF':
                points += 720;
                break;
        }
    }    
    let percent = (wCounter / tourNum) * 100;
    let totalPoints = startingPoints + points;
    let averagePoints = Math.floor(points / tourNum);



   console.log(`Final points: ${totalPoints}`);
   console.log(`Average points: ${averagePoints}`);
   console.log(`${percent.toFixed(2)}%`);
}

worldTennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
;