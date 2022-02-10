//todo การแสดงผบข้อมูล
// document.write("<h1>Basic Javascript</h1>");
/*
alert("Hello");
console.log("First try");
console.error("Timeout");
console.warn("warning");
*/

/* old variable
 var money;
 money = 100;
 var age = 23;
*/

//todo Undifine
/*
 let name ;
 console.log(name);
 name = "nighttsu";
 console.log(name);

 let age = 18;
 console.log("before = ",age);
 age = 23;
 console.log("after = ",age);
 */

//todo constance variable
// const money = 200;
// console.log(money);
// money = 1000; //! error
// console.log(money); //! error const can't change value

//todo data type
/*
let x,y;
x = 20 //* integer
y = 3.14 //* float
console.log(typeof(x));
console.log(y);

let a,b;
a = 'single code' // string
b = "double code" // string
console.log(typeof(a));
console.log(b);

console.log(typeof(t));
let t = true, f = false;
console.log(t);
*/

// todo type convertion
/*
let n;
	todo string -> number
n = '10.5'
console.log(n,typeof(n));

n = parseInt('10.5');
console.log(n,typeof(n));

n = parseFloat('1.2');
console.log(n,typeof(n));

n = +'3.14'
console.log(n,typeof(n));
	todo number -> string
n = 99+""
console.log(n,typeof(n));

n = 3.14.toString();
console.log(n,typeof(n));
*/

//todo Array
/*
let arr = Array();
let arrsum;
for (let i = 1; i < 11; i++ )
		arr.push(i);
console.log(arr);
console.log("Show index 0 : ",arr[0]);
arr[0] = 0
console.log(arr);
console.log("Show index 0 : ",arr[0]);
let days = ['sunday', 'monday', 'tuesday', 'thursday', 'friday', 'saturday' ];
*/

//todo Math Operator

/*
+ 	Addition
- 	Subtraction
* 	Multiplication
** 	Exponentiation (ES2016)
/ 	Division
% 	Modulus (Division Remainder)
++ 	Increment
-- 	Decrement

console.log("5+5 = ", 5+5);
console.log("10-5 = ", 10-5);
console.log("5*3 = ", 5*3);
console.log("10/2 = ", 10/2);
console.log("10%3 = ", 10%3);
let a = 99, b = 1
console.log("a + b = ", a+b);
console.log("a**2 = ", a**2)
*/

//todo comparison Operator
/*
* == 	equal to
* === 	equal value and equal type
* != 	not equal
* !== 	not equal value or not equal type
* > 	greater than
* < 	less than
* >= 	greater than or equal to
* <= 	less than or equal to
* ? 	ternary operator
$true = true
let a = 5, b = 10;
console.log(a==b) //false
console.log(a!=b) //true
console.log(a!==b) //true
console.log(a<b) //true
console.log(a>b) //false
console.log(a<=b) //true
console.log(a>=b) //false
console.log('10'==10) //true
console.log('10'===10) //false

console.log("$true = ", $true)
console.log("$true = ", !$true)
*/

	//todo  Bitwise Operator
/*
	& 	AND 	5 & 1 	0101 & 0001 	0001 	 1
	| 	OR 	    5 | 1 	0101 | 0001 	0101 	 5
	~ 	NOT 	  ~ 5 	 ~0101 	1010 	 10
	^ 	XOR 	5 ^ 1 	0101 ^ 0001 	0100 	 4
	<< 	left shift 		5 << 1 	0101 << 1 	1010 	 10
	>> 	right shift 	5 >> 1 	0101 >> 1 	0010 	  2
	>>>  unsigned right shift 	5 >>> 1 	0101 >>> 1 	0010 	  2

	apc1 = [20, "male", 170];
	req = [20,"male", 160];
	age = (apc1[0]>=req[0]);
	gd = (apc1[1]==req[1]);
	h = (apc1[2]>=req[2]);
	console.log(age, gd ,h)
	pass = age && gd && h
	console.log(pass);
*/


//todo ++ -- (prefix , postfix)
/*
	//* increase prefix
let i = 0;
console.log("default",i);
console.log("++i",++i);
console.log("current",i);
	//* increase postfix
i = 0;
console.log("default",i);
console.log("i++",i++);
console.log("current",i);

	//* reduce prefix
i = 2;
console.log("default",i);
console.log("--i",--i);
console.log("current",i);
	//* reduce postfix
i = 2;
console.log("default",i);
console.log("i--",i--);
console.log("current",i);
*/
//todo compound assignment
/*
=   	x = y 		x = y
+= 		x += y 		x = x + y
-= 		x -= y 		x = x - y
*= 		x *= y 		x = x * y
/= 		x /= y 		x = x / y
%= 		x %= y 		x = x % y
<<= 	x <<= y 	x = x << y
>>= 	x >>= y 	x = x >> y
>>>= 	x >>>= y 	x = x >>> y
&= 		x &= y 		x = x & y
^= 		x ^= y 		x = x ^ y
|= 		x |= y 		x = x | y
**= 	x **= y 	x = x ** y
 */

//todo Control structure

/*
* Condition
	* if
	* switch..case
*/
// todo if condition
let age, title, name="Nighttsu";
age = 23
gender = "male"
if(gender == "male"){
	if( age >= 15){
		title = "Mr."
	}else{
		title = "Mstr."
	};
}else{
	title = "Miss."
};
// console.log(title, name);

let score, grade;
score = 85
if (score >= 90) {
	grade = "A"
}else if (score >= 80){
	grade = "B"
}else if (score >= 70){
	grade = "C"
}else if (score >= 60){
	grade = "D"
}else if (score >= 50){
	grade = "E"
}else{
	grade = "F"
};
// console.log(grade);

//todo ternary operator

let _score = 50;
let check = _score >= 50 ? "Passed" : "Failed";
// console.log(check);

//todo switch..case condition
let day , weekdays = 6;
	switch(weekdays) {
		case 1:day = "sunday"
		break;
		case 2:day = "monday"
		break;
		case 3:day = "tuesday"
		break;
		case 4:day = "wednesay"
		break;
		case 5:day = "thursday"
		break;
		case 6:day = "friday"
		break;
		case 7:day = "saturday"
		break;
	}
// console.log(day);

//todo even / odd calcurate program
let x , result;
x = 10
if (x % 2 == 0){
	result = "even"
}else{
	result = "odd"
};
// console.log(result);


//todo loop
/*
*	While
*	for
*	Do..while
*/

// todo while loop
let count = 1 ,box = 0;
while (count != 100) {
	// console.log(count, "Pieces");
	count++
	if (count % 10 == 0) {
		box ++
	};
};
// console.log(box,"boxs");

// todo for loop
let n, factorial = 1;
n = 5
for(let i = 1; i<=n; i++){
		factorial *= i
		// console.log(factorial,i);
}
// console.log(n,"factorial = ",factorial);

// todo do..while

let cnt = 1;
do{
	console.log(cnt);
	cnt++;
}while(cnt<=5)

//todo break and continue

let loop_cnt= 1 ;
for(let i = 1; i <= 10; i++){
	console.log(i);
	if(i==3){
		loop_cnt ++
		continue;
	}
	if(i == 6)break;
}
// console.log(loop_cnt);

// todo null , undifined , NaN

let nl, nn, udf;
	nl = null
	nn = NaN
	console.log(nl);
	console.log(nn);
	console.log(udf);
