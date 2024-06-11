// 1x1 is one piece of the cake

function cake(input){
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let isLeft = true;

    let totalPieces = length * width;

    while(command !== "STOP"){
        let pieces = Number(command);
        totalPieces -= pieces;

        if(totalPieces <= 0){
            isLeft = false;
            console.log("No more cake left! You need " + `${Math.abs(totalPieces)}` + " pieces more.");
            break;
        }
        command = input[index];
        index++;
    }
    if(isLeft){
        console.log(`${Math.abs(totalPieces)}` + " pieces are left.");
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

;