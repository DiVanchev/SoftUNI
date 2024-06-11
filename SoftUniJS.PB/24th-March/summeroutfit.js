function summerOutfit(index, shoes, outfit){
    
    let celsius = Number(index[0]);
    let timeOfDay = index[1];
   
    
    if(celsius >= 10 && celsius <= 18){
        if(timeOfDay === 'Morning'){
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        }
        else if(timeOfDay === 'Afternoon'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        else if(timeOfDay === 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    if(celsius > 18 && celsius <= 24){
        if(timeOfDay === 'Morning'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        else if(timeOfDay === 'Afternoon'){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
        else if(timeOfDay === 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    if(celsius >= 25){
        if(timeOfDay == 'Morning'){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
        else if(timeOfDay === 'Afternoon'){
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        }
        else if(timeOfDay === 'Evening'){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${celsius} degrees, get your ${outfit} and ${shoes}.`);
    
}

summerOutfit(["28",
"Evening"])


;