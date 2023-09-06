function myLength(array) {
    let result = 0;
    while (array[result] !== undefined) {
        result++;
    }
    return result;
}

function myArraySum(array) {
    let result = 0;
    for (let i = 0; i < myLength(array); i++) {
        result += array[i];
    }
    return result;
}

console.log(myArraySum([4, 24, 52, 14, 32, 56])); // 182