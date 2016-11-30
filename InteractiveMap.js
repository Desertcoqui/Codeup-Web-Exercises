/**
 * Created by PapoteDetres1 on 11/22/16.
 */
(function() {
    "use strict";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 19,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };

    var mapa = new google.maps.Map(document.getElementById("mapa"), mapOptions);
    var codeup = { lat: 29.426791, lng: -98.489602 };

// Add the marker to our existing map
    var marker = new google.maps.Marker({
        position: codeup,
        map: mapa
    });

})();