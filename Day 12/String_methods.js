// String length
let str = "Hello, World!";
console.log(str.length); // Output: 13

// Finding a substring
console.log(str.indexOf("World")); // Output: 7
console.log(str.includes("Hello")); // Output: true

// Extracting a substring
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.substring(7, 12)); // Output: World

// Changing case
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!

// Replacing a substring
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!

// Trimming whitespace
let strWithWhitespace = "   Hello, World!   ";
console.log(strWithWhitespace.trim()); // Output: Hello, World!

// Splitting a string
let strToSplit = "Hello, World!";
console.log(strToSplit.split(", ")); // Output: [ 'Hello', 'World!' ]

// Concatenating strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!