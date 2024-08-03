function NumberToBinary(num) {
  let decimalNumber = "";
  while (num != 0) {
    let reminder = Math.floor(num / 2);
    let quotient = Math.floor(num % 2);
    decimalNumber += quotient;
    num = reminder;
  }

  return decimalNumber.split("").reverse().join("");
}

function NumberTBinaryRecursion(num) {
  // base case
  if (num <= 0) {
    return;
  }

  let ans = NumberTBinaryRecursion(Math.floor(num / 2));
  let reminder = Math.floor(num % 2);

  if (ans) {
    reminder = ans + "" + reminder;
  }
  return reminder;
}

console.log(NumberTBinaryRecursion(4));
