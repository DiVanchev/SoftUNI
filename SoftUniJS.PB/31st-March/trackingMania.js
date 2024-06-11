function trackingMania(input){
    let index = 0;
    let groupTotal = Number(input[index]);
    index++;

    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimandjaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;

    let totalPeople = 0;

    for(let i = 0; i <= groupTotal; i++){
        let groupContains = Number(input[index]);
        index++;
            if(groupContains <= 5){
                 musalaCounter += groupContains;
                 totalPeople += groupContains;
            }
            else if(groupContains >= 6 && groupContains <= 12){
                monblanCounter += groupContains;
                totalPeople += groupContains;
            }
            else if(groupContains >= 13 && groupContains <= 25){
                kilimandjaroCounter += groupContains;
                totalPeople += groupContains;
            }
            else if(groupContains >= 26 && groupContains <= 40){
                k2Counter += groupContains;
                totalPeople += groupContains;
            }
            else if(groupContains >= 41){
                everestCounter += groupContains;
                totalPeople += groupContains;
            }
    }

    let percent1 = (musalaCounter / totalPeople) * 100; 
    let percent2 = (monblanCounter / totalPeople) * 100; 
    let percent3 = (kilimandjaroCounter / totalPeople) * 100; 
    let percent4 = (k2Counter / totalPeople) * 100; 
    let percent5 = (everestCounter / totalPeople) * 100; 


    console.log(`    ${percent1.toFixed(2)}%
    ${percent2.toFixed(2)}%
    ${percent3.toFixed(2)}%
    ${percent4.toFixed(2)}%
    ${percent5.toFixed(2)}%`);
}

trackingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

;