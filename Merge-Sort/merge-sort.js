// mergeSort() is a recursive function that
// sorts the left half of numbers -> sorts the right half of numbers -> then merges the two together
//
// takes in an array -> splits the array -> calls the merge function ->
// the merge function is passed mergeSort() with the first and second halfs (recursive) ->
// returns sorted array

// the recursion splits the array into parts and then returns its way out sorting from smaller arrays -> larger ones

const mergeSort = (array) => {
  if (array === undefined) return "Please enter an array";
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

const merge = (arr1, arr2) => {
  let sortedArry = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArry.push(arr1[i]);
      i++;
    } else {
      sortedArry.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArry.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArry.push(arr2[j]);
    j++;
  }

  return sortedArry;
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // returns [79, 100, 105, 110]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 8])); // returns [0, 1, 1, 2, 3, 5, 8, 8, 13]
console.log(mergeSort([2, 4, 1, 6, 5, 3])); // returns [1, 2, 3, 4, 5, 6]
console.log(mergeSort([1])); // returns [1]
console.log(mergeSort([])); // returns []
console.log(mergeSort()); // returns "Please enter an array"
