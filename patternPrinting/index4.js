// Input: ‘N’ = 3

// Output:
// 1
// 2 2
// 3 3 3

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
printPattern(4);
