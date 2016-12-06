/**
 * Created by PapoteDetres1 on 12/1/16.
 */
$(document).ready(function() {

    "use strict";
    var inventory = $.ajax("inventory.json");

    inventory.done(function(data) {
        var rows;
        data.forEach(function(object){
            //console.log(object.title);
            rows += "<tr>"
                + "<td class='ajax'>" + object.title + "</td>"
                + "<td class='ajax'>" + object.quantity + "</td>"
                + "<td class='ajax'>" + object.price + "</td>"
                + "<td class='ajax'>" + object.categories + "</td>"

        });

        $('#insertProducts').html(rows);
        console.log("Data returned from server:");
        console.log(data);
    });



            $('#donkey').animate({opacity: 0}, {duration: 1000});
            $('#donkey').animate({opacity: 1}, {duration: 2000});








});