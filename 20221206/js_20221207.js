function additive(num, numToAdd) {
    if (numToAdd >= 1) {
        num++;
        numToAdd--;
        return additive(num, numToAdd);
    }

    return num;
}

console.log(additive(2,5));