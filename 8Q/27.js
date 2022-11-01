function betterThanAverage(classPoints, yourPoints) {
    let all = yourPoints;
    for (let point of classPoints){
        all += point;
    }
    let dif = all / classPoints.length;
    return dif <= yourPoints;
}