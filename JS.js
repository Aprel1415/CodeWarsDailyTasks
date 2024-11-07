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