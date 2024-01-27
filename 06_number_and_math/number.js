// const Score = 400;
// console.log(Score);
// const newNumber = new Number(400);
// console.log(newNumber);
// console.log(newNumber.toString());
// console.log(newNumber.toString().length);
// console.log(newNumber.toFixed(2));
// const otherNumber = 23.5111;
// console.log(otherNumber.toPrecision(2));
// const hundreads = 100000000;
// console.log(hundreads.toLocaleString('en-In'));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// ++++++++ Maths +++++++++
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(45.23));
// console.log(Math.ceil(454.000000001));
// console.log(Math.floor(454.000000001));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(2));
// console.log(Math.max(5,6,3,4,6.001));
// console.log(Math.min(5,6,3,4,6.001));
// console.log(Math.random());

// Let say we need a random number between 10 - 20 then how to make this -
const min = 10;
const max = 20;
const randomNumber = (Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
console.log(Math.trunc(randomNumber));
console.log(Math.floor(randomNumber));