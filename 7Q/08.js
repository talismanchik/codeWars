function hasSurvived(attackers, defenders) {

    const attackPowerAttackers = attackers.length ? attackers.reduce((sum, el) => sum + el) : 0;
    const attackPowerDefenders = defenders.length ? defenders.reduce((sum, el) => sum + el) : 0;
    let winner = attackers.length - defenders.length;

    for (let i = 0; i < attackers.length; i++) {
        if (defenders[i]) {
            let val = attackers[i] - defenders[i]
            if (val < 0) {
                winner--
            }
            if (val > 0) {
                winner++
            }
        }
    }
    if (winner === 0) {
        return attackPowerAttackers - attackPowerDefenders <= 0
    }
    return winner < 0;
}


console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), 'expect false')
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), 'expect true')
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), 'expect true')
console.log(hasSurvived([], [1, 2, 3]), 'expect true')
console.log(hasSurvived([1, 2, 3], []), 'expect false')
console.log(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), 'expect false')
