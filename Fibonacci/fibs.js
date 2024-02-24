// using a for loop and an input n. Fibs returns an
// array of that many positions in the fibonacci
// sequence. Iterative Approach.

const fibs = (n) => {
  let fibSequence = [0];
  for (let i = 0; i < n - 1; i++) {
    i === 0
      ? fibSequence.push(1)
      : fibSequence.push(fibSequence[i] + fibSequence[i - 1]);
  }
  return fibSequence;
};
console.log(fibs(12));
