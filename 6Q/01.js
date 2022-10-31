function findTheNumberPlate(customerID){
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let num = (customerID % 999) + 1;
    let numStr = String(num);
    for (let i = numStr.length; i < 3; i++){     numStr = 0+numStr;    }
    let numLetter = Math.floor(customerID / 999);
    firstLetter = "a";
    secondLetter = "a";
    thirdLetter = "a";

    if(numLetter < alph.length){
        firstLetter = alph[numLetter];
    }else{
        if(numLetter / 26 < alph.length){
            firstLetter = alph[numLetter % 26];
            secondLetter = alph[Math.floor(numLetter / 26)];
        }else {
            let ost = Math.floor(numLetter / 26) ;
            thirdLetter = alph[Math.floor(numLetter / 676)];
            firstLetter = alph[numLetter % 26];
            secondLetter = alph[ost % 26];
        }

    }
    return firstLetter + secondLetter + thirdLetter + numStr;
}

findTheNumberPlate(3);