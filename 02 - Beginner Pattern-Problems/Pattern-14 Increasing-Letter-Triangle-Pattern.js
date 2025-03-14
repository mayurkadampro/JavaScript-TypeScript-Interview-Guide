function increasingLetterTrianglePattern(num) {
  // Outer loop for the number of rows.
  for (let i = 0; i < num; i++) {
    // Inner loop will loop for i times and
    // print alphabets from A to A + i.
    for (let j = 0; j <= i; j++) {
      process.stdout.write(String.fromCharCode(j + 65) + " ");
    }
    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }
}

increasingLetterTrianglePattern(5);
// OUTPUT
// A
// A B
// A B C
// A B C D
// A B C D E
