function salary(input){
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let salaryY = Number(input[index]);
    index++;
    
    let fine = 0;
    
    for(let i = 0; i <= tabs; i++){
        let website = String(input[index]);
        index++;
      switch(website){
        case 'Facebook':
            fine += 150;
            break;
        case 'Instagram':
            fine += 100;
            break;
        case 'Reddit':
            fine += 50; 
            break;
      }
       
    }

    let leftOvers = salaryY - fine;

    if(leftOvers <= 0){
       console.log("You have lost your salary.");
    }
    else{
        console.log(leftOvers);
    }
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

;
