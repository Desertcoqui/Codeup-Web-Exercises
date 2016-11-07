/**
 * Created by PapoteDetres1 on 11/7/16.
 */

'use strict'



"use strict";

var myNameIs = 'Papo'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
function sayHello(name){
    console.log("Hello my name is " + name);
}
// the word (name) in parenthesis is what (myNameIs) below is replacing
sayHello(myNameIs);


var random= Math.floor((Math.random ()*100)+1);
function isOdd(number){
    var res = (number % 2 ==0) ? number +" is even " : number + " is odd ";
    return res;
}

console.log(isOdd(random));


// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.