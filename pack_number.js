/* Count pack problem
Hacker rank test => From Booking.com [For netherland]
5 in a row 3 time => 5:3
7 in a row 2 time => 7:2
other elemnts are 1 time

Return should be like this ['5:3','7:2',3,4,7]

/*

var arr = [5, 5, 5, 7, 7, 3, 4, 7]
var newArray = [];
for (var i = 0; i < arr.length; i++) {
    //console.log(i)
    var check = arr[i];
    j = i + 1;
    var count = 1;
    if (check == arr[j]) {

        while (check == arr[j]) {
            count++;
            j++;
        }

        i = j - 1;
        var createStr = check + ":" + count;
        newArray.push(createStr);
        console.log(check, "count:", count, "current i:", i)
    }
    else {
        newArray.push(check);
    }


}

console.log(newArray);