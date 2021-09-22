/*
1. Length property
Output: 9

let str = "Quovantis";
console.log(str.length);
*/

/*
2. Slice method => slice(inclusive, exclusive)
Output1: ovantis Technologies
Output2: ec

let str = "Quovantis Technologies";
let s1 = str.slice(2);
let s2 = str.slice(11, 13);
console.log(s2);
*/

/*
3. Replace method => replace("word", "to be replaced with"), removes only first occurance
Output: mechanical development engineer developing software

let str = "software development engineer developing software"
let s1 = str.replace("software", "mechanical");
console.log(s1);
*/

/* 
4. Upper case conversion
Output: QUOVANTIS

let str = "quovantis";
let newStr = str.toUpperCase();
console.log(newStr);
*/

/*
5. Lower case conversion
Output: quovantis

let str = "QUOVANTIS";
console.log(newStr);
let newStr = str.toLowerCase();
*/

/*
6. Trim method => removes unwanted spaces
Output: "Quovantis"

let str = "     quovantis     ";
console.log(newStr);
let newStr = str.trim();
*/


/*
7. ASCII code
Output: 118 ASCII code for 'v'

let str = "Quovantis";
console.log(str.charCodeAt(3));
*/

/*
8. Split => converts a string to array on certain character
Output1: ['quick', 'brown', 'fox', 'jumps', 'over', 'a', 'lazy', 'log' ]
Output2: [ 'quick', 'brown', 'fox ,jumps ,over ', 'a ', 'lazy', ' log' ]

let str = "quick brown fox jumps over a lazy log";
let splitArr = str.split(" ");

let str = "quick$brown$fox ,jumps ,over $a $lazy$ log";
let splitArr = str.split("$");
console.log(splitArr);
*/

/*
9. Substring => returns a part of string
Output: uov

let str = "quovantis";
let newStr = str.substring(1, 4);
console.log(newStr);
*/

/*
10. To string => toString() converts the specified objects into string
Output: "1,2,3.4, 43,4,4" as string

let arr = [1,2,3.4, 43,4,4];
let str = arr.toString()
console.log(typeof str);
*/
