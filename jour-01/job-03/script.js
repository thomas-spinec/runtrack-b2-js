function myLength(string) {
    let result = 0;
    while (string[result] !== undefined) {
        result++;
    }
    return result;
}

// est ce qu'une chaine de caractère est dans une autre chaine de caractère
function myIsInString(haystack, needle) {
    const needleLength = myLength(needle);
    const haystackLength = myLength(haystack);
    let match = true;
    for (let i = 0 ; i < haystackLength ; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 1 ; j < needleLength ; j++) {
                if (haystack[i + j] !== needle[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;
}

// console.log(myIsInString("Hello World", "llo")); // true