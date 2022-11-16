function spoonerize(words) {
    let a = words.split(' ')
    let w1 = a[0];
    let w2 = a[1];
    let w11 = w1.split('');
    let w12 = w2.split('');
    let b = w11[0];
    w11[0]= w12[0];
    w12[0]=b;

    return String(w11.join('') + " " + w12.join(''));
}

console.log(spoonerize('abc def'))