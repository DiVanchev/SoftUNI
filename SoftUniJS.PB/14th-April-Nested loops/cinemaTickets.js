function  cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index++;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    
    while(command !== "Finish"){
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++;
        
        let type = input[index];
        index++;
        let totalTickets = 0;
        while(type !== "End"){
            switch(type){
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }
            totalTickets++;
            if(freeSeats <= totalTickets){
                break;
            }
            
            type = input[index];
            index++;
        }
        let percentage = totalTickets / freeSeats * 100;
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalPurchasedTickets = studentTickets + standardTickets + kidTickets;
    let pStudent = studentTickets / totalPurchasedTickets * 100;
    let pStandard = standardTickets / totalPurchasedTickets * 100;
    let pKids = kidTickets / totalPurchasedTickets * 100;
    
    if(command === "Finish"){
        console.log("Total tickets: " + `${totalPurchasedTickets}`);
        console.log(`${pStudent.toFixed(2)}% student tickets.`);
        console.log(`${pStandard.toFixed(2)}% standard tickets.`);
        console.log(`${pKids.toFixed(2)}% kids tickets.`);
    }
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);