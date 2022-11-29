function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}



let dado1;
let dado2;
const muestra = [];
let suma;
const array = [];

for (let i = 0; i < 12; i++) {
    muestra[i] = i+1;
    array[i] = 0;
}

for (let index = 0; index < 36000; index++) {
    dado1 = getRandomArbitrary(1, 6);
    dado2 = getRandomArbitrary(1, 6);
    suma = dado1 + dado2
    array[suma - 1] = array[suma - 1] + 1;
}

console.log(muestra);
console.log(array);

