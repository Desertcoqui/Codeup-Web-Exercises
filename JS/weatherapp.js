/**
 * Created by PapoteDetres1 on 12/6/16.
 */
$(document).ready(function() {
    "use strict";

var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "f55abc25005d6e40ce57f84187a6c6e5",
    q: "San Antonio, Tx",
    units: "imperial",
    cnt: 3
});

weatherData.done(function(data) {
    var city = data.city.name;

    data.list.forEach(function(object){
        var day = moment.unix(object.dt);
        var weekDay = "<div class='col-md-4'>"
            + "<div class='panel panel-default'>"
            + "<div class='panel-heading'>"
            + "<h3 class='panel-title'>Date:"+" " + day.format('MMMM Do YY')+"</h3></div>"
            + "<div class='panel-body'>"
            + "<p class='temp'>" + "City of "+ city +  "</p>"
            + "<p class='temp'>" + "Daytime temp "+ object.temp.day + "</p>"
            + "<p class='temp'>" + "Evening temp "+ object.temp.eve + "</p>"
            + "<p class='temp'>" + "Night temp "+ object.temp.night + "</p>"
            + "<p class='temp'>" + object.weather[0].description + "</p>" +
            "</div></div></div>";
       $('#insertWeather').append(weekDay);
    });

    console.log(data);
    });



});

