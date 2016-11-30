/**
 * Created by PapoteDetres1 on 11/16/16.
 */
'use strict';
(function() {
    //grab all the buttons from the html

    var buttons = document.getElementsByTagName('button');
    var result = document.getElementById('leftBlock');
    var clear = document.getElementById('clear');
    var middleBlock = document.getElementById('middleBlock');
    var rightBlock = document.getElementById('rightBlock');



  for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener("click", listener);
  }
    // did this after the for above and it prevented my 'C' from login in
    clear.onclick = function () {
        result.innerHTML = '';
        middleBlock.innerHTML = '';
        rightBlock.innerHTML = '';
    };

    function listener() {
        if (this.innerHTML == "*" || this.innerHTML == "+" || this.innerHTML == "-" || this.innerHTML == "/") {
            middleBlock.innerHTML = this.innerHTML;

        } else if (middleBlock.innerHTML == "") {
            result.innerHTML += this.innerHTML;
        } else {
            rightBlock.innerHTML += this.innerHTML;
        }

    }





})();


