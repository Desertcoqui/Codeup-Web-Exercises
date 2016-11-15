/**
 * Created by PapoteDetres1 on 11/10/16.
 */
(function(){
    "use strict";


    var person = {};
    person.firstName= "Papo";
    person.lastName= "Detres";{
        console.log("My name is " + person.firstName + " "+ person.lastName );
    }

    person.sayHello= function () {

        console.log("Hello " + this.firstName + " " + this.lastName);

    }


    person.sayHello();

























})();
