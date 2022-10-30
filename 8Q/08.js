function numberToPower(number, power){
    console.info(Math.log2(1024));
    // Code here
    let num = 1;
    for(let i = 0; i < power; i++ ){
        num*=number;
    }
    console.log(num)
    return num;
}

numberToPower(4, 2);