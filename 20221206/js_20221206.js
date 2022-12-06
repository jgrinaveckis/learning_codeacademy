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