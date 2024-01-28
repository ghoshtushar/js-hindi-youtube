const date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// console.log(date.toJSON());

const myCreatedDate = new Date("2024-1-28");
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

// ++++++++++++ Time +++++++++++
const myDate = new Date();
console.log(Math.trunc(myDate.getTime()/1000));
console.log(Math.floor(myDate.getTime()/1000));
console.log(Math.ceil(myDate.getTime()/1000));
console.log(Math.round(myDate.getTime()/1000));
console.log(Date.now());