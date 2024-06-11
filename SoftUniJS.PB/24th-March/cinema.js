function cinema(index,totalSeats){
    
    let projectionType = index[0];
    let numberRows = Number(index[1]);
    let numberColumns = Number(index[2]);

    totalSeats = numberColumns * numberRows;

    if(projectionType === 'Premiere'){
        console.log((totalSeats * 12.00).toFixed(2));
    }
    else if(projectionType === 'Normal'){
        console.log((totalSeats * 7.50).toFixed(2));
    }
    else if(projectionType === 'Discount'){
        console.log((totalSeats * 5.00).toFixed(2));
    }
    else{
        console.log('error');
    }


}

cinema(["Premiere",
"10",
"12"])
;