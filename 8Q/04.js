function countPositivesSumNegatives(input) {
    // your code here
    let count = 0;
    let sum = 0;

    if( input === null || input.length === 0){
        return [];
    }else{
        for(let i = 0; i < input.length; i++){
            if(input[i] > 0){
                count++;
            }else if(input[i] < 0){
                sum += input[i];
            }
        }
        return [count, sum];
    }
}