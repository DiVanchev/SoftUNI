function  trainTheTrainers(input){
    let index = 0;
    let command = input[index];
    index++;
    let jury = Number(command);
    

    let averageGradeCounter = 0;
    let presentationCounter = "";
    let numOfGrades = 0;

    
    let currentGrades = 0;
    
    while(command !== "Finish"){
        let presentation = (input[index]);
        index++;
        presentationCounter += presentation;
        
        
        for(let i = 1; i <= jury; i++){
            let grade = Number(input[index]);
            currentGrades += grade;
            averageGradeCounter += grade;
            numOfGrades++;
            index++;
        }
        let averageScore = currentGrades / jury;
        currentGrades = 0;
        
        console.log(`${presentationCounter} - ${averageScore.toFixed(2)}.`);
        presentationCounter = "";

        command = input[index];
    }
        let finalAssessment = averageGradeCounter / numOfGrades;
        if(command === "Finish"){
        console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
        }
}
trainTheTrainers(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])
;