// Load the full build.
// console.log(_.lastIndexOf([1, 3, 2, 1, 3, 2], 3)); // 3 er last index holo 4
// console.log(_.last([1, 2, 2, 4, 2])); // last value 2 so output 2

// const array = ["a", "b", "c", "a", "b", "c"];

// _.pullAll(array, ["a", "b"]);
// console.log(array) // ['c', 'c'] , a and b badh dia baki gulo pull hobe


// //#4 Node.js Global Object & Module System - Node.js Tutorial Bangla | Bangla Node js Tutorial

// console.log(global);


// moduler in node js
const _ = require("lodash");
const people = require('./people'); // people file k ekahne require kore import korlam

console.log(_.last(people.arrayList)); //output: last array value ta dibe: lqt

console.log(people.a); // 7
console.log(people.arrayList); // [ 'skk', 'inj', 'lqt' ]
people.func();      // Node JS
console.log(people.people); // [ 'sk', 'nj', 'qt' ]

