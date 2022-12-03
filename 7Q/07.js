function numberJoy(n) {
    const nStr = n + ''
    const arrN = nStr.split('')
    let sumArr = 0;

    arrN.map((el)=> sumArr += Number(el))
    let revSumArr = Number((sumArr+'').split('').reverse().join(''))
    console.log(sumArr*revSumArr === n)
    return sumArr*revSumArr === n



}


numberJoy(1458)