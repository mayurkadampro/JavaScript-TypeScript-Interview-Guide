function alphaTrianglePattern(num) {
  // Outer loop for the no. of rows.
  for (let i = 0; i < num; i++) {
    // Inner loop for printing the alphabets from
    // A + N -1 -i (i is row no.) to A + N -1 ( E in this case).
    for (let ch = 65 + num - 1 - i; ch <= 65 + num - 1; ch++) {
      process.stdout.write(String.fromCharCode(ch) + " ");
    }

    // As soon as the letters for each iteration are printed, we move to the
    // next row and give a line break otherwise all letters
    // would get printed in 1 line.
    console.log();
  }
}

alphaTrianglePattern(5);
// OUTPUT
// E
// D E
// C D E
// B C D E
// A B C D E
