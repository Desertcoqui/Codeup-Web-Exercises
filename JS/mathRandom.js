/**
 * Created by PapoteDetres1 on 11/11/16.
 */

'use strict'

//function getRandomInt(min, max){
   // return Math.floor(Math.random()* (max - min + 1) +min);
//}
//gives me a random number from 5 to 12
//console.log(getRandomInt(5,12));



//a simple JSON
var album = {
    artist:"Pink Floyd",
    title:"The wall",
    tracks:5,
    trackList:["Song 1", "Song 2", "Song 3", "The wall", "Money"],
    year:1979,
    platinum:true,
    price: 20.34,
    checkout: function(){
        console.log("Pay " + this.price);
    }
};

album.checkout();
console.log(album);

//    [{propertyName:Value,propertyName:Value},{propertyName:Value},{propertyName:Value}]

//create a list of objects
//var albums = [
//    {
//        artist:"Pink Floyd",
//        title:"The wall",
//        tracks:5,
//        trackList:["Song 1", "Song 2", "Song 3", "The wall", "Money"],
//        year:1979,
//        platinum:true,
//        price: 20.34,
//        checkout: function(){
//            console.log("Pay " + this.price);
//        }
//    },
//    {
//        artist:"Oasis",
//        title:"The First",
//        tracks:2,
//        trackList:["Song 1", "Song 2"],
//        year:2000,
//        platinum:false,
//        price: 15.9999,
//        checkout: function(){
//            console.log("Pay " + this.price);
//        }
//    }
//];
//
//console.log(albums);
//
////Another example an object with arrays in their properties values
//
//// { propertyName, [{ p:v, p:v }]},{propertyName, propertyValue},{propertyName, propertyValue }
//var company = {
//        employees:[
//            {
//                firstName: 'Fer',
//                lastName: "Mendoza"
//            },
//            {
//                firstName: 'Pierre',
//                lastName: "Irby"
//            }
//        ],
//        departments:[
//            {
//                name:"Accounting",
//                ext:210,
//                managerId:12
//            },
//            {
//                name:"Customer Service",
//                ext:290,
//                managerId:1
//            }
//        ]
//    };
//
