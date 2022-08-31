/**
 1. create an object of entries about personal information
 * it should necessarily contain the following entries along with the others:
 * - a date datatype
 * - an array
 * - another object within it (nested object)
 * - a function
 */

// your entries here
const info = {
  name: "Johan Fahlgren",
  registeredAt: new Date(2022, 07, 31, 14, 32, 41),
  Address: {
    Street: "Binary Street",
    Number: 0111,
    City: "Data City",
  },
  luckyNumbers: [5, 2, 2, 1],
  Surname: function () {
    return this.name.split(" ")[1];
  },
};

console.log(info);

/**
 * 2. from the array inside the object "info", add it to a new array using destructuring ellipses.
 * the new array should contain:
 * ["element-one", rest of the contents of the old array, "element-two"]
 */

const newArray = ["element-one", ...info.luckyNumbers, "element-two"];

console.log(newArray);

/**
 * 3. create a json file containing an object with at least one entry.
 * Add the object from the file into a new field called "new" inside the object "info"
 */

const json = require("./AssignmentData.json");

info.new = { ...json };

console.log(info);

/**
 * 4. create an arrow function which creates and returns the list of keys from an input object
 */

const getKeys = (myObj) => Object.keys(myObj);

console.log(getKeys(info));

/**
 * 5. convert the date entry from the object "info" into an ISO string and parse it
 */
const myDateString = info.registeredAt.toISOString();

console.log(myDateString);

/**
 * 6. take the array from the object "info" and use the "map" function to return a
 * new array with each item being converted into a string
 */
const myNewArray = [];

const ArrayToString = info.luckyNumbers.map((value) => {
  const myString = value.toString();
  myNewArray.push(myString);
});

//REFACTOR
const myNewArray2 = info.luckyNumbers.map((value) => value.toString());

console.log(myNewArray);
console.log(myNewArray2);

/**
 * 7. try to understand and experiement with the following functions (can ask me for any help always):
 * - map function (array) - a foreach with a callback
 * - reduce function (array) - a foreach with a callback that uses previous number
 * - filter function (array)
 */

//MAP
const SquareRootArray = info.luckyNumbers.map(Math.sqrt);

console.log(SquareRootArray);

//REDUCE
const removeLastArrayValue = info.luckyNumbers.reduce(
  (PreviousValue, CurrentValue) => PreviousValue * CurrentValue
);

console.log(removeLastArrayValue);

//FILTER
const FindEvenNumberInArray = info.luckyNumbers.filter(
  (Value) => Value % 2 === 0
);
console.log(FindEvenNumberInArray);
