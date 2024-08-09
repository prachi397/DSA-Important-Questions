// Input:  ‘N’ = 3

// Output:
// *
// * *
// * * *

function printForest(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
}
printForest(5);
