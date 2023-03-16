function towerHanoi(discs) {
    //figure out what is the equation for the minimum amount of moves
    //use exponents to solve
    let totalMoves = Math.pow(2, discs) - 1;
    //return answer
    return totalMoves;
}