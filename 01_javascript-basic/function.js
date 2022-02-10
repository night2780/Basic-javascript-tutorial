function print() {
	console.log("Hello world");
}
// print(); //? call a function

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
// console.log(nato[0]);//* show data from frist index in array
// console.log(nato[nato.length-1]); //* show data from last index number of array
nato.push("Echo")
nato.push("Foxtrot")

//todo show index of such a member

let _index = nato.indexOf("Delta") //* define _index to collect an index of Delta in nato array
// console.log(_index); //* 3
let _len = nato.length;

//todo Accessing an Array members with a for loop

for (let i = 0; i < _len; i++){
	// console.log("No.",(i+1)," Value:",nato[i]);
}

// todo Accessing an Array members with ForEach

nato.forEach(myData);

function myData(item) {
	let i = nato.indexOf(item);
	// console.log((i+1),item[0],"=",item);
}

//todo Covert Array to String

	/*
	 array.toString(); covert to string
	 array.join("*"); take each array value combined into a string and sent string in function to be a separator for each other member in the array
	 */
function arr2str(arr) {
	let to_str, join;
	to_str = arr.toString();
	join_ = arr.join("\n \t"+" ")

	console.log("Display Array:\n \t", arr);
	console.log(".toString();\n \t", to_str);
	console.log(".join();\n \t", join_);
}
// arr2str(nato);
/*
Output:
	Display Array:
		[ 'Alpha', 'Bravo', 'Charie', 'Delta', 'Echo', 'Foxtrot' ]
	.toString();
		Alpha,Bravo,Charie,Delta,Echo,Foxtrot
	.join();
		Alpha
		Bravo
		Charie
		Delta
		Echo
		Foxtrot
*/

//todo Array Combined

let hg, ar, ak, firearms;
hg = ["CZ P-09","Glock17","Sig sauer P365"]
ar = ["Sig sauer M400", "Ruger AR-556", "DANIEL DEFENSE DDM4 V7"]
ak = ["AK-47", "AK-74", "AK-12" ,"AK-105"]
firearms = hg.concat(ar, ak);
// console.log(firearms);

//todo Number Array sorting

let numarr = [20, 50, 99, -10, 18, 27, 9, 199,]
// console.log(numarr);
	//* min to max
numarr.sort(function(a, b){
	return a - b;
})
// console.log(numarr);
	//* max to min
numarr.sort(function(a, b){
	return b - a;
})
// console.log(numarr);

//Todo Javascript Object
let product = {
	category: "Computer accessories",
	sku: "CA-LOGI-GM02W-B",
	name: "Mouse",
	brand: "Logitech",
	connection_type: "Wireless",
	colors: "Black",
	price: 1500,
	//todo call Object method
	getLabel:function () {
		return "Label: " + this.brand + " " + this.connection_type + " " + this.name + "\nModel: "+this.sku+"\nPrice: " + product.price + "฿"
	},
	discount: function () {
		let per = 25
		this.price -= (this.price *(per/100))
		return per + "% off: "+this.price+"฿ "
	}
};
// console.log(product.getLabel());
// console.log(product.discount());

//TODO Confirm dialog

function displayClear() {
	let cf = confirm("Do you really wanna cleared a display ?");
	cf == true ? console.log("Display is cleared") : console.log("Canceling Clear a Display");;
};
