// FUNCTIONS

// block of code that does something
// can provide info for them to do something or can leave them blank
// DRY code - don't repeat yourself, efficiency, cleanliness
// invoke function = using/calling function

// var num1 = 5;
// var num2 = 3;
// var result = num1 + num2;
// console.log(result);

// function addNumbers () { // named function, there are also unnamed functions. Arguments can be stored inside the parenthesis. They get hoisted - read BEFORE execution.
//   var result = num1 + num2;
//   console.log(result);
// } addNumbers(); // function has now been invoked

// unnamed/anonymous functions are stored in variables or keyvalue paiars in objects. They don't get hoisted.
// var addNumbers = function () {
//   var result = num1 + num2;
//   console.log(result);
// } addNumbers();

// ------------- USING ARGUMENTS -----------------
// return stores the data as something tangible, something that can be used when the function has finished running
function addNumbers(num1, num2) {
  // console.log(num1 + num2);
  // return num1 + num2;
  var result = num1 + num2;

  if (result === 11) {
    console.log("This works.");
  }
  return result;
}
addNumbers(5,6);
