function maxNumber(input){
    let index = 0;
    let arrayElement = input[index];
    index++;
    let max = Number.MAX_SAFE_INTEGER
    while(arrayElement !== 'Stop'){
        let num = Number(arrayElement);
        if(num < max){
            max = num;
        }
        arrayElement = input[index];
        index++;
        }
        console.log(max);
    }
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])


;