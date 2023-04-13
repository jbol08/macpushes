function matchHouses(step) {
    let firstHouse = 6;
    let rest = 5;
    let total = 0;
    if (step > 1) {
        total += + 1 + (rest * step);
    } else {
        total += total + firstHouse * step;
    }
    return total;
}