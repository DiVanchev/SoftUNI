function godzillaVsKong(index){
    let budget = Number(index[0]);
    let extraStaff = Number(index[1]);
    let pricePerOutfit = Number(index[2]);
     
    let movieDecor = budget * 0.10;
    let totalPriceForOutfits = extraStaff * pricePerOutfit;

    if (extraStaff > 150){
        totalPriceForOutfits = totalPriceForOutfits * 0.90;
    }
 
    let sum = movieDecor + totalPriceForOutfits;
    let diff = Math.abs(budget - sum);
    if(sum <= budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
    else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["15437.62",
"186",
"57.99"])
;
