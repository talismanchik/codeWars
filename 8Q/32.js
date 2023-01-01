const hotpo = (n) => {
    let count = 0
    if (n === 0) return 0;
    if (n === 1) return 0;

    do {
        n % 2 === 0
            ? n /= 2
            : n = 3 * n + 1
        count++
        // console.log(n)
    } while (n !== 1)

    return count
}

console.log(hotpo(1), 0)
console.log(hotpo(5), 5)
console.log(hotpo(6), 8)
console.log(hotpo(23), 15)