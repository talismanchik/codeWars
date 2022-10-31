function whatday(num) {
    let week = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };
    if(num > 0 && num < 8){
        return week[num];
    }else{
        return "Wrong, please enter a number between 1 and 7";
    }




}