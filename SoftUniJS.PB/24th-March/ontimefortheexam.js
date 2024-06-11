function onTime(input){
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let timeExam = (hourExam * 60) + minExam;
    let timeOfArrival = (arrivalHour * 60) + arrivalMin;

    let diff = Math.abs(timeOfArrival - timeExam);
    let h = Math.floor(diff/60);
    let min = diff % 60;

     if(timeExam < timeOfArrival){
        console.log('Late');
        if(h > 0){
         if(min < 10){
            console.log(`${h}:0${min} hours after the start`);
        } 
        else{
            console.log(`${h}:${min} hours after the start`);
        }
    }
    else{
        console.log(`${min} minutes after the start`);
    }
}
     else if(Math.abs(timeOfArrival - timeExam) <= 30){
        console.log('On time');
        
        if(min > 0){
            console.log(`${min} minutes before the start`);
        }
     }
     else{
        console.log('Early');
   
        if(h > 0){
            if(min < 10){
                console.log(`${h}:0${min} hours before the start`);
            }
            else{
                console.log(`${h}:${min} hours before the start`);
            }
        }
        else{
            console.log(`${min} minutes before the start`);
        }
     }
}

onTime(["16",
"00",
"15",
"00"])
;