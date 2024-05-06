var isDone = true;
// console.log(isDone)
var decimal = 1.244;
var integer = 234;
//console.log(decimal, integer);
var first_name = 'Sourav';
var age = 24;
// console.log(`${first_name} will be ${age + 1} by next year`)
var salary = [300, 200, 500, 800];
// console.log(salary)
var array;
array = [2, 3, 'sourav'];
//console.log(array[2])
// enums
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 3] = "blue";
})(Color || (Color = {}));
var c = Color.red;
// console.log(c)
var Country;
(function (Country) {
    Country[Country["germany"] = 10] = "germany";
    Country[Country["france"] = 20] = "france";
    Country[Country["unitedKingdom"] = 30] = "unitedKingdom";
})(Country || (Country = {}));
var country = Country[30];
console.log(country);
