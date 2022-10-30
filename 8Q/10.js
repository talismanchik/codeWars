
function duckDuckGoose(players, goose) {
    let count = goose % players.length;
    if(count === 0){
        count = players.length;
    }
    return players[count-1].name
}