function numberCrownPattern(num) {
  // initial no. of spaces in row 1.
  let spaces = 2 * (num - 1);

  // Outer loop for the number of rows.
  for (let i = 1; i <= num; i++) {
    // for printing numbers in each row
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + "");
    }

    // for printing spaces in each row
    for (let j = 1; j <= spaces; j++) {
      process.stdout.write(" ");
    }

    // for printing numbers in each row
    for (let j = i; j >= 1; j--) {
      process.stdout.write(j + "");
    }

    // As soon as the numbers for each iteration are printed, we move to the
    // next row and give a line break otherwise all numbers
    // would get printed in 1 line.
    console.log();

    // After each iteration nos. increase by 2, thus
    // spaces will decrement by 2.
    spaces -= 2;
  }
}

numberCrownPattern(5);

// OUTPUT
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321
