function myLength(array) {
    let result = 0;
    while (array[result] !== undefined) {
        result++;
    }
    return result;
}

function absolute(number) {
    if (number < 0) {
        return -number;
    }
    return number;
}

function myNearZero(array) {
    let result = array[0];
    for (let i = 1; i < myLength(array); i++) {
        if (absolute(array[i]) < absolute(result)) {
            result = array[i];
        }
        // on prend le positif
        else if (absolute(array[i]) === absolute(result)) {
            if (array[i] > result) {
                result = array[i];
            }
        }
    }
    return result;
}

// console.log(myNearZero([4, 24, 52, 14, 32, -1, 1]));