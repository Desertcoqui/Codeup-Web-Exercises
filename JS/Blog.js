
/**
 * Created by PapoteDetres1 on 12/1/16.
 */
$(document).ready(function() {

    "use strict";
    var words = $.ajax("blog.json");

    words.done(function(data) {
        var articles;
        data.forEach(function(object){
            //console.log(object.title);
            articles += "<div>"
                + "<p class='ajax'>" + object.title + "</p>"
                + "<p class='ajax'>" + object.date + "</p>"
                + "<p class='ajax'>" + object.blog + "</p>"

        });

        $('#insertArticles').html(articles);
        console.log("Data returned from server:");
        console.log(data);
    });










});