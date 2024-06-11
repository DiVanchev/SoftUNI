function fruitShop(index, total){

    let fruit = index[0];
    let day = index[1];
    let quantity = Number(index[2]);

    switch(day){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if(fruit === 'banana'){
                total = quantity * 2.50;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'apple'){
                total = quantity * 1.20;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'orange'){
                total = quantity * 0.85;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'grapefruit'){
                total = quantity * 1.45;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'kiwi'){
                total = quantity * 2.70;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'pineapple'){
                total = quantity * 5.50;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'grapes'){
                total = quantity * 3.85;
                console.log(`${total.toFixed(2)}`);
            }
            else{
                console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            if(fruit === 'banana'){
                total = quantity * 2.70;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'apple'){
                total = quantity * 1.25;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'orange'){
                total = quantity * 0.90;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'grapefruit'){
                total = quantity * 1.60;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'kiwi'){
                total = quantity * 3.00;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'pineapple'){
                total = quantity * 5.60;
                console.log(`${total.toFixed(2)}`);
            }
            else if(fruit === 'grapes'){
                total = quantity * 4.20;
                console.log(`${total.toFixed(2)}`);
            }
            else{
                console.log('error');
            }
            break;
        default:
                console.log('error');
                break;
            
        }
    }
    fruitShop(["tomato",
    "Monday",
    "0.5"])
    ;
    
    