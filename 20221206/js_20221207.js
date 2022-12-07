function additive(num, numToAdd) {
    if (numToAdd > 0) {
        num++;
        numToAdd--;
        return additive(num, numToAdd);
    }
    return num;
}

console.log(additive(2,5));