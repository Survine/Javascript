let user = { name: "John" };
let admin = user; // "John" is referenced by both 'user' and 'admin'.
user = null; // Still reachable via 'admin'.
console.log(admin)
