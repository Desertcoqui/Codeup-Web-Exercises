/**
 * Created by PapoteDetres1 on 11/23/16.
 */
'use strict' ;
(function(){




function alertMessage(message){

    alert(message);
}

    alertMessage("Today is ");
    alertMessage("N we are going to have some turkey!!");

//Function with multiple parameters
function addNumbers (num1,num2){
    var answer = num1 +num2;
    document.write(answer+ "<br/>");

}

addNumbers(2,4);
addNumbers(15,5);



//-----------Arrays----------don't forget the word new and Capital for the value
//Separate the elements with commas

    var cars= new Array ("Honda","Civic","Ford","Nissan");
    document.write(cars[0]+ "<br/>");



    var cars1= new Array(5);
    cars[0]="ferrari";
    cars[1]="prochse";
    cars[2]="civic";
    cars[3]="maxima";
    cars[4]="bmw";

    document.write(cars1.length);

//--------------------------------------------------

    var day= "Thursdsay";

    if(day=="Friday"){
        document.write("It's friday");

    }




























})();
