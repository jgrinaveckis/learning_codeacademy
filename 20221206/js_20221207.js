function additive(num, numToAdd) {
    if (numToAdd >= 1) {
        num++;
        numToAdd--;
        return additive(num, numToAdd);
    }
    else if (numToAdd === 0) {
        return num;
    }
}

console.log(additive(1,5));