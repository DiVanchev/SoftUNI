function graduation(input){
    let name = input[0];
    let grades = 0;
    let sum = 0.00;
    let excluded = 0;
    let index = 0;
    
    while(grades < 12){
        index++;
        let grade = Number(input[index]);
        if(grade < 4){
            excluded++;
            if(excluded > 1){
                excluded += grades - 1;
                break;
            }
            continue;
        }
        sum += grade;
        grades++;
    }
    
    let average = sum / 12;
    if(average >= 4.00){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
    else{
        console.log(`${name} has been excluded at ${excluded} grade`);
    }    
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;
