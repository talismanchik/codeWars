function grow(x){
    let result = 0;
for (let i = 0; i < x.length; i++){
    if (i===0){
        result = x[i]
    }else {
        result *= x[i]
    }
}
return result
}
console.log(grow([1, 2, 3]), 'expect 6' )
console.log(grow([2, 2, 2, 2, 2, 2]), 'expect 64')