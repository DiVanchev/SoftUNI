function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationCounter = 0;
    let validCombinationFound = false;

    for(let firstNum = start; firstNum <= end; firstNum++){
        for(let secondNum = start; secondNum <= end; secondNum++){
            combinationCounter++;
            
            if(firstNum + secondNum === magicNum){
                validCombinationFound = true;
                console.log(`Combination N:${combinationCounter} (${firstNum} + ${secondNum} = ${magicNum})`);
                break;
            }
           
         }
         if(validCombinationFound){
            break;
         }
        }
    
    if(!validCombinationFound){
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["1",
"10",
"5"])
;