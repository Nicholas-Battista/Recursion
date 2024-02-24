// function recursiveFib takes in a value n and returns the amount from the fib sequence
// n = number of fib sequence
// recursiveFib checks for the inital fib numbers and then calls itself inside an array
// unpacking the initial fib sequences and adding the two previous items in the array

const recursiveFib = (n) => {
  if (n <= 0) {
    return "Please enter a number greater than 0";
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return [
      ...recursiveFib(n - 1),
      recursiveFib(n - 1)[n - 2] + recursiveFib(n - 1)[n - 3],
    ];
  }
};

console.log(recursiveFib(-1)); // Please enter a number greater than 0
console.log(recursiveFib(4)); // [ 0, 1, 1, 2 ]
console.log(recursiveFib(10)); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
