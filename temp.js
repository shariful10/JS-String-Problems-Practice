let first = 5;
let second = 7;
console.log(first, second);

// This is wrong approach
// first = second;
// second = first;

// Aproach No. 1 (Temp)
// const temp = first;
// first = second;
// second = temp;

// Aproach No. 2 (Destructuring)

[first, second] = [second, first];
console.log(first, second);
