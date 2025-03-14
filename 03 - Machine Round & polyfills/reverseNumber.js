const reverseNumber = (num) => {
    let reverseNum = 0;
    while (num > 0) {
        let reminder = Math.floor(num % 10);
        reverseNum = (reverseNum * 10) + reminder;
        num = Math.floor(num / 10);
       
    }

    return reverseNum;
}


console.log(reverseNumber(125))