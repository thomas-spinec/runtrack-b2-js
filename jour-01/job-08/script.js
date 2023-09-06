function myLength(array) {
    let result = 0;
    while (array[result] !== undefined) {
        result++;
    }
    return result;
}

function myArraySort(array, sorting) {
    if (sorting === "ASC") {
        for (let i=0; i < myLength(array); i++) {
            for (let j = i+1; j < myLength(array); j++) {
                if (array[i] > array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    } else if (sorting === "DESC") {
        for (let i=0; i < myLength(array); i++) {
            for (let j = i+1; j < myLength(array); j++) {
                if (array[i] < array[j]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    return array;
}

// console.log(myArraySort([6, 4, 8, 3, 2, 9, 1, 5, 7], "ASC")); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(myArraySort([6, 4, 8, 3, 2, 9, 1, 5, 7], "DESC")); // [9, 8, 7, 6, 5, 4, 3, 2, 1]