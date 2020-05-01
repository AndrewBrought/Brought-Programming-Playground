"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    return "Hello, " + name + "!"
}
console.log(sayHello('Andrew'));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Brian");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Andrew";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result every time you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    return num === 2;
}
// console.log()
console.log(isTwo(random), random);


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function tipPercent(tipNum){
    if(tipNum > 1){
        return (tipNum / 100);
    } else if(tipNum <= 1){
        return tipNum;
    }
}
console.log(tipPercent(20));


function calculateTip(tipP, billT){
    return tipPercent(tipP) * billT;
}
console.log(calculateTip(30, 100));
console.log(calculateTip(20, 75));
console.log(calculateTip(.25, 100));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var billT = parseFloat(prompt("How much was your bill?"));
// var tipP = parseFloat(prompt("How much would you like to tip?"));
// alert("Thanks! Your tip is $" + calculateTip(tipP, billT));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function originalTotal(total){
    return total;
}

function discountPercent(percent){
    if(percent > 1){
        return (percent / 100);
    } else if(percent <= 1){
        return percent;
    }
}

function applyDiscount(originalTotal, discountPercent){
    return "Your new discounted total is $" + (originalTotal - (originalTotal * discountPercent));
}

console.log(applyDiscount(originalTotal(100), discountPercent(40)));