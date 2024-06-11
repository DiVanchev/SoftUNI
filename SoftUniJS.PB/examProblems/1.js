function excursion(input){
    let people = Number(input[0]);
    let stay = Number(input[1]);
    let cards = Number(input[2]);
    let tickets = Number(input[3]);
    
    let stayPrice = 20;
    let cardPrice = 1.6;
    let ticketPrice = 6;

    let totalStayOne = stay * stayPrice;
    let totalCardsOne = cards * cardPrice;
    let totalTicketsOne = tickets * ticketPrice;

    let totalForOnePerson = totalStayOne + totalCardsOne + totalTicketsOne;
    let totalForTheGroup = totalForOnePerson * people;
    let bonusExpenses = totalForTheGroup * 1.25;
    
    console.log(bonusExpenses.toFixed(2));

}
excursion(["131",
"9",
"33",
"46"])
;
