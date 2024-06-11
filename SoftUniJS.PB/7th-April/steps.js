function stepsTaken(input){
    
    let index = 0;
    let command = input[index];
    index++;
    let stepsCounter = 0;
    let stepGoal = 10000;
    let isHome = false;

    while(command !== "Going home"){
        let steps = Number(command);
        stepsCounter += steps;
        
        if(stepsCounter >= stepGoal){
            break;
        }
        command = input[index];
        index++; 
    }
    if(command === "Going home"){
        let steps = Number(input[index]);
        index++;
        stepsCounter += steps;
    }
    let diff = Math.abs(stepsCounter - stepGoal);
    if(stepsCounter >= stepGoal){
        console.log("Goal reached! Good job!");
        console.log(`${diff}` + " steps over the goal!");
    }
    else{
        console.log(`${diff}` + " more steps to reach goal.");

    }
}   
stepsTaken(["1000",
"1500",
"2000",
"6500"])

;