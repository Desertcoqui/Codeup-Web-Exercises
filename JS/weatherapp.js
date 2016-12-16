/**
 * Created by PapoteDetres1 on 12/6/16.
 */
$(document).ready(function() {
    "use strict";
    function request(lat, lng) {
        var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "f55abc25005d6e40ce57f84187a6c6e5",
            lat: lat,
            lon:lng,
            units: "imperial",
            cnt: 3
        });
            weatherData.done(function(data) {
                var city = data.city.name;
                var weekDay="";
                data.list.forEach(function(object) {
                var day = moment.unix(object.dt);
                    weekDay += "<div class='col-md-4'>"
                        + "<div class='panel panel-default'>"
                        + "<div class='panel-heading'>"
                        + "<h3 class='panel-title'>Date:" + " " + day.format('MMMM Do YY') + "</h3></div>"
                        + "<div class='panel-body'>"
                        + "<p class='temp'>" + "City of " + city + "</p>"
                        + "<p class='temp'>" + "Daytime temp " + (Math.round(object.temp.day))+"°"+ "</p>"
                        + "<p class='temp'>" + "Evening temp " + (Math.round(object.temp.eve))+"°"+"</p>"
                        + "<p class='temp'>" + "Night temp " + (Math.round(object.temp.night))+"°"+"</p>"
                        + "<p class='temp'>" + object.weather[0].description + "</p>" +
                        "</div></div></div>";
                    $('#insertWeather').html(weekDay);
                });
            });
        }
            var mapOptions = {
                zoom: 12,
                center: {
                    lat:  29.426791,
                    lng: -98.489602
                }
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            var myLatLng = {lat: 29.427325, lng:-98.491097};
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true
            });
            request(myLatLng.lat,myLatLng.lng);
            google.maps.event.addListener(marker,"dragend", function(location){
                myLatLng.lat=location.latLng.lat();
                myLatLng.lng=location.latLng.lng();
                console.log(myLatLng);
                request(myLatLng.lat,myLatLng.lng);
            });
        console.log(data);
});

