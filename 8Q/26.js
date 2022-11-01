//return price without vat
function excludingVatPrice(price){
    let res = -1;
    if(price){
        res = (price / 115 * 100).toFixed(2);
    }else if(price === 0){
        res = 0;
    }
    return Number(res);
}