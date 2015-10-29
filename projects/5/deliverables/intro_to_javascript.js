

//Variables
// namespace and global space
// es5 standard (as of june 2015 es6 with new variables like let const)
x = 100; //global variable- becasue x is defined in the global space
var x = 100; //gives it scope
//es6
//let x = 100;
//const x =100;
//console.log("Intro to JS");
//variable hoisting- 
(function () {
function foo () {
	console.log(x);
}
foo();

//Types

var a = 1
var b = "abc"
var c = 3.0 //float

//expression
function() {console.log("This is a function expression")}
d()

//declaration
function foo {console.log("this is a function declaration")}
foo ();

//anonymous iffe- immediately invoked
(function () {
	console.log("IIFE function");
})();

//
//Operators
&&  === and
||  === or
=   === assignment
==  === equality
=== === strict equality
!=  === not equality
=~  === regular expression 
>
<
>=
<=


if (x && y) {
	console.log('both x and y are true');
}

//Objects
//Arrays
//Conditionals
//Expressions