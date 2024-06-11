function personalTitles(index){
    let age = Number(index[0]);
    let sex = index[1];

    if(sex == 'm'){
        if(age >= 16){
            console.log("Mr.");
        }
        else{
            console.log("Master");
        }
    }

    if(sex == 'f'){
        if(age >= 16){
            console.log("Ms.");
        }
        else{
            console.log("Miss");
        }
    }
}

personalTitles(["13.5",
"m"])


;