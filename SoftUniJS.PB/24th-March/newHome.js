function newHome(index, price, moneyLeft){
    let typeOfFlower = index[0];
    let quantity = Number(index[1]);
    let budget = Number(index[2]);

    switch(typeOfFlower){
        case 'Roses':
            if(quantity > 80){
               price = (quantity * 5) * 0.90;   
            }
            else{
                price = quantity * 5;
            }
            break;
        case 'Dahlias':
            if(quantity > 90){
                price = (quantity * 3.80) * 0.85;   
             }
             else{
                 price = quantity * 3.80;
             }
             break;
        case 'Tulips':
            if(quantity > 80){
                price = (quantity * 2.80) * 0.85;   
             }
             else{
                 price = quantity * 2.80;
             }
             break;
        case 'Narcissus':
            if(quantity < 120){
                price = (quantity * 3) * 1.15;   
             }
             else{
                 price = quantity * 3;
             }
             break;
        case 'Gladiolus':
            if(quantity < 80){
                price = (quantity * 2.50) * 1.20;   
             }
             else{
                 price = quantity * 2.50;
             }
             break;
        default:
            console.log('Wrong flower');
            break; 
    }
   
     moneyLeft = budget - price;
    
    if(budget >= price){
        console.log(`Hey, you have a great garden with ${quantity} ${typeOfFlower} and ${Math.abs(moneyLeft).toFixed(2)} leva left.`);
    }
    else{
        console.log(`Not enough money, you need ${Math.abs(moneyLeft).toFixed(2)} leva more.`);
    }
}
newHome(["Narcissus",
"119",
"360"])

;