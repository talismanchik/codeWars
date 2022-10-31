function dutyFree(normPrice, discount, hol){
    let diff = normPrice * discount / 100;

    return Math.floor(hol / diff);
}