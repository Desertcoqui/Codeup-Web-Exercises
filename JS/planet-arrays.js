/**
 * Created by PapoteDetres1 on 11/10/16.
 */
(function(){
    "use strict";

    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);

    }

    logPlanets();
    planets.unshift("Sun");

    console.log('Adding "The Sun" to the beginning of the planets array.');


    logPlanets();
    planets.push("pluto");

    console.log('Adding "Pluto" to the end of the planets array.');

    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');

    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');

    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');


    console.log('Using splice to remove the planet after "Earth".');

    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');

    logPlanets();

    console.log("Reversing the order of the planets array.");

    logPlanets();

    console.log("Sorting the planets array.");

    logPlanets();


})();