function findAverage(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let average = 0;

    if (array.length > 0){
        average = sum / array.length;
    }



    return average;
}