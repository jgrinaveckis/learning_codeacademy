function if_else(num) {
    if (num <= 0) return "Ne grupe";
    else if (num === 1) return "solo" ;
    else if (num === 2) return "duetas";
    else if (num === 3) return "trio";
    else if (num === 4) return "kvartetas";
    else return "didele grupe";
}

console.log(if_else(4));

/*Funkcija grąžins true, jei parametro amžius yra didesnis nei 18 metų.*/

function ageRestriction(age) {
    return age > 18 ? true : false;
}

console.log(ageRestriction(14));

/* Parašykite „JavaScript“ funkciją, kuri grąžina perduotą eilutę su raidėmis abėcėlės tvarka.*/

console.assert(alphabetOrder('thisisgreatstring') == 'aegghiiinrrsssttt', "Failed");

function alphabetOrder(word) {
    return word.split("").sort().join("");
}


/* Parašykite funkciją pluspluskuri priima 2 parametrus:

1. skaičius	
2. kiek kartu prie šio skaičiaus reikia pridėti 1

Pvz.: plusPlus(10, 3) grąžina 13. Svarbu: turi pridėti butent 1, o ne tesiog sudėti du skaičius
*/

function additive(num, numToAdd) {
    for (i=0; i < numToAdd; i++) {
        num++;
    }
    return num;
}

console.log(additive(1,5));