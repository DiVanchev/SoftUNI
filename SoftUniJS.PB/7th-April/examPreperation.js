function examPreparation(input){
    let index = 0;
    let badGrades = Number(input[index]);
    index++;
    let exerciseName = input[index];
    index++;
    let score = Number(input[index]);
    index++;

    let lastExercise = "";
    let numberOfExercises = 0;
    let allGradesCounter = 0;
    let badGradesCounter = 0;
    let averageScoreCounter = 0;

    while(badGradesCounter < badGrades){
        if(exerciseName === "Enough"){
            let averageScore = averageScoreCounter / allGradesCounter;
            console.log("Average score: " + `${averageScore.toFixed(2)}`);
            console.log("Number of problems: " + `${numberOfExercises}`);
            console.log("Last problem: " + `${lastExercise}`);
            break;
        }
        else if(score <= 4){
            badGradesCounter++;
            if(badGradesCounter >= badGrades){
                console.log("You need a break, " + `${badGradesCounter} poor grades.`);
                break;
        }
    }
    
        lastExercise = exerciseName;
        averageScoreCounter += score;
        numberOfExercises++;
        allGradesCounter++;

        exerciseName = input[index];
        index++;
        score = Number(input[index]);
        index++;
    }
    
    
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
;