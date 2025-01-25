let fruit = "apple";
let bag = {
  [fruit]: 5,  // The property name is taken from the variable fruit
};
console.log(bag[fruit]);  // 5 if fruit="apple"
console.log(bag);  // {apple: 5}
