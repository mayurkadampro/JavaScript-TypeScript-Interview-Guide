function reverseLetterTrianglePattern(num) {
  // Outer loop for the number of rows.
  for (let i = 0; i < num; i++) {
    // Inner loop will loop for i times and
    // print alphabets from A to A + (N-i-1).
    for (let j = 0; j <= num - i - 1; j++) {
      process.stdout.write(String.fromCharCode(j + 65) + " ");
    }
    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }
}

reverseLetterTrianglePattern(5);
// OUTPUT
// A B C D E
// A B C D
// A B C
// A B
// A
