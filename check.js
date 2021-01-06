//Section 1
var a = 1;
var b = 2;
var c = "3";
console.log("Section 1 #", a + b + c, typeof (a + b + c))

//Section 2
var str = "Visit W3Schools!";
var n = str.search("W3Schoolst");
console.log("Section 2#", n, " (-1 represent not found inside the string)")


//Regular expression:
//Section 3
var str = "Visit W3Schools";
var strSearch = "w3schools";
var n = str.search(/w3schools/i);
console.log("Section 3#", n, " is the index")

//Section 4



//Section 5
//find all charecter
var sentance = "South korea is a beautiful country. People are Beautiful too.";
var whattofind = "t";
var search = new RegExp([whattofind], 'g')
foundResult = sentance.match(search);
console.log("Section 5# Find # Total found [", whattofind, "] are :", foundResult, "Total:", foundResult.length);


//Replaceing matched string  ****First method****
var sentance = "South korea is a beautiful country. People are Beautiful too.";
var searchString = "beautiful";
//g = stands for all accourance.  
//i = stand for upper-lower all case, 
//If didn't  use [g], only first found result will be replace.
var search = new RegExp(searchString, "gi")
var replaceBy = "Rich";
sentance = sentance.replace(search, replaceBy)
console.log("Section 4# Replace # ", sentance)



//Section 6
//find all charecter and then replace    ****Second method****
var sentance = "South korea is a beautiful country. People are Beautiful too.";
var whattofind = "t";
var replacewith = "@";
var search = new RegExp([whattofind], 'g')
foundResult = sentance.replace(search, replacewith);
console.log("Section 6 # Replace # New sentence: ", foundResult);


//Section 7
//find all charecter and then replace    ****Second method****
var sentance = "South Korea is a beauTiful country. People are Beautiful too.";
var whattofind = "[sktc.]";
var replacewith = "#";
var search = new RegExp([whattofind], 'gi')
foundResult = sentance.replace(search, replacewith);
console.log("")
console.log("Section 7 # Replace by any match inside **[sktc ]**# ");
console.log("New sentence: ", foundResult);
console.log("")


//Section 8
var sentance = "123 vsgdc456#DHGFV7SDf89a?d0fha123sb45678vmxw90fjsbbmsjdshdg";
//var search = new RegExp([0 - 9], 'g');
number = sentance.match(/[0-9]/g).toString();
onlyStr = sentance.match(/[a-z]/gi);
otherthanaToZ = sentance.match(/[^a-z]/gi);
removeHashSpaceQuestion = sentance.replace(/[ #?]/gi, "*");
console.log("Section 8 # Filtered Number : ", number, typeof (number))
console.log("Section 8 # only str : ", onlyStr.toString())
console.log("Section 8 # Other than A to Z : ", otherthanaToZ.toString())
console.log("Section 8 # Remove Hash Space Question : ", removeHashSpaceQuestion.toString())
var removeComma = new RegExp("[,]", "gi")
number = number.replace(removeComma, '');
console.log("Section 8 # Filtered Number : ", number, typeof (number))