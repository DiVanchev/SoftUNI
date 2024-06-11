function adventure(index){
    
    let budget = Number(index[0]);
    let season = index[1];
    
    let destination = '';
    let budgetUsed = 0;
    let where = '';
    

switch(season){
    case 'summer':
        if(budget <= 100){
            destination = 'Bulgaria';
            budgetUsed = budget * 0.3;
            where = 'Camp';
        }
        else if(budget <= 1000){
            destination = 'Balkans';
            budgetUsed = budget * 0.4;
            where = 'Camp';
        }
        else{
            destination = 'Europe';
            budgetUsed = budget * 0.9;
            where = 'Hotel';
        }
        break;
    case 'winter':  
        if(budget <= 100){
            destination = 'Bulgaria';
            budgetUsed = budget * 0.7;
            where = 'Hotel';
        }
        else if(budget <= 1000){
            destination = 'Balkans';
            budgetUsed = budget * 0.8;
            where = 'Hotel';
        }
        else{
            destination = 'Europe';
            budgetUsed = budget * 0.9;
            where = 'Hotel';
        }
        break;
    default:
        console.log('Error!');
        break;
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${where} - ${budgetUsed.toFixed(2)}`);
}
adventure(["1500", "summer"]);