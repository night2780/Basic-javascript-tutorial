const sw = document.querySelector('.sw-box.light')
const box = document.querySelector(".hd-box.light")
const h1 = document.querySelectorAll("h1")
const b = document.querySelector(".b.b-d")
icon.innerText = "Header";


function light() {
    sw.setAttribute("class", "sw-box light")
    b.setAttribute("class", 'b light',)
    box.setAttribute("class", "hd-box light")
};
function dark(){
    sw.setAttribute("class", "sw-box dark")
    b.setAttribute("class", 'b dark',)
    box.setAttribute("class", "hd-box dark")
};

const cal = document.getElementById("cal");
let x, y, z, op;
x = 5
y = 20
op = ""
cal.innerHTML=`${x}, ${y}`
function add() {
    cal.style.color="black";
    op = '+'
    z = x+y
    cal.innerHTML = `${x} ${op} ${y}`;
    let aa = cal.innerHTML = `${x} ${op} ${y}`;
};
function sub() {
    cal.style.color="black";
    op = '-'
    z = x-y
    cal.innerHTML = `${x} ${op} ${y}`;
};
function mul() {
    cal.style.color="black";
    op = '*'
    z = x*y
    cal.innerHTML = `${x} ${op} ${y}`;
};
function divi() {
    cal.style.color="black";
    op = '/'
    z = x/y
    cal.innerHTML = `${x} ${op} ${y}`;
};
function rs() {
    cal.style.color="green";
    cal.innerHTML = `${x} ${op} ${y} = ${z}`;
};

function changeText() {
    // icon.innerText="Nighttsu";
};

console.log(h1);