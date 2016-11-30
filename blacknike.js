/**
 * Created by PapoteDetres1 on 11/20/16.
 */
var random= Math.floor((Math.random ()*100)+1);
function calculateHEBDiscount(shoppername, groceryTotal) {
    var whatIsYourName = (prompt("Type Shoppers name"));
    alert("Junito es pato" + whatIsYourName)
    var yourDiscount = parseInt(prompt("What is their total"));
    alert("your discount is % " + random);
    var total=(yourDiscount - ((random/100)*yourDiscount));
    alert("You total is " + "$" + total.toFixed(2));
    {
        return(total);
    }
}
calculateHEBDiscount();