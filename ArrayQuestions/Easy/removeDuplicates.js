//remove duplicates from an array
let arr = [1, 2, 1, 3, 2, 3, 4];
// brute force approach using set --> both TC and SC is O(n)
function removeDuplicates(arr) {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}
// console.log(removeDuplicates(arr));

//optimal solution -> tc O(n) and sc O(1);
function removeDuplicatesOptimal(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let k = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[k]) {
      k++;
      arr[k] = arr[i];
    }
  }
  arr.length = k + 1;
  return arr;
}
console.log(removeDuplicatesOptimal([1, 1, 2, 2, 2, 3, 4, 5]));
