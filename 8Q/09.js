function first(arr, n) {
    if(n >= arr.length){
        n=arr.length;
    }
    let array = [arr[0]];
    if (n === 0){
        array.pop();
    }else{
        for(let i = 1; i < n; i++){
            array.push(arr[i]);
        }
    }

    return array;
}

console.log(first(["a", "b", "c"], 4));