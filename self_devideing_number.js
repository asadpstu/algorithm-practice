/*
728. Self Dividing Numbers
Easy

781

302

Add to List

Share
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.

*/



function root(left, right) {
    var rersultArray = [];
    for (var i = left; i <= right; i++) {
        if (i % 10 !== 0) {
            var res = recursion(i.toString());
            if (res != "exclude") rersultArray.push(parseInt(res));
        }
    }

    return console.log(rersultArray);
}


function recursion(i) {
    var istrue = true;
    for (var j = 0; j < i.length; j++) {

        if (parseInt(i) % i.charAt(j) === 0) {
            continue;
        }
        else {
            istrue = false;
        }
    }
    if (istrue) return i;
    else return "exclude";
}

root(1, 22);