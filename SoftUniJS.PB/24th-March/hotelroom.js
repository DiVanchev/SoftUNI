function hotelRoom(index){
    let month = index[0];
    let stay = Number(index[1]);
    
    let baseStudioPrice = 0;
    let baseApartmentPrice = 0;  
    
if(month === 'May' || month === 'October'){
    baseStudioPrice = stay * 50;
    baseApartmentPrice = stay * 65;

    if(stay > 7 && stay <= 14){
        baseStudioPrice = baseStudioPrice * 0.95;
    }
    else if(stay > 14){
        baseStudioPrice = baseStudioPrice * 0.7;
    }
}
    else if(month === 'June' || month === 'September'){
        baseStudioPrice = stay * 75.20;
        baseApartmentPrice = stay * 68.70;
        if(stay > 14){
            baseStudioPrice = baseStudioPrice * 0.8;
        }
    }
    else{
        baseStudioPrice = stay * 76;
        baseApartmentPrice = stay * 77;
    }

    if(stay > 14){
        baseApartmentPrice = baseApartmentPrice * 0.9
    }

    console.log(`Apartment: ${baseApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${baseStudioPrice.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])
;