function sumOfDifferences(arr) {
arr.sort((a, b) => a - b);
arr.reverse();
let sum = 0;
for (let i = 0; i < arr.length -1; i++){
    sum += (arr[i] - arr[i+1]);
}
return sum;
}



sumOfDifferences([-3, -2, -1])