function check(a, x) {
    // your code here
    let isTrue = false;
    for(let i = 0; i < a.length; i++){
        if(a[i] === x){
            isTrue = true;
        }
    }
    return isTrue;
}