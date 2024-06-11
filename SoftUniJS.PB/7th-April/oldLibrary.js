function oldLibrary(input){
    let favoriteBook = input[0];
    let index = 1;
    let bookIsFound = false;
    let nextBookName = input[index];
    let bookCounter = 0;
    
    while(nextBookName !== "No More Books"){
        if(nextBookName === favoriteBook){
            bookIsFound = true;
            break;
        }
        bookCounter++;
        index++;
        nextBookName = input[index];
    }
    if(bookIsFound === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
    else{
        console.log(`You checked ${bookCounter} books and found it.`);
    }

}
oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

;