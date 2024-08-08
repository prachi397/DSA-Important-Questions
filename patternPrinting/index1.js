// Input: ‘N’ = 3

// Output:
// * * *
// * * *
// * * *
function printSquarePattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}
printSquarePattern(5);
