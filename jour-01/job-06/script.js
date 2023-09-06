function toSquare(number) {
    return number ** 2;
}

function mySquareArray(array) {
    let result = [];
    for (let number of array) {
        result = [...result, toSquare(number)];
    }
    return result;
}

// console.log(mySquareArray([3, 8, 4, 2, 5]))