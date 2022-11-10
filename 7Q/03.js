// Return an array
function fizzbuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let val = i;
        if (val % 3 === 0 && val % 5 === 0) {
            val = "FizzBuzz";
        } else if (val % 5 === 0) {
            val = "Buzz";
        } else if (val % 3 === 0) {
            val = "Fizz";
        }
        arr.push(val);
    }
    return arr;
}

console.log(fizzbuzz(17))
