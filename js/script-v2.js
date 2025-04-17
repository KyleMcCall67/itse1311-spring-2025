// Datatypes
// Boolean: True or False
// String: "Any typical Sentence"
// Integer: Numeric, Decimal Points
// Undefined: Does not exist or is not set
// Null: Non-existent

//Var means variable has global scope by default
//Let means variable has block scope by default
//Const means variable is a constant and cannot be changed

//Declare means to add value to a variable or set its value to empty or null
//Assign means to give a variable a value

//var yourName = "Kyle";
let yourName = "Kyle";
//const yourName;

/*
function sayMyName() {
 let yourName = "Kyle";
 yourName = "Kyle";
 console.log("My name is " + yourName)
}
//sayMyName();
console.log("My name is " + yourName)
*/

document.getElementById("myBTN").addEventListener("click", sayMyName);
function sayMyName() {
  //let yourName = document.getElementById("myName").value;
  let yourName = document.getElementById("myName").value;

  document.getElementById("myNameDiv").innerHTML = yourName;
  console.log("My name is " + yourName);
}
