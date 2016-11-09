/**
 * Created by PapoteDetres1 on 11/8/16.
 */
'use strict'

//create four functions
//
//that take two numbers as input and produce an output that is the result of the respective operation
//
//add
//subtract
//divide
//multiply
//test these with console logs
//
//hook these functions up to user input
//
//for each of the above functions...
//
//    make sure the user input is valid
//prompt the user for the two numbers
//perform the calculation using your functions
//allow the user to choose which operation they want to perform, then prompt for inputs
//
//                                                                               ** Bonus **
//
//                                                                               define your functions in terms of each other
//
//do not use the * operator inside of your multiply function
//do not subtract the two numbers inside of your subtract function
//instead call your add function

//var a = parseFloat (prompt("enter value a"));
//var b = parseFloat (prompt("enter value b"));
//
//
//function plusTwo(a,b) {
//    return a+b;
//}
//
//
//
//
//var returnValue = plusTwo(a,b);
//
////var tenPlusTwo = plusTwo(10, 2);
////var fiveAndFive = plusTwo(60, 5);
//
//console.log(returnValue);
//alert("Your answer is " + returnValue);


var random= Math.floor((Math.random ()*100)+1);


function calculateHEBDiscount(shoppername, groceryTotal) {
    var whatIsYourName = (prompt("Type Shoppers name"));
    alert("Hello " + whatIsYourName)
    var yourDiscount = parseInt(prompt("What is their total"));
    alert("your discount is % " + random);
    var total=(yourDiscount - ((random/100)*yourDiscount));
    alert("You total is " + "$" + total.toFixed(2));
    {
        return(total);
    }
}





calculateHEBDiscount();



































