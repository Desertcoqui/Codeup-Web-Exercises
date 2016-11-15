
'use strict';



(function(){

    function startTimer() {
        stopwatchInterval = setInterval(function() {
            seconds += 0.1;
            display.innerHTML = seconds.toFixed(3).replace('.', ' <-Portfolio Lapse ');
        }, interval);
    }

    function stopTimer() {
        clearInterval(stopwatchInterval);
    }

    function resetTimer() {
        display.innerHTML =0;
        seconds = 0;
    }

    var seconds = 0;
    var stopwatchInterval;
    var interval = 1000;

    var buttons = {
        start: document.getElementById('start'),
        stop: document.getElementById('stop'),
        reset: document.getElementById('reset')
    };

    var display = document.getElementById('display');

    buttons.start.addEventListener('click', startTimer);
    buttons.stop.addEventListener('click', stopTimer);
    buttons.reset.addEventListener('click', resetTimer);



})();

