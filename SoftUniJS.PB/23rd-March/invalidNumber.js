function invalidNumber(index){
    let x = Number(index[0]);
    let isValid = (x >= 100 && x <= 200 || x == 0)

    if(!isValid){
        console.log('invalid');
    }
}

invalidNumber(["0"]);