function building(input){
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for(let curFloor = floors; curFloor >= 1; curFloor--){
        let outputLine = ""; 
        for(let curRoom = 0; curRoom < roomsPerFloor; curRoom++){

            if(curFloor === floors){
                outputLine += (`L${curFloor}${curRoom} `);
            }
            else if(curFloor % 2 === 0){
                outputLine += (`O${curFloor}${curRoom} `);
            }
            else{
                outputLine += (`A${curFloor}${curRoom} `);
            }
        }
        console.log(outputLine);
    }
}
building(["6","4"]);
