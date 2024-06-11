function moving(input){
    let index = 0;
    let freeW = Number(input[index]);
    index++;
    let freeL = Number(input[index]);
    index++;
    let freeH = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let totalCubicM = freeW * freeL * freeH;
    let boxes = 0;

    while(command !== "Done"){
        let numBoxes = Number(command);
        boxes += numBoxes;
        if(totalCubicM < boxes){
            console.log(`No more free space! You need ${Math.abs(totalCubicM - boxes)} Cubic meters more.`);
            return;
        }
        command = input[index];
        index++;
    }
    console.log(`${totalCubicM - boxes} Cubic meters left.`);
    
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


;