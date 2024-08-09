// find largest element in an array ==============================================================>

let arr = [1, 8, 7, 56, 90];
//Brute Force Approach -> TC-O(nlogn);
function findLargest(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

// console.log(findLargest(arr));

//optimal solution ->
function findLargestOptimal(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findLargestOptimal(arr));
