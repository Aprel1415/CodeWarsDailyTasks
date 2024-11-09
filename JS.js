//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num) {
    // Преобразуем число в строку, чтобы итерироваться по каждой цифре
    const numStr = num.toString();
    
    // Возводим каждую цифру в квадрат и объединяем результаты
    const squaredStr = numStr.split('').map(digit => (parseInt(digit) ** 2).toString()).join('');
    
    // Преобразуем объединённую строку обратно в целое число
    return parseInt(squaredStr);
}

// Примеры использования:
console.log(squareDigits(9119)); // Вывод: 811181
console.log(squareDigits(765));   // Вывод: 493625

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    // Check the length of the string
    if (cc.length <= 4) {
        return cc; // Return the string as is if it's 4 characters or less
    }
    
    // Create the masked part and concatenate with the last four characters
    const maskedPart = '#'.repeat(cc.length - 4); // Create a string of '#'s
    const lastFour = cc.slice(-4); // Get the last four characters
    
    return maskedPart + lastFour; // Combine and return
}

// Examples
console.log(maskify("4556364607935616")); // Output: "############5616"
console.log(maskify("64607935616"));      // Output: "#######5616"
console.log(maskify("1"));                 // Output: "1"
console.log(maskify(""));                  // Output: ""
console.log(maskify("Skippy"));            // Output: "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // Output: "####################################man!"