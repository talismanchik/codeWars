function numberJoy(n) {
    const arrN = (n + '').split('')
    let sumArr = 0;
    arrN.map((el)=> sumArr += Number(el))
    let revSumArr = Number((sumArr+'').split('').reverse().join(''))
    return sumArr*revSumArr === n
}


numberJoy(1458)