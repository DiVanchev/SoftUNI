function bankBalance(input){
    let index = 0;
    let command = input[index];
    index++;

    let total = 0;

    while(command !== "NoMoreMoney"){
        let curSum = Number(command);

        if(curSum < 0){
            console.log('Invalid operation!');
            break;
        }
        total += curSum;
        console.log(`Increase: ${curSum.toFixed(2)}`);
        
        command = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}   
bankBalance(["120",
"45.55",
"-150"])


;