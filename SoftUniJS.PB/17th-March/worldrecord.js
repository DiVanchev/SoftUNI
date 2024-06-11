function worldRecord(index){
    let record = Number(index[0]);
    let distance = Number(index[1]);
    let timeInSec = Number(index[2]);

    let totalTime = distance * timeInSec;
    let slowedTime = Math.floor(distance / 15);
    let extraTime = slowedTime * 12.5;

    let time = totalTime + extraTime;
    if(time < record){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }
    else{
        let diff = Math.abs(time - record);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

worldRecord(["55555.67",
"3017",
"5.03"])

;