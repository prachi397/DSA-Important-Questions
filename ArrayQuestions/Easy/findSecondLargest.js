// Given an array arr, return the second largest distinct element from an array.
// If the second largest element doesn't exist then return -1.

let arr = [12, 35, 1, 10, 34, 1];
//brute force Approach -TC -O(nlogn)
function findFindSecondLargest(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
// console.log(findFindSecondLargest(arr));

//better Approach - TC - 0(n+n) -> O(n)
function findSecondLargestBetter(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// console.log(findFindSecondLargest(arr));

//optimal --> TC - O(n)
function findSecondLargestOptimal(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  if (arr.length < 2) {
    return "array size is less than 2";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargestOptimal(arr));
