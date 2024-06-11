function workingHours(index){
    let x = Number(index[0]);
    let day =index[1];

    if(day === 'Sunday' || x < 10 || x >18){
        console.log('closed');
    }
    else{
        console.log('open');
    }
}

workingHours(["11",
"Sunday"])
;