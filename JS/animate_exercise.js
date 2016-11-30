"use strict";/**
 * Created by PapoteDetres1 on 11/30/16.
 */


    "use strict";
    // TODO: "Move It" should move the box 100 pixels to the left
    $(document).ready(function() {
        $("#btn-move").click(function () {
            $("#animate-box").animate({
                left: "100px"
            }, 1000);
        });

        $("#btn-scale").click(function () {
            $("#animate-box").animate({
                width: "50%"
            }, 1000);
        });

        $("#btn-hide").click(function () {
            $("#animate-box").hide({
                width: "50%"
            }, 1000);
        });

        $("#btn-show").click(function () {
            $("#animate-box").show({
                width: "50%"
            }, 1000);
        });
        $("#btn-all").click(function() {
            $("#animate-box").animate({
                left: "50px",
                width: "50%"
            }, 1000).hide({
                left: "+=50"
            }, 500).show({
                top: "+=-50"
            }, 1000);

            });
        });










// TODO: "Scale It" should expand the box width by 50%

    // TODO: "Hide It" should use opacity to make the box invisible

    // TODO: "Show It" should make the box appear

    // TODO: "Animate All" should use an animation stack to:
    //      1) Move and scale the box simultaneously
    //      2) Hide the box
    //      3) Reset the box back to its original position and opacity
