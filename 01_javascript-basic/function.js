function print() {
	console.log("Hello world");
}
// print(); //todo call a function
function welcome() {
	alert("Welcome~");
}

function displayName() {
	document.write("Nighttsu");
}

function sumN(n) {
	console.log("value:",n);

}

function info(fname, lname, address = "Bangkok") {
	console.log("fistname: ", fname, "lastname: ",lname , "Address: ", address);
}

// info("king","ly", "tak");
// info("joy", "rvv");

function summation(x, y) {
	let result = x+y
	console.log("result: ", result);
}

function getIP() {
	return "127.0.0.1";
}
// let ip = getIP();
// console.log("IP-Address: ",ip);

// todo Array Properties & function

let colors =["Red", "Yellow", "Blue"]
let len = colors.length;
// console.log(len);
// console.log(colors);
sorted = colors.sort();
// console.log(sorted);

let nato = ["Alpha", "Bravo", "Charie", "Delta"]
// console.log(nato);
// console.log(nato.reverse());
// console.log(nato[0]);
// console.log(nato[nato.length-1]); // last index element
nato.push("Echo")
// console.log(nato);
let _len = nato.length;

for (let i = 0; i < _len; i++){
	console.log(i,nato[i]);
}
