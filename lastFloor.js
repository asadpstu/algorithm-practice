/*  4 and 13 this number should be avioded 
    Hacker rank test => From Booking.com [For netherland]
*/

var n = 12
var lastfloor = [];
lastfloor.push(1);
var lastFloorWas = lastfloor[lastfloor.length - 1];
for (var i = 1; i < n; i++) {

    var lastFloorWas = lastFloorWas + 1;
    if (lastFloorWas.toString().indexOf('4') != -1 || lastFloorWas.toString().indexOf('13') != -1) {
        i = i - 1;
    }
    else {
        lastfloor.push(lastFloorWas);
    }

}

console.log(lastfloor);