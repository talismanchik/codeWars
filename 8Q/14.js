function toCsvText(array) {
    let str = "";
    for (let i = 0; i < array.length; i++){

        for (let j = 0; j < array[i].length; j++){
            if (j === 0){
                str += array[i][j];
            }else{
                str += "," + array[i][j];
            }
        }
        str += "\n";

    }
    let str1 =  str.slice(0, -1);


    console.log(str1);

    return str1;
}