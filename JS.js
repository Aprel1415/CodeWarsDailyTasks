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





// starting a new kata training for js https://www.codewars.com/collections/training-js-series-for-javascript-beginner-myjinxin2015
// Task 1
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line (don't forget to put the str in the parentheses).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function helloWorld() {
    var str = "Hello World!"; 
    console.log(str); 
  }
  helloWorld(); 

//   Task 2
//   I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
  
//   When you have finished the work, click "Run Tests" to see if your code is working properly.
  
//   In the end, click "Submit" to submit your code pass this kata.

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
  let a = v1,   
      b = v1;   
  return a + b; 
}

function equal2() {
  let a = v4, 
      b = v2;  
  return a - b; 
}

function equal3() {
  let a = v1,  
      b = v5; 
  return a * b; 
}

function equal4() {
  let a = v4, 
      b = v5; 
  return a / b; 
}

function equal5() {
  let a = v6, 
      b = v3; 
  return a % b; 
}

// Task 3
// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

// If everything is right, click "Submit" again to submit your code pass this kata.

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// Task 4
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function getLength(arr){
    //return the length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length - 1]
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    
    return arr.push(4), arr
  }
  function popElement(arr){
    //pop an element from arr
    
    return arr.pop(), arr
  }

// Task5
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function animal(obj) {
    // Construct the string using the properties of the input object
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }
  
//   Task 6
//   Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
  
//   When you have finished the work, click "Run Tests" to see if your code is working properly.
  
//   In the end, click "Submit" to submit your code pass this kata.

function trueOrFalse(val){
    if (!val)    return "false";             
    else     return "true";
  }

//   Task 7
//   Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
  
//   number of hotdogs	price per unit (cents)
//   n < 5	100
//   n >= 5 and n < 10	95
//   n >= 10	90
//   You can use if..else or ternary operator to complete it.
  
//   When you have finished the work, click "Run Tests" to see if your code is working properly.
  
//   In the end, click "Submit" to submit your code and pass this kata.

function saleHotdogs(n){
    return n < 5 ? n*100 : n >= 5 && n < 10 ? n*95 : n*90
  }

//   Task 8
//   Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
  
//   +---------------+-------------+
//   |    month      |    days     |
//   +---------------+-------------+
//   |1,3,5,7,8,10,12|     31      |
//   +---------------+-------------+
//   |4,6,9,11       |     30      |
//   +---------------+-------------+
//   |2              |     28      |  (Do not consider the leap year)
//   +---------------+-------------+
//   Tip: Using default for most of the cases can reduce your work.
  
//   When you have finished, click "Test" to test your code against initial tests and "Attempt" to test your code against all tests. If you pass in all tests you can click "Submit" to submit your code.

function howManydays(month){
    var days;
    switch (month){
    case 2:
        days = 28;
        break;
    case 4:
        days = 30;
        break;
    case 6:
        days = 30;
        break;
    case 9:
        days = 30;
        break;
    case 11:
        days = 30;
        break;
    default:
        days = 31
    }
    return days;
  }