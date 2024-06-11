function deerOfSanta(input){
    let gone = Number(input[0]);
    let foodKg = Number(input[1]);
    let firstDeerFood = Number(input[2]);
    let secondDeerFood = Number(input[3]);
    let thirdDeerFood = Number(input[4]);

    let firstDeer = gone * firstDeerFood;
    let secondDeer = gone * secondDeerFood;
    let thirdDeer = gone * thirdDeerFood;

    let total = firstDeer + secondDeer + thirdDeer;

    let diff = Math.abs(foodKg - total);
    
    if(foodKg >= total){
        console.log(Math.floor(diff) + " kilos of food left."); 
    }
    else{
        console.log(Math.ceil(diff) + " more kilos of food are needed.");
    }

}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
;
deerOfSanta(["2",
"10",
"1",
"1",
"2"])
;