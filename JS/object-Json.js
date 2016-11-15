/**
 * Created by PapoteDetres1 on 11/11/16.
 */
'use strict'

var books = [

     {
         author: {
             firstName: "Kim",
             lastName: "Jones"
         },
         title: "The night is young",
         year: 1982

     },
     {
         author: {
             firstName: "Branda",
             lastName: "Teflon"
         },
         title: "yesterday corn",
         year: 1874
     },
     {
         author: {
             firstName: "Kevin",
             lastName: "Lansing"
         },
         title: "arms in the sky",
         year: 1985
     },
     {
         author: {
             firstName: "Keith Overfry",
             lastName: "Lansing"
         },

         title: "twelvth centruy",
         year: 1999
     }

];
// This console logs the whole List
console.log(books);

//This is a foreach loop
books.forEach(function(book, index) {
    console.log(book.author.firstName
                +book.author.lastName);






});












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
//console.log(albums)