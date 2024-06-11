function localShop(index){
    let product = index[0];
    let city = index[1];
    let quantity = Number(index[2]);

    switch(city){
        case "Sofia":
            if(product == "coffee"){
                total = 0.50 * quantity;
                console.log(`${total}`); 
            }
            else if(product == "water"){
                 total = 0.80 * quantity;
                 console.log(`${total}`);
            }
            else if(product == "beer"){
                 total = 1.20 * quantity;
                 console.log(`${total}`);
            }
            else if(product == "sweets"){
                 total = 1.45 * quantity;
                 console.log(`${total}`);
            }
            else if(product == "peanuts"){
                 total = 1.60 * quantity;
                 console.log(`${total}`);
            }
            break;
        case "Plovdiv":
            if(product == "coffee"){
                 total = 0.40 * quantity;
                 console.log(`${total}`);
             }
             else if(product == "water"){
                  total = 0.70 * quantity;
                  console.log(`${total}`);
             }
             else if(product == "beer"){
                    total = 1.15 * quantity;
                    console.log(`${total}`);
             }
             else if(product == "sweets"){
                    total = 1.30 * quantity;
                    console.log(`${total}`);
             }
             else if(product == "peanuts"){
                    total = 1.50 * quantity;
                    console.log(`${total}`);
             }
             break;
            case "Varna":
                if(product == "coffee"){
                      total = 0.45 * quantity;
                      console.log(`${total}`);
                 }
                 else if(product == "water"){
                      total = 0.70 * quantity;
                      console.log(`${total}`);
                 }
                 else if(product == "beer"){
                      total = 1.10 * quantity;
                      console.log(`${total}`);
                 }
                 else if(product == "sweets"){
                      total = 1.35 * quantity;
                      console.log(`${total}`);
                 }
                 else if(product == "peanuts"){
                      total = 1.55 * quantity;
                      console.log(`${total}`);
                 }
                 break;
            default:
                console.log('Error');
                 break;
    }
}

localShop(["peanuts",
"Plovdiv",
"1"])

;

