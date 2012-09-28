// node Read Eval Print Loop
// syntax

// comments

/*
multiline comments
*/

var variable;
variable = 1;
var var2 = 2;

// types

var number = 42;
var float = 4.2;

// arithmetics

var sum = 3 + 4/3;
Math.pow(2,10);

// more types

var bool = true;
bool == false;
true || false && true

var text = 'hello';
var moreText = ' world'
text + moreText

// control structures

if(true){'this is true'}
for(var i=0;i<10;i++) {
	console.log(i);
}

// functions

var timestwo = function (num){return num*2;}

// objects

var obj = {};
obj['key'] = 'some val';
obj.key2 = 'some other val';
var obj2 = {a:1, b:2};

// arrays

var arr = []
arr.push(1);
arr.push(2);
arr2 = [1,2,3];
arr[0];
arr['0'];

// incoming funny array are objects

// function scope
// closures