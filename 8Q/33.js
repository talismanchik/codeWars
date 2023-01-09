function litres(time) {
    return Math.floor(time/2);
}


console.log(litres(2),'expect 1')
console.log(litres(12.4),'expect 6')
console.log(litres(11.8),'expect 5')
console.log(litres(1.4),'expect 0')
console.log(litres(1787),'expect 893')