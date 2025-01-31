const num = 123634;


console.log(num.toExponential()) //COnverts exponential notation
console.log(num.toExponential(2)) //COnverts exponential notation with 2 decimal places


console.log(num.toFixed()) //Converts number to string with specified number of decimal places
console.log(num.toFixed(2)) //Converts number to string with specified number of decimal places


console.log(num.toLocaleString('en-US')); //Converts number to string with specified locale
console.log(num.toLocaleString('en-IN'));


console.log(num.toPrecision(5)); //Converts number to string with specified precision 


console.log(num.toString()); //Converts number to string
console.log(num.toString(2)); //Converts number to string in boolean {Radix range 2 - 36}



console.table([
  Number.MAX_VALUE, //Returns the largest number possible in JavaScript
  Number.MIN_VALUE, //Returns the smallest number possible in JavaScript
  Number.POSITIVE_INFINITY, //Returns the positive Infinity value
  Number.NEGATIVE_INFINITY, //Returns the negative Infinity value
  Number.NaN, //Returns NaN value
  Number.EPSILON, //Returns the smallest difference between two representable numbers
  Number.MAX_SAFE_INTEGER, //Returns the largest safe integer in JavaScript
  Number.MIN_SAFE_INTEGER, //Returns the smallest safe integer in JavaScript
  Number.isFinite(num), //Checks if the value is finite i.e not Infinity or NaN
  Number.isInteger(num), //Checks if the value is an integer
  Number.isNaN(num), //Checks if the value is NaN
  Number.isSafeInteger(num), //Checks if the value is a safe integer
]);
