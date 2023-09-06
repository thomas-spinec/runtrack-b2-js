function myLength(string) {
    let result = 0;
    while (string[result] !== undefined) {
        result++;
    }
    return result;
}

function myCountChar(haystack, needle) {
    let count = 0;
    for (let i = 0; i < myLength(haystack); i++) {
        if (haystack[i] === needle) {
            count++;
        }
    }
    return count;
}

// console.log(myCountChar("Hello World", "o")); // 2