function gps(s, x){
    let maxSpeed = 0;
    for(let i = 1; i < x.length; i++){
        let delta = x[i] - x[i-1];
        let speedH = 3600 * delta/s;
        if (maxSpeed < speedH){
            maxSpeed = speedH;
        }
    }
    console.log(maxSpeed);
    return maxSpeed;
}



let x = [];
let s = 12;

gps(s, x);

