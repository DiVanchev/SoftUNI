function exam(input){
    let index = 0;
    let numStudents = Number(input[index]);
    index++;

    let twoToThreeCounter = 0;
    let threeToFourCounter = 0;
    let fourToFiveCounter = 0;
    let topStudentsCounter = 0;

    let total = 0;

    for(index = 1; index <= numStudents; index++){
        let grade = Number(input[index]);
        total += grade;
        
        if(grade >= 2.00 && grade <= 2.99){
            twoToThreeCounter++;
        }
        else if(grade >= 3.00 && grade <= 3.99){
            threeToFourCounter++;
        }
        else if(grade >= 4.00 && grade <= 4.99){
            fourToFiveCounter++;
        }
        else if(grade >= 5.00){
            topStudentsCounter++;
        }
    }
    let pTwoToThree = twoToThreeCounter / numStudents * 100;
    let pThreeToFour = threeToFourCounter / numStudents * 100;
    let pFourToFive = fourToFiveCounter / numStudents * 100;
    let pTop = topStudentsCounter / numStudents * 100;

    let averageGrade = total / numStudents;

    console.log(`Top students: ${pTop.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${pFourToFive.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${pThreeToFour.toFixed(2)}%`);
    console.log(`Fail: ${pTwoToThree.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])
;