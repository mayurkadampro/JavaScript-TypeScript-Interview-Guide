function rightAngledNumberPyramid(num) {
  // Soln #1 - By Incrementing J Value

  // This is the outer loop which will loop for the rows.
  // for (let i = 0; i < num; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     process.stdout.write(i + 1 + " ");
  //   }
  //   console.log();
  // }

  // Soln #2 - By changing loop iteration from 1

  // This is the outer loop which will loop for the rows.
  for (let i = 1; i <= num; i++) {
    // This is the inner loop which loops for the columns
    // no. of columns = row number for each line here.
    // Here, we print numbers equal to the row number
    // instead of stars in each row.
    for (let j = 1; j <= i; j++) {
      process.stdout.write(i + " ");
    }

    // As soon as numbers for each iteration are printed, we move to the
    // next row and give a line break otherwise all numbers
    // would get printed in 1 line.
    console.log();
  }
}

rightAngledNumberPyramid(5);

// OUTPUT
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
