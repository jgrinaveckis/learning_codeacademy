function additive(num, numToAdd) {
    if (numToAdd > 0) {
        num++;
        numToAdd--;
        return additive(num, numToAdd);
    }
    return num;
}

console.log(additive(2,5));



/*Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.*/

let arr = ['a','b','c'];
console.log(arr);

/*Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.*/

console.log(arr[0], arr[2]);

/* Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d. */

let arr2 = ['a', 'b', 'c', 'd'];
console.log(`${arr2[0]} + ${arr2[1]}, ${arr2[2]} + ${arr2[3]}`)

/*Sukurkite masyvą su elementais 2, 5, 3, 9.*/

let arr3 = [2,5,3,9];

/* Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo. 
Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.*/

let num = (arr3[0] * arr3[1]) + (arr3[2] * arr3[3]);

/*Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo. */

let arr4 = [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log(arr4[1][0]);

/* Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos. */

let arr5 = [1,2,3];
let arr6 = [4,5,6];
arr5.concat(arr6);

/* Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1. */

let arr7 = [1,2,3];
arr7.sort().reverse()

/* Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį. */

let arr8 = [1,2,3];
arr8.push(4,5,6);
arr8.unshift(-1,-2,-3);

/* Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus. */

let arr9 = ['html', 'css', 'js'];
console.log(arr9[0]);
console.log(arr9[arr9.length - 1]);

/* Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį. */

let arr10 = [3, 4, 1, 2, 7];
arr10.sort()

/* Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.*/

let arr11 = [1, 2, 3, 4, 5];
let arr12 = arr11.slice(0, 3);
