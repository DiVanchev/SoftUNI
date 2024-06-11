function numberInRange(index){
    let x = Number(index[0]);

    if(x >= -100 && x <= 100 && x !== 0 ){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
    }
numberInRange(["0"]);