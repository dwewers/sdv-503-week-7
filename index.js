//Todays class work

function addTwoNumbers(x, y) {
  return x + y;
}
console.log(addTwoNumbers(2, 3));

const add = function (a, b) {
  return a, b;
};

function myFunc() {
  anotherFunc();
  function anotherFunc() {
    return console.log("hello");
  }
}

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);

arr[3] = "x";
console.log(arr);
console.log(arr.length);

const arr1 = ["Name", " lastName"];
console.log(arr1.length);
console.log(1 in arr);
console.log(6 in arr);

var exampleArray = [];
exampleArray.test = 111;
console.log(exampleArray.test);

console.log(arr.slice(1, 2));
console.log(arr);

const names = ["Ali", "Bendy", "Cameron", "Dale"];
console.log(names.slice(2, 3));
//slice is a beggining and an end

console.log(names.pop());
// .pop removes last element from an array, can be returned as a value

console.log(names.push("Davo"));
console.log(names);
//pushes that parameter to the end of the array as a new variable

console.log(arr.concat(names));

names.forEach((name) => console.log(name));

const firstValue = names.shift();
console.log(firstValue);
console.log(names);

console.log(names.unshift("Joe"));
console.log(names);

const MMM = names.reverse();
console.log(MMM);

console.log(names.indexOf("Bendy"));

console.log(names.join("-"));

const newArr = arr.map((num) => num + 1);
console.log(newArr);

let sum = [0, 1, 2, 3];
sum.reduce((a, b) => {
  return a + b;
}, 0);

names.splice(1, 2, "Bendy");
console.log(names);
