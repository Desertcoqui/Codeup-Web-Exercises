/**
 * Created by PapoteDetres1 on 11/16/16.
 */
'use strict';
(function(){
 //grab all the buttons from the html

        var buttons = document.getElementsByTagName('button');
        var result = document.querySelectorAll('.result p')[0];
        var clear = document.getElementsByClassName('clear')[0];
//loops all my buttons so I can give the inter HTMLs strings the same value
//once I do a function for that
        for (var i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML === '=') {
                buttons[i].addEventListener("click", calculate(i));
            } else {
                buttons[i].addEventListener("click", buttonNumbers(i));
            }
        }
// This is how I do a function to display the HTML strings as a value into
//into my results box
        function buttonNumbers(i) {
            return function () {
                if (buttons[i].innerHTML) {
                    result.innerHTML += buttons[i].innerHTML;
                }
            };
        }

        function calculate() {
           return function () {
              var finalResult = result.innerHTML;
                result.innerHTML = eval(finalResult);
            };
       }
            clear.onclick = function () {
                result.innerHTML = '';
            };







})();




//function buttonNumbers(i) {
//    return function () {
//        if (buttons[i].innerHTML === '÷') {
//            result.innerHTML  += '/';
//        } else if (buttons[i].innerHTML === 'x') {
//            result.innerHTML  += '*';
//        } else {
//            result.innerHTML += buttons[i].innerHTML;
//        }
//    };
//}