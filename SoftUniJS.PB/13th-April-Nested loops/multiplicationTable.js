function multiplicationTable(){
    for(i = 1; i <= 10; i++){
        for(j = 1; j <= 10; j++){
            let multiply = i * j;
            console.log(`${i} * ${j} = ${multiply}`);
        }
    }
}
multiplicationTable();