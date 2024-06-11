function obn(index,erd,leftOver){
    let N1 = Number(index[0]);
    let N2 = Number(index[1]);
    let operator = index[2];

    let Result = 0;

    switch(operator){
        case '+':
            Result = N1 + N2;
            if(Result % 2 == 0){
                erd = 'even';
            }
            else{
                erd = 'odd';
            }
            console.log(`${N1} ${operator} ${N2} = ${Result} - ${erd}`);
            break;
        case '-':
            Result = N1 - N2;
            if(Result % 2 == 0){
                erd = 'even';
            }
            else{
                erd = 'odd';
            }
            console.log(`${N1} ${operator} ${N2} = ${Result} - ${erd}`);
            break;
        case '*':
            Result = N1 * N2;
            if(Result % 2 == 0){
                erd = 'even';
            }
            else{
                erd = 'odd';
            }
            console.log(`${N1} ${operator} ${N2} = ${Result} - ${erd}`);
            break;
        case '/':
            if(N2 == 0){
                console.log(`Cannot divide ${N1} by zero`);
            }
            else{
            Result = N1 / N2;
            console.log(`${N1} ${operator} ${N2} = ${Result.toFixed(2)}`);
            }
            break;
        case '%':
            if(N2 == 0){
                console.log(`Cannot divide ${N1} by zero`);
            }
            else{
            leftOver = N1 % N2;
            console.log(`${N1} ${operator} ${N2} = ${leftOver}`);
            }
            break;
        default:
            console.log('Invalid operator. Please use one of: +, -, *, /, %');
            break;
    }
}

obn(["112",
"0",
"/"])

;
