function solution(start, finish)
{
    let b= finish-start;
    let a =Math.floor((b)/3);
    let c = b-a*3;
    console.log(c)

    return a+c;
}
console.log(solution(24, 284))

//expected 130 to equal 88