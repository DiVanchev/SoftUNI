function oscars(input){
    let index = 0;
   
    let actorsName = String(input[index]);
    index++;
    let academicPoints = Number(input[index]);
    index++;
    let judges = Number(input[index]);
    index++;

    let isNominee = false;

    for(let i = 1; i <= judges; i++){
            let judgesNames = String(input[index]);
            index++;
            let judgesPoints = Number(input[index]);
            index++;
            let result = judgesNames.length * judgesPoints / 2;
            academicPoints += result;
            if(academicPoints > 1250.5){
                isNominee = true;
                break;
            }
    }
    
    if(academicPoints > 1250.5){
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${academicPoints.toFixed(1)}!`);
    }
    else{
        let diff = 1250.5 - academicPoints
        console.log(`Sorry, ${actorsName} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
;