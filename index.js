// const res = fetch("https://api.kanye.rest/");
// res
//   .then(function (res) {
//     let data = res.json();
//     return data;
//   })
//   .then((res) => console.log(res))
//   .catch(function (err) {
//     throw new Error(err);
//   });

//custom promise
// const burger = new Promise(function (resolve, reject) {
//   let a = 1;
//   let b = 1;
//   if (a + b > 3) {
//     resolve("success");
//   } else {
//     reject("fail");
//   }
// });
// burger
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//     // throw new Error(err);
//   });

// async function getUser() {
//   try {
//     const response = await fetch("https://api.kanye.rest/");
//     const res = await response.json();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getUser();

//1. parametrized recursion ===============================================>
    function printSum(n, sum) {
        if (n < 1) {
          console.log(sum);
          return;
        }
        printSum(n - 1, sum + n);
      }
      // printSum(5, 0);
      
      //2. functional recursion =======================================================>
      function findFactorial(n) {
        if (n == 1) {
          return 1;
        }
        return n * findFactorial(n - 1);
      }
      // console.log(findFactorial(5));
      
      //3. reverse an array using 2 pointer approach =========================================>
      let arr = [1, 2, 3, 4, 5];
      function reverseArr(arr) {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
          let temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
        }
        return arr;
      }
      // console.log(reverseArr(arr));
      
      //4. reverse an array using recursion ====================================================>
      function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      
      //5. Function to reverse the array using recursion ======================================================>
      function reverseArray(arr, i, n) {
        if (i >= n / 2) {
          return;
        }
        swap(arr, i, n - i - 1);
        reverseArray(arr, i + 1, n);
      }
      
      reverseArray(arr, 0, arr.length);
      // console.log("Reversed array:", arr);
      
      //6. check if a string is palindrome or not ============================================================>
      function checkPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
          if (str[left] !== str[right]) {
            return false;
          }
          left++;
          right--;
        }
        return true;
      }
      let str = "madam";
      // console.log(checkPalindrome(str));
      
      //7. check palindrome using recursion =======================================================>
      function palindrome(i, s) {
        n = s.length;
        if (i >= n / 2) {
          return true;
        }
        if (s[i] != s[n - i - 1]) {
          return false;
        }
        return palindrome(i + 1, s);
      }
      // console.log(palindrome(0, str));
      
      //8. fibonacci number using iterative approach ================================================>
      function findFibonacci(n) {
        if (n == 0) {
          return 0;
        }
        if (n == 1) {
          return 1;
        }
        let a = 0;
        let b = 1;
        let result;
        for (let i = 2; i <= n; i++) {
          result = a + b;
          a = b;
          b = result;
        }
        return result;
      }
      
      // console.log(findFibonacci(7));
      //9. fibonacci number usin recursion ========================================================>
      function fibonacciNum(n) {
        if (n <= 1) {
          return n;
        }
        return fibonacciNum(n - 1) + fibonacciNum(n - 2);
      }
      // console.log(fibonacciNum(8));
      
      //10. print all subsequence using recursion ========================================================>
      let newArr = [3, 1, 2];
      function prntSubsequesnce(i, destination, arr) {
        if (i >= arr.length) {
          console.log(destination);
          return;
        }
        destination.push(arr[i]);
        prntSubsequesnce(i + 1, destination, arr);
      
        destination.pop();
        prntSubsequesnce(i + 1, destination, arr);
      }
      // prntSubsequesnce(0, [], newArr);
      
      //11. printing subsequence whose sum is k ========================================================>
      function kSumSubSeq(i, destination, s, sum, arr) {
        if (i == arr.length) {
          if (s == sum) {
            console.log(destination);
          }
          return;
        }
        destination.push(arr[i]);
        s += arr[i];
        kSumSubSeq(i + 1, destination, s, sum, arr);
        destination.pop();
        s -= arr[i];
        kSumSubSeq(i + 1, destination, s, sum, arr);
      }
      // kSumSubSeq(0, [], 0, 2, [1, 2, 1]);
      
      //12. print any one  subsequence with sum k ========================================================>
      function printSingleSumSubSequence(i, destination, s, sum, arr) {
        if (i == arr.length) {
          if (s == sum) {
            console.log(destination);
            return true;
          } else {
            return false;
          }
        }
        destination.push(arr[i]);
        s += arr[i];
        if (printSingleSumSubSequence(i + 1, destination, s, sum, arr) == true) {
          return true;
        }
      
        s -= arr[i];
        destination.pop();
        if (printSingleSumSubSequence(i + 1, destination, s, sum, arr) == true) {
          return true;
        }
        return false;
      }
      // printSingleSumSubSequence(0, [], 0, 2, [1, 2, 1]);
      
      //13. print two subsequence whose sum is k ========================================================>
      function findTwoSubSeqence(i, s, sum, arr) {
        if (i == arr.length) {
          if (s == sum) {
            return 1;
          } else {
            return 0;
          }
        }
        s += arr[i];
        let left = findTwoSubSeqence(i + 1, s, sum, arr);
      
        s -= arr[i];
        let right = findTwoSubSeqence(i + 1, s, sum, arr);
      
        return left + right;
      }
      
      // console.log(findTwoSubSeqence(0,0,2,[1,2,1]));
      
      //14. print name n times using recursion ========================================================>
      function printName(i, n) {
        //base case
        if (i > n) {
          return;
        }
        console.log("Prachi");
        printName(i + 1, n);
      }
      // printName(1,6);
      
      function printNum(i, n) {
        if (i > n) {
          return;
        }
        console.log(i);
        printNum(i + 1, n);
      }
      // printNum(1,5);
      
      //15. print numbers from n to 1 ========================================================>
      function printReverseNum(i, n) {
        if (i < 1) return;
        console.log(i);
        printReverseNum(i - 1, n);
      }
      // printReverseNum(5,5);
      
      //16. print 1 to n using backtracking ========================================================>
      function print1toN(i, n) {
        if (i < 1) return;
        print1toN(i - 1, n);
        console.log(i);
      }
      // print1toN(5,5);
      
      //17. print n to 1 using backtracking ========================================================>
      function printNto1(i, n) {
        if (i > n) return;
        printNto1(i + 1, n);
        console.log(i);
      }
      // printNto1(1,5);
      
      // 18. find freq of a given number in array ========================================================>
      //brute force approach
      function countFrequency(num, arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == num) {
            count++;
          }
        }
        return count;
      }
      // console.log(countFrequency(2, [1, 2, 4, 2, 3, 2, 5]));
      
      //using hashing
      function findFreq(num, arr) {
        const mp = new Map();
        for (let i = 0; i < arr.length; i++) {
          if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1);
          } else {
            mp.set(arr[i], 1);
          }
        }
        return mp.get(num) || 0;
      }
      // console.log(findFreq(1, [1, 2, 4, 2, 1, 2, 5]));
      
      //19. count the frequency of a character from the given string ========================================================>
      function countCharFrequency(chr, str) {
        const mp = new Map();
        for (let i = 0; i < str.length; i++) {
          if (mp.has(str[i])) {
            mp.set(str[i], mp.get(str[i]) + 1);
          } else {
            mp.set(str[i], 1);
          }
        }
        return mp.get(chr) || 0;
      }
      // console.log(countCharFrequency("f", "abcdabcfc"));
      
      //20. selection sort ===================================================================================>
      //helper swap function
      function swapTwoNos(a, b, arr) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
      //selection sort function
      function selectionSort(arr) {
        for (let i = 0; i < arr.length - 2; i++) {
          let min = i;
          for (let j = i; j <= arr.length - 1; j++) {
            if (arr[j] < arr[min]) {
              min = j;
            }
          }
          swapTwoNos(i, min, arr);
        }
        return arr;
      }
      let unsortedArr = [13, 46, 24, 52, 20, 9];
      // console.log(selectionSort(unsortedArr));
      
      //21. Buble sort  ==================================================================================================>
      function bubbleSort(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
          let didSwap = 0;
          for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
              swapTwoNos(j, j + 1, arr);
              didSwap = 1;
            }
          }
          if (didSwap == 0) {
            break;
          }
        }
        return arr;
      }
      // console.log(bubbleSort(unsortedArr));
      
      //22. Insertion sort  ====================================================================================>
      function InsertionSort(arr) {
        for (let i = 0; i <= arr.length - 1; i++) {
          let j = i;
          while (j > 0 && arr[j - 1] > arr[j]) {
            swapTwoNos(j - 1, j, arr);
            j--;
          }
        }
        return arr;
      }
      // console.log(InsertionSort(unsortedArr));
      
      //23. merge sort - divide and merge =======================================================================================>
      //function to merge two sorted arrays
      function merge(arr, low, mid, high) {
        let temp = [];
        let left = low;
        right = mid + 1;
        while (left <= mid && right <= high) {
          if (arr[left] < arr[right]) {
            temp.push(arr[left]);
            left++;
          } else {
            temp.push(arr[right]);
            right++;
          }
        }
        while (left <= mid) {
          temp.push(arr[left]);
          left++;
        }
        while (right <= high) {
          temp.push(arr[right]);
          right++;
        }
        for (let i = low; i <= high; i++) {
          arr[i] = temp[i - low];
        }
      }
      
      //merge sort function
      function mergeSort(arr, low, high) {
        if (low >= high) {
          return;
        }
        let mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
      }
      let mergeSortedArr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
      mergeSort(mergeSortedArr, 0, mergeSortedArr.length - 1);
      // console.log(mergeSortedArr);
      
      //24. Quick sort ===========================================================================================================>
      // function to find pivot and place it in correct order
      function insertPivot(arr, low, high) {
        let pivot = arr[low];
        let i = low;
        let j = high;
        while (i < j) {
          while (arr[i] <= pivot && i <= high - 1) {
            i++;
          }
          while (arr[j] > pivot && j >= low + 1) {
            j--;
          }
          if (i < j) {
            swapTwoNos(i, j, arr);
          }
        }
        swapTwoNos(low, j, arr);
        return j;
      }
      //quick sort function
      function quickSort(arr, low, high) {
        if (low < high) {
          let partition_index = insertPivot(arr, low, high);
          quickSort(arr, low, partition_index - 1);
          quickSort(arr, partition_index + 1, high);
        }
      }
      
      quickSort(unsortedArr, 0, unsortedArr.length - 1);
      // console.log(unsortedArr);
      
      //25. Recursive bubble sort =======================================================================================>
      function recursiveBubbleSort(arr, n) {
        if (n == 1) {
          return;
        }
        let didSwap = 0;
        for (let j = 0; j <= n - 2; j++) {
          if (arr[j] > arr[j + 1]) {
            swap(j, j + 1, arr);
            didSwap = 1;
          }
        }
        if (didSwap == 0) {
          return;
        }
        recursiveBubbleSort(arr, n - 1);
      }
      let arr1 = [13, 46, 24, 52, 20, 9];
      recursiveBubbleSort(arr1, arr1.length);
      // console.log(arr1);
      
      //26. recursive insertion sort ============================================================================================>
      function recursinsertionSort(arr, i, n) {
        if (i == n) {
          return;
        }
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
          swapTwoNos(j - 1, j, arr);
          j--;
        }
        recursinsertionSort(arr, i + 1, n);
      }
      let arr2 = [13, 46, 24, 52, 20, 9];
      recursinsertionSort(arr2, 0, arr2.length);
      // console.log(arr2);
      
      //27. find largest element ===========================================================================================>
      let array = [5, 36, 7, 2, 1, 57, 8];
      //brute forcee==> nlogn time
      function findLargest(arr) {
        arr.sort((a, b) => a - b);
        return arr[arr.length - 1];
      }
      // console.log(findLargest(array));
      
      //optimal solution ===> n time
      function findLargestEle(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }
      // console.log(findLargestEle(array));
      
      //28. find second largest element ====================================================================================>
      //brute forse --> TC is NlogN
      function findSecondLargest(arr) {
        arr.sort((a, b) => a - b);
        let largest = arr[arr.length - 1];
        for (let i = arr.length - 2; i >= 0; i--) {
          if (arr[i] !== largest) {
            var secondLarge = arr[i];
            break;
          }
        }
        return secondLarge;
      }
      // console.log(findSecondLargest([5, 7, 3, 9, 9, 2, 6, 9]));
      
      //better approach --> O(n+n) =  O(n)
      function secLargest(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        let secondMax = -Infinity;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];
          }
        }
        return secondMax;
      }
      // console.log(secLargest([5, 7, 3, 9, 9, 2, 6, 9]));
      
      //optimal solution --> O(n)
      function optimalSecondLargest(arr) {
        if (arr.length < 2) {
          return "array size is less than 2";
        }
        let largest = arr[0];
        let sLargest = -Infinity;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
          } else if (arr[i] != largest && arr[i] > sLargest) {
            sLargest = arr[i];
          }
        }
        return sLargest;
      }
      // console.log(optimalSecondLargest([5, 7, 3, 9, 9, 2, 6, 9]));
      
      //29. check if array is sorted ======================================================================================>
      function checkSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] >= arr[i - 1]) {
          } else {
            return false;
          }
        }
        return true;
      }
      // console.log(checkSorted([1, 7, 3, 4, 5]));
      
      //remove duplicates from an array
      
      //brute force approach using set --> both TC and SC is O(n)
      function removeDupli(arr) {
        let uniqueArr = [...new Set(arr)];
        return uniqueArr.length;
      }
      // console.log(removeDupli([1, 2, 1, 3, 2, 3, 4]));
      //optimal solution -> tc O(n) and sc O(1);
      function removeDuplicates(nums) {
        if (nums.length == 0) {
          return 0;
        }
        let k = 0;
        for (let i = 1; i < nums.length; i++) {
          if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
          }
        }
        nums.length = k + 1;
        return nums;
      }
      let dupliArr = [1, 1, 2, 2, 2, 3, 4, 5];
      // console.log(removeDuplicates(dupliArr));
      
      //30. left rotate the array by one place =================================================================================>
      function leftRotate(arr) {
        let temp = arr[0];
        for (let i = 1; i < arr.length; i++) {
          arr[i - 1] = arr[i];
        }
        arr[arr.length - 1] = temp;
        return arr;
      }
      // console.log(leftRotate([1,2,3,4,5]))
      
      //31. left rotate the array by k place ===========================================================================>
      //Brute force approach -> TC-0(n+d) and SC-O(n)
      let rotateArr = [1, 2, 3, 4, 5, 6, 7];
      function rotateKPlace(arr, k) {
        k = k % arr.length;
        let temp = [];
        for (let i = 0; i < k; i++) {
          temp.push(arr[i]);
        }
        for (let i = k; i < arr.length; i++) {
          arr[i - k] = arr[i];
        }
        //we can use this j variable to put the temp array at the end ->
        //  let j=0;
        //  for(let i=arr.length-k; i<arr.length;i++){
        //   arr[i] = temp[j];
        //   j++;
        //  }
        //instead of j we can use mathmatical calculations
        for (let i = arr.length - k; i < arr.length; i++) {
          arr[i] = temp[i - (arr.length - k)];
        }
        return arr;
      }
      // console.log(rotateKPlace(rotateArr,3))
      
      //optimal solution -> TC-O(2n) ->O(n), SC-O(1)
      //reverse function
      function reverse(start, end, arr) {
        while (start < end) {
          let temp = arr[start];
          arr[start] = arr[end];
          arr[end] = temp;
          start++;
          end--;
        }
      }
      function rotateKEle(arr, k) {
        reverse(0, k, arr);
        reverse(k + 1, arr.length - 1, arr);
        reverse(0, arr.length - 1, arr);
      }
      rotateKEle(rotateArr, 3);
      // console.log(rotateArr)
      
      //32. move all the zeros at the end of the array ===========================================================>
      //brute force approach -> TC- O(2n), SC - O(x) or at worst it can be O(n)
      function moveZeros(arr) {
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== 0) {
            temp.push(arr[i]);
          }
        }
        for (let i = 0; i < temp.length; i++) {
          arr[i] = temp[i];
        }
        for (let i = temp.length; i < arr.length; i++) {
          arr[i] = 0;
        }
        return arr;
      }
      let zeroArr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
      // console.log(moveZeros(zeroArr));
      
      //optimal solution -> TC-O(n) and SC-O(1)
      function moveZerosAtEnd(arr) {
        let j = -1;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 0) {
            j = i;
            break;
          }
        }
        for (let i = j + 1; i < arr.length; i++) {
          if (arr[i] !== 0) {
            swapTwoNos(i, j, arr);
            j++;
          }
        }
        return arr;
      }
      // console.log(moveZerosAtEnd(zeroArr));
      
      //another better solution -- whihc can handle all the edge cases
      function moveZerosOptimal(arr) {
        let j = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== 0) {
            swapTwoNos(i, j, arr);
            j++;
          }
        }
        return arr;
      }
      // console.log(moveZerosOptimal([1,2]));
      
      //33. linear search ==============================================================================>
      function linearSearch(arr, k) {
        for (let i = 0; i, arr.length; i++) {
          if (arr[i] === k) {
            return i;
          } else {
            return -1;
          }
        }
      }
      linearSearchArr = [6, 7, 8, 4, 1];
      // console.log(linearSearch(linearSearchArr,9))
      
      //34. find union of two sorted arrays=================================================================>
      //brute force approach ->TC-O(n+m) SC-O(n+m)
      function findUnion(arr1, arr2) {
        let newArr = arr1.concat(arr2);
        let unionArr = [...new Set(newArr)];
        return unionArr;
      }
      let uA1 = [1, 1, 2, 3, 4, 5];
      let uA2 = [2, 3, 4, 4, 5, 6];
      // console.log(findUnion(uA1,uA2));
      
      //optimal approach using 2 pointer ->  TC - O(n+m) and SC - O(n+m)
      function UnionOfArrays(arr1, arr2) {
        let i = 0;
        let j = 0;
        let unionArr = [];
        while (i < arr1.length && j < arr2.length) {
          if (arr1[i] <= arr2[j]) {
            if (!unionArr.includes(arr1[i])) {
              unionArr.push(arr1[i]);
            }
            i++;
          } else {
            if (!unionArr.includes(arr2[j])) {
              unionArr.push(arr2[j]);
            }
            j++;
          }
        }
        while (i < arr1.length) {
          if (!unionArr.includes(arr1[i])) {
            unionArr.push(arr1[i]);
          }
          i++;
        }
        while (j < arr2.length) {
          if (!unionArr.includes(arr2[j])) {
            unionArr.push(arr2[j]);
          }
          j++;
        }
        return unionArr;
      }
      // console.log(UnionOfArrays(uA1,uA2));
      
      //35. Intersection of two sorted arrays =====================================================================>
      //Brute Force Approach  -> TC - O(n1n2) SC - O(n2)
      function interSection(arr1, arr2) {
        let visited = Array(arr1.length).fill(0);
        let ans = [];
        for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && visited[j] === 0) {
              ans.push(arr1[i]);
              visited[j] = 1;
              break;
            }
            if (arr2[j] > arr1[i]) break;
          }
        }
        return ans;
      }
      let interArr1 = [1, 2, 2, 3, 3, 4, 5, 6];
      let interArr2 = [2, 3, 3, 5, 6, 6, 7];
      // console.log(interSection(interArr1,interArr2));
      
      //optimal solution - TC - O(n+m) SC - O(1)
      function intersectionOfArrays(arr1, arr2) {
        let i = 0,
          j = 0;
        let ans = [];
        while (i < arr1.length && j < arr2.length) {
          if (arr1[i] < arr2[j]) {
            i++;
          } else if (arr1[i] > arr2[j]) {
            j++;
          } else {
            ans.push(arr1[i]);
            i++;
            j++;
          }
        }
        return ans;
      }
      // console.log(intersectionOfArrays(interArr1,interArr2));
      
      //36. find missing mumber in an array =================================================================>
      //brute force approach - TC - O(n*n) SC - O(1)
      function findMissingNumber(arr, N) {
        for (let i = 1; i < N; i++) {
          let flag = 0;
          for (let j = 0; j < arr.length; j++) {
            if (arr[j] == i) {
              flag = 1;
              break;
            }
          }
          if (flag == 0) {
            return i;
          }
        }
      }
      let missingArr = [1, 2, 4, 5];
      // console.log(findMissingNumber(missingArr,5));
      //better approach - TC - O(n) SC - O(n)
      function findMissingBetter(arr, N) {
        let hashArr = new Array(N + 1).fill(0);
        for (let i = 0; i < N; i++) {
          hashArr[arr[i]]++;
        }
        for (let i = 1; i < N - 1; i++) {
          if (hashArr[i] == 0) {
            return i;
          }
        }
        return -1;
      }
      // console.log(findMissingBetter([1,2,3,4,5,6],7));
      
      //optimal - TC - O(n) SC - O(1)
      function findMissingoptimal(arr, N) {
        let sum = (N * (N + 1)) / 2;
        let s1 = 0;
        for (let i = 0; i < arr.length; i++) {
          s1 += arr[i];
        }
        return sum - s1;
      }
      // console.log(findMissingoptimal([1,2,3,4,5,6],7));
      
      //37. find maximum consecutive ones ======================================================================>
      //optimal - TC - O(n) SC - O(n)
      function findMaxConsecutiveOnes(arr) {
        let max = 0,
          count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 1) {
            count++;
            max = Math.max(max, count);
          } else {
            count = 0;
          }
        }
        return max;
      }
      consArr = [1, 1, 0, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1];
      // console.log(findMaxConsecutiveOnes(consArr))
      
      //38. find the number that appears once in the array ==================================================================>
      //brute force approach - TC -O(N*N) SC- O(1)
      function findSingleOccu(arr) {
        for (let i = 0; i < arr.length; i++) {
          let num = arr[i];
          let count = 0;
          for (let j = 0; j < arr.length; j++) {
            if (arr[j] === num) {
              count++;
            }
          }
          if (count === 1) {
            return num;
          }
        }
        return -1;
      }
      let singleArr = [1, 1, 2, 3, 3, 4, 4, 5, 5];
      // console.log(findSingleOccu(singleArr));
      
      //better - TC - O(n+m) SC - O(m)
      function findSingleOccurBetter(arr) {
        let mp = new Map();
        arr.map((ele) => {
          mp.set(ele, (mp.get(ele) || 0) + 1);
        });
        for (const [num, count] of mp) {
          if (count === 1) {
            return num;
          }
        }
        return -1;
      }
      // console.log(findSingleOccurBetter(singleArr));
      
      //optimal  - TC - O(n) SC - O(1)
      function findSingleOccuOptimal(arr) {
        let xor = 0;
        arr.map((ele) => {
          xor = xor ^ ele;
        });
        return xor;
      }
      // console.log(findSingleOccuOptimal(singleArr));
      
      //39. find the longest subarray with sum k ====================================================================>
      //brute force approach - TC - O(n^3), SC = O(1)
      function findLongestSubArray(arr, k) {
        let len = 0;
        for (let i = 0; i < arr.length; i++) {
          for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
              sum += arr[k];
            }
            if (sum === k) {
              len = Math.max(len, j - i + 1);
            }
          }
        }
        return len;
      }
      let longArr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
      // console.log(findLongestSubArray(longArr,10));
      
      //better brute force apporach - TC - O(n^2)
      function findLongestSubArrayBetter(arr, k) {
        let len = 0;
        for (let i = 0; i < arr.length; i++) {
          let sum = 0;
          for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
              len = Math.max(len, j - i + 1);
            }
          }
        }
        return len;
      }
      // console.log(findLongestSubArrayBetter(longArr, 10));
      
      //better approach - TC - O(n) SC - O(n)
      // if array contains negative as well as positive numbers
      //then this approach will be the optimal
      function findLongestSubArrayLen(arr, k) {
        let mp = new Map();
        let maxLen = 0;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
          if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
          }
          let rem = sum - k;
          if (mp.has(rem)) {
            let len = i - mp.get(rem);
            maxLen = Math.mac(len, maxLen);
          }
          if (!mp.has(sum)) {
            mp.set(sum, i);
          }
        }
        return maxLen;
      }
      // console.log(findLongestSubArrayBetter(longArr, 10));
      
      //Optimal solution - TC - O(2n) SC - O(1)
      function longestSubArrOptimal(arr, k) {
        let left = 0,
          right = 0;
        let sum = arr[0];
        let maxLen = 0;
        while (right < arr.length) {
          while (left <= right && sum > k) {
            sum -= arr[left];
            left++;
          }
          if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
          }
          right++;
          if (right < arr.length) {
            sum += arr[right];
          }
        }
        return maxLen;
      }
      //console.log(longestSubArrOptimal(longArr, 3));
      
      //40. Two Sum Problem ===================================================================================>
      //Brute Force - TC - O(n^2) SC- O(1)
      function twoSumBrute(arr, target) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (i === j) {
              continue;
            }
            if (arr[i] + arr[j] === target) {
              return [i, j];
            }
          }
        }
      }
      let twoSumArr = [2, 6, 5, 8, 11];
      // console.log(twoSumBrute(twoSumArr, 14));
      
      function twoSumBetterBrute(arr, target) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = i11; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
              return [i, j];
            }
          }
        }
      }
      // console.log(twoSumBrute([3, 3], 6));
      
      //Better solution - TC - O(n) SC  - O(n) -> this is optimal when need to return index
      function twoSumBetter(arr, target) {
        let mp = new Map();
        for (let i = 0; i < arr.length; i++) {
          let a = arr[i];
          let more = target - a;
          if (mp.has(more)) {
            return [mp.get(more), i];
          }
          mp.set(arr[i], i);
        }
        return [-1, -1];
      }
      // console.log(twoSumBetter(twoSumArr, 14));
      
      //optimal -> Not so optimal approach - TC  O(nlogn) SC O(n)
      function twoSumOptimal(arr, target) {
        let indexedArr = arr.map((value, index) => ({ value, index }));
        indexedArr.sort((a, b) => a.value - b.value);
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
          let sum = indexedArr[left].value + indexedArr[right].value;
          if (sum > target) {
            right--;
          } else if (sum < target) {
            left++;
          } else if (sum === target) {
            return [indexedArr[left].index, indexedArr[right].index];
          }
        }
      }
      // console.log(twoSumOptimal(twoSumArr, 14));
      
      //41.Sort array of 0's, 1's and 2's ==============================================>
      //brute force will be merge sort
      //better approach - TC- O(2n) SC - O(1)
      function sortSpecialArr(arr) {
        let count0 = 0,
          count1 = 0,
          count2 = 0;
        arr.map((ele) => {
          if (ele === 0) {
            count0++;
          } else if (ele === 1) {
            count1++;
          } else if (ele === 2) {
            count2++;
          }
        });
        for (let i = 0; i < count0; i++) {
          arr[i] = 0;
        }
        for (let i = count0; i < count0 + count1; i++) {
          arr[i] = 1;
        }
        for (let i = count0 + count1; i < arr.length; i++) {
          arr[i] = 2;
        }
        return arr;
      }
      specailArr = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
      // console.log(sortSpecialArr(specailArr));
      
      //optimal - TC - O(n) SC- O(1)
      function sortSpecialArrOptimal(arr) {
        let low = 0,
          mid = 0,
          high = arr.length - 1;
        while (mid <= high) {
          if (arr[mid] === 0) {
            swapTwoNos(mid, low, arr);
            low++;
            mid++;
          } else if (arr[mid] === 1) {
            mid++;
          } else if (arr[mid] === 2) {
            swapTwoNos(mid, high, arr);
            high--;
          }
        }
        return arr;
      }
      // console.log(sortSpecialArrOptimal(specailArr));
      
      //42. find majority element that appears more than [n/2] times ============================================>
      //brute force
      function majorityEle(arr) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
          let count = 0;
          for (let j = 0; j < n; j++) {
            if (arr[j] === arr[i]) {
              count++;
            }
          }
          if (count > Math.floor(n / 2)) {
            return arr[i];
          }
        }
      }
      let majorityArr = [2, 2, 3, 3, 1, 2, 2];
      // console.log(majorityEle(majorityArr));
      
      //better solution - TC O(n) SC O(n)
      function majorityEleBetter(arr) {
        let mp = new Map();
        let n = arr.length;
        for (let i = 0; i < n; i++) {
          if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1);
          } else {
            mp.set(arr[i], 1);
          }
        }
        for (const [num, count] of mp) {
          if (count > Math.floor(n / 2)) {
            return num;
          }
        }
      }
      // console.log(majorityEleBetter(majorityArr));
      
      //optimal -> using Moore's Voting Algorithm - TC O(N) SC - O(1)
      function majorityEleOptimal(arr) {
        let ele;
        let count = 0;
        let n = arr.length;
        for (let i = 0; i < n; i++) {
          if (count === 0) {
            count = 1;
            ele = arr[i];
          } else if (arr[i] === ele) {
            count++;
          } else {
            count--;
          }
        }
        let count2 = 0;
        for (let i = 0; i < n; i++) {
          if (arr[i] === ele) {
            count2++;
          }
        }
        if (count2 > Math.floor(n / 2)) {
          return ele;
        } else {
          return -1;
        }
      }
      console.log(majorityEleOptimal(majorityArr));
