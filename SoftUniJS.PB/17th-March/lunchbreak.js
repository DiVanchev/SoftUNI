function lunchBreak(index){
    let movieName = index[0];
    let epTime = Number(index[1]);
    let lBreak = Number(index[2]);

    let timeForLunch = lBreak / 8;
    let chillTime = lBreak / 4;

    let timeLeft = lBreak - timeForLunch - chillTime;

    if(epTime <= timeLeft){
        let remainingTime = Math.abs(timeLeft - epTime);
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(remainingTime)} minutes free time.`);
    }
    else{
        let remainingTime = Math.abs(timeLeft - epTime);
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(remainingTime)} more minutes.`);
    }

}

lunchBreak(["Game of Thrones",
"60",
"96"])
;