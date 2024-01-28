// const a = [2, 4, 6, 8, 10];
// console.log(a);
// const b = new Array(1, 3, 5, 7, 9);
// console.log(b);
// const c = b.join();
// console.log(c,typeof c);


// +++++++++++++++++++++ Array Methods ++++++++++++++++++++++++++++++
const myArr = [5,true,'Ghosh',undefined,null];
console.log(typeof myArr);
console.log(myArr[myArr.length -1]);
console.log(myArr[myArr.length -2]);
console.log(`Length: ${myArr.push(2023)}`);
console.log(myArr);
console.log(`Length: ${myArr.unshift('Tushar')}`);
console.log(myArr);
console.log(`Popped element: ${myArr.pop()}`);
console.log(`Popped element: ${myArr.shift()}`);
console.log(myArr.concat(34,'ABC',false));
console.log(myArr);
console.log(myArr.includes('ABC'));
console.log(myArr.indexOf(5));
console.log(myArr.slice(2,4));// does not Effect on actual array
console.log(myArr);
console.log(myArr.splice(2,4)); // Effect on actual array
console.log(myArr);