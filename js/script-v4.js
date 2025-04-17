console.clear();

//let name [value1, value2, value3];
//let name ["string", 1, false];

let color = [];

color[4] = "yellow";

/*
while loop can run without going into the loop even once
a do while loop will always run at least once
a for loop allows you to define a variable within a loop statement
*/

//arrays start at 0
var fruits = [
  "apple",
  "orange",
  "banana",
  "strawberry",
  "watermelon",
  "mango",
  "peaches"];

let myFavoriteFruit = fruits[4];
console.log(myFavoriteFruit);

var myCounter = 0;
var myStop = 5;
// var myStop = 0;

for (var myCounter = 0; myCounter <= myStop; myCounter++) {
  console.log("my loop is running at " + myCounter + " which is a " + fruits[myCounter]);
}

/*
do {
  console.log("my loop is running at ?" + myCounter);
  myCounter++;
} while (myCounter <= myStop);
*/

/*
while (myCounter < myStop) {
  console.log("my loop is running at ?" + myCounter);
  myCounter++;
}
*/