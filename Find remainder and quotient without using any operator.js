let count = 0, num = 10, divisor = 2;
const calWithoutOp = (num, divisor) => {
    if (divisor == 0) return -1;

    while (num >= divisor) {
        num = num - divisor;
        count++;
    }
    return { num, count }
}

const output = calWithoutOp(num, divisor);
console.log("Reminder is ", output.num);
console.log("quotient is ", output.count);