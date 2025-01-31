let myDate = new Date();

console.log(myDate); // Current date and time

console.log(myDate.toDateString()); // Date portion

console.log(myDate.toLocaleString()); // Date and time based on locale

console.log(myDate.toISOString()); // ISO 8601 format

console.log(myDate.toTimeString()); // Time portion

console.log(myDate.toString()); // Date and time

console.log(myDate.toJSON()); // JSON format

console.log(myDate.toUTCString()); // UTC format

let newDate = new Date(2021, 0, 1, 12, 0, 0, 0); // Year, Month, Date, Hours, Minutes, Seconds, Milliseconds
console.log(newDate.toString()); // Specified date and time
