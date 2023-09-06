// fonction pour compter le nombre de caractères dans une chaîne de caractères
function myLength(string) {
    let result = 0;
    while (string[result] !== undefined) {
        result++;
    }
    return result;
}

function myUpperCase(string) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < myLength(string); i++) {
        for (let j = 0; j < myLength(lowerCase); j++) {
            if (string[i] === lowerCase[j]) {
                result += upperCase[j];
                break;
            } else if (j === 25){
                result += string[i];
                break;
            }
        }
    }
    return result;
}

// console.log(myUpperCase("Hello World"));