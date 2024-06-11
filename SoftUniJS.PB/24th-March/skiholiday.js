function skiHoliday(input){
    let stay = Number(input[0]);
    let type = input[1];
    let rating = input[2];

    let total = 0;
    let nights = stay - 1;

    switch(type){
        case 'room for one person':
            price = 18.00;
            break;
        case 'apartment':
            price = 25.00;
            break;
        case 'president apartment':
            price = 35.00;
            break;
        default:
            price = 0;
            break;
    }

    if(type === 'room for one person'){
            total = nights * price; 
    }
    else if(type === 'apartment'){
        if(stay < 10){
            total = (nights * price) * 0.7;
        }
        else if(stay >= 10 && stay <= 15){
            total = (nights * price) * 0.65;
        }
        else{
            total = (nights * price) * 0.50;
        }
    }
    else{
        if(type === 'president apartment'){
            if(stay < 10){
                total = (nights * price) * 0.9;
            }
            else if(stay >= 10 && stay <= 15){
                total = (nights * price) * 0.85;
            }
            else{
                total = (nights * price) * 0.8;
            }
        }
    }

    if(rating === 'positive'){
        total = total * 1.25;
    }
    else{
        total = total * 0.9;
    }

    console.log(`${total.toFixed(2)}`);
}

skiHoliday(["12",
"room for one person",
"positive"]);