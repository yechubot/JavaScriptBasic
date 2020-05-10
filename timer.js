/*
const myMsg = document.getElementById("message");

function showMsg() {
    myMsg.className = "show";
}

setTimeout(showMsg,2000);
*/

const colorChanger = document.getElementById("color-changer");
const colors = ["red", "blue", "green", "yellow"]
// const counter -- > error ! cos const can't change..?
var counter = 0; // the position of colors array 0 - red, 1- blue.. and so on

function colorBlock() {

    if( counter >= colors.length){
        counter =0;
    }

    colorChanger.style.background = colors[counter];
    counter ++;
}

var myTimer = setInterval(colorBlock,3000);

colorChanger.onclick = function() {
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer stopped";
}